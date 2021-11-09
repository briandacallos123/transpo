import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import welcome from '../../../../images/welcome.png'

const HeaderLogo = () => {
    return (
        <View style={{alignItems:'center'}}>
            <Image
            source={welcome}
            style={{
                height:120,
                width:220
            }}
            />
        </View>
    )
}

export default HeaderLogo

const styles = StyleSheet.create({})
