import { SafeAreaView, StyleSheet } from "react-native";
import Header from "./src/components/Header/index";
import Order from "./src/screens/Order/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Order />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
