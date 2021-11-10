import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native'

import { auth, firestore} from "../../../firebase";
import HeaderLogo from '../mainphase/frontphase/headerLogo';

let myEmail = ""
const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isDriver, setDriver] = useState([])

    const login = () =>{
        if(email && password){
            logMeIn()
        }else{
            Alert.alert("All fields are required")
        }
    }
    const logMeIn = () =>{
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            setEmail("")
            setPassword("")
            const email = userCredential.user.email
            myEmail = email
           
            getDriver(email)
            
            
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    const getDriver = async(dog) => {
        const ewan = firestore.collection('commuters');
        const snapshot = await ewan.where('email', '==', dog).where('driver','==',true).get();

        // kapag di sya driver
        if (snapshot.empty) {


            navigation.navigate('Index101',{
                screen:'main',
                params:{
                    render:false
                }
            })
          }  

        //   kapag driver sya
        snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
            let myData = doc.data()
            navigation.navigate('Driver',{
                data:myData
            })
            
        });
        
    }

    const driverSya = () =>{

    }

    const diSiyaDriver = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View>
                    <HeaderLogo/>
                </View>
                <View style={styles.inputDiv}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput
                    style={styles.TextInput}
                    onChangeText={(e)=>setEmail(e)}
                    value={email}
                    />
                </View>
                <View style={styles.inputDiv}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput
                    style={styles.TextInput}
                    onChangeText={(e)=>setPassword(e)}
                    value={password}
                    secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.btnChill}>
                    <Text style={styles.texti}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.inputDiv}>
                    <TouchableOpacity onPress={login} style={styles.btnOp}>
                        <Text style={styles.btn}>Login</Text>
                    </TouchableOpacity>
                   
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{marginRight:8}}>Doesn't have an account?</Text>
                    <TouchableOpacity onPress={()=>{
                         navigation.navigate("Register")
                    }}>
                        <Text style={styles.register}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login
export const retEmail = () => {
    return myEmail
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    subContainer:{
        padding:40
    },
    logo:{
        fontWeight:'bold',
        fontSize:18
    },
    TextInput:{
        backgroundColor:'#E5E5E5',
        padding:10
    },
    btn:{
        marginTop:5,
        backgroundColor:'#058F4D',
        color:'white',
        fontSize:20,
        textAlign:'center',
        paddingHorizontal:40,
        paddingVertical:10
    },
    btnOp:{
        
        alignItems:'center'
    },
    inputDiv:{
        marginBottom:20
    },
    text:{
        marginBottom:5
    },
    texti:{
        marginBottom:5,
        color:'#058F4D',
    },
    register:{
        color:'#058F4D',
        fontSize:17
    },
    btnChill:{
        width:120,
        fontSize:17
    }
})


