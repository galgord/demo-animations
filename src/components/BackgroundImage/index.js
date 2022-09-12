import { StyleSheet, Dimensions } from 'react-native';
import Svg, { Image, ClipPath, Ellipse } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');

const BackgroundImage = ({ imagePosition }) => {
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
      <Svg height={height + 100} width={width}>
        <ClipPath id='clipPathId'>
          <Ellipse cx={width / 2} rx={height} ry={height + 100} />
        </ClipPath>
        <Image
          href={require('../../../assets/loginBg.jpg')}
          width={width + 100}
          height={height + 100}
          preserveAspectRatio='xMidYMid slice'
          clipPath='url(#clipPathId)'
        />
      </Svg>
    </Animated.View>
  );
};

export default BackgroundImage;
