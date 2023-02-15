import React from "react";
import { View, Text, Button } from "react-native";
import { theme } from "../../constants/theme";

import { styles } from "./styles";

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product</Text>
      <Button
        title="Go to Product Detail"
        onPress={() => navigation.navigate("ProductDetail")}
        color={theme.colors.primary}
      />
    </View>
  );
};

export default Product;
