const doMath=(n1,n2,operator)=>{
    switch(operator){
    case '+':
            console.log(`The Addition of ${n1} and ${n2} is ${n1+n2}`);
            break;
            
    case '-':
            console.log(`The Subtraction of ${n1} and ${n2} is ${n1-n2}`);
            break;

    case '*':
                console.log(`The Multiplication of ${n1} and ${n2} is ${n1*n2}`);
                break;
    case '/': 
                console.log(`The Division of ${n1} and ${n2} is ${n1/n2}`);
                break;
    case '%':
                console.log(`The Modulus of ${n1} and ${n2} is ${n1%n2}`);
                break;
    case '**':
                console.log(`The Power of ${n1} and ${n2} is ${n1**n2}`);
                break;
    default:
            console.log("Invalid Operator") 
            break;
    }
}
doMath(2,4,"-");