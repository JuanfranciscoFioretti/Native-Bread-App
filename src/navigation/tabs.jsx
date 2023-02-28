import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

import CartNavigator from "./cart";
import ShopNavigator from "./shop";
import OrdersNavigator from "./orders";

import { THEME } from "../constants/theme";

import Ionicons from '@expo/vector-icons/Ionicons';
import { Octicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {

    const cart = useSelector((state) => state.cart.items);
    return (
        <BottomTab.Navigator 
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                },
                tabBarActiveTintColor: THEME.colors.primary,
                tabBarInactiveBackgroundColor: THEME.colors.backgroundDark,
            }}>
            <BottomTab.Screen 
            name="ShopTab"
            component={ShopNavigator} 
                options={{
                    title: 'Shop', 
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={22}
                            color={THEME.colors.primary}
                        />
                    )
                }}
            />
            <BottomTab.Screen 
            name="OrdersTab" 
            component={OrdersNavigator} 
                options={{
                    title: 'Orders', 
                    tabBarIcon: ({ focused }) => (
                        <Octicons 
                            name={focused ? 'checklist' : 'list-ordered'} 
                            size={22} 
                            color={THEME.colors.primary} />
                    )
                }}
            />
            <BottomTab.Screen 
            name= "CartTab" 
            component={CartNavigator} 
                options={{
                    title: 'Cart', 
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'md-cart' : 'md-cart-outline'}
                            size={22}
                            color={THEME.colors.primary}
                        />
                    ),
                    tabBarBadge: cart.length,
                    tabBarBadgeStyle: {
                        backgroundColor: THEME.colors.primaryDark,
                        color: THEME.colors.textLight,
                        fontFamily: 'Poppins-Italic',
                    },
                }}
            />
        </BottomTab.Navigator>
    )
};

export default Tabs;