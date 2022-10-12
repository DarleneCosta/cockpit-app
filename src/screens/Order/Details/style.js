import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
  container: {
    flexDirection: "row",   
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    borderRadius:10,
    width: 70,
    height: 70,
    resizeMode: 'center',
  },  
  wrapperDetails: {
   paddingLeft:'5%'
  }, 
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  }, 
  specification: {    
    fontSize: 12,    
    paddingVertical: 3
    }, 
  qtd: {
    fontWeight: 'bold',
    fontSize: 12,
    marginRight:'30%',
    marginBottom:'2%'
  }, 
    amount: {
      fontWeight: '900',
      paddingVertical: 10,
      paddingLeft: 40,
    }, 
});

export default styles;
