import React from "react";
import { View, Text, Button, SafeAreaView, FlatList } from "react-native";
import ProductItem from "../../components/product-item";
import { THEME } from "../../constants/theme";
import { PRODUCTS} from "../../constants/data/products"

import { styles } from "./styles";

const Product = ({ navigation, route }) => {

  const { categoryID, title } = route.params;

  // console.warn("Title: ", title, "categoryID: ", categoryID);

  const filteredProduct = PRODUCTS.filter((product) => product.categoryID === categoryID);

  const onSelected = (item) => {
    navigation.navigate('ProductDetail', {
      productID: item.id,
      title: item.title, 
    });
  };

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;

  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProduct}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
    </SafeAreaView>
  );
};

export default Product;
