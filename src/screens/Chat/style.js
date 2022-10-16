import { StyleSheet } from "react-native";
import colors from "./../../styles/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  message: {
    backgroundColor: colors.primary.main,
  },
  chat: {
    backgroundColor: colors.primary.ligth,
  },
  send: {
    backgroundColor: colors.primary.main,
    marginRight: 3,
    marginTop: 3,
    borderRadius: 100,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
