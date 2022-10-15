import { StyleSheet } from "react-native";
import colors from "./../../styles/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary.main,
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
    color: colors.secondary.contrast,
    textAlign: "center",
  },
});

export default styles;
