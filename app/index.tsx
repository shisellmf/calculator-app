import CalculatorBotton from "@/components/CalculatorBotton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-style";
import { View } from "react-native";

export default function Calculator() {
  const {formula,prevNumber,
        buildNumber,clean,toggleSign,deleteLast,
        devideOperation,
        multiplyOperation,
        addOperation,
        subtractOperation,
        calculate,showResult} = useCalculator();
  
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal:29,marginBlock:30}}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {
          formula===prevNumber?(
            <ThemeText variant="h2"> </ThemeText>
          ):(
            <ThemeText variant="h2">{prevNumber}</ThemeText>
          )
        }
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>clean()} 
          color={Colors.lightGray} blackText label='C'></CalculatorBotton>
        <CalculatorBotton onPress={()=>toggleSign()} 
          color={Colors.lightGray} blackText label='+/-'></CalculatorBotton>
        <CalculatorBotton onPress={()=>deleteLast()} 
          color={Colors.lightGray} blackText label='del'></CalculatorBotton>
        <CalculatorBotton onPress={()=>devideOperation()} blackText 
          color={Colors.orange} label='/'></CalculatorBotton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>buildNumber('7')} label='7'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('8')} label='8'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('9')} label='9'></CalculatorBotton>
        <CalculatorBotton onPress={()=>multiplyOperation()} color={Colors.orange} label='X'></CalculatorBotton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>buildNumber('4')} label='4'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('5')} label='5'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('6')} label='6'></CalculatorBotton>
        <CalculatorBotton onPress={()=>addOperation()} color={Colors.orange} label='+'></CalculatorBotton>
      </View>
        <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>buildNumber('1')} label='1'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('2')} label='2'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('3')} label='3'></CalculatorBotton>
        <CalculatorBotton onPress={()=>subtractOperation()} color={Colors.orange} label='-'></CalculatorBotton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=>buildNumber('0')} doubleSize label='0'></CalculatorBotton>
        <CalculatorBotton onPress={()=>buildNumber('.')} label='.'></CalculatorBotton>
        <CalculatorBotton onPress={()=>showResult()} color={Colors.orange} label='='></CalculatorBotton>
      </View>
    </View>
  );
}
