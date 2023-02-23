import React from "react";

// eslint-disable-next-line import/namespace
import { FlatList, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
import { selectCategory } from "../../store/actions";

const Categories = ({ navigation }) => {
  
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.categories);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      title: item.title,
    });
  };
  const renderItem = ({ item }) => (
    <CategoryItem
      item={item}
      onSelected={onSelected}
      style={styles.categoryItem}
    />
  );
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
