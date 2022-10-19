import { StyleSheet } from "react-native";
import colors from "./../../styles/colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    width: "100%",
  },
  spinnerText: {
    color: colors.secondary.contrast,
  },
});

export default styles;
