import {  StyleSheet } from "react-native";
import colors from "./../../styles/colors"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "absolute",
      start: 0,
    },
    top: {
      backgroundColor: colors.primary.main,
      paddingHorizontal: 20,
      paddingTop: 15,
      paddingBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 25,
      color:  colors.secondary.light,
      fontWeight: "900",
    },
    wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    icon: {
      color:  colors.secondary.light,
      marginHorizontal: 10,
    },
  });

  export default styles;
