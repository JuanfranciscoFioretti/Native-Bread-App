/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable import/namespace */
import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        width: 340,
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
    // headerContainer: {
    // },
    date: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: THEME.colors.text,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {

    },
    total: {
        fontSize: 17,
        fontFamily: 'Poppins-SemiBold',
        color: THEME.colors.black,
    },
});