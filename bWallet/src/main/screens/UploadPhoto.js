import React from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import Styles from '../../resources/styles/Styles'

export default class SetSecurityAnswers extends React.Component{
    render(){
        return(
            <View style={Styles.container}>
                <View style={[Styles.container,{paddingBottom:50,alignItems:'center',justifyContent:'center'}]}>
                
                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity >
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}