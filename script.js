const doMath=(operator)=>{
        let n1=Number(document.getElementById("n1").value);
        let n2=Number(document.getElementById("n2").value);
        let result="";
    switch(operator){
    case '+':
           // console.log(`The Addition of ${n1} and ${n2} is ${n1+n2}`); 
            result=`The Addition of ${n1} and ${n2} is ${n1+n2}`;
            break;
            
    case '-':
            //console.log(`The Subtraction of ${n1} and ${n2} is ${n1-n2}`);
            result=`The Subtraction of ${n1} and ${n2} is ${n1-n2}`
            break;

    case '*':
                //console.log(`The Multiplication of ${n1} and ${n2} is ${n1*n2}`);
                 result=`The Multiplication of ${n1} and ${n2} is ${n1*n2}`
                break;
    case '/': 
                //console.log(`The Division of ${n1} and ${n2} is ${n1/n2}`);
                result=`The Division of ${n1} and ${n2} is ${n1/n2}`
                break;
    case '%':
                //console.log(`The Modulus of ${n1} and ${n2} is ${n1%n2}`);
                result=`The Modulus of ${n1} and ${n2} is ${n1%n2}`
                break;
    case '**':
                //console.log(`The Power of ${n1} and ${n2} is ${n1**n2}`);
                result=`The Power of ${n1} and ${n2} is ${n1**n2}`
                break;
    default:
            //console.log("Invalid Operator") 
                result="Invalid Operator"
            break;
    }
    document.getElementById("result").innerText=result;
}
//doMath(2,4,"-");