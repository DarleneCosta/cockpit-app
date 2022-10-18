import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

const ModalConfirmation = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {renderButton("Close", () => this.setState({ visibleModal: null }))}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderButton("Bottom half modal", () => setVisibleModal(true))}
      <Modal isVisible={visibleModal} style={styles.bottomModal}>
        {renderModalContent()}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
