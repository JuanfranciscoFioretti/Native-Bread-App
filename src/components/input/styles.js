import { StyleSheet } from "react-native";
import { THEME } from '../../constants/theme/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderBottomColor: THEME.colors.primaryDark,
        borderBottomWidth: 1,
        width: '100%',
        fontFamily: 'Poppins-Light',
        paddingVertical: 5,
        marginBottom: 7,
    },
    message: {
        marginVertical: 5,
    },
    helperText: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: THEME.colors.red,
        marginLeft: '60%',
    },
});