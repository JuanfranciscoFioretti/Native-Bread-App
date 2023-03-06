/* eslint-disable import/namespace */
import React, { useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';

import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import { styles } from "./styles";

import OrderItem from '../../components/order-item';
import { getOrders, deleteOrder } from '../../store/actions/index';

const Orders = ({ navigation }) => {

  const dispatch =  useDispatch();

  const orders = useSelector((state) => state.orders.list);

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const onDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  const keyExtractor = (item) => item.id.toString();

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete}/>;
  return (
    <View style={styles.container}>
      <FlatList 
        data={orders}
        renderItem={renderItem}
        keyExtractor={keyExtractor}/>
    </View>
  );
};

export default Orders;
