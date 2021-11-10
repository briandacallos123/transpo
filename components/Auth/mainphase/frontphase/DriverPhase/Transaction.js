import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Transaction = ({data}) => {
    
    return (
        <View>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-around',
                marginVertical:5
            }}>
                 <View>
                     <Text style={{textAlign:'center'}}>{data.name.toUpperCase()}</Text>
                 </View>
                 <View>
                    <Text style={{textAlign:'center'}}>{data.route.toUpperCase()}</Text>
                 </View>
                 <View>
                    <Text style={{textAlign:'center'}}>{data.fee}</Text>
                 </View>
                 
            </View>
        </View>
    )
}

export default Transaction

const styles = StyleSheet.create({})
