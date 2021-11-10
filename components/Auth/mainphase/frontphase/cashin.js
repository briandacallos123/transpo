import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import Header from './header'
import Logo from './logo'
import Receipt from './DriverPhase/Receipt'

const Cashin = ({route, navigation}) => {
    // console.log(route.params);
    const [amount, setAmount] = useState(null)

    const cashin = () =>{
        if(amount){
            navigation.navigate('FinalReceipt', {
                data:route.params,
                amount:amount
            })
        }else{
            console.log("walang laman");
        }
    }

    return (
        <View style={{
            flex:1,
            justifyContent:'space-between',
        }}>
            <View style={{
                  position:'relative',
                  top:100
            }}>
                <Header/>
            </View>
            <View style={{
                alignItems:'center'
            }}>
               
                <TextInput
                style={{
                    width:200,
                    borderBottomColor:'black',
                    borderBottomWidth:1,
                    padding:5,
                    marginBottom:10,
                    textAlign:'center'
                }}
                keyboardType="numeric"
                onChangeText={(e)=>setAmount(e)}
                />
                 <Text style={{
                    fontSize:20,
                    marginBottom:20
                }}>Enter Amount </Text>
                  <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{
                    backgroundColor:'#058F4D',
                    padding:10,
                    width:100
                }}
                onPress={cashin}
                >
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        textAlign:'center',
                        fontSize:20
                    }}>Cash In</Text>
                </TouchableOpacity>
            </View>
            </View>
           
            <Logo/>
        </View>
    )
}

export default Cashin

const styles = StyleSheet.create({})
