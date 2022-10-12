import { Text, View } from "react-native";
import colors from "../../../styles/colors";
import styles from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Subtitle from "../../../components/Subtitle";

const Timeline = ({historic }) => {

    const renderNodeOrder = (status, text, index)=>{
        const icon = {
            style: styles.chip,            
          };
        
          if (status === "OK") {
            icon.name = "check-bold";
            icon.style = { ...styles.chip, backgroundColor: colors.info.success };
          } else if (status === "NOK") {
            icon.name = "close-thick";
            icon.style = { ...styles.chip, backgroundColor: colors.info.error };
          }

        return (     
            <View style={styles.wrapper} key={index}>
                <View style={icon.style}>
                  {icon.name && <MaterialCommunityIcons name={icon.name} size={24} color="white" />}
                </View>
                <Text style={styles.text}>{text}</Text>
            </View>
          );
    }

    return (
        <View style={styles.container}>               
            <Subtitle text="STATUS DO PEDIDO" />
            {historic.map((i, index) => (
                renderNodeOrder(i.status, i.describe,index ) 
            ))}
            <View style={styles.dividerVertical}/>        
        </View>
      );
}

export default Timeline