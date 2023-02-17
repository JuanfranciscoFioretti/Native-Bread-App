import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { THEME } from "../constants/theme";
import { Orders } from "../screens";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
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
            <Stack.Screen name="Orders" component={Orders}>
            </Stack.Screen>
        </Stack.Navigator>
    )
};

export default OrdersNavigator;