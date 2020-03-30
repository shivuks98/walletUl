import React from 'react'
import {View, Image,Text,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView } from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'
import styles from '../../resources/styles/Styles'
export default class Login extends React.Component{
    
    render()
    
    {
        var data =[{
            value:987
        },
        {value:988
        },
        {
            value:999
        }
    ]
        return(
               <View style={styles.container} >
                    <KeyboardAvoidingView style={styles.container} >
                    <View style={styles.imagecontainer}>
                        <Image style={styles.image} source={require('../../resources/images/blogo.png')}/>
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.text}>Mobile Number</Text>
                    </View>
                    <View style={styles.numberView}>
                        <Dropdown  style={{width:50,padding:20}}data={data} label='978' />
                        <TextInput placeholder="Mobile Number" style={styles.textInput}/>
                    </View>
                    
                    <View style={styles.textview}>
                        <Text style={styles.text}>PIN</Text>
                        <TextInput placeholder="......" style={styles.textInput}/>
                    </View>
                    <TouchableOpacity > 
                        <Text style={{color:'red',paddingLeft:40,paddingBottom:20}}>Forgot PIN?</Text>
                    </TouchableOpacity>
                    </KeyboardAvoidingView>
                    <View style={{flex:1}}>
                            <View style={[styles.Button,{bottom:50}]}>
                                <TouchableOpacity > 
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.Button,{backgroundColor:'gray'}]}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('terms')}> 
                                    <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>
                            </View>
                    </View>         
               
                    </View>
            
        )
    }
}