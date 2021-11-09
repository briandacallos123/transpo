import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    return (
        <View style={{alignItems:'center'}}>
            <Text style={styles.logo}>T-Cash</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logo:{
        fontWeight:'bold',
        fontSize:25,
        
    }
})
