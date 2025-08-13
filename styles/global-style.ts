import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';


export const globalStyles= StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:Colors.background
    },
    calculatorContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:50
    },
    mainResult:{
        color:Colors.textPrimary,
        fontSize:70,
        textAlign:'right',
        fontWeight:'400'
    },
    subResult:{
        color:Colors.textSecondary,
        fontSize:40,
        textAlign:'right',
        fontWeight:'300'
    },
    row:{
        flexDirection:'row',
        justifyContent: 'center',
        paddingHorizontal:10
    },
    button:{
        borderRadius:40,
        paddingTop:15,
        margin:5,
        width:75,
        height:75,
        alignItems: 'center',
        backgroundColor: Colors.darkGray
    },
    textWhite:{
        color: Colors.textPrimary,
        fontSize:30,
        fontFamily:'SpaceMono'
    }
})