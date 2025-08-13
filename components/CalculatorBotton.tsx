import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-style';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, Text } from 'react-native';

interface Props{
    label:string,
    color?:string,
    blackText?:boolean,
    onPress:()=>void,
    doubleSize?:boolean
}

const CalculatorBotton = ({label,color=Colors.darkGray,
                            blackText=false,onPress,doubleSize
}:Props) => {
  return (
    <Pressable style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed? 0.8:1,
        width: doubleSize? 170:80
    })}
    onPress={()=>{
       Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
    }}
    >
        <Text style={
            {...globalStyles.textWhite,
            color: blackText ? 'black' : 'white'
            }}>{label}</Text>
    </Pressable>
  )
}

export default CalculatorBotton
