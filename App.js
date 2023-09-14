import {View,StyleSheet, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from "react";
import HomePage from "./screen/HomePage";
import { LoginPage } from "./screen/LoginPage";
import { SafeAreaView } from "react-native-safe-area-context";
import {CustomStackNavigation} from "./navigations/customStackNavigation";
import { NativeBaseProvider } from 'native-base';
import Layout from './components/Layout';



const App=()=>{
  const [isLoggedIn,setLoggedIn]=useState(null);
  const [err,setErr]=useState(false)


  useEffect(()=>{
    getData()
  },[])


  callBtnPressed=()=>{
    console.log("Modal Open")
  }


  getData=async()=>{
    try{
      const value = await AsyncStorage.getItem('username')
      if(value!=null){
        setLoggedIn(true)
      }

    }
    catch(error){
      setLoggedIn(false);
      setErr(true)

    }
  }


  return <>
        <NativeBaseProvider>

    <SafeAreaView style={styles.container}>
      <CustomStackNavigation/>
    

    {
      isLoggedIn==true ?
      <Layout>
      <HomePage/>
      </Layout>
    :
      <></>
  }
  </SafeAreaView>
  </NativeBaseProvider>

  </>
}


const styles=StyleSheet.create({
  container:{
    flex:1
  }
})

export default App;
