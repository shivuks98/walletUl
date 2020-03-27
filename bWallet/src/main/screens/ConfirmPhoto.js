import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image } from 'react-native'
import Styles from '../../resources/styles/Styles'
import  ImagePicker  from 'react-native-image-picker'

export default class ConfirmPhoto extends React.Component{
    constructor(props){
        super(props)
        
    }
     
    render(){
        return(
            <View style={Styles.container}>
                <Text style={[Styles.text,{paddingLeft:20}]}>Recent Photo</Text>
                <View style={[Styles.container,{flexDirection:'row',alignItems:'center',justifyContent:'center',}]}>
                    <Image source={require('../../resources/images/fileupload.png')} />
                    <Image style={{alignItems:'baseline'}} source={require('../../resources/images/edit.png')} />
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <Text style={[Styles.text,{paddingLeft:20}]}>National ID</Text>
                <TextInput style={Styles.textInput} />
                </View>
                
                <View style={[Styles.container,{flexDirection:'row',alignItems:'center',justifyContent:'center'}]}>
                    <Image source={require('../../resources/images/fileupload.png')} />
                    <Image source={require('../../resources/images/edit.png')} />
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <Text style={[Styles.text,{paddingLeft:20}]}>Passport/DL</Text>
                <TextInput style={Styles.textInput} />
                </View>
                
                <View style={[Styles.container,{flexDirection:'row',alignItems:'center',paddingTop:0,justifyContent:'center'}]}>
                    <Image source={require('../../resources/images/fileupload.png')} />
                    <Image source={require('../../resources/images/edit.png')} />
                </View>
               
                
                <View style={Styles.Button}>
                    <TouchableOpacity >
                        <Text style={Styles.buttonText}>CONFIRM</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}