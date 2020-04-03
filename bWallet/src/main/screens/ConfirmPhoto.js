import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image,StyleSheet,AsyncStorage,KeyboardAvoidingView } from 'react-native'
import Styles from '../../resources/styles/Styles'
// import  ImagePicker  from 'react-native-image-picker'

export default class ConfirmPhoto extends React.Component{
    constructor(props){
        super(props)
        this.state={
            photo:null
        }
    }
//     componentDidMount=async()=>{
// // alert('hi')
//         try {
//             let uri=await AsyncStorage.getItem('userphoto')
//             this.setState({
//                 photo:JSON.parse(uri)
//             })
//             console.log(this.state.photo)
//         } catch (error) {
            
//         }
//     }
     
    render(){
        return(
            <View style={Styles.container}>
                <Text style={[Styles.text,{paddingLeft:20}]}>Recent Photo</Text>
                <View style={design.imageview}>
                        <View style={{justifyContent:'center',flexDirection:'row',borderWidth:1,borderRadius:10,height:90,width:100}}>
                        <Image style={{width:"100%",height:"100%",borderRadius:10}} 
                        // source={this.state.photo}/>
                        source={require('../../resources/images/fileupload.png')} />
                        {/* <Image style={{width:50,height:90}} source={require('../../resources/images/fileupload.png')} /> */}
                    </View>
                    {/* <Image style={Styles.photo} source={require('../../resources/images/fileupload.png')} /> */}
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('UploadPhoto')}>
                        <Image style={{}} source={require('../../resources/images/edit.png')} />
                    </TouchableOpacity>
                </View>
                <View style={design.content}>
                <Text style={[Styles.text,{paddingLeft:20}]}>National ID</Text>
                <Text style={[Styles.textInput,Styles.text,{width:'50%',margin:10}]} />
                </View>
                
                <View style={design.imageview}>
                    <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,margin:1,height:90,width:100}}>
                        <Image style={{width:50,height:90}} source={require('../../resources/images/fileupload.png')} />
                        <Image style={{width:50,height:90}} source={require('../../resources/images/fileupload.png')} />
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Nationalid')}>
                        <Image style={{}} source={require('../../resources/images/edit.png')} />
                    </TouchableOpacity>
                </View>
                <View style={design.content}>
                <Text style={[Styles.text,{paddingLeft:20}]}>Passport/DL</Text>
                <Text style={[Styles.textInput,Styles.text,{width:'50%',margin:10}]} />
                </View>
                
                <View style={design.imageview}>
                    <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,margin:1,height:90,width:100}}>
                        <Image style={{width:50,height:90}} source={require('../../resources/images/fileupload.png')} />
                        <Image style={{width:50,height:90}} source={require('../../resources/images/fileupload.png')} />
                    </View>
                    {/* <Image style={Styles.photo} source={require('../../resources/images/fileupload.png')} /> */}
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
        justifyContent:'center',
       
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'}
})