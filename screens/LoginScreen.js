import React from 'react';
import {View, Text, TextInput,Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class LoginScreen extends React.Component{
    render (){
        return(
           
         <KeyboardAvoidingView >
             <View>
                 <Image source={require("../assets/booklogo.jpg")} />
                <Text>Wily</Text>
             </View>
             <View>
                 <TextInput
                 placeholder= "abc@example.com"
                 />
             </View>
         </KeyboardAvoidingView>
        )
    }
}