import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({ 
  combo: {
    borderColor: colors.primary.main,    
    borderWidth:1,
    borderRadius: 25,
    paddingHorizontal: 10
  },
  labelInput: {
    fontSize: 20,
    textAlign: "center",
    width: "100%",
    paddingTop: 20,
    fontWeight: "800",
    textTransform: 'uppercase'
  },
});

export default styles;
