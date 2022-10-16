import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import BackButton from "./../../components/BackButton";
import Title from "./../../components/Title";
import Identification from "./../../components/Identification";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";
import { useState, useCallback, useEffect } from "react";

const Chat = () => {
  const route = useRoute();
  const { complainId } = route.params;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Olá! Em que posso ser útil?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Atendente",
          avatar:
            "https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146",
        },
        isTyping: true,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props} containerStyle={styles.send}>
        <MaterialIcons name="send" size={30} color="white" />
      </Send>
    );
  };

  const renderBubble = (props) => {
    return <Bubble {...props} containerStyle={styles.message} />;
  };

  return (
    <>
      <BackButton />
      <Title text={"Chat com Atendente"} />
      <View style={styles.container}>
        <Identification label="Protocolo" valueID={complainId} />
      </View>

      <GiftedChat
        containerStyle={styles.chat}
        placeholder={"Envie sua mensagem aqui..."}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        renderBubble={renderBubble}
        renderSend={renderSend}
        user={{
          _id: 1,
        }}
      />
    </>
  );
};

export default Chat;
