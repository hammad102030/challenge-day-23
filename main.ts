// Day 23

// ### Question 1: Calculate the Factorial of a Number
// Task: Write a function calculateFactorial that takes a number as input and returns its factorial.

// Hint: Factorial means multiplying a number by all positive integers less than it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function calculate_Factorial(num: number): number {
  let total_Num = 1;

  for (let i = 1; i <= num; i++) {
    total_Num *= i;
  }
  return total_Num;
}

const result_1 = calculate_Factorial(5);
const result_2 = calculate_Factorial(4);

console.log(result_1);// Output: 120
console.log(result_2);// Output: 24

// ### Question 2: Convert a Number to Binary (Without Using Built-in Functions)
// Task: Write a function convertToBinary that takes a number as input and converts it into its binary form.

// Hint: Repeatedly divide the number by 2 and note down the remainder. Join the remainders in reverse order to get the binary representation.

function convert_To_Binary(num_1: number): string {

    let binary = " ";

    while(num_1 > 0) {
        let remainder = num_1 % 2
        binary = remainder + binary;
        num_1 = Math.floor(num_1 / 2)

    }
    return binary || "0"
};

const new_Result = convert_To_Binary(10);
const new_Result_1 = convert_To_Binary(5);

console.log(new_Result);// Output: 1010
console.log(new_Result_1);// Output: 101