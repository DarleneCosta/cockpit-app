import { View, Text, StyleSheet } from "react-native";

const Order = () => {
  return (
    <>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>MENU</Text>
      </View>

      <Text style={styles.subtitle}>COMPRA 00012345</Text>
      <View style={styles.card}>
        <View>
          <Text style={styles.text}>RESUMO DO PEDIDO</Text>
        </View>
        <Text style={styles.text}>STATUS DO PEDIDO</Text>
        <View></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperTitle: {},
  text: {},
  title: {},
  subtitle: {},
  card: {},
});

export default Order;
