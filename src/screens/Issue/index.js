import {  View, Text } from "react-native";
import { useState } from "react";
import { useRoute } from '@react-navigation/native';

import ComboBox from "../../components/ComboBox";
import Divider from "./../../components/Divider";
import Title from "./../../components/Title";
import TextKeyValue from "./../../components/TextKeyValue";

import styles from "./style";
import colors from "./../../styles/colors";
import BackButton from "../../components/BackButton";

const Issue = () => {
  const [type, setType] =useState('')
  const route = useRoute();
  const { orderId } = route.params;
  const typesIssue = [
      {label:"-- Selecione --",value: ''},
      {label:"Administrar e cancelar compra",value: 'CANC'},
      {label:"Devoluções e reembolsos",value: 'REEM'},
      {label:"Entrega",value: 'ENTR'}, 
      {label:"Nota Fiscal",value: 'NF'}, 
      {label:"Pagamento",value: 'PAG'}, 
      {label:"Produto danificado ou incorreto",value: 'PROD'}, 
      {label:"Outros",value: 'OUT'}, 
    ]

  return (
    <>
      <BackButton />
      <Title text='Fale Conosco' />
      
      <View style={styles.container}>
        <Divider color={colors.primary.main} margin={24}/>
        <TextKeyValue label='Id do pedido' value={`#${orderId}`} /> 
        <Divider color={colors.primary.main} margin={24}/>
        <ComboBox data={typesIssue} setValue={setType} value={type}/>

        <Text>Título da Reclamação</Text>
         
      </View>
    </>
  );
};

export default Issue;
