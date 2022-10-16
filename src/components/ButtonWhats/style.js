import { StyleSheet } from "react-native";
import colors from "./../../styles/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.icons.whatsApp,
    flex: 1,
    position: "absolute",
    bottom: "20%",
    right: "7%",
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
});

export default styles;
