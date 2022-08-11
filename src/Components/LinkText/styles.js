import { StyleSheet } from "react-native";
import { theColors } from "../../../assets/Colors";

const styles = StyleSheet.create({    
    buttonContainer:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 50,
    },   
    textContainer:{
        marginTop: 10,
        flexDirection: 'row'
    },
    link: {
        color: theColors.background,
    },
});

export default styles;