import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native";
import styles from "./style";

const InputText = ({ value, onChangeText, maxLength=30,  msgRequired='', autoFocus=false, multiline=false, placeholder="" }) => {
    const [showMsg, setShowMsg] = useState(false)    
    const [focus, setFocus] = useState(false)
    
    const handleRequired = () =>{
        setFocus(false)
       const required = msgRequired && !value
       setShowMsg(required)
    }

    const handleOnFocus =() =>{ 
        setFocus(true)    
        setShowMsg(false)
      }

  return (
    <>
        <TextInput
            style={styles(showMsg, focus).input}
            onChangeText={onChangeText}
            value={value}
            maxLength={maxLength}
            multiline={multiline}
            placeholder={placeholder}
            autoFocus={autoFocus}
            onBlur={handleRequired}
            onFocus = {handleOnFocus}
        />
        {showMsg && <Text  style={styles().labelError}>{msgRequired}</Text>}
  </>

  );
};

export default InputText;
