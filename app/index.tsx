import CalculatorBotton from "@/components/CalculatorBotton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-style";
import { View } from "react-native";

export default function Calculator() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal:29,marginBlock:30}}>
        <ThemeText>60x50000</ThemeText>
        <ThemeText variant="h2">50</ThemeText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton 
          onPress={()=>{}} 
          color={Colors.lightGray} 
          blackText 
          label='AC'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{}} color={Colors.lightGray} blackText label='+/-'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{}} color={Colors.lightGray} blackText label='%'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{

        }} blackText color={Colors.orange} label='/'></CalculatorBotton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='7'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='8'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='9'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} color={Colors.orange} label='X'></CalculatorBotton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='4'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='5'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='6'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} color={Colors.orange} label='+'></CalculatorBotton>
      </View>
        <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='1'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='2'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='3'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} color={Colors.orange} label='-'></CalculatorBotton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>{console.log('1')}} doubleSize label='0'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} label='.'></CalculatorBotton>
        <CalculatorBotton onPress={()=>{console.log('1')}} color={Colors.orange} label='='></CalculatorBotton>
      </View>
    </View>
  );
}
