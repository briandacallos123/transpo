import React, {useEffect} from 'react'
import {Dimensions, StyleSheet,Text, View, Image} from 'react-native'
import welcome from '../../../images/welcome.png'

const hayt = Math.round(Dimensions.get('window').height)

const Welcome = ({navigation}) => {

    useEffect(()=>{
        runMe()
    },[])

    const runMe = () => {
        setTimeout(()=>{
            navigation.navigate("login")
        },3000)
    }

    return (
        <View style={{
            justifyContent:'center',
            alignItems:'center',
            height:hayt
        }}>
            <Image
            source={welcome}
            style={{
                width:220,
                height:200,
               
            }}
            />
            <View style={{
                width:100,
                backgroundColor:'black',
                height:2,
                position:'relative',
                top:-30
            }}></View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({})
