import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-style'
import React from 'react'
import { Pressable, Text } from 'react-native'


interface Props{
    label:string,
    color?:string,
    blackText?:boolean,
    onPress:()=>void
}

const CalculatorBotton = ({label,color=Colors.darkGray,
                            blackText=false,onPress
}:Props) => {
  return (
    <Pressable style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed? 0.8:1
    })}>
        <Text style={
            {...globalStyles.textWhite,
            color: blackText ? 'black' : 'white'
            }}>{label}</Text>
    </Pressable>
  )
}

export default CalculatorBotton
