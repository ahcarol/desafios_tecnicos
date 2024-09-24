function fibonacci(n) {
    let a = 0, b = 1, temp;
    while (b < n) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b === n || n === 0;
  }
  
  let numero = 21; 
  
  if (fibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }


  //tentei desenvolver mais um dos códigos