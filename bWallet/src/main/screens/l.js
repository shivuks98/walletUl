import React from 'react'
import {View, Image,Text,Modal,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView } from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'
import styles from '../../resources/styles/Styles'
import CountryPicker from 'react-native-country-picker-modal'

export default class Login extends React.Component{
    render(){
        return(
            <View>
                <CountryPicker withFilter/>
            </View>
        )
    }
}