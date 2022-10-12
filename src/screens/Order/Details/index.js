import { Image, Text, View } from "react-native"
import Divider from "../../../components/Divider"
import Subtitle from "../../../components/Subtitle"
import colors from "../../../styles/colors"
import utils from "../../../utils"
import styles from "./style"

const Details = ({items}) => {
    
    const renderItem = (item)=> {
        const fullSpecification = (specification) =>  `${utils.formatMetric(specification.size)} / ${specification.color} / ${utils.formatMetric(specification.weight)}`
        return (  
            <View style={styles.container} key={item.id}>
                <Image
                    style={styles.image}
                    source={{uri: item.imageUrl}}
                />
                 <View style={styles.wrapperDetails}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.specification}>{fullSpecification(item.specification)}</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.qtd}>QTD.: {item.qtd}x</Text>
                        <Text style={styles.qtd}>{utils.formatMoney(item.unitaryValue)}</Text>
                    </View>
                    <Divider color={colors.primary.main} bold={1} size={'85%'} alignItems='flex-start'/>
                    <View style={styles.wrapper}><Text style={styles.amount}>TOTAL:</Text><Text style={styles.amount}>{utils.formatMoney(item.amount)}</Text></View>   
                </View>
            </View>
        )
    }

    return <>
        <Subtitle text="DETALHES DA COMPRA" />
        <View style={{width: '98%'}}>
            {items.map(item => renderItem(item))}
        </View>

    </>
}

export default Details