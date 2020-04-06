import React, { Component } from 'react';
import {  Text, View,Modal,TouchableOpacity,KeyboardAvoidingView,TextInput,ScrollView, AsyncStorage } from 'react-native';
// import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import CountryPicker,{CountryModalPicker} from 'react-native-country-picker-modal'

// var d=60
export default class l extends Component{
  constructor(props){
    super(props)
    // this.state={timer:5}
  }
  
render(){
  return(
    
      <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'red'}}>
          <Text>hii</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('abcd')} >
              <Text>
                hi
              </Text>
          </TouchableOpacity>
      </View>
  )
}
}