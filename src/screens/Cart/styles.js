import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.white,
    },
    listContainer: {
        flex: 1,
        backgroundColor: THEME.colors.white,
    },
    footer: {
        backgroundColor: THEME.colors.white,
        borderTopColor: THEME.colors.primary,
        borderTopWidth: 1,
        paddingVertical: 13,
        marginBottom: 6,
        paddingHorizontal: 10,
    },
    buttonConfirm: {
        backgroundColor: THEME.colors.primaryDark,
        borderRadius: 5,
        paddingHorizontal: 20, 
        paddingVertical: 15, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonConfirmText: {
        color: THEME.colors.white,
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 16,
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalText: {
        color: THEME.colors.white,
        fontFamily: 'Poppins-Light',
        fontSize: 16,
    },
    totalPrice: {
        color: THEME.colors.white,
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 17,
    },
    headerContainer: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 18,
    },
});