import React, { useEffect } from "react";
import { Text, Animated } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { styles } from "./styles";
import { InternetStatusProps } from "../declarations";

const InternetStatusBox = ({
  backgroundColor = undefined,
  slideDuration = 500,
  containerStyle = {},
  renderLabel = undefined,
  label = '',
  labelColor = '#111'
}: InternetStatusProps) => {

  const progress = React.useRef(new Animated.Value(0)).current;

  // Slides dropdown alert onto or off screen
  const animate = (value: number) => {
    Animated.timing(progress, {
      toValue: value,
      duration: slideDuration,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      animate(state.isConnected ? 1 : 0);
    });
  }, [])

  return (
    <Animated.View style={[styles.container, {
      backgroundColor,
      transform: [{
        translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [10, -70], }),
      }],
    }, containerStyle]}>
      {
        renderLabel ?
          renderLabel :
          <Text style={[styles.label, { color: labelColor }]}>
            {label}
          </Text>
      }
    </Animated.View>
  )
}

export default InternetStatusBox;