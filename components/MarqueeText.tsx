// components/MarqueeText.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Easing,
    LayoutChangeEvent,
    ScrollView,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from 'react-native';

interface MarqueeTextProps {
  text: string;
  style?: any;
  containerStyle?: ViewStyle;
  duration?: number;
  delay?: number;
}

export function MarqueeText({
  text,
  style,
  containerStyle,
  duration = 8000,
  delay = 1500,
}: MarqueeTextProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const isScrolling = textWidth > containerWidth;

  useEffect(() => {
    if (!isScrolling) return;

    let animation: Animated.CompositeAnimation;

    const startAnimation = () => {
      animatedValue.setValue(0);
      animation = Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(animatedValue, {
            toValue: -textWidth + containerWidth, // Scroll to end
            duration: duration,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.delay(delay),
          Animated.timing(animatedValue, {
            toValue: 0, // Scroll back
            duration: 0, // Instant reset
            useNativeDriver: true,
          }),
        ])
      );
      animation.start();
    };

    startAnimation();

    return () => {
      if (animation) animation.stop();
    };
  }, [isScrolling, textWidth, containerWidth, duration, delay]);

  return (
    <View
      style={[styles.container, containerStyle]}
      onLayout={(e: LayoutChangeEvent) =>
        setContainerWidth(e.nativeEvent.layout.width)
      }
    >
      <ScrollView
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      >
        <Animated.View
          style={{
            transform: [{ translateX: animatedValue }],
            flexDirection: 'row',
          }}
        >
          <Text
            style={[style]}
            numberOfLines={1}
            onLayout={(e: LayoutChangeEvent) =>
              setTextWidth(e.nativeEvent.layout.width)
            }
          >
            {text}
          </Text>
          {/* Add padding at the end to ensure it doesn't cut off abruptly during calculation */}
          <View style={{ width: 20 }} />
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
  },
});