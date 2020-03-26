import React, { Component } from 'react'
import {Image,View,Text,TextInput,StyleSheet,TouchbleOpacity,KeyboardAvoidingView,ScrollView } from 'react-native'
import styles from './../../resources/styles/Styles'
import CountryPicker from 'react-native-country-picker-modal'

// import { CountryDropdown} from 'react-country-region-selector'
export default class addAddress extends Component{
    render(){
        return(
            <ScrollView>
            <KeyboardAvoidingView style={styles.container}>
                <View style={{padding:20,paddingTop:0}}>
                    <View style={{alignItems:'center'}}>
                    <Image source={require('../../resources/images/home.png')}/>
                    </View>
                    <Text style={styles.text}>Building/ House NO</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.text}>Flat No</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.text}>Road/Street Name</Text>
                    <TextInput style={styles.textInput}/>
                    <Text> </Text>
                    <View style={[styles.numberView,{justifyContent:'space-between',paddingRight:20}]}>
                        <TextInput style={[styles.textInput,{width:"45%"}]} placeholder="Area"/>
                        <TextInput style={[styles.textInput,{width:'45%'}]} placeholder="Block"/> 
                    </View>
                    
                    <Text style={styles.text}>Country</Text>
                    <CountryPicker  visible={false} />
                    <TextInput onAccessibilityAction={CountryPicker} style={styles.textInput}>
                    
                    </TextInput>

                </View>
            </KeyboardAvoidingView>
            </ScrollView>
            
        )
    }
}
// const styles=StyleSheet.create({
    
// })