import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { THEME } from "../constants/theme";
import { Cart } from "../screens";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
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
            }}>
            <Stack.Screen name="Cart" component={Cart}>
            </Stack.Screen>
        </Stack.Navigator>
    )
};

export default CartNavigator;