import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Divider from "../../../components/Divider";
import colors from "../../../styles/colors";

const Upload = ({ image, setImage }) => {
  const pickImage = async () => {
    if (!image) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } else {
      setImage(null);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.button}>
            <Text style={styles.labelButton}>
              {!image ? "Enviar Imagem" : "Remover Imagem"}
            </Text>
          </View>
        </TouchableOpacity>
        {!image ? (
          <Text style={styles.label}>Nenhuma Imagem Selecionada</Text>
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </View>
    </>
  );
};

export default Upload;
