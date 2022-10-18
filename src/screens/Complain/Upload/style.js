import { StyleSheet } from "react-native";
import colors from "./../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 3,
  },
  button: {
    backgroundColor: colors.info.disabled,
    borderRadius: 100,
    padding: 10,
  },
  image: {
    borderRadius: 10,
    width: 70,
    height: 70,
    resizeMode: "center",
    marginLeft: "10%",
  },
  labelButton: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "900",
    color: colors.secondary.contrast,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    width: "50%",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default styles;
