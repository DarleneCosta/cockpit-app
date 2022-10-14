import { Picker } from "@react-native-picker/picker"
import { View } from "react-native"

import styles from "./style"

const ComboBox = ({data, value, setValue}) => {

    return (
    <View style={styles.combo}>          
       <Picker
        selectedValue={value}
        onValueChange={(e)=>setValue(e)}>
            {data.map(item => (<Picker.Item label={item.label} value={item.value} key={item.value}/>))}
        </Picker>
    </View>)
}

export default ComboBox