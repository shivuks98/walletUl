import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        // alignItems:'stretch',
        backgroundColor:"white",
        alignContent:'flex-start'
    },
    imagecontainer:{
        alignItems:'center'
    },
    image:{
        
        // alignItems:'center',
        width:100,
        height:60,
        alignSelf:'stretch'
    },
    textview:{
        alignItems:'stretch',
        paddingLeft:50,
        paddingRight:50
    },
    text:{
        marginTop:20,
        fontSize:18
    },
    numberView:{
        // alignContent:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:80 
    },
    loginButton:{
        // width:50,
        alignItems:'center',
        backgroundColor:'red',
        height:40,
        marginBottom:10   
        
    },
    registerButton:{
        width:'100%',
        alignItems:'center',
        backgroundColor:'gray',
        height:40,
        alignContent:"flex-end",
        bottom:0,
        
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'#ffff'
    },
    textInput:{
        marginBottom:10,
        borderBottomWidth:1,
        
        borderBottomColor:'red',
        
    }
})