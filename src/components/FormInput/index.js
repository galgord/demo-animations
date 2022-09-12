import React from 'react';
import { Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Animated, {
  withDelay,
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
const FormInput = ({ imagePosition, isRegister }) => {
  const formButtonScale = useSharedValue(1);
  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButtonScale.value }],
    };
  });
  return (
    <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
      <TextInput
        style={styles.textInput}
        placeholder='Full Name'
        placeholderTextColor='black'
      />
      <TextInput
        style={styles.textInput}
        keyboardType='phone-pad'
        placeholder='Phone Number'
        placeholderTextColor='black'
      />
      <Animated.View style={formButtonAnimatedStyle}>
        <Pressable
          style={styles.formBtn}
          onPress={() =>
            (formButtonScale.value = withSequence(
              withSpring(1.5),
              withSpring(1.0)
            ))
          }>
          <Text style={styles.btnText}>
            {isRegister ? 'Register' : 'Login'}
          </Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  formInputContainer: {
    marginBottom: 70,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
  formBtn: {
    backgroundColor: '#ADAAAD',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },
});

export default FormInput;
