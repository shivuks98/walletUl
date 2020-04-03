import React, { Component } from 'react';
import {  Text, View,Modal,TouchableOpacity,KeyboardAvoidingView,TextInput,ScrollView, AsyncStorage } from 'react-native';
// import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import CountryPicker,{CountryModalPicker} from 'react-native-country-picker-modal'

var d=60
export default class l extends Component{
  constructor(props){
    super(props)
    this.state={timer:5}
  }
  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }
  componentDidUpdate(){
    if(this.state.timer==0){
      clearInterval(this.interval)
    }
  }
render(){
  return(
    
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text>hii</Text>
          <TouchableOpacity onPress={this.save}>
              <Text>
                  {this.state.timer}
              </Text>
          </TouchableOpacity>
      </View>
  )
}
save=async()=>{
  try{
  let name=await AsyncStorage.getItem('name')
  alert(name)
  }catch(e){
    alert(e)
  }
  // this.props.navigation.navigate('l')
}
  

}