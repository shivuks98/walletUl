import React from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import Styles from '../../resources/styles/Styles'

export default class SetSecurityAnswers extends React.Component{
    render(){
        return(
            <View style={Styles.container}>
                <View style={{flex:1,alignItems:"center",paddingTop:70,padding:80}}>
                    <Text style={Styles.text}>What is the name of your first school</Text>
                    <TextInput style={[Styles.textInput,{width:'100%'}]}/>

                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SetPin')}>
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}