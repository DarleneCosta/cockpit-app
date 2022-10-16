import { StyleSheet } from "react-native";
import colors from "./../../styles/colors";

const styles = (disabled) =>
  StyleSheet.create({
    button: {
      backgroundColor: disabled ? colors.info.disabled : colors.secondary.main,
      borderRadius: 100,
      marginVertical: 20,
      paddingVertical: 15,
      marginHorizontal: 30,
      elevation: 3,
    },
    labelButton: {
      fontSize: 20,
      textTransform: "uppercase",
      fontWeight: "900",
      color: disabled ? colors.primary.contrast : colors.secondary.contrast,
      textAlign: "center",
    },
  });

export default styles;
