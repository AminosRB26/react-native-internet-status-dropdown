import { Dimensions } from "react-native";

const WIDTH = Dimensions.get('screen').width;

export const fontSizes = {
    massive: WIDTH > 400 ? 24 : 22,
    extraBig: WIDTH > 400 ? 20 : 18,
    semiExtraBig: WIDTH > 400 ? 18 : 16,
    big: WIDTH > 400 ? 16 : 15,
    regular: WIDTH > 400 ? 14 : 13,
    light: WIDTH > 400 ? 12 : 11,
    ultraLight: WIDTH > 400 ? 10 : 9,
}