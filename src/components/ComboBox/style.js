import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = (error=false)=>
StyleSheet.create({
  combo: {
    borderColor: error ? 'red': colors.primary.main,
    borderWidth:1,
    borderRadius: 25,
    paddingHorizontal: 10
  },
  labelError: {
    color: 'red',
    fontSize: 12
  },
});

export default styles;
