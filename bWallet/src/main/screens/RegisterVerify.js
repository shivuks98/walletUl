import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image } from 'react-native'
import styles from '../../resources/styles/Styles'

class RegisterVerify extends React.Component{
    render(){
        return(
            <View style={[styles.container,{paddingTop:30}]}>
                <View style={{paddingLeft:40}}>
                <Text style={styles.text}>A Verification code has been sent to your registered mobile number</Text>
                </View>
                <View style={[styles.container,{paddingLeft:70,paddingRight:70}]}>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>
                    Please enter it below</Text>
                    <TextInput requied={true} placeholder="XXXXXX" style={styles.textInput}/>
                    <Text style={styles.text}>Did not get the code?</Text>
                    <View>
                        <TouchableOpacity>
                            <Text style={[styles.text,{color:'red',textAlign:'right'}]}>
                                Click to resend OTP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Button}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('registerForm')}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default RegisterVerify