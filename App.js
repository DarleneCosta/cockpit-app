import { SafeAreaView, StyleSheet } from "react-native";
import Header from "./src/components/Header/index";
import Router from "./src/routers";

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Router />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
