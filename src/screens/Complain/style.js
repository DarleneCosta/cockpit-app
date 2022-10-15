import { StyleSheet } from "react-native";
import colors from "./../../styles/colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  input: {
    borderColor: colors.primary.main,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 18,
    fontSize: 16,
    width: "100%",
    paddingVertical: 14,
    marginBottom: 10,
  },
  inputText: {
    borderColor: colors.primary.main,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 18,
    fontSize: 16,
    width: "100%",
    paddingVertical: 14,
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    marginBottom: 5,
  },
});

export default styles;
