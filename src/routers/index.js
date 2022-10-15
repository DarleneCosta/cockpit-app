import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../screens/Chat";
import Complain from "../screens/Complain";
import Order from "../screens/Order";

const Stack = createNativeStackNavigator();

export default function Router({ ComponentePrincipal = Order }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Compra" component={ComponentePrincipal} />
      <Stack.Screen name="SolicitarAtendimento" component={Complain} />
      <Stack.Screen name="Atendimento" component={Chat} />
    </Stack.Navigator>
  );
}
