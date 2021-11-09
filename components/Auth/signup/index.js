import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native'

import { auth, firestore } from '../../../firebase'
import RadioGroup from 'react-native-radio-buttons-group';
import { NavigationContainer } from '@react-navigation/native';

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'No',
    value: 'No'
}, {
    id: '2',
    label: 'Yes',
    value: 'Yes'
}]

const Register = ({navigation}) => {
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    const [info, setInfo] = useState({
        name:"",
        email:"",
        password:"",
        address:"",
        driver:false,
        phoneNumber:null,
        licenseNumber:"",
        balance:0.00
    })
    
    const submit = () => {
        if(info.name && info.phoneNumber && info.password && info.address){
            signUp()
        }else{
            Alert.alert("All fields are required")
        }
    }
    const signUp = () => {
        auth.createUserWithEmailAndPassword(info.email, info.password)
        .then((user)=>{
            const myId = user.user.uid
            const data = {
                    email:info.email,
                    name:info.name,
                    address:info.address,
                    driver:info.driver,
                    password:info.password,
                    phoneNumber:info.phoneNumber,
                    licenseNumber:info.licenseNumber,
                    balance:info.balance,
                    id:myId
            }
            const usersRef = firestore.collection('commuters')
            usersRef.doc(myId).set(data)
            .then(()=>{
                console.log("success register");
                navigation.navigate("login")
            }).catch((e)=>{
                console.log(e.message);
            })
            
            // firestore.collection('commuters').add({
            //     email:info.email,
            //     name:info.name,
            //     address:info.address,
            //     driver:info.driver,
            //     password:info.password,
            //     phoneNumber:info.phoneNumber,
            //     licenseNumber:info.licenseNumber,
            //     balance:info.balance,
            //     id : 

            // }).then(()=>{
            //     Alert.alert("You've Successfully Registered")
            //     navigation.navigate("login")
            // }).catch((e)=>{
            //     console.log(e.message);
            // })
        }).catch((e)=>{
            console.log(e.message);
        })
    }
   
    // const signUpFirestore = () => {
    //     const db = getFirestore()
    //     db.collection('commuters').add({
    //         name:info.name
    //     })

    // }
    const cancel = () => {
        navigation.navigate("login")
    }

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
        setInfo({...info, driver:radioButtons[1].selected})
    }
    
    return (
        <View style={styles.container}>
           <View style={styles.subContainer}>
           <View>
                <View style={styles.chillDiv}>
                    <TextInput
                    placeholder="Name: First Name, Last Name Middle Name" 
                    style={styles.TextInput}
                    onChangeText={(e)=>setInfo({...info,name:e})}
                    />
                </View>
                <View style={styles.chillDiv}>
                    <TextInput style={styles.TextInput}
                    placeholder="Phone Number"
                    keyboardType="numeric"
                    onChangeText={(e)=>setInfo({...info,phoneNumber:e})}/>
                </View>
                <View style={styles.chillDiv}>
                    <TextInput style={styles.TextInput}
                    placeholder="Address"
                    onChangeText={(e)=>setInfo({...info,address:e})}/>
                </View>
                <View style={styles.chillDiv}>
                    <TextInput
                    placeholder="Email"
                    style={styles.TextInput}
                    onChangeText={(e)=>setInfo({...info,email:e})}
                    />
                </View>
                <View style={styles.chillDiv}>
                   
                    <TextInput
                    placeholder="Password" 
                    style={styles.TextInput}
                    onChangeText={(e)=>setInfo({...info,password:e})}
                    />
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                    <View style={styles.line}></View>
                    <Text>Apply as a Driver?</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={{alignItems:'center',marginVertical:10}}>
                    {/* <Text>Applying As Driver? </Text> */}
                    <RadioGroup 
                        layout="row"
                        radioButtons={radioButtons} 
                        onPress={onPressRadioButton} 
                    />
                </View>
                {info.driver &&
                <View>
                    <View style={styles.chillDiv}>
                    <TextInput
                    placeholder="License Number"
                    style={styles.TextInput}
                    onChangeText={(e)=>setInfo({...info,licenseNumber:e})}
                    />
                </View>
                </View>
                }
                <View>
                    <TouchableOpacity  onPress={submit}>
                        <Text style={styles.btn}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={cancel}>
                        <Text style={styles.btns}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
           </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    subContainer:{
        padding:30
    },
    logo:{
        color:'black',
        fontWeight:'bold',
        fontSize:18
    },
    TextInput:{
        backgroundColor:'#E5E5E5',
        padding:10
    },
    chillDiv:{
        marginBottom:10
    },
    btn:{
        marginTop:5,
        backgroundColor:'#058F4D',
        color:'white',
        fontSize:20,
        textAlign:'center',
        paddingHorizontal:40,
        paddingVertical:10,
        marginBottom:5
    },
    btns:{
        marginTop:5,
        backgroundColor:'white',
        color:'black',
        fontSize:20,
        textAlign:'center',
        paddingHorizontal:40,
        paddingVertical:10
    },
    line:{
        width:90,
        height:2,
        backgroundColor:'black'
    }
})
