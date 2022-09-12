import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomContainer from '../../components/BottomContainer';
import CloseButtonContainer from '../../components/CloseButtonContainer';
import Animated, { useSharedValue } from 'react-native-reanimated';
import BackgroundImage from '../../components/BackgroundImage';
import FormInput from '../../components/FormInput';
const LoginScreen = () => {
  const imagePosition = useSharedValue(1);
  const [isRegister, setIsRegister] = useState(false);
  const handleClose = () => {
    imagePosition.value = 1;
  };
  const handleLogin = () => {
    imagePosition.value = 0;
    setIsRegister(false);
  };
  const handleRegister = () => {
    imagePosition.value = 0;
    setIsRegister(true);
  };
  return (
    <Animated.View style={styles.container}>
      <BackgroundImage imagePosition={imagePosition} />
      <CloseButtonContainer
        handleClose={handleClose}
        imagePosition={imagePosition}
      />
      <BottomContainer
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        imagePosition={imagePosition}
        isRegister={isRegister}>
        <FormInput imagePosition={imagePosition} isRegister={isRegister} />
      </BottomContainer>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default LoginScreen;
