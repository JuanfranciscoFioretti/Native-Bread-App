import React from "react";
import { View, Text, Button, FlatList, SafeAreaView } from "react-native";

import { THEME } from "../../constants/theme";
import { CATEGORIES } from "../../constants/data/index"
import { styles } from "./styles";

import { CategoryItem } from '../../components' 

const Categories = ({ navigation }) => {

  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryID: item.id,
      title: item.title,
    })
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} style={styles.categoryItem}/>;
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
