import { View, Text } from "react-native";
import Divider from "../../../components/Divider";
import Subtitle from "../../../components/Subtitle";
import TextKeyValue from "../../../components/TextKeyValue";
import colors from "../../../styles/colors";
import utils from "../../../utils";
import styles from "./style";

const Adresses = ({ adresses }) => {

const renderItem = (address, i) => {
    const showDivider = i!== (adresses.length - 1)
    return (
      <View key={address.type} >
        <Subtitle text={`ENDEREÇO DE ${address.type}`} />
        <View>
          <TextKeyValue label={address.nameResponsible} />
          <Text>{`${address.describe} - ${address.number}`}</Text>
          <Text>{`${address.city} - ${address.uf}`}</Text>
          { address.complement && <Text>{address.complement}</Text>}
          <Text>{`CEP: ${utils.formatCep(address.cep)}`}</Text>
          <Text>{`Cont.: ${utils.formatPhone(address.contact.phoneNumber)}`}</Text>      
        </View>
        {showDivider && <Divider color={colors.primary.main} margin={24} />}
      </View>)
  }
  return (
    <View style={styles.container}>
      {adresses.map((address, i)=> renderItem(address, i))}
    </View>
  );
};

export default Adresses;
