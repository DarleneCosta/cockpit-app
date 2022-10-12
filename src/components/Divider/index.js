import { View } from "react-native";

const Divider = ({color='black', size='100%', bold=2,  margin = 0, alignItems='center'}) => {
  const custom = {
      divider:{
        width: size,       
        borderTopColor:color,
        borderTopWidth: bold      
      },
      wrapper :{
        width: '100%',
        alignItems: alignItems, 
        marginVertical: margin
      }
    }  

  return (   
    <View style={custom.wrapper}>
      <View style={custom.divider}/>         
    </View>
  );
};


export default Divider;
