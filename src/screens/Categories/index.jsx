import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Products')}
        color='grey'
      />
    </View>
  );
};

export default Categories;
