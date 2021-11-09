import React, {useState} from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../header'
import Logo from '../logo'
import cashout from '../../../../../images/cashout.png'

const Cashout = ({route, navigation}) => {
    const {data} = route.params
    const [driverData, setData] = useState(data)
    const [myWidth, setWithdraw] = useState(null)
    // const {data} = routes.params
    // console.log({data});
//    console.log(myData);
    
//   console.log("dito");
    const withdraw = () => {
        // console.log(typeof(Number(myWidth)));
        let myVal = Number(myWidth)
       
        if(driverData.balance > myVal){
            let total = driverData.balance - myVal
            // console.log("success");
            navigation.navigate("Receipt",{
                data:driverData,
                total
            })
        }else{
            Alert.alert("Sorry your balance isn't enough")
        }
       
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
                    }}>
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
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginBottom:25,
                    justifyContent:'center'
                }}>
                    <Text style={{
                        
                        fontSize:20,
                        marginRight:20
                    }}>BALANCE:</Text>
                    <Text style={{
                        fontSize:25,
                    }}>₱ {driverData.balance}</Text>
                </View>
                <View style={{
                    alignItems:'center'
                }}>
                    <Text style={{
                        alignSelf:'flex-start',
                        fontSize:20,
                        marginLeft:50
                    }}>Amount: </Text>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}>
                        <Text>₱</Text>
                        <TextInput
                        keyboardType="numeric"
                        style={{
                            borderBottomColor:'black',
                            borderBottomWidth:1,
                            padding:10,
                            fontSize:17,
                            width:150,
                            textAlign:'center'
                        }}
                        onChangeText={(e)=>setWithdraw(e)}
                        />
                    </View>
                </View>
                <View style={{
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize:25
                    }}>Withdraw</Text>
                    <TouchableOpacity style={{
                        width:120
                    }}
                    onPress={withdraw}
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

export default Cashout

const styles = StyleSheet.create({})
