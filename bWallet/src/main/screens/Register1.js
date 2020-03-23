import React, { Component } from 'react'
import {View,Text,TextInput,TouchableOpacity, Alert,ScrollView,KeyboardAvoidingView} from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'
import styles from '../../resources/styles/Styles'

export default class Register1 extends Component{
    componentDidMount(){
        Alert.alert(
            'Please keep the below documents with you during the resitration process:',
   
            "\tNational ID\n\tPassport(For Non-Bahraini)\n\tPassport or Bahraini/GCC Driving \n\tLicence(For GCC Citizens)",
            // 'passport',
  [
    
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
        )
    }
    render(){
        var data =[{
            value:987
        },
        {value:988
        },
        {
            value:999
        }]
        return(
            <ScrollView style={styles.container} >
                    <KeyboardAvoidingView style={styles.container} >
                    
                    <View style={styles.textview}>
                        <Text style={styles.text}>Mobile Number</Text>
                    </View>
                    <View style={styles.numberView}>
                        <Dropdown  data={data} label="987" />
                        <TextInput placeholder="Mobile Number" style={styles.textInput}/>
                    </View>
                    <View style={styles.textview}>
                    <Text style={styles.text}>Enter your Email</Text>
                    <TextInput placeholder="Email" style={styles.textInput}/>
                    </View>
                    <View style={styles.loginButton}>
                    <TouchableOpacity > 
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                    </View>
                    
                   
                                
                </KeyboardAvoidingView>
                </ScrollView>
        )
    }
}