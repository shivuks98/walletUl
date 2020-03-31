import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image,StyleSheet,KeyboardAvoidingView } from 'react-native'
import Styles from '../../resources/styles/Styles'
// import  ImagePicker  from 'react-native-image-picker'

export default class ConfirmPhoto extends React.Component{
    constructor(props){
        super(props)
        
    }
     
    render(){
        return(
            <View style={Styles.container}>
                <Text style={[Styles.text,{paddingLeft:20}]}>Recent Photo</Text>
                <View style={design.imageview}>
                    <Image style={Styles.photo} source={require('../../resources/images/fileupload.png')} />
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('UploadPhoto')}>
                        <Image style={{alignItems:'baseline'}} source={require('../../resources/images/edit.png')} />
                    </TouchableOpacity>
                </View>
                <View style={design.content}>
                <Text style={[Styles.text,{paddingLeft:20}]}>National ID</Text>
                <TextInput style={[Styles.textInput,{width:'50%'}]} />
                </View>
                
                <View style={design.imageview}>
                    <Image style={Styles.photo} source={require('../../resources/images/fileupload.png')} />
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Nationalid')}>
                        <Image source={require('../../resources/images/edit.png')} />
                    </TouchableOpacity>
                </View>
                <View style={design.content}>
                <Text style={[Styles.text,{paddingLeft:20}]}>Passport/DL</Text>
                <TextInput style={[Styles.textInput,{width:'50%'}]} />
                </View>
                
                <View style={design.imageview}>
                    <Image style={Styles.photo} source={require('../../resources/images/fileupload.png')} />
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Document')}>
                        <Image source={require('../../resources/images/edit.png')} />
                    </TouchableOpacity>
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
const design=StyleSheet.create({
    imageview:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'}
})