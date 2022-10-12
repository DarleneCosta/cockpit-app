import { StatusBar,  Text,  View } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./style";

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
          <SimpleLineIcons name="handbag" style={styles.icon} size={28} />
        </View>
      </View>
    </>
  );
};


export default Header;
