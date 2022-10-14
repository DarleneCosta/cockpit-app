import { Text, View } from "react-native";
import Title from "./../../components/Title";
import Divider from "./../../components/Divider";
import colors from "./../../styles/colors";
import TextKeyValue from "./../../components/TextKeyValue";

const Issue = () => {
  return (
    <>
      <Title text="Fale Conosco" />;
      <Divider colors={colors.primary.main} />
      <TextKeyValue label="Id do pedido" text="#01231546" />
      <Divider colors={colors.primary.main} />
      <View style={styles.formContainer}></View>
    </>
  );
};

export default Issue;
