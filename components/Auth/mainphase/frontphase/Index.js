import React, {useState, useEffect} from 'react'
import {Dimensions, StyleSheet, Text, TouchableOpacity,Image, View } from 'react-native'
import {retEmail} from '../../login/Index'
import { firestore } from '../../../../firebase'
import { FontAwesome } from '@expo/vector-icons';
import Cashin from '../../../../images/cashin.png'
import Payingfare from '../../../../images/Payingfare.png'
import Logo from './logo';
import HeaderLogo from './headerLogo';

const hayt = Math.round(Dimensions.get('window').height)

// component
import Header from './header'
let phoneNumber = ""

const IndexSub = ({route, navigation}) => {
    const {datas} = route.params
    const {render} = route.params
    const [data, setData] = useState([])
    const [email, setEmail] = useState(retEmail())
    const [renderData, setRender] = useState(render)
    console.log("datas: ",datas);

    useEffect(()=>{
        findUser()
    },[datas])
    console.log(datas);

 
    

    const findUser = () =>{
        firestore.collection('commuters').where('email','==',email).get()
        .then((res)=>{
            res.docs.forEach((doc)=>{
                setData(doc.data())
            })
        })
    }
    // if(datas){
    //     findUser()
    // }
    console.log("datas: ", datas);
    
    const cashin = () => {
        navigation.navigate("Cashin",{
            data:data
        })
    }

    return (
        <View style={styles.container}>
            <View style={{
                position:'relative',
                top:100
            }}>
            <Header/>
            <View>
              
                <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.balance}>BALANCE: </Text>
                    <Text style={{marginRight:5}}>₱</Text>
                    <Text style={styles.balanced}>{data.balance}</Text>
                    <TouchableOpacity>
                        <FontAwesome name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            {/* Add */}
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                 style={{alignItems:'center', marginRight:40}}
                 onPress={cashin}
                 >
                    <Image
                    source={Cashin}
                    style={styles.images}
                    />
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:16
                    }}>Cash In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={()=>{
                    navigation.navigate("fare")
                }}
                style={{
                    alignItems:'center'
                }}
                >
                    <Image
                    source={Payingfare}
                    style={styles.images}
                    />
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:16
                    }}>Paying Fare</Text>
                </TouchableOpacity>
            </View>
            <Logo/>
        </View>
    )
}

export default IndexSub
export const retPhone = () => {
    return phoneNumber
}
const styles = StyleSheet.create({
    container:{
        height:hayt,
        flex:1,
        padding:5,
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    balance:{
        fontSize:15,
        fontWeight:'bold',
        marginRight:10
        
    },
    balanced:{
        fontWeight:'bold',
        fontSize:50,
        marginRight:7
    },
    images:{
        width:120,
        height:120
    }
})
