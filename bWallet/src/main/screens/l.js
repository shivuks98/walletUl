import React, { Component } from 'react';
import { AppRegistry, Text, View,Modal } from 'react-native';
// import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import CountryPicker,{CountryModalPicker} from 'react-native-country-picker-modal'


export default class l extends Component{
render(){
  return(
   <View>
     {/* <CountryModalPicker> */}
     <Modal>
       <View style={{backgroundColor:"#000000aa",flex:1}}>
         <View style={{backgroundColor:"#ffff",margin:40,flex:1}}>
      <CountryPicker  withFlag={false} withFilter={true} onSelect={(country)=>{
        
      }}/>
      </View>
     </View>
     </Modal>
       
     {/* </CountryModalPicker> */}
   </View> 
  )
}
}