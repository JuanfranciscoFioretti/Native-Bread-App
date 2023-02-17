import { StyleSheet, Platform, StatusBar } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.backgroundLight,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    containerList: {
        flex: 1,
        marginTop: 20,
    },
    // categoryItem: {
    //     marginBottom: 55,
    // },
    // text: {
    //     fontFamily: 'Poppins-BoldItalic',
    //     fontSize: 20,
    //     color: THEME.colors.textDark,
    //     paddingVertical: 15,
    // },
});

