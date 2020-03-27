import React, { Component } from 'react'
import {Modal,Image,View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,KeyboardAvoidingView} from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'
import styles from '../../resources/styles/Styles'
// import Styles from '../../resources/styles/Styles'
// var show=true
class CustomAlert extends Component{
    render(){
        return(
            
                <View >
                    <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center',padding:15}}>
                        Please keep the below documents with you during the registration process:
                    </Text>
                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                        <Image source={require('../../resources/images/checkmark.png')}/>
                        <Text style={{paddingLeft:20,fontSize:16}}>National ID</Text>
                    </View>
                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                        <Image source={require('../../resources/images/checkmark.png')}/>
                        <Text style={{paddingLeft:20,fontSize:16}}>Passport(For Non-Bahraini)</Text>
                    </View>
                    <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                        <Image source={require('../../resources/images/checkmark.png')}/>
                        <Text style={{paddingLeft:20,fontSize:16}}>Passport or Bahraini/GCC Driving Licence (For GCC Citizens)</Text>
                    </View>
                    
                </View>
            
        )
    }

}
export default class Register1 extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:true
        }
    }

    render(){
        var data =[
            {value:987},{value:988},{value:999}]
        return(
            
            // <ScrollView style={styles.container} >
            <View style={{flex:1}}>
                <Modal transparent={true} visible={this.state.visible}>
                <View style={{flex:1,backgroundColor:'#000000aa',justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#ffff',width:'85%',height:300}}>
                        <CustomAlert/>
                        <View style={Styles.savebtn}>
                            <TouchableOpacity
                            onPress={()=>this.setState({visible:false}) }>
                                <Text style={[styles.buttonText,{color:'black'}]}> OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </Modal>
                    <KeyboardAvoidingView style={[styles.container]} >
                    
                    <View style={styles.textview}>
                        <Text style={styles.text}>Mobile Number</Text>
                    </View>
                    <View style={styles.numberView}>
                        <Dropdown  style={{width:50,padding:20}}data={data} label="987" />
                        <TextInput placeholder="Mobile Number" style={styles.textInput}/>
                    </View>
                    <View style={styles.textview}>
                    <Text style={styles.text}>Enter your Email</Text>
                    <TextInput placeholder="Email" style={styles.textInput}/>
                    </View>
                    <View style={styles.Button} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('verify')}> 
                        <Text style={[styles.buttonText]}>Next</Text>
                    </TouchableOpacity>
                    </View>       
                </KeyboardAvoidingView>
                
                </View>
                //  </ScrollView>
        )
    }
}
const Styles=StyleSheet.create({
    container:{
        // width:100,
        flex:1,
        alignItems:"center",
        backgroundColor:"#000000aa"

    },
    savebtn:{
        // backgroundColor:'red',
        alignItems:"center",
        marginHorizontal:100,
        borderRadius:10,
        borderColor:'#cddc39',
        borderWidth:2,
        height:35,
        bottom:0,
        marginVertical:20
        // padding:30
        
        
    }
})