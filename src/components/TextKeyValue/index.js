import { Text, View } from "react-native";
import styles from "./style";

const TextKeyValue = ({ value, key }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.key}>{key}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TextKeyValue;
