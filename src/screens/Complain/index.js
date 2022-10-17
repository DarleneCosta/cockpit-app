import { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  useRoute,
  useNavigation,
  LayoutAnimation,
} from "@react-navigation/native";

import ComboBox from "../../components/ComboBox";
import Divider from "./../../components/Divider";
import Title from "./../../components/Title";
import TextKeyValue from "./../../components/TextKeyValue";

import styles from "./style";
import colors from "./../../styles/colors";
import ButtonBack from "../../components/ButtonBack";
import ButtonTemplate from "./../../components/ButtonTemplate";
import ButtonWhats from "./../../components/ButtonWhats";
import Identification from "./../../components/Identification";
import Upload from "./Upload";
import Spinner from "react-native-loading-spinner-overlay";

const Complain = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { orderId } = route.params;
  const { spinner, setSpinner } = useState(false);
  const [titleComplain, setTitleComplain] = useState("");
  const [describeComplain, setDescribeComplain] = useState("");
  const [type, setType] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [warnings, setWarnings] = useState([
    {
      id: "titleComplain",
      show: false,
    },
    {
      id: "type",
      show: false,
    },
  ]);

  const setInfoMandatory = (id, value) => {
    const selected = mandatory.find((i) => i.id === id);
    selected.show = value;
    setMandatory([...mandatory, selected]);
  };

  const getInfoMandatory = (id) => {
    const selected = mandatory.find((i) => i.id === id);
    return selected.show;
  };

  useEffect(() => {
    setInfoMandatory("titleComplain", titleComplain?.length < 5);
    setInfoMandatory("type", !type);
    setDisabled(mandatory.find((i) => i.show));
  }, [titleComplain, type]);

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
    setInterval(() => {
      setSpinner(true);
    }, 2000);
    navigation.navigate("Atendimento", { complainId: "1012154548" });
  };

  LayoutAnimation.linear();
  return (
    <>
      <Spinner
        visible={spinner}
        textContent={"Aguarde..."}
        extStyle={styles.spinnerText}
      />
      <ScrollView>
        <ButtonBack />
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
          {getInfoMandatory("titleComplain") && (
            <Text>Por favor preencha este campo (min 5 caracteres)</Text>
          )}

          <Text style={styles.label}>Tipo *</Text>
          <ComboBox data={typesComplain} setValue={setType} value={type} />
          {getInfoMandatory("type") && (
            <Text>Por favor selecione o motivo</Text>
          )}

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setDescribeComplain}
            value={describeComplain}
            maxLength={500}
            multiline
          />

          <Text style={styles.label}>Adicione evidências aqui</Text>
          <Upload />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePressButton}
          disabled={disabled}
        >
          <ButtonTemplate label={"Enviar Mensagem"} disabled={disabled} />
        </TouchableOpacity>
      </ScrollView>
      <ButtonWhats orderId={orderId} />
    </>
  );
};

export default Complain;
