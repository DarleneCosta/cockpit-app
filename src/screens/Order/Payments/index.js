import { Text, View } from "react-native";
import Divider from "../../../components/Divider";
import Subtitle from "../../../components/Subtitle";
import colors from "../../../styles/colors";
import utils from "../../../utils";

import styles from "./style";

const Payment = ({payments, delivery, amount}) => {

    const renderRow = (key, value) => {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.key}>{key}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        )
    }

    return (
    <View >
        <Subtitle text="TOTAL PAGO NA COMPRA" />
        {payments.map((payment, i) =>{
        return (
            <View key={i}>
                <View style={styles.wrapper}>
                    <Subtitle text="Forma de pagamento" />
                    <Subtitle text={payment.type.describe}  />
                </View>
                {renderRow('Total da compra', utils.formatMoney(payment.value))}
                {renderRow(`Frete: ${delivery.type}`, !delivery.value ? 'Grátis' : utils.formatMoney(delivery.value))}
            </View>)
        })}
        <Divider color={colors.secondary.light} />
        <View style={styles.wrapper}>
            <Subtitle text="Valor Final" />
            <Subtitle text={utils.formatMoney(amount)}  />
        </View>
    </View>)
}

export default Payment