import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
import IndexSub from './frontphase/Index'
import Payfare from './frontphase/Payfare'
import Receipt from './frontphase/Receipt'

const Index101 = ({route}) => {
    const email = route.params

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="main" component={IndexSub} params={email}/>
            <Stack.Screen name="fare" component={Payfare} params={email}/>
            <Stack.Screen name="Receipt" component={Receipt} params={email}/>

        </Stack.Navigator>
    )
}

export default Index101

const styles = StyleSheet.create({})
