import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";

const ButtonBack = ({ label = "VOLTAR" }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button} accessibilityHint="Voltar para a tela anterior">
      <Ionicons name="chevron-back" size={30} color="black" />
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBack;
