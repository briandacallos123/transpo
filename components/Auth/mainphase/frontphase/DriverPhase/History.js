import React, {useState} from 'react'
import {Dimension, Dimensions, StyleSheet, Text, View } from 'react-native'
import Header from '../header'
import Logo from '../logo'
import Transaction from './Transaction'

const History = ({route}) => {
    const {data} = route.params
    const [myData, setData] = useState(data)
    const [transaction ,setTran] = useState(myData.transaction)
    const wid = Math.floor(Dimensions.get('window').width)

    // console.log(route.params);
    // const [transaction, setTran] = useState(data.transaction)
    // console.log(transaction);
    console.log(transaction);
    return (
        <View style={styles.container}>
            <View style={{
                flex:1,
                justifyContent:'flex-end'
            }}>
                <Header/>
            </View>
            <View style={{
                alignItems:'center',
                flex:2
            }}>
                <View style={{
                    padding:10,
                    width:wid
                }}>
                    <Text style={{
                        color:'#058F4D',
                        fontSize:20,
                        textAlign:'center',
                        marginBottom:20
                    }}>Transactions</Text>
                    {/* list */}
                    <View>
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-around'
                        }}>
                            <Text style={{
                                fontSize:17,
                                fontWeight:'bold'
                            }}>Passenger</Text>
                            <Text style={{
                                fontSize:17,
                                fontWeight:'bold'
                            }}>Route</Text>
                            <Text style={{
                                fontSize:17,
                                fontWeight:'bold'
                            }}>Fee(₱)</Text>
                        </View>
                        {transaction.map((item, index)=>{
                            return <Transaction key={index} data={item}/>
                        })}
                    </View>
                </View>
            </View>
            <View>
                <Logo/>
            </View>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around'
    }
})
