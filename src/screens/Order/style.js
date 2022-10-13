import { StyleSheet } from "react-native";
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  wrapperMenu: {
    width: "85%",
    borderWidth: 1,
    borderRadius: 100,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    flexDirection: "row",
    borderColor: colors.primary.main
  },
  menu: {
    fontWeight: "800",
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "500",
    marginLeft: "30%",
    marginRight: "20%",
    textTransform: 'uppercase'
  },

  card: {
    backgroundColor: colors.primary.light,
    margin: 30,
    padding: 15,
    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
    marginBottom: 20,
    fontWeight: "900",
    fontSize: 14,
    textTransform: 'uppercase'
  },
  icon: {
    marginLeft: 50,
  },
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
    textTransform: 'uppercase',
    fontWeight: "900",
    color: colors.secondary.contrast, 
    textAlign:"center"
  },
  labelFooter: {
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign:"center",
    fontWeight: "900",
   width: '60%'
  },
  wrapperFooter: {
    alignItems: "center",
    width: '100%'
  }
});

export default styles;
