import {
    StyleProp,
    ViewStyle,
    OpaqueColorValue,
    ColorValue,
    Animated,
} from "react-native";

/**
 * Slide duration time in milliseconds
 */
type Duration = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

type InternetStatusProps = {
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
    /**
     * Custom label `Component`
     */
    renderLabel?: React.Component
};