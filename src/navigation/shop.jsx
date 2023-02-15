import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../constants/theme";
import { Categories, Products, ProductDetail } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerTintColor: theme.colors.primaryDark,
                headerTitleStyle: {
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 17,
                    color: theme.colors.backgroundDark,
                },
                headerShadowVisible: {
                    borderBottomWidth: 1,
                    elevation: 20,
                    shadowOpacity: 0.25,
                }
            }}
        > 
            <Stack.Screen 
                name='Categories' 
                component={Categories}
                options={{
                    headerShown: true,
                    title: 'Categories',
                }}
                />
            <Stack.Screen 
                name='Products' 
                component={Products}
                options={{
                    headerShown: true,
                    title: 'Products',
                }}
                />
            <Stack.Screen 
                name='ProductDetail' 
                component={ProductDetail}
                options={{
                    headerShown: true,
                    title: 'Product Detail',
                }}
                />
        </Stack.Navigator>
    );
};

export default ShopNavigator;