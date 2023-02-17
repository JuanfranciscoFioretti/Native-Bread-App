import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        backgroundColor: THEME.colors.backgroundLight,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: THEME.colors.primary,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerContainer: {

    },
    header: {
        fontSize: 16,
        fontFamily: 'Poppins-BoldItalic',
        color: THEME.colors.textDark,
        marginBottom: 5,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    quantity: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: THEME.colors.textDark,
        marginBottom: 5,
    },
    price: {
        fontSize: 15,
        fontFamily: 'Poppins-ExtraBold',
        color: THEME.colors.textDark,
        marginBottom: 5,
    },
})