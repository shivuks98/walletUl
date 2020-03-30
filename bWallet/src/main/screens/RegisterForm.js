import React from 'react'
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Button, Image,Modal } from 'react-native'
import styles from '../../resources/styles/Styles'
import Address from './addAddress'
import RadioForm, {RadioButton,RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

var gender=[
    {label:'Male',value:0},
    {label:'Female', value:1}
]
class RegisterForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
            value:0,
            date:false,
            dob:null
        }
    }
    handle=()=>{
        setDataPickerVisibility(true)
    }
    render(){
        return(
            
            <View style={styles.container}>
                
                <View style={[styles.container,{paddingLeft:20,paddingRight:20}]}>
                    <Text style={styles.text}>First Name</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.text}>Last Name</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.text}>Date of Birth</Text>
                    <DateTimePickerModal isVisible={this.state.date} mode="date"
                        onCancel={()=>this.setState({date:false,})} 
                        onConfirm={(date)=>{this.setState({date:false,dob:date})
                        console.log(this.state.dob)}
                        }/>
                    <TextInput style={styles.textInput}  onFocus={()=>this.setState({date:true})}/>
                    <Text style={[styles.text,{paddingBottom:15}]}>Gender</Text>
                    
                    <RadioForm radio_props={gender}
                    labelHorizontal={true}
                     formHorizontal={true}
                     
                      labelStyle={{paddingLeft:10,paddingRight:'30%'}}
                     onPress={(value)=>this.setState({value:value})}
                     />
                     
                     
                    
                    <Text style={styles.text}>Nationality</Text>
                    <TextInput style={styles.textInput}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.text}>Add Address</Text>
                    <TouchableOpacity 
                    onPress={()=>this.setState({visible:true})}
                    // onPress={()=>this.props.navigation.navigate('addAddress')}
                    >
                    <Image style={{flexShrink:2}}source={require('../../resources/images/add.png')}/>
                    </TouchableOpacity>
                    </View>
                    
                    <Modal transparent={true} visible={this.state.visible}>
                        <View style={Styles.container}>
                            <View style={{margin:25,borderRadius:5,width:'80%',backgroundColor:'#ffff',flex:1}}>
                            <Address/>
                            <View  >
                            <TouchableOpacity onPress={()=>this.setState({visible:false})}
                            style={[styles.Button,{width:100,bottom:10,borderRadius:10,alignSelf:'center'}]}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                            </View>
                            {/* <Button title='Save' style={{}} onPress={()=>this.setState({visible:false})}></Button> */}
                    </View>
                </View>
            </Modal>
                </View>
                
                <View style={styles.Button }>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('securityAnswer')}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
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
        backgroundColor:'red',
        alignItems:"center",
        marginHorizontal:80,
        borderRadius:10,
        height:40,
        bottom:10
    }
})
export default RegisterForm