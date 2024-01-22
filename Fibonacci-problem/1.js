let userInput = prompt("Please provise the input");

let userInputtoNumber = parseInt(userInput);

if (isNaN(userInputtoNumber)) {
    console.log("Invalid input.please enter a valid number");

} else {
    let sum=0;
    let fibo1= 0;
    let fibo2=1;

for(let i=0; i <= userInputtoNumber; i++){
   console.log(fibo1);
   let nexfib = fibo1 + fibo2;  //1+1 nexfib=2
   fibo1 = fibo2 //  fibo= 1
   fibo2 = nexfib; // fibo2 = 1
   sum += fibo1 //

    };

 console.log("Sum of the Fibonacci sequence up to", userInputtoNumber, "is:", sum);

};
