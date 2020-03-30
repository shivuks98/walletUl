import React from 'react'
import { View,Text,TextInput,TouchableOpacity,Image } from 'react-native'
import Styles from '../../resources/styles/Styles'
import  ImagePicker  from 'react-native-image-picker'
import RadioForm from 'react-native-simple-radio-button'
radio=[
    {label:'Driving License',value:1},
    {label:'Passport',value:2}
]
export default class UploadDocument extends React.Component{
    constructor(props){
        super(props)
        this.state={
            frontId:null,
            backId:null,
            value:1
        }
    }
     handleFrontId=()=>{
         var options={
             title:'Add Photo!',
            
             storageOptions:{
                 skipBackup:true
             }
             
         }
         ImagePicker.showImagePicker(options,(response)=>{
            //  console.log(response)
             if(response.didCancel){
                 console.log('User cancelled image picker')
             }else if(response.error){
                 console.log('ImagePicker Error',response.error)
             }else if(response.customButton){
                 console.log("user tapped on custom button",response.customButton)
                 alert(response.customButton)
             }
             else{
                 const uri={uri:response.uri}
                 this.setState({
                     frontId:uri
                 })
             }
         })
     }
     handleBackId=()=>{
        var options={
            title:'Add Photo!',
           
            storageOptions:{
                skipBackup:true
            }
            
        }
        ImagePicker.showImagePicker(options,(response)=>{
           //  console.log(response)
            if(response.didCancel){
                console.log('User cancelled image picker')
            }else if(response.error){
                console.log('ImagePicker Error',response.error)
            }else if(response.customButton){
                console.log("user tapped on custom button",response.customButton)
                alert(response.customButton)
            }
            else{
                const uri={uri:response.uri}
                this.setState({
                    backId:uri
                })
            }
        })
    }
    
    render(){
        return(
            
            <View style={Styles.container}>
                <View style={[Styles.container,{alignItems:'center',paddingTop:'10%'}]}>
                    <Text style={{fontSize:20,fontWeight:'bold',paddingBottom:10}}>Choose ID document</Text>
                    <View style={{paddingLeft:30,width:'100%'}}>
                    <RadioForm  radio_props={radio} labelStyle={{fontSize:18}}  onPress={(v)=>
                        {this.setState({value:v})
                        // console.log(this.state.value)
                    }
                        }/>
                        </View>
                    <Text style={Styles.text}>National ID</Text> 
                    <TextInput style={[Styles.textInput,{width:'57%',borderBottomWidth:2.3}]}/>
                    
                {/* <Image style={{width:130,height:110,margin:10,borderColor:'black',borderWidth:1,}} 
                source={require('../../resources/images/fileupload.png')}/> */}
                
                <View style={{flexDirection:'row',paddingHorizontal:'19%',alignSelf:'flex-start',}}>
                    <View>
                    <TouchableOpacity onPress={this.handleFrontId}>
                        { 
                        !this.state.frontId  && (<Image style={Styles.photo} 
                        source={require('../../resources/images/fileupload.png')}/>)}
                        { 
                        this.state.frontId  && (<Image style={Styles.photo} 
                        source={this.state.frontId}/>)}
                    </TouchableOpacity>
                        <Text style={[Styles.text,{textAlign:'center'}]}>
                            ID Front Image</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={this.handleBackId}>
                        { this.state.value == 1 &&
                        !this.state.backId  && (<Image style={Styles.photo} 
                        source={require('../../resources/images/fileupload.png')}/>)}
                        { 
                        this.state.backId  && (<Image style={Styles.photo} 
                        source={this.state.backId}/>)}
                    </TouchableOpacity>
                    {this.state.value==1 &&(
                    <Text style={Styles.text}>ID Back Image</Text>)}
                    </View>
                </View>
                </View>
                <View style={Styles.Button}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Confirm')} >
                        <Text style={Styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}