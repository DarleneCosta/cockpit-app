import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import Divider from "../../../components/Divider";
import colors from "../../../styles/colors";

const Upload = () => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,    
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
    <View style={styles.container}>
      <TouchableOpacity  onPress={pickImage}>
        <View style={styles.button}>
          <Text style={styles.labelButton}>Enviar Imagem</Text>
        </View>
      </TouchableOpacity>
      {!image ? <Text style={styles.label}>Nenhuma Imagem Selecionada</Text> : <Image source={{ uri: image }} style={styles.image} /> } 
    </View>
   
    </>
  );
};

export default Upload;
