import React from 'react'
import {Dropdown} from 'react-native-material-dropdown'
import { View,StyleSheet,ActivityIndicator,AsyncStorage, Text,TextInput,ScrollView,TouchableOpacity,KeyboardAvoidingView,Image } from 'react-native'
// import styles from '../../resources/styles/Styles'

class test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <ActivityIndicator /> 
                <Text>hii</Text>
                <TouchableOpacity onPress={this.save}>
                    <Text>
                        click to save
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.show}>
                    <Text>
                        click to show
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    save=()=>{
        let user={
            name:'shivu',
            email:'abcd'
        }
        AsyncStorage.setItem('name',JSON.stringify(user))
        this.props.navigation.navigate('l')
        // this.props.navigation.navigate('l')
    }
    show=async ()=>{
        try{
            let name=await AsyncStorage.getItem('name')
            alert(name)
        }
        catch(e){alert(e)}
    }
}
export default test