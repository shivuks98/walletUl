import React from 'react'
import {Dropdown} from 'react-native-material-dropdown'
import { View,StyleSheet,ActivityIndicator,Text,TextInput,ScrollView,TouchableOpacity,KeyboardAvoidingView,Image } from 'react-native'
// import styles from '../../resources/styles/Styles'

class test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("l")}>
                    <Text>
                        click
                    </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
    
}
export default test