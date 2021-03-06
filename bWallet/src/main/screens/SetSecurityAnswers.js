import React from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import Styles from '../../resources/styles/Styles'
import SncakBar from 'react-native-snackbar'

export default class SetSecurityAnswers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            securityAnswer:null
        }
    }
    handleNext=()=>{
        if(!this.state.securityAnswer){
            SncakBar.show({
                text:'Enter the security answer',
                duration:SncakBar.LENGTH_LONG,
                action:{
                    text:"OK",
                    textColor:'red'
                }
            })
        }
        else this.props.navigation.navigate('SetPin')

    }
    render(){
        return(
            <View style={Styles.container}>
                <View style={{flex:1,alignItems:"center",paddingTop:70,padding:80}}>
                    <Text style={Styles.text}>What is the name of your first school</Text>
                    <TextInput style={[Styles.textInput,{width:'100%'}]}
                    onChangeText={(answer)=>this.setState({securityAnswer:answer})}/>

                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity onPress={this.handleNext}>
                    {/* onPress={()=>this.props.navigation.navigate('SetPin')}> */}
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}