import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {  height: 270},
  wrapper: {
    flexDirection: "row",
    marginVertical: 5,
  },
  chip: {
    margin: 0,
    borderRadius: 40,
    borderColor: colors.primary.main,
    borderWidth: 2,
    width: 28,
    height: 28,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: colors.secondary.contrast
  },
  dividerVertical: {
    borderLeftWidth: 2,
    borderLeftColor:colors.primary.main, 
    height: '68%', 
    position:'relative', 
    top: -220,
    left: '4%',
    zIndex: -1
  },
  text: {
    fontWeight: "bold",
    paddingTop: 2,
    paddingLeft: 5,
    fontSize: 16
  },
});

export default styles;
