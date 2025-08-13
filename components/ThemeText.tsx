import { globalStyles } from '@/styles/global-style'
import React from 'react'
import { Text, TextProps } from 'react-native'

interface Props extends TextProps{
    variant?: 'h1' | 'h2'
}

const ThemeText = ({children,variant='h1', ...rest }:Props) => {
  return (
      <Text 
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[
            {color:'#ffffff'},
            variant ===  'h1' && globalStyles.mainResult,
            variant ===  'h2' && globalStyles.subResult
        ]}{...rest}>
        {children}</Text>
  )
}

export default ThemeText