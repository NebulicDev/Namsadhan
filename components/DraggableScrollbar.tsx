// DraggableScrollbar.tsx
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  PanResponder,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;

interface DraggableScrollbarProps {
  children: React.ReactNode;
  scrollViewProps?: React.ComponentProps<typeof ScrollView>;
  thumbStyle?: StyleProp<ViewStyle>;
}

const SCROLLBAR_WIDTH = 18;
const SCROLLBAR_PADDING = 12;

const DraggableScrollbar: React.FC<DraggableScrollbarProps> = ({
  children,
  scrollViewProps,
  thumbStyle,
}) => {
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);
  const scrollableHeight = useRef(1);
  const containerHeight = useRef(1);

  const [trackHeight, setTrackHeight] = useState(windowHeight - 140);
  const thumbHeight = 50;

  // Store ref to track container's Y position on screen (absolute)
  const trackYRef = useRef(0);
  // Store offset inside thumb where user first touched (on drag start)
  const dragOffset = useRef(0);

  const updateThumbPosition = (scrollY: number) => {
    if (scrollableHeight.current > containerHeight.current) {
      const maxThumbTop = trackHeight - thumbHeight;
      const scrollPercentage = scrollY / (scrollableHeight.current - containerHeight.current);
      const newThumbTop = scrollPercentage * maxThumbTop;
      setThumbTop(newThumbTop);
    }
  };

  const handleTrackPress = (event: any) => {
    const pressY = event.nativeEvent.locationY;
    const maxThumbTop = trackHeight - thumbHeight;
    const newThumbTop = Math.max(0, Math.min(pressY - thumbHeight / 2, maxThumbTop));
    setThumbTop(newThumbTop);

    const scrollPercentage = newThumbTop / maxThumbTop;
    const newScrollY = scrollPercentage * (scrollableHeight.current - containerHeight.current);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: newScrollY, animated: false });
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        setIsDragging(true);
        // ✅ FIX: calculate offset relative to thumb's current position
        dragOffset.current = evt.nativeEvent.locationY - thumbTop;
      },
      onPanResponderMove: (_, gestureState) => {
        if (scrollViewRef.current && scrollableHeight.current > containerHeight.current) {
          const maxThumbTop = trackHeight - thumbHeight;

          // Calculate new thumb top based on absolute finger position - offset inside thumb - track top
          const fingerAbsoluteY = gestureState.moveY;
          let newThumbTop = fingerAbsoluteY - dragOffset.current - trackYRef.current;

          // Clamp newThumbTop inside valid range
          newThumbTop = Math.max(0, Math.min(newThumbTop, maxThumbTop));

          setThumbTop(newThumbTop);

          const scrollPercentage = newThumbTop / maxThumbTop;
          const scrollY = scrollPercentage * (scrollableHeight.current - containerHeight.current);
          scrollViewRef.current.scrollTo({ y: scrollY, animated: false });
        }
      },
      onPanResponderRelease: () => setIsDragging(false),
      onPanResponderTerminate: () => setIsDragging(false),
    })
  ).current;

  const handleScroll = (event: { nativeEvent: { contentOffset: { y: number } } }) => {
    updateThumbPosition(event.nativeEvent.contentOffset.y);
  };

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    containerHeight.current = event.nativeEvent.layout.height;
    setTrackHeight(event.nativeEvent.layout.height - 40);
  };

  // Measure track container absolute Y on layout to calculate move correctly
  const handleTrackLayout = (event: LayoutChangeEvent) => {
    trackYRef.current = event.nativeEvent.layout.y;
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

      {/* Vertical scrollbar on right */}
      <View
        style={[styles.scrollbarContainer, { height: trackHeight + thumbHeight }]}
        onLayout={handleTrackLayout}
      >
        <TouchableWithoutFeedback onPress={handleTrackPress}>
          <View style={[styles.scrollbarTrack, { height: trackHeight }]} />
        </TouchableWithoutFeedback>

        <View
          {...panResponder.panHandlers}
          style={[
            styles.thumb,
            {
              top: thumbTop,
              height: thumbHeight,
              backgroundColor: isDragging
                ? 'rgba(210,180,140,0.95)'
                : 'rgba(210,180,140,0.73)',
            },
            thumbStyle,
            isDragging && styles.thumbDragging,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  scrollbarContainer: {
    position: 'absolute',
    right: SCROLLBAR_PADDING,
    top: 60,
    width: SCROLLBAR_WIDTH,
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 10,
  },
  scrollbarTrack: {
    width: SCROLLBAR_WIDTH / 2,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.11)',
    position: 'absolute',
    left: SCROLLBAR_WIDTH / 4,
  },
  thumb: {
    position: 'absolute',
    left: 2,
    right: 2,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.24,
    shadowRadius: 3,
    zIndex: 2,
  },
  thumbDragging: {
    transform: [{ scale: 1.06 }],
    shadowOpacity: 0.44,
  },
});

export default DraggableScrollbar;
