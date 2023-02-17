import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";

import { ORDERS } from "../../constants/data/orders";

import OrderItem from '../../components/order-item';

const Orders = ({ navigation }) => {

  const onDelete = (id) => {};

  const keyExtractor = (item) => item.id.toString();

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete}/>;
  return (
    <View style={styles.container}>
      <FlatList 
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}/>
    </View>
  );
};

export default Orders;
