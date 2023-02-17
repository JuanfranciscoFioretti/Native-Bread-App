import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { THEME } from "../constants/theme";
import { Categories, Products, ProductDetail } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerTintColor: THEME.colors.primaryDark,
                headerTitleStyle: {
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 17,
                    color: THEME.colors.backgroundDark,
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
                    headerShown: false,
                    title: 'Categories',
                }}
                />
            <Stack.Screen 
                name='Products' 
                component={Products}
                options={({ route }) => ({
                    title: route.params.title,
                })}
                />
            <Stack.Screen 
                name='ProductDetail' 
                component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.title,
                })}
                />
        </Stack.Navigator>
    );
};

export default ShopNavigator;