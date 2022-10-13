import { Text, View } from "react-native";
import styles from "./style";

const TextKeyValue = ({ value, label }) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.key}>{label}</Text>}
      {value && <Text style={styles.text}>{value}</Text>}
    </View>
  );
};

export default TextKeyValue;
