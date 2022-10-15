import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import BackButton from "./../../components/BackButton";
import Title from "./../../components/Title";
import Identification from "./../../components/Identification";
import styles from "./style";

const Chat = () => {
  const route = useRoute();
  const { complainId } = route.params;
  return (
    <>
      <BackButton />
      <Title text={"Chat com Atendente"} />
      <View style={styles.container}>
        <Identification label="Protocolo" valueID={complainId} />
        <Text>Olá, tudo bem?</Text>
        <ScrollView style={styles.chat}>
          <Text>Olá, tudo Bbem?</Text>
        </ScrollView>
      </View>
    </>
  );
};

export default Chat;
