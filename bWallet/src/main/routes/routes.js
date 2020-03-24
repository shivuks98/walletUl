import React from 'react'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View,TouchableOpacity,Text,TextInput,Image,Button} from 'react-native'
import Buttons from '../../resources/Button/CallButton'
import Login from '../screens/Login'

import terms from '../screens/terms'
import Register1 from '../screens/Register1'
import Test from '../screens/l'
import Test2 from '../screens/test'
import Register2 from '../screens/RegisterVerify'
import RegisterForm from '../screens/RegisterForm'

const Stack=createStackNavigator();

export default class routes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            // <Text>hii</Text>
            <NavigationContainer >
                <Stack.Navigator 
                screenOptions={{
                    headerStyle:{backgroundColor:'#424241'},
                    headerTintColor:'white',
                    headerRight:()=><Image style={{height:30,width:100,}}
                source={require('../../resources/images/bWallet2.png')}/>}}>
                    {/* <Stack.Screen name='test' component={Test2}/> */}
                    
                    {/* <Stack.Screen name='testHome' component={Test}/> */}
                    <Stack.Screen name='Home' component={Login}/>
                    <Stack.Screen name='terms' component={terms} options={{title:'Terms and Conditions'}}/>
                    <Stack.Screen name='register1' component={Register1} options={{title:'Registration'}}/>
                    <Stack.Screen name='verify' component={Register2} options={{title:'Registration'}}/>
                    <Stack.Screen name='registerForm' component={RegisterForm} options={{title:'Registration'}}/>
                </Stack.Navigator>
            </NavigationContainer>

        )
    }
}

