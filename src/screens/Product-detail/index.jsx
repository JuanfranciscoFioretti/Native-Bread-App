import React from "react";

// eslint-disable-next-line import/namespace
import { View, Text, Button } from "react-native";
import { THEME } from "../../constants/theme";
import { PRODUCTS } from '../../constants/data';

import { useSelector } from "react-redux";

import { styles } from "./styles";

const ProductDetail = ({ navigation, route }) => {

    const product = useSelector((state) => state.product.selected);

    const { productID, title } = route.params;

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