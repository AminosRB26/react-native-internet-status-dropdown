import React, { ReactNode, useCallback, useEffect, useMemo, useRef } from "react";
import { Text, Animated, useWindowDimensions, StyleProp, ViewStyle } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { styles } from "./styles";

interface InternetStatusBoxProps {
  duration: number;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  renderLabel?: ReactNode;
  label?: string;
  labelColor?: string;
}

const InternetStatusBox: React.FC<InternetStatusBoxProps> = ({
  backgroundColor = '#FFF',
  duration = 500,
  style = {},
  renderLabel,
  label = 'No internet connection',
  labelColor = '#111111',
}) => {

  const { height, width } = useWindowDimensions();

  const progress = useRef(new Animated.Value(0)).current;

  const containerStyle = useMemo(() => {
    return {
      backgroundColor,
      height: height * 0.065,
      width: width - 20,
      transform: [{
        translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [-70, 30], }),
      }],
    }
  }, [backgroundColor, height, width, progress])

  const animate = useCallback((value) => {
    Animated.timing(progress, {
      toValue: value,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [duration, progress]);

  useEffect(() => {
    const listener = NetInfo.addEventListener((state) => {
      animate(state.isConnected ? 0 : 1);
    });

    return () => listener();
  }, []);

  return (
    <Animated.View style={[styles.container, containerStyle, style]}>
      {renderLabel ?
        renderLabel :
        <Text style={[styles.label, { color: labelColor }]}>
          {label}
        </Text>}
    </Animated.View>
  );
};
export default InternetStatusBox;
