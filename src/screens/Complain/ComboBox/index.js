import { Picker } from "@react-native-picker/picker"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import styles from "./style"

const ComboBox = ({data, value, setValue, msgRequired = "", force=false}) => {
    const [showMsg, setShowMsg] = useState(null)    

    useEffect(() => {
        if(force) {
            handleValidation()
        }
    }, [force])

    const handleValidation= (e=value) =>{
       const isValid = !msgRequired || msgRequired && e
       setShowMsg(!isValid)
    }

    const handleOnValueChange = (e) =>{        
        setValue(e)
        handleValidation(e)
     }
    
    return (
    <>
        <View style={styles(showMsg).combo}>          
            <Picker
                selectedValue={value}
                onValueChange={handleOnValueChange}>
                    {data.map(item => (<Picker.Item label={item.label} value={item.value} key={item.value}/>))}
                </Picker>
        </View>
        {showMsg  && <Text style={styles().labelError}>{msgRequired}</Text>}
     </>)
}

export default ComboBox