import React from "react";

import { View, Text, Button } from "react-native";
import { THEME } from "../../constants/theme";
import { PRODUCTS } from '../../constants/data';

import { styles } from "./styles";

const ProductDetail = ({ navigation, route }) => {

    const { productID, title } = route.params;

    const product = PRODUCTS.find((product) => product.id === productID);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.weight}>{product.weight}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go back to Categories"
                    onPress={() => navigation.navigate("Categories")}
                    color={THEME.colors.primary}
                />
            </View>
        </View>
    );
};

export default ProductDetail; 