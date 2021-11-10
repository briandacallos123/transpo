import React, {useState} from 'react'
import { Image, StyleSheet, Text,Alert, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../header'
import Logo from '../logo'
import cashout from '../../../../../images/cashout.png'
import Cashout from './Cashout'
import { firestore } from '../../../../../firebase'

const Driver = ({route, navigation}) => {
    const {data, reRender} = route.params
    const [driverData, setData] = useState(data)
    // const {data} = routes.params
    // console.log({data});
//    console.log(myData);
    
    const cashOut = () =>{
        navigation.navigate('Cashout',{
            data:driverData
        })
    }
    if(reRender){
        firestore.collection('commuters').where('email','==',driverData.email).get()
        .then((res)=>{
            res.docs.forEach((doc)=>{
                setData(doc.data())
            })
        })
    }
    const ViewHistory = () => {
       
        navigation.navigate('History',{
            data:driverData
        })
    }

    return (
        <View style={{
            flex:1,
            justifyContent:'space-between',
            padding:10
        }}>
            <View style={{
                 flex:1,
                 justifyContent:'flex-end'
            }}>
                 <Header/>
                 <View style={{
                     alignItems:'center',
                     position:'relative',
                     top:-15,
                 }}>
                    <TouchableOpacity style={{
                        width:190
                    }}
                    onPress={ViewHistory}
                    >
                        <Text style={{
                            color:"#948D8D",
                            fontSize:17
                        }}>View Transaction History</Text>
                    </TouchableOpacity>
                 </View>
            </View>
            <View style={{
                flex:2,
                padding:30
            }}>
                <Text style={{
                    
                    fontSize:20,
                    marginBottom:20
                }}>BALANCE:</Text>
                <Text style={{
                    fontSize:40,
                    textAlign:'center',
                    marginBottom:50
                }}>₱ {driverData.balance}</Text>
                <View style={{
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:25
                    }}>Cash-Out</Text>
                    <TouchableOpacity style={{
                        width:120
                    }}
                    onPress={cashOut}
                    
                    >
                        <Image
                        source={cashout}
                        style={{
                            width:130,
                            height:130
                        }}
                        />
                </TouchableOpacity>
                </View>
            </View>
            <View>
                <Logo/>
            </View>
        </View>
    )
}

export default Driver

const styles = StyleSheet.create({})
