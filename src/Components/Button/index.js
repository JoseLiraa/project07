import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Button = ({buttonTitle, action, customStyleButton, customStyleText, icon}) => {
    const navigation = useNavigation();

    return(
        <View style= {styles.buttonContainer}>
            <TouchableOpacity
                style= {[styles.button,customStyleButton]}
                activeOpacity={0.8} 
                onPress={action}>
                {icon}
                <Text style = {[styles.textButton, customStyleText]}>{buttonTitle}</Text>
            </TouchableOpacity>                    
        </View>
    )
};

export default Button;