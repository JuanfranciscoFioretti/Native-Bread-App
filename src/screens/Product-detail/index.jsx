import React from "react";

// eslint-disable-next-line import/namespace
import { View, Text, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { addToCart } from '../../store/actions/index';

import { THEME } from "../../constants/theme";
import { styles } from "./styles";

const ProductDetail = ({ navigation, route }) => {

    const dispatch = useDispatch();

    const product = useSelector((state) => state.products.selected);

    const onAddToCart = () => {
        dispatch(addToCart(product));
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>{product.title}</Text> */}
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.weight}>{product.weight}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Add to Cart"
                    onPress={onAddToCart}
                    color={THEME.colors.primary}
                />
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