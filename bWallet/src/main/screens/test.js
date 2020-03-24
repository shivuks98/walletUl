import React from 'react'
import {Dropdown} from 'react-native-material-dropdown'
import { View,StyleSheet, Text,TextInput,ScrollView,TouchableOpacity,KeyboardAvoidingView,Image } from 'react-native'
// import styles from '../../resources/styles/Styles'

class test extends React.Component{
    render(){
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
        <View style={styles.container}>
            <KeyboardAvoidingView >
            <View style={styles.imagecontainer}>
                        <Image style={styles.image} source={require('../../resources/images/blogo.png')}/>
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.text}>Mobile Number</Text>
                    </View>
                    <View style={styles.numberView}>
                        <Dropdown  style={{width:50,padding:20}}data={data} label="987" />
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
            <View style={styles.container}>
                <View style={styles.btn1}>
                    <TouchableOpacity>
                        <Text style={styles.text}>
                            Login   
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity>
                        <Text style={styles.text}>
                            Register   
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    // style={styles.buttonText} 
    container:{
        flex:1,
        backgroundColor:'#ffff'
    },
    btn:{
        position:'absolute',
        bottom:0,
        backgroundColor:'red',
        width:'100%',
        justifyContent:'center',
        alignContent:'stretch'
        
    },
    btn1:{
        position:'absolute',
        bottom:20,
        backgroundColor:'red',
        width:'100%',
        justifyContent:'center',
        alignContent:'stretch'
        
    },
    text:{
        textAlign:'center'
    }
})


export default test