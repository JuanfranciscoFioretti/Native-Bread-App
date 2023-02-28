import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.backgroundLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Poppins-BoldItalic',
        fontSize: 19,
        color: THEME.colors.textDark,
        paddingVertical: 15,
    },
    description: {
        fontFamily: 'Poppins-Italic',
        fontSize: 17,
        paddingVertical: 8,
    },
    weight: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        paddingVertical: 8,
    },
    price: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        paddingVertical: 8,
    },
    buttonContainer: {

    },
});