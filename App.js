// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

import { StatusBar, SafeAreaView, Text, StyleSheet, View } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
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
