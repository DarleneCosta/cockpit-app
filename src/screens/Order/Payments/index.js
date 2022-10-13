import { Text, View } from "react-native";
import Divider from "../../../components/Divider";
import Subtitle from "../../../components/Subtitle";
import TextKeyValue from "../../../components/TextKeyValue";
import colors from "../../../styles/colors";
import utils from "../../../utils";

import styles from "./style";

const Payment = ({ payments, delivery, amount }) => {
  return (
    <View>
      <Subtitle text="TOTAL PAGO NA COMPRA" />
      {payments.map((payment, i) => {
        return (
          <View key={i}>
            <View style={styles.wrapper}>
              <Subtitle text="Forma de pagamento" />
              <Subtitle text={payment.type.describe} />
            </View>
            <TextKeyValue
              key="Total da compra"
              value={utils.formatMoney(payment.value)}
            />
            <TextKeyValue
              key={`Frete: ${delivery.type}`}
              value={
                !delivery.value ? "Grátis" : utils.formatMoney(delivery.value)
              }
            />
          </View>
        );
      })}
      <Divider color={colors.secondary.light} />
      <View style={styles.wrapper}>
        <Subtitle text="Valor Final" />
        <Subtitle text={utils.formatMoney(amount)} />
      </View>
    </View>
  );
};

export default Payment;
