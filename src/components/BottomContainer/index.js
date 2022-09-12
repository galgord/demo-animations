import React from 'react';
import { Text, StyleSheet, View, Dimensions, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
const BottomContainer = ({
  handleLogin,
  handleRegister,
  imagePosition,
  children,
}) => {
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 1000 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });
  return (
    <View style={styles.bottomContainer}>
      <Animated.View style={buttonAnimatedStyle}>
        <Pressable onPress={handleLogin} style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </Animated.View>
      <Animated.View style={buttonAnimatedStyle}>
        <Pressable onPress={handleRegister} style={styles.btn}>
          <Text style={styles.btnText}>Register</Text>
        </Pressable>
      </Animated.View>
      {children}
    </View>
  );
};
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#ADAAAD',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: 'center',
    height: height / 3,
  },
});
export default BottomContainer;
