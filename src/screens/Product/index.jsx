import React from "react";
import { View, Text, Button } from "react-native";
import { THEME } from "../../constants/theme";

import { styles } from "./styles";

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product</Text>
      <Button
        title="Go to Product Detail"
        onPress={() => navigation.navigate("ProductDetail")}
        color={THEME.colors.primary}
      />
    </View>
  );
};

export default Product;
