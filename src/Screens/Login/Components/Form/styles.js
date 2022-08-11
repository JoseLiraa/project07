import { StyleSheet } from "react-native";
import { theColors } from "../../../../../assets/Colors";

const styles = StyleSheet.create({
    container:{     
        flex: 1,
        alignItems: 'center',
    },    
    input:{
        width: '80%',
        padding: 12,       
    },    
    buttonContainer: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:10,
        marginTop: 10,
    },
    customBack:{
        backgroundColor: theColors.white,
        borderWidth: 2,
        borderColor: theColors.background,        
    },
    customText:{
        color: theColors.background,
    }
});

export default styles;