import React, { Component } from 'react'
import { View,Text,ScrollView,KeyboardAvoidingView,TouchableOpacity,StyleSheet } from 'react-native'
import Styles from '../../resources/styles/Styles'

export default class terms extends Component{
    render(){
        return(
            <View>
                <ScrollView>
                    <Text>
                        huifshshusggsg;
                        sgsgljhgshhlgjsgsh ksjhdgjbdvhghbjshfj;vbgavhjga b a vabgjabgbgvtgbb

                        tavbtaytbvtrkjdsbfsbvbsvbksbvbsvjksbkb
                        gshgjhsjgs;gshgjhsjgssgh
                        sugsh
                        sgshghrurhw
                        ssjk;gshgjhsjgssjfsgb
                        sgjbsbk
                    </Text>
                </ScrollView>
                <View>
                    <Text style={{paddingLeft:20,paddingRight:20}}>
                        You must read and agree to the above Terms and Conditions to use 
                        the b-Wallet. 
                        By cancelling you will not be able to use any of the services of the b-Wallet
                    </Text>
                    <View style={sty.bottomContainer}>
                        <TouchableOpacity style={sty.agree}
                        onPress={()=>this.props.navigation.navigate('register1')}
                        >
                            <Text style={sty.text}>I AGREE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={sty.notagree}>
                            <Text style={sty.text}>I DO NOT AGREE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const sty=StyleSheet.create({
    bottomContainer:{
        flexDirection:'row',
        padding:30,
        justifyContent:"space-around",
    
    },
    agree:{
        backgroundColor:'gray',
        width:150,
        height:30,
        
    },
    notagree:{
        backgroundColor:'red',
        width:150
    },
    text:{
        textAlign:'center'
    }
})