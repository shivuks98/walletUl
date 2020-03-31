import React from 'react'
import {View, Image,Text,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView } from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'
import ModalDropdown from 'react-native-modal-dropdown'

import styles from '../../resources/styles/Styles'

var data =[
    {value:973},{value:965},{value:968},{value:974},{value:966},{value:971}]

// data=[]
export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:989,
            mobileNo:null,
            pin:null
        }
    }
    
    render()
    
    {
        return(
               <KeyboardAvoidingView style={styles.container} >
                    <KeyboardAvoidingView style={styles.container} >
                    <View style={styles.imagecontainer}>
                        <Image style={styles.image} source={require('../../resources/images/blogo.png')}/>
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.text}>Mobile Number</Text>
                    </View>
                    <View style={[styles.numberView,{justifyContent:'space-between'}]}>
                        <View style={{width:70,paddingRight:10}}>
                            <Dropdown data={data} value={this.state.value} fontSize={18}
                            onChangeText={(value)=>this.setState({value:value})}/>
                        </View>
                        <TextInput maxLength={9} keyboardType='phone-pad'  placeholder="Mobile Number" 
                        style={[styles.textInput,{width:'90%',fontSize:20,fontWeight:'bold'}]}
                        onChangeText={(number)=>{this.setState({mobileNo:number})
                        }}/>
                    </View>
                    
                    
                    <View style={styles.textview}>
                    {!this.state.mobileNo && (
                    <Text style={styles.error}>Please Enter a Valid Mobile Number</Text>)}
                        <Text style={styles.text}>PIN</Text>
                        <TextInput maxLength={4} secureTextEntry keyboardType='numeric' 
                        onChangeText={(pin)=>{this.setState({pin:pin})}}
                        placeholder="****" style={[styles.textInput,{fontSize:20,fontWeight:'bold'}]}/>
                        
                        {this.state.mobileNo && !this.state.pin && (
                        <Text style={styles.error}>Please Enter PIN</Text>)}
                    
                    </View>

                    <TouchableOpacity > 
                        <Text style={{color:'red',paddingLeft:50,paddingTop:10}}>Forgot PIN?</Text>
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
               
                    </KeyboardAvoidingView>
            
        )
    }
}