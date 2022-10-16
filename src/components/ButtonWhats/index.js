import { View, Text, Linking } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const ButtonWhats = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => Linking.openURL("https://wa.me/5511981700028")}
    >
      <Ionicons name="logo-whatsapp" size={45} color="white" />
    </TouchableOpacity>
  );
};

export default ButtonWhats;
