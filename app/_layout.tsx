import { globalStyles } from "@/styles/global-style";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

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
