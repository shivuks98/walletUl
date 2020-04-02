import React from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import Styles from '../../resources/styles/Styles'
import SnackBar from 'react-native-snackbar'

export default class SetSecurityAnswers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pin:null,
            confirm:null
        }
    }
    handleNext=()=>{
        var pin='Enter the PIN'
        var cpin='Enter the Confirm PIN'
        var compare='PIN must be same'
        var len='PIN must be 4 digit'
        var text=""
        var showSnack=true
        if(!this.state.pin){
            text=pin
        }else if(!this.state.confirm){
            text=cpin
        }else if(this.state.pin.lengh<4 || this.state.confirm.length<4){
            text=len
        }
        else if(this.state.pin!=this.state.confirm){
            text=compare
        }else{
            this.props.navigation.navigate('UploadPhoto')
            showSnack=false
        }
        if(showSnack){
           SnackBar.show({
               text:text,
               duration:SnackBar.LENGTH_LONG,
               action:{
                   text:'OK',
                   textColor:'red'
               }
           }) 
        }
    }
    render(){
        return(
            <View style={Styles.container}>
                <View style={[Styles.container,{paddingBottom:50,alignItems:'center',justifyContent:'center'}]}>
                {/* <View style={{flex:1,alignItems:"flex-start",paddingTop:70,padding:80,alignContent:'center'}}> */}
                    <Text style={Styles.text}>New PIN</Text>
                    <TextInput secureTextEntry={true} onChangeText={(pin)=>this.setState({pin:pin})} keyboardType='numeric' maxLength={4}
                    placeholder="****" style={[Styles.textInput,{width:'30%',textAlign:'center'}]}/>
                    <Text style={Styles.text}>Confirm PIN</Text>
                    <TextInput secureTextEntry={true} onChangeText={(cpin)=>this.setState({confirm:cpin})} keyboardType='numeric' maxLength={4}
                    placeholder="****" style={[Styles.textInput,{width:'30%',textAlign:'center'}]}/>
                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity  
                    onPress={this.handleNext}>
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}