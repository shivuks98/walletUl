import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image } from 'react-native'
import Styles from '../../resources/styles/Styles'
import  ImagePicker  from 'react-native-image-picker'

export default class UploadPhoto extends React.Component{
    constructor(props){
        super(props)
        this.state={
            source:null
        }
    }
     handleCamera=()=>{
         const options={}
         ImagePicker.launchCamera(options,(response)=>{
            //  console.log(response)
             if(response.didCancel){
                 console.log('User cancelled image picker')
             }else if(response.error){
                 console.log('ImagePicker Error',response.error)
             }else{
                 const uri={uri:response.uri}
                 this.setState({
                     source:uri
                 })
             }
         })
     }
     handleGalary=()=>{
        const options={}
        ImagePicker.launchImageLibrary(options,(response)=>{
            // console.log(response)
            if(response.didCancel){66
                console.log('User cancelled image picker')
            }else if(response.error){
                console.log('ImagePicker Error',response.error)
            }else{
                const uri={uri:response.uri}
                this.setState({
                    source:uri
                })
            }
        })
    }
    render(){
        return(
            <View style={Styles.container}>
                <View style={[Styles.container,{paddingBottom:50,alignItems:'center',}]}>
                    { 
                    !this.state.source  && (<Image style={{width:130,height:110,margin:10,borderColor:'black',borderWidth:1,}} 
                source={require('../../resources/images/fileupload.png')}/>)}
                { 
                    this.state.source  && (<Image style={{width:130,height:110,margin:10,borderColor:'black',borderWidth:1,}} 
                source={this.state.source}/>)}
                {/* <Image style={{width:130,height:110,margin:10,borderColor:'black',borderWidth:1,}} 
                source={require('../../resources/images/fileupload.png')}/> */}
                <Text>Your recent photo</Text>
                <View style={{flexDirection:'row',padding:40}}>
                    <TouchableOpacity onPress={this.handleGalary}>
                    <Image style={{width:40,height:30,margin:10,}} 
                    source={require('../../resources/images/galary.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleCamera}>
                    <Image style={{width:40,height:30,margin:10,}} 
                    source={require('../../resources/images/camera.png')}/>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Nationalid')}>
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}