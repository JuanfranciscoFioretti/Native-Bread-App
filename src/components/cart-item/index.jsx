import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../constants/theme";
import { styles } from "./styles";

import Ionicons from '@expo/vector-icons/Ionicons';

const CartItem = ({ item, onDelete }) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                    <Text style={styles.price}>Price:   ${item.price}</Text>
                </View>
            <TouchableOpacity 
                // onPress={(item) => onDelete(item.id)}
                onPress={item => onDelete(item.id)}
                style={styles.deleteButton}>
                <Ionicons name='trash' size={22} color={THEME.colors. textDark}/>
            </TouchableOpacity>
            </View>
        </View>
    )
};

export default CartItem;