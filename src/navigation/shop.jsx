import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                presentation: 'transparentModal',
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