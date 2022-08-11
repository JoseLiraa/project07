import { StyleSheet } from "react-native";
import { theColors } from "../../../assets/Colors";

const styles = StyleSheet.create({    
    buttonContainer:{
        width: '80%',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 5,
    },
    button:{
        backgroundColor: theColors.background,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',      
    },
    textButton:{
        color: theColors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default styles;