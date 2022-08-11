import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import styles from "./styles";
import { theColors } from "../../../../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import Title from '../../../../Components/Title';
import Button from "../../../../Components/Button";
import LinkText from '../../../../Components/LinkText';
import Input from "../../../../Components/Input";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import auth from '@react-native-firebase/auth';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';

/*GoogleSignin.configure({
    webClientId: '635632141605-2q38c5hr53641kequbu30v2arf4s6054.apps.googleusercontent.com',
});*/

const Form = ({titleForm, buttonTitle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    /*useEffect(() =>{
        const unsubscribe = auth().onAuthStateChanged(user =>{
            if(user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])*/

    const handleLogin = () => {
        navigation.replace("Home")
    }

    /*async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email);
        });
    }*/

    return(
        <View 
        style = {styles.container}>
            <Title title={titleForm}/>       
                <Input 
                placeholder='Enter email' 
                value = { email } 
                onChangeText={setEmail}      
                icon=  {<Ionicons name="mail" size={24} color={theColors.gray}/>}          
                />
                <Input 
                secureTextEntry
                placeholder='Enter password' 
                value = { password } 
                onChangeText={setPassword}   
                icon=  {<FontAwesome name="lock" size={24} color={theColors.gray}/>}             
                />
            <View style = {styles.buttonContainer}>
                <Button 
                    buttonTitle={buttonTitle}        
                    action={handleLogin} 
                    />            
                <Button 
                customStyleButton= {styles.customBack}
                customStyleText= {styles.customText}
                buttonTitle={'Google'}        
                action={''} 
                icon=  {<FontAwesome name="google" size={24} color={theColors.background}/>}
                />
            </View >    

            <LinkText
            first='Don’t have an account?' 
            second=' Sign up here'
            goTo='Register'
            />
        </View>  
    )
}
export default Form;