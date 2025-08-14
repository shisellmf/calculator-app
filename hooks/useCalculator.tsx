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

    const lastOperation = useRef<Operator>(undefined);

    const clean= ()=>{
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
       
        lastOperation.current= undefined;
    }

    useEffect(()=>{
        if(lastOperation.current){
            const firstFormulaPart= formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        }else{
            setFormula(number)
        }
    },[number]);

    useEffect(()=>{
       const subResult= calculate();
       setPrevNumber(subResult.toString())
    },[formula]);

    const toggleSign= ()=>{
        if(number.includes('-')){
            return setNumber(number.replace('-',''));
        }
        return setNumber('-'+number);        
    }

    const deleteLast=()=>{
        if(number.length==1 || number.length==2 && number.includes('-')){
            return setNumber('0');
        }
        
        return setNumber(number.slice(0,-1));
    }

    const buildNumber= (numberString:string)=>{

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

    const setLastNumber= ()=>{
        showResult();
        if(number.endsWith('.')){
            setPrevNumber(number.slice(0,-1))
        }
        setPrevNumber(number);
        setNumber('0');
    }

    const devideOperation= ()=>{
        setLastNumber();
        lastOperation.current= Operator.divide;

    }

    const multiplyOperation= ()=>{
        setLastNumber();
        lastOperation.current= Operator.multiply;
    }

     const addOperation= ()=>{
        setLastNumber();
        lastOperation.current= Operator.add;
    }

     const subtractOperation= ()=>{
        setLastNumber();
        lastOperation.current= Operator.subtract;
    }

    const calculate=()=>{
       
        const [firstValue,Operation,secondValue] = formula.split(' ');
        const num1= Number(firstValue)
        const num2= Number(secondValue)
        if(isNaN(num2))return num1;

        switch (Operation){
            case Operator.add:
                return num1+num2;
            case Operator.subtract:
                return num1-num2;
            case Operator.divide:
                return num1 / num2;
            case Operator.multiply:
                return num1 * num2;
            default:
                throw new Error('Operación invalida')
        }

    }

    const showResult=()=>{
        const result = calculate();
        setFormula(`${result}`);

        lastOperation.current= undefined;
        setPrevNumber('0');
    }

    return{
        formula,
        number,
        prevNumber,

        //methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        devideOperation,
        multiplyOperation,
        addOperation,
        subtractOperation,
        calculate,
        showResult
    };
}