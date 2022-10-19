import { Text, View } from "react-native";
import Subtitle from "../../../components/Subtitle";
import utils from "../../../utils";
import styles from "./style";

const Summary = ({ order }) => {
  const detailItem = (key, value) => {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.key}>{key}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  };

  return (
    <View>
      <Subtitle text="RESUMO DO PEDIDO" />
      {detailItem("data", utils.formatDate(order.dateCreated))}
      {detailItem("valor", utils.formatMoney(order.value))}
      {detailItem("status", order.status)}
      {detailItem("Tipo do Frete", order.delivery.type)}
    </View>
  );
};

export default Summary;
