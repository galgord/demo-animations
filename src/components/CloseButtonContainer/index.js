import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
const CloseButtonContainer = ({ imagePosition, handleClose }) => {
  const closeButtonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 30]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + 'deg', { duration: 1000 }) },
      ],
    };
  });
  return (
    <Animated.View
      style={[styles.closeButtonContainer, closeButtonAnimatedStyle]}>
      <Pressable onPress={handleClose}>
        <Text>X</Text>
      </Pressable>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    top: -20,
  },
});
export default CloseButtonContainer;
