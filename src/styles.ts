import { StyleSheet, Dimensions } from "react-native"

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
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
        fontSize: 14,
        color: '#111'
    }
})