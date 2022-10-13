import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./src/components/Header/index";
import Router from "./src/routers";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Header />
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
