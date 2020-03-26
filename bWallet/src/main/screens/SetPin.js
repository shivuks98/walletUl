import React from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import Styles from '../../resources/styles/Styles'

export default class SetSecurityAnswers extends React.Component{
    render(){
        return(
            <View style={Styles.container}>
                <View style={[Styles.container,{paddingBottom:50,alignItems:'center',justifyContent:'center'}]}>
                {/* <View style={{flex:1,alignItems:"flex-start",paddingTop:70,padding:80,alignContent:'center'}}> */}
                    <Text style={Styles.text}>New PIN</Text>
                    <TextInput placeholder="****" style={[Styles.textInput,{width:'30%',textAlign:'center'}]}/>
                    <Text style={Styles.text}>Confirm PIN</Text>
                    <TextInput placeholder="****" style={[Styles.textInput,{width:'30%',textAlign:'center'}]}/>
                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('UploadPhoto')}>
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}