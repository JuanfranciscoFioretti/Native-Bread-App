import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '80%',
        maxWidth: 400,
        minHeight: 330,
        padding: 15,
        margin: 15,
        borderColor: THEME.colors.primaryDark,
        borderWidth: 1,
        backgroundColor: THEME.colors.white,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        paddingVertical: 5,
    },
    // input: {
    //     height: 45,
    //     borderBottomColor: THEME.colors.primaryDark,
    //     borderBottomWidth: 1,
    //     width: '100%',
    //     fontFamily: 'Poppins-Light',
    //     paddingVertical: 5,
    //     marginBottom: 7,
    // },
    buttonContainer: {
        marginVertical: 10,
    },
    prompt: {
        width: '100%',
        alignContent: 'center',
        marginVertical: 10,
    },
    promptButton: {
        width: '100%',
        backgroundColor: THEME.colors.backgroundLight,
        borderColor: THEME.colors.primary,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: THEME.colors.textDark,
    },
});
