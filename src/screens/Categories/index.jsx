import React from "react";
import { View, Text, Button } from "react-native";
import { THEME } from "../../constants/theme";

import { styles } from "./styles";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Products')}
        color={THEME.colors.primary}
      />
    </View>
  );
};

export default Categories;
