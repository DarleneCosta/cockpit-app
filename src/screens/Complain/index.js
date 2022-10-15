import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import ComboBox from "../../components/ComboBox";
import Divider from "./../../components/Divider";
import Title from "./../../components/Title";
import TextKeyValue from "./../../components/TextKeyValue";

import styles from "./style";
import colors from "./../../styles/colors";
import BackButton from "../../components/BackButton";
import ButtonTemplate from "./../../components/ButtonTemplate/index";
import Upload from "./Upload/index";
import Identification from "./../../components/Identification/index";

const Complain = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { orderId } = route.params;

  const [titleComplain, setTitleComplain] = useState("");
  const [describeComplain, setDescribeComplain] = useState("");
  const [type, setType] = useState("");

  const typesComplain = [
    { label: "-- Selecione --", value: "" },
    { label: "Administrar e cancelar compra", value: "CANC" },
    { label: "Devoluções e reembolsos", value: "REEM" },
    { label: "Entrega", value: "ENTR" },
    { label: "Nota Fiscal", value: "NF" },
    { label: "Pagamento", value: "PAG" },
    { label: "Produto danificado ou incorreto", value: "PROD" },
    { label: "Outros", value: "OUT" },
  ];

  const handlePressButton = () => {
    navigation.navigate("Atendimento", { complainId: "1012154548" });
  };

  return (
    <ScrollView>
      <BackButton />
      <Title text="Fale Conosco" />

      <View style={styles.container}>
        <Identification label="Id do pedido" valueID={orderId} />

        <Text style={styles.label}>Motivo do contato *</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTitleComplain}
          value={titleComplain}
          maxLength={30}
        />

        <Text style={styles.label}>Tipo *</Text>
        <ComboBox data={typesComplain} setValue={setType} value={type} />

        <Text style={styles.label}>Descrição *</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={setDescribeComplain}
          value={describeComplain}
          maxLength={500}
          multiline
        />

        <Text style={styles.label}>Adicione evidências aqui *</Text>
        <Upload />

        <TouchableOpacity style={styles.button} onPress={handlePressButton}>
          <ButtonTemplate label={"Enviar Mensagem"} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Complain;
