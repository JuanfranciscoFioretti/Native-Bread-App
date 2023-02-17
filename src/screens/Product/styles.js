import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.backgroundLight,
    },
    text: {
        fontFamily: 'Poppins-BoldItalic',
        fontSize: 20,
        color: THEME.colors.textDark,
        paddingVertical: 15,
    },
    contentList: {
        flex: 1,
    }
});