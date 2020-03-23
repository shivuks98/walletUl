import React from 'react'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View,TouchableOpacity,Text,TextInput,Image,Button} from 'react-native'
import Buttons from '../../resources/Button/CallButton'
import Login from '../screens/Login'

import terms from '../screens/terms'
import Register1 from '../screens/Register1'
import Test from '../screens/l'


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
                screenOptions={{ headerRight:()=><Image style={{height:40,width:80,alignItems:'flex-end'}}
                source={require('../../resources/images/blogo.png')}/>}}>
                    {/* <Stack.Screen name='Home' component={Test}/> */}
                    <Stack.Screen name='Home' component={Login}/>
                    <Stack.Screen name='terms' component={terms} options={{title:'Terms and Conditions'}}/>
                    <Stack.Screen name='register1' component={Register1} options={{title:'Registration'}}/>
                </Stack.Navigator>
            </NavigationContainer>

        )
    }
}

