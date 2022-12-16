import React, { useEffect, useRef } from "react";
import { Text, Animated, useWindowDimensions } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { styles } from "./styles";
const InternetStatusBox = ({
  backgroundColor = '#FFF',
  slideDuration = 500,
  containerStyle = {},
  renderLabel = undefined,
  label = '',
  labelColor = '#111'
}) => {

  const { height, width } = useWindowDimensions();

  const progress = useRef(new Animated.Value(0)).current;

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
      animate(state.isConnected ? 0 : 1);
    });
  }, []);

  return (
    <Animated.View style={[styles.container, {
      backgroundColor,
      height: height * 0.065,
      width: width - 20,
      transform: [{
        translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [-70, 30], }),
      }],
    }, containerStyle]}>
      {renderLabel ?
        renderLabel :
        <Text style={[styles.label, { color: labelColor }]}>
          {label}
        </Text>}
    </Animated.View>
  );
};
export default InternetStatusBox;
