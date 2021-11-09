import React, {useState} from 'react'
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {retEmail} from '../../login/Index'
import {retPhone} from './Index'
import User from '../../../../images/user.png'

const wid = Math.floor(Dimensions.get('window').width)
const Header = () => {
    
    const [email, setEmail] = useState(retEmail())
    const [phoneNumber, setPhone] = useState(retPhone())
    return (
        <View style={{width:wid,alignItems:'center',marginBottom:20, justifyContent:'center', alignItems:'center'}}>
            <View style={{
                marginBottom:5,
                alignItems:'center',
                flexDirection:'row',
                justifyContent:'space-between',
                width:wid/1.5
            }
                
                }>
                
                <Image
                source={User}
                style={{
                    width:100,
                    height:100
                }}
                />
                 {/* info */}
                 <View style={{
                     flex:1
                 }}>
                     {/* name */}
                     <Text style={styles.logo}>{email}</Text>
                     <Text style={styles.subLogo}>{phoneNumber}</Text>
                     {/* phone number */}
                     <Text></Text>
                 </View>
            </View>
            <View style={{
                borderBottomWidth:2,
                borderBottomColor:'#948D8D',
                height:2,
                width:250,
            }}>
               
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    circle:{
        marginRight:10
    },
    logo:{
        fontWeight:'bold',
        fontSize:17
    },
    subLogo:{
        fontSize:15
    }
})
