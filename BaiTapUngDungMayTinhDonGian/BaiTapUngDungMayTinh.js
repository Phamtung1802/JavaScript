    So1= document.getElementById('Num1').value;
    So2= document.getElementById('Num2').value;
    function Add() {
        Result=So1+So2;
        console.log(Result);
        document.getElementById('Result').value= Result;
    }
    function Subtract() {
        Result=So1-So2;
        console.log(Result);
        document.getElementById('Result').value= Result;
    }
    function Multi() {
        Result=So1*So2;
        console.log(Result);
        document.getElementById('Result').value= Result;
    }
    function Division() {
        Result=So1/So2;
        console.log(Result);
        document.getElementById('Result').value= Result;
    }
