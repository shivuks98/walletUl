import React from 'react'
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Button, Image,Modal,ScrollView,Keyboard, KeyboardAvoidingView } from 'react-native'
import styles from '../../resources/styles/Styles'
import Address from './addAddress'
import RadioForm, {RadioButton,RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import SnackBar from 'react-native-snackbar'
import CountryPicker,{CountryModalPicker} from 'react-native-country-picker-modal'



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
            buttonClicked:false,
            date:false,
            dob:null,
            firstname:null,
            lastname:null,
            gender:null,
            nationality:null
        }
    }
    validate=()=>{
        this.setState({buttonClicked:true})
       var firstname='Please enter First Name'
        var lastname='Please enter Last Name'
        var dob="Enter Date Of Birth"
        var gender="Select Gender"
        var nationality='Enter nationality'
        var address="Add Address"
        var text=''
        var shows=false
        if(this.state.firstname==null){
            text=firstname
        }else if(this.state.lastname==null){
            text=lastname
        }else if(this.state.dob==null ){
            text=dob
        }else if(this.state.gender==null){
            text=gender
        }else if(this.state.nationality==null){
            text=nationality
        }
        else {
        this.props.navigation.navigate('securityAnswer')
        shows=true
        }
        if(shows==false){
        SnackBar.show({
            text:text,
            duration:SnackBar.LENGTH_LONG,
            action:{
                text:'OK',
                textColor:'red'
            }
            
        })
    }
    }
    handleDate=(name)=>{
        
       var month=parseInt(name.getMonth())+1
        // console.log(name.getDate()+"/"+month+"/"+name.getFullYear())
        var date=name.getDate()+"/"+month+"/"+name.getFullYear()
        this.setState({
            dob:date,
            date:false
        })
        console.log(this.state.dob)
        
    }
    render(){
        return(
            
            <View style={styles.container}>
                
                <ScrollView style={[styles.container,{paddingLeft:20,paddingRight:20}]}>
                    <Text style={styles.text}>First Name</Text>
                    <TextInput style={styles.textInput} onChangeText={(fname)=>this.setState({firstname:fname})
                    }/>
                    {!this.state.firstname && this.state.buttonClicked && (<Text style={{color:'red'}}>First Name is Mandatory</Text>)}
                    <Text style={styles.text}>Last Name</Text>
                    <TextInput style={styles.textInput} onChangeText={(lname)=>this.setState({lastname:lname})}/>
                    {!this.state.lastname && this.state.buttonClicked && (<Text style={{color:'red'}}>Last Name is Mandatory</Text>)}
                    
                    <Text style={styles.text}>Date of Birth</Text>
                    <DateTimePickerModal isVisible={this.state.date} mode={"date"}
                        onCancel={()=>this.setState({date:false,})} datePickerModeAndroid={'spinner'}
                        onConfirm={(name)=>this.handleDate(name)} />
                    <TextInput style={styles.textInput}  onFocus={()=>{this.setState({date:true})}} 
                     onChange={(dob)=>this.setState({dob:dob})}value={this.state.dob}/>
                     {!this.state.dob && this.state.buttonClicked && (<Text style={{color:'red'}}>Date Of Birth is Mandatory</Text>)}
                    
                    <Text style={[styles.text,{paddingBottom:15}]}>Gender</Text>
                    
                    <RadioForm radio_props={gender}
                    labelHorizontal={true}
                     formHorizontal={true}
                     
                      labelStyle={{paddingLeft:10,paddingRight:'30%'}}
                     onPress={(value)=>this.setState({gender:value})}
                     />
                    <Text style={styles.text}>Nationality</Text>
                    {/* <CountryPicker withModal  visible={false} onSelect={(name)=>this.setState({nationality:name})}/> */}
                    <TextInput onAccessibilityAction={CountryPicker} style={styles.textInput}
                    value={this.state.nationality} onFocus={CountryPicker}
                    />
                    {/* <TextInput style={styles.textInput} onChangeText={(name)=>this.setState({nationality:name})}/> */}
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.text}>Add Address</Text>
                    <TouchableOpacity 
                    onPress={()=>this.setState({visible:true})}
                    // onPress={()=>this.props.navigation.navigate('addAddress')}
                    >
                    <Image style={{flexShrink:2}}source={require('../../resources/images/add.png')}/>
                    </TouchableOpacity>
                    </View>
                    
                    <Modal transparent={true} 
                    // visible={true}
                    visible={this.state.visible}
                    >
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
                </ScrollView>
                
                <View style={styles.Button }>
                    <TouchableOpacity onPress={this.validate}>
                     {/* onPress={()=>this.props.navigation.navigate('securityAnswer')}> */}
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