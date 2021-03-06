import React from "react";
import {
  Text,
  Animated,
  StyleProp,
  ViewStyle,
  OpaqueColorValue,
  ColorValue,
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { styles } from "./styles";

/**
 * Slide duration time in milliseconds
 */
type Duration = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

type Props = {
  /**
   * The time duration it takes for the `Internet Alert`
   * to slide onto or off screen
   */
  slideDuration?: Duration;
  /**
   * Label text
   */
  label?: string;
  /**
   * Custom label `Component`
   */
  customLabel?: React.Component;
  /**
   * Dropdown container `Style`
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Background color of the container
   */
  backgroundColor?:
  | string
  | Animated.Value
  | Animated.AnimatedInterpolation
  | OpaqueColorValue;
  /**
   * Color of the text label
   */
  labelColor?: ColorValue;
};

type State = {
  _animatedValue: Animated.Value;
};

export default class InternetStatusBox extends React.Component<Props, State> {
  /**
   * Is mounted `Boolean`, ensures component is mounted before making state updates
   */
  is_Mounted: boolean = false;

  state: State = {
    _animatedValue: new Animated.Value(1),
  };

  componentDidMount() {
    // When component mounts, updates is_Mounted boolean to true
    this.is_Mounted = true;

    // Creates a internet listener, which is triggered if internet connection state changes
    NetInfo.addEventListener((state) => {
      this.animate(state.isConnected ? 1 : 0);
    });
  }

  componentWillUnmount() {
    // When component unmounts, updates is_Mounted boolean to false
    this.is_Mounted = false;
  }

  // Slides dropdown alert onto or off screen
  animate = (value: number) => {
    if (this.is_Mounted) {
      Animated.timing(this.state._animatedValue, {
        toValue: value,
        duration:
          this.props.slideDuration != undefined
            ? this.props.slideDuration
            : 700,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    return (
      <Animated.View style={[styles.container, {
        backgroundColor: this.props.backgroundColor != undefined ? this.props.backgroundColor : '#fff',
        transform: [{
          translateY: this.state._animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [10, -70],
          }),
        }],
        position: "absolute",
      }, this.props.containerStyle]}>
        {this.props.customLabel != undefined ? (
          this.props.customLabel
        ) : (
          <Text style={[styles.label, { color: this.props.labelColor }]}>
            {this.props.label != undefined
              ? this.props.label
              : "No Internet Connection"}
          </Text>
        )}
      </Animated.View>
    );
  }
}
