import { View, Text, ScrollView, TouchableOpacity, TouchableHighlight} from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons'; 
import Divider from "../../components/Divider";
import useOrder from "../../hooks/useOrder";
import Summary from "./Summary";
import colors from "../../styles/colors";
import Timeline from "./Timeline";
import Title from "../../components/Title";
import Details from "./Details";
import Payments from "./Payments";
import Adresses from "./Adresses";

const Order = () => {
  const order = useOrder();

  return (
    order && 
    <ScrollView>
      <TouchableOpacity style={styles.wrapperMenu}>
        <Text style={styles.menu}>MENU</Text>
        <Ionicons name="chevron-down-outline" size={25} color="black" />
      </TouchableOpacity>

      <Title text={`COMPRA ${order.id}`} />      

      <View style={styles.card}>
        <Summary order={order} />
        <Divider  color={colors.primary.main} margin={24}/>
        <Timeline historic={order.historic} /> 
        <Divider  color={colors.primary.main} margin={24}/>
        <Details items={order.items} /> 
        <Divider  color={colors.primary.main} margin={24}/>
        <Payments payments={order.payments} delivery={order.delivery} amount={order.value} /> 
        <Divider  color={colors.primary.main} margin={10}/>
        <Adresses adresses={order.adresses} />
      </View>
      <View style={styles.wrapperFooter}>
        <Text style={styles.labelFooter}>Algum problema com sua compra?</Text>
      

      </View>
      <TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.labelButton}>Fale Conosco</Text>
          </View>
        </TouchableHighlight>
      
    </ScrollView>
    );
};



export default Order;
