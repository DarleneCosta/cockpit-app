import { Text } from "react-native"
import Divider from "../Divider"
import styles from "./style"

const Title = ({text}) => {
    return <>
        <Text style={styles.title}>{text}</Text>
        <Divider size={`60%`} />
    </>
}

export default Title