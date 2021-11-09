import React from 'react'
import { Image, StyleSheet, Text, View} from 'react-native'
import Header from './header'
import fine from '../../../../images/fine.png'
import Logo from './logo'

const Receipt = ({navigation}) => {

    // React.useEffect(()=>{
    //    setTimeout(()=>{
    //         navigation.navigate('main')
    //    },5000)
    // },[])


    return (
        <View style={styles.container}>
            
                <View style={{alignItems:'center', position:'relative',
        top:100}}>

<Header/>
                </View>
                <View>
                   <View style={{
                       alignItems:'center'
                   }}> 
                   <Text style={{
                        // fontWeight:'bold',
                        fontSize:22,
                        
                    }}>Transaction Finished!</Text>
                   </View>
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Image
                        source={fine}
                        style={{
                            width:200,
                            height:200
                        }}
                        />
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={{
                            fontSize:18,
                            fontWeight:'bold'
                        }}>Enjoy and have a safe ride!</Text>
                        <Text style={{
                            fontSize:18,
                            fontWeight:'bold'
                        }}>Thank you for using T-Cash!</Text>
                    </View>
                </View>
                <Logo/>
           
        </View>
    )
}

export default Receipt

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'space-between',
        alignItems:'center'
    }
})
