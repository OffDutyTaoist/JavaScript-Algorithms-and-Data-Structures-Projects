let num = 3; 

function factorialCalculator(n) {
 
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    throw new Error("factorialCalculator expects a non-negative integer.");
  }
  
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
