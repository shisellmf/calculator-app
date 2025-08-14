import { useEffect, useRef, useState } from "react";

enum Operator{
    add='+',
    subtract='-',
    multiply='x',
    divide='/'
}

export const useCalculator = ()=>{

    const[formula,setFormula]= useState('0');
    const[number,setNumber]= useState('0');
    const[prevNumber,setPrevNumber]= useState('0');

    const lastOperation = useRef<Operator | null>(null);

    const reset= ()=>{
        setFormula('0');
        setNumber('0');
        setPrevNumber('0');
        return setNumber('0');
    }

    useEffect(()=>{
        //Todo:calcular
        setFormula(number);        
    },[number])

    const buildNumber= (numberString:string)=>{

        if(numberString.includes('AC'))return setNumber('0');
        
        if(number.startsWith('0') && numberString=='0' 
        && !number.includes('.')){            
            return;
        }

        if(number.startsWith('0') && numberString!='0' && !number.includes('.')) {  
            if(numberString=='.'){
                 return setNumber(number+numberString);
            }else{
                return setNumber(numberString);
            }            
        }

        if(number.includes('.') && numberString=='.'){
            return;
        }

        if(number.startsWith('0') || number.startsWith('-0')){            
            if(numberString=='.'){
                return setNumber(number+numberString);
            }
        }

        // if(number.includes('.') && numberString=='.')return;    
        

        setNumber(number+numberString);
    }

    return{
        formula,
        number,
        prevNumber,

        //methods
        buildNumber
    };
}