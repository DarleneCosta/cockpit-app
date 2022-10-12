import { StatusBar, SafeAreaView, Text, StyleSheet, View } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  return (
    <>
      <StatusBar />
      <View style={styles.top}>
        <View style={styles.wrapper}>
          <Ionicons name="md-menu" style={styles.icon} size={30} />
          <Text style={styles.title}>LOGO TIPO</Text>
        </View>
        <View style={styles.wrapper}>
          <Ionicons name="search" style={styles.icon} size={30} />
          <SimpleLineIcons name="bag" style={styles.icon} size={30} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    start: 0,
  },
  top: {
    backgroundColor: "red",
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    color: "white",
    fontWeight: "900",
    marginLeft: 10,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    color: "white",
    size: 30,
    marginHorizontal: 5,
  },
});

export default Header;
