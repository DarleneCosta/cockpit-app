import { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import Title from "./../../components/Title";

import styles from "./style";
import ButtonBack from "../../components/ButtonBack";
import ButtonTemplate from "./../../components/ButtonTemplate";
import ButtonWhats from "./../../components/ButtonWhats";
import Identification from "./../../components/Identification";
import Upload from "./Upload";
import Spinner from "react-native-loading-spinner-overlay";
import ComboBox from "./ComboBox";
import InputText from "./InputText";
import { useTypesComplain } from "../../hooks/useComplain";
import utils from "../../utils";
//import { createdComplain } from "../../services/repositories/complain";

const Complain = () => {
  LayoutAnimation.linear();

  const typesComplain = useTypesComplain();
  const navigation = useNavigation();
  const route = useRoute();

  const { orderId } = route.params;
  const [titleComplain, setTitleComplain] = useState("");
  const [describeComplain, setDescribeComplain] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    handleValid();
  }, [titleComplain, type]);

  const handleValid = () => {
    const isValid = !!titleComplain && !!type;
    setDisabled(!isValid);
    return isValid;
  };

  const handlePressButton = async () => {
    const isValid = handleValid();
    if (!isValid) {
      return;
    }

    try {
      setSpinner(true);
      // const { id: complainId } = await createdComplain({
      //   orderId,
      //   titleComplain,
      //   describeComplain,
      //   type,
      //   image
      // })
      navigation.navigate("Atendimento", { complainId:utils.random()});
    } finally {
      setSpinner(false);
    }
  };

  return (
    <>
      <Spinner
        visible={spinner}
        textContent={"Aguarde..."}
        textStyle={styles.spinnerText}
      />
      <ScrollView>
        <ButtonBack />
        <Title text="Fale Conosco" />

        <View style={styles.container}>
          <Identification label="Id do pedido" valueID={orderId} />

          <Text style={styles.label}>Motivo do contato *</Text>
          <InputText
            autoFocus={true}
            onChangeText={setTitleComplain}
            value={titleComplain}
            maxLength={30}
            msgRequired="Por favor preencha"
            placeholder="Digite o motivo do contato"
          />

          <Text style={styles.label}>Tipo *</Text>
          <ComboBox
            data={typesComplain}
            setValue={setType}
            value={type}
            force={disabled}
            msgRequired="Por favor informe qual a categoria se enquandra"
          />

          <Text style={styles.label}>Descrição</Text>
          <InputText
            placeholder="Detalhe o motivo do contato"
            onChangeText={setDescribeComplain}
            value={describeComplain}
            maxLength={1000}
            multiline={true}
          />

          <Text style={styles.label}>Adicione evidências aqui</Text>
          <Upload image={image} setImage={setImage} />
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
