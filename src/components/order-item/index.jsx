/* eslint-disable import/namespace */
/* eslint-disable import/order */
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../constants/theme";

import Ionicons from '@expo/vector-icons/Ionicons';
import { formatDate } from "../../utils/index";


const OrderItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View styles={styles.content}>
                    <Text style={styles.total}>Total:  ${item.total}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)} >
                    <Ionicons name='trash' size={22} color={THEME.colors.textDark}/>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

export default OrderItem;