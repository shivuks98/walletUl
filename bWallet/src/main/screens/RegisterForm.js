import React from 'react'
import { View,Text,TextInput,TouchableOpacity,DatePickerAndroid, Image } from 'react-native'
import styles from '../../resources/styles/Styles'

class RegisterForm extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.container,{paddingLeft:20,paddingRight:20}]}>
                    <Text style={styles.text}>First Name</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.text}>Last Name</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.text}>Date of Birth</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.text}>Gender</Text>
                    <Text style={styles.text}>Nationality</Text>
                    <TextInput style={styles.textInput}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.text}>Add Address</Text>
                    <TouchableOpacity>
                    <Image style={{flexShrink:2}}source={require('../../resources/images/add.png')}/>
                    </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.Button }>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default RegisterForm