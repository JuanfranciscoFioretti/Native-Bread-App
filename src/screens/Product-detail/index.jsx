import React from "react";
import { View, Text, Button } from "react-native";
import { theme } from "../../constants/theme";
import { styles } from "./styles";

const ProductDetail = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product Detail</Text>
            <Button
                title="Go back to Categories"
                onPress={() => navigation.navigate("Categories")}
                color={theme.colors.primary}
            />
        </View>
    );
};

export default ProductDetail; 