import { StyleSheet } from "react-native";
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 130,
        backgroundColor: THEME.colors.primary,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'Poppins-Light',
        color: THEME.colors.backgroundLight,
        fontSize: 16,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 16,
        color: THEME.colors.backgroundDark,
    },
    weight: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: THEME.colors.backgroundDark,
    },
});