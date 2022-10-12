import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 

    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 5
    },
    key: {
        textTransform:'uppercase',
        fontWeight: 'bold',       
    },
    value: {
        textAlign: 'center',
        textTransform:'uppercase',        
      
    },
});

export default styles;
