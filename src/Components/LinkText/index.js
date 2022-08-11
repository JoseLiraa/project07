import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const LinkText = ({ first, second, goTo}) => {
    const navigation = useNavigation();
    return(
        <View style= {styles.buttonContainer}>           
            <View style={styles.textContainer}>
                <Text>{first}</Text> 
                    <TouchableOpacity
                    activeOpacity={0.8}                    
                    onPress={()=>navigation.replace(goTo)}>
                        <Text  style={styles.link}>{second}</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
};

export default LinkText;