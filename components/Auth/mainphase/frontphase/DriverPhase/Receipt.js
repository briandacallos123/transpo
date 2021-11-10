import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../header'
import Logo from '../logo'
import qr from '../../../../../images/qr.png'
import { firestore } from '../../../../../firebase'


const Receipt = ({route, navigation}) => {
    const {data, total} = route.params
    const [myData, setData] = useState(data)

    const submit = () =>{
        firestore.collection('commuters').doc(myData.id).update({
            balance:total
        })
        .then(()=>{
            navigation.navigate('Driver',{
                data:myData,
                reRender:true
            })
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
                alignItems:'center',
                // backgroundColor:'red',
                flex:2
            }}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize:16,
                    width:300,
                    textAlign:'center',
                    marginBottom:50
                }}>Go to the nearest 7/11 store and scan this QR Code to Cash-Out</Text>
                <Image
                source={qr}
                style={{
                    height:200,
                    width:200
                }}
                />
                <Text style={{
                    fontSize:17,
                    letterSpacing:5,marginTop:10
                }}></Text>
                <TouchableOpacity style={{
                    marginTop:20,
                    width:120,
                }}
                onPress={submit}
                >
                    <Text style={{
                        textAlign:'center',
                        padding:10,
                        fontWeight:'bold',
                        fontSize:16,
                        color:'#058F4D'
                    }}>SUCCESS</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Logo/>
            </View>
        </View>
    )
}

export default Receipt

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        justifyContent:'space-around'
    }
})

