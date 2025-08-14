import CalculatorBotton from "@/components/CalculatorBotton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-style";
import { View } from "react-native";

export default function Calculator() {
  const {formula,buildNumber} = useCalculator();
  
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal:29,marginBlock:30}}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">50</ThemeText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>buildNumber('AC')} 
          color={Colors.lightGray} blackText label='AC'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('/')} 
          color={Colors.lightGray} blackText label='+/-'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('%')} 
          color={Colors.lightGray} blackText label='%'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('/')} blackText 
          color={Colors.orange} label='/'></CalculatorBotton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>buildNumber('7')} label='7'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('8')} label='8'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('9')} label='9'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('x')} color={Colors.orange} label='X'></CalculatorBotton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>buildNumber('4')} label='4'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('5')} label='5'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('6')} label='6'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('+')} color={Colors.orange} label='+'></CalculatorBotton>
      </View>
        <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>buildNumber('1')} label='1'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('2')} label='2'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('3')} label='3'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('-')} color={Colors.orange} label='-'></CalculatorBotton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>buildNumber('0')} doubleSize label='0'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('.')} label='.'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('=')} color={Colors.orange} label='='></CalculatorBotton>
      </View>
    </View>
  );
}
