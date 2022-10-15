import { Text, View } from "react-native";
import styles from "./style";

const ButtonTemplate = ({ label }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </View>
  );
};

export default ButtonTemplate;
