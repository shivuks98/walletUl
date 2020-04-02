import React, { Component } from 'react';
import {  Text, View,Modal,KeyboardAvoidingView,TextInput,ScrollView } from 'react-native';
// import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import CountryPicker,{CountryModalPicker} from 'react-native-country-picker-modal'


export default class l extends Component{
render(){
  return(
   <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset='-550'
   style={{flexGrow:1,flexDirection:'column',backgroundColor:'',}}>
     <ScrollView style={{flex:1,backgroundColor:'blue'}}>
       <View style={{}}>
        <TextInput placeholder="jjjjj"/>
       </View>
     <View>
       <Text>hiii</Text>
     </View>
     </ScrollView>
     <Text>hi</Text>
     {/* <Text>hii</Text> */}
   </KeyboardAvoidingView> 
  )
}
}