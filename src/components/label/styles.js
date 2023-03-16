import { StyleSheet } from "react-native";
import { THEME } from '../../constants/theme/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        marginVertical: 5,
        color: THEME.colors.textLight,
    },
    subLabel: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: THEME.colors.gray,
        marginVertical: 5,
    }
});