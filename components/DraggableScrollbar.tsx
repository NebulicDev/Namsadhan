import React, { useRef, useState } from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  PanResponder,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

interface DraggableScrollbarProps {
  children: React.ReactNode;
  scrollViewProps?: React.ComponentProps<typeof ScrollView>;
  thumbStyle?: StyleProp<ViewStyle>;
}

const DraggableScrollbar: React.FC<DraggableScrollbarProps> = ({
  children,
  scrollViewProps,
  thumbStyle,
}) => {
  const [thumbLeft, setThumbLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);
  const scrollableHeight = useRef(0);
  const containerHeight = useRef(0);

  const scrollbarTrackWidth = windowWidth - 80;

  const updateThumbPosition = (y: number) => {
    if (scrollableHeight.current > containerHeight.current) {
      const scrollPercentage = y / (scrollableHeight.current - containerHeight.current);
      const newThumbLeft = scrollPercentage * scrollbarTrackWidth;
      setThumbLeft(newThumbLeft);
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => setIsDragging(true),
      onPanResponderMove: (_, gestureState) => {
        if (scrollViewRef.current && scrollableHeight.current > containerHeight.current) {
          const newLeft = Math.min(Math.max(0, thumbLeft + gestureState.dx), scrollbarTrackWidth);
          const scrollPercentage = newLeft / scrollbarTrackWidth;
          const scrollY = scrollPercentage * (scrollableHeight.current - containerHeight.current);
          scrollViewRef.current.scrollTo({ y: scrollY, animated: false });
        }
      },
      onPanResponderRelease: () => setIsDragging(false),
    })
  ).current;

  const handleScroll = (event: { nativeEvent: { contentOffset: { y: any } } }) => {
    updateThumbPosition(event.nativeEvent.contentOffset.y);
  };

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    containerHeight.current = event.nativeEvent.layout.height;
  };

  const handleContentLayout = (event: LayoutChangeEvent) => {
    scrollableHeight.current = event.nativeEvent.layout.height;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        onLayout={handleContainerLayout}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        {...scrollViewProps}
      >
        <View onLayout={handleContentLayout}>{children}</View>
      </ScrollView>

      {/* Scrollbar Track */}
      <View style={styles.scrollbarContainer}>
        <View style={styles.scrollbarTrack} />
        {/* Draggable Thumb */}
        <View
          {...panResponder.panHandlers}
          style={[
            styles.thumb,
            { left: thumbLeft },
            isDragging && styles.thumbDragging,
            thumbStyle,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollbarContainer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  scrollbarTrack: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 2,
  },
  thumb: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  thumbDragging: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    transform: [{ scale: 1.1 }],
  },
});

export default DraggableScrollbar;