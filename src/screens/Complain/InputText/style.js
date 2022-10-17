import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = (error=false, focus =false)=>
StyleSheet.create({
  input: {
    borderColor: error ? 'red': colors.primary.main,
    borderWidth: focus ?  3 : 1,
    borderRadius: 25,
    paddingHorizontal: 18,
    fontSize: 16,
    width: "100%",
    paddingVertical: 14,
    marginBottom: error ? 0: 10,
  },
  labelError: {
    color: 'red',
    fontSize: 12
  }
});

export default styles;
