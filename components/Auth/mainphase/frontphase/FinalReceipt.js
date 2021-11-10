import React,{useState} from 'react'
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from './header'
import Logo from './logo'
import qr from '../../../../images/qr.png'
import { firestore } from '../../../../firebase'

const FinalReceipt = ({route, navigation}) => {
    const {data, amount} = route.params
    const [myData, setData] = useState(data.data)

   

    const submit = () => {
        let myBalance = myData.balance
        let myAmount = Number(amount)
        let total = myBalance + myAmount
     
        firestore.collection('commuters').doc(myData.id).update({
            balance:total
        }).then(()=>{
            setTimeout(()=>{
                Alert.alert("Success Cashed In")
                navigation.navigate("Index101",{
                    datas:myData
                })
            },500)
        })
    }
    return (
        <View style={styles.container}>
            <View style={{
                flex:1,
                justifyContent:'flex-end'
            }}>
                <Header/>
            </View>
            <View style={{
                flex:2,
                alignItems:'center'
            }}>
               <View>
                   <Text style={{
                       width:250,
                       textAlign:'center',
                       marginBottom:40
                   }}>Go to the nearest 7/11 store and scan this QR Code to Cash-Out</Text>
                <Image
                    source={qr}
                    style={{
                        width:220,
                        height:220,
                        alignSelf:'center',
                        marginBottom:10
                    }}
                    />
                   <Text style={{
                       textAlign:'center',
                       marginBottom:50,
                       letterSpacing:5
                   }}>{myData.phoneNumber}</Text>
               </View>
               <View style={{
                   alignItems:'center',
               }}>
                    <TouchableOpacity style={{
                        width:90,
                    }}
                    onPress={submit}
                    >
                         <Text style={{
                             textAlign:'center',
                             fontSize:15,
                             color:'#058F4D'
                         }}>Success</Text>
                    </TouchableOpacity>
               </View>
            </View>
            <View>
                <Logo/>
            </View>
        </View>
    )
}

export default FinalReceipt

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between'
    }
})
