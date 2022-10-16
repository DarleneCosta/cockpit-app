import { Text, View } from "react-native";
import styles from "./style";

const ButtonTemplate = ({ label, disabled = false }) => {
  return (
    <View style={styles(disabled).button}>
      <Text style={styles(disabled).labelButton}>{label}</Text>
    </View>
  );
};

export default ButtonTemplate;
