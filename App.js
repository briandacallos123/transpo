import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, InteractionManager } from 'react-native';
const Stack = createNativeStackNavigator()

// import component
import Login from './components/Auth/login/Index'
import Register from './components/Auth/signup';
import Index101 from './components/Auth/mainphase/Index';
import Welcome from './components/Auth/login/Welcome';
import Cashin from './components/Auth/mainphase/frontphase/cashin';
import Sample from './components/Auth/Sample'
import Driver from './components/Auth/mainphase/frontphase/DriverPhase/Driver';
import Cashout from './components/Auth/mainphase/frontphase/DriverPhase/Cashout';
import Receipt from './components/Auth/mainphase/frontphase/DriverPhase/Receipt';
export default function App() {

  React.useEffect(()=>{

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
  const timerFix = {};
  const runTask = (id, fn, ttl, args) => {
    const waitingTime = ttl - Date.now();
    if (waitingTime <= 1) {
      InteractionManager.runAfterInteractions(() => {
        if (!timerFix[id]) {
          return;
        }
        delete timerFix[id];
        fn(...args);
      });
      return;
    }
    const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
    timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
  };
  global.setTimeout = (fn, time, ...args) => {
    if (MAX_TIMER_DURATION_MS < time) {
      const ttl = Date.now() + time;
      const id = '_lt_' + Object.keys(timerFix).length;
      runTask(id, fn, ttl, args);
      return id;
    }
    return _setTimeout(fn, time, ...args);
  };
  global.clearTimeout = id => {
    if (typeof id === 'string' && id.startsWith('_lt_')) {
      _clearTimeout(timerFix[id]);
      delete timerFix[id];
      return;
    }
    _clearTimeout(id);
  };
}
  },[])
  
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
       {/* <Stack.Screen name="sample" component={Sample}/> */}
       <Stack.Screen name="welcome" component={Welcome}/>
       <Stack.Screen name="login" component={Login}/>
       <Stack.Screen name="Register" component={Register}/>
       <Stack.Screen name="Index101" component={Index101}/>
       <Stack.Screen name="Cashin" component={Cashin}/>
       <Stack.Screen name="Driver" component={Driver}/>
       <Stack.Screen name="Cashout" component={Cashout}/>
       <Stack.Screen name="Receipt" component={Receipt}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
