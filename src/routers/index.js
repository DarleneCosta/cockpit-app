import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Chat from "../screens/Chat";
import Complain from "../screens/Complain";
import Order from "../screens/Order";

const Stack = createNativeStackNavigator();

const  Router = ({ ComponentePrincipal = Order }) => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Compra" component={ComponentePrincipal}  />
      <Stack.Screen name="SolicitarAtendimento" component={Complain} options={{
            title: 'Solicitar Atendimento',
          }}/>
      <Stack.Screen name="Atendimento" component={Chat} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router