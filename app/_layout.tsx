import { globalStyles } from "@/styles/global-style";
import { Platform, View } from "react-native";

import { useFonts } from "expo-font";
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

const isAndroid= Platform.OS === 'android';
if(isAndroid){
  NavigationBar.setBackgroundColorAsync('black');
}

const RootLayout = ()=> {

  const [loadedFont] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if(!loadedFont){
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot></Slot>
      <StatusBar style='light'></StatusBar>
    </View>
  )
  // return <Stack />;
}

export default RootLayout
