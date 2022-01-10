import { StyleSheet, Dimensions } from "react-native"
import { colors } from "./colors";
import { fontSizes } from "./fontSizes";

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    container: {
        height: 50,
        width: WIDTH - 20,
        borderRadius: 50,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff'
    },
    label: {
        fontFamily: 'Nunito-SemiBold', 
        fontSize: fontSizes.regular,
        color: colors.mainDark
    }
})