import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import * as ImagePicker from 'expo-image-picker';

const Upload = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.labelButton}>Enviar Imagem</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>Nenhuma Imagem Selecionada</Text>
    </View>
  );
};

export default Upload;
