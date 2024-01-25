// function getAlpha(char) {
// // Convert the input character to uppercase and get its ASCII value
//     let A = char.toUpperCase().charCodeAt(0);
// // Check if the ASCII value corresponds to an uppercase letter (A-Z)
//     if (A >= 65 && A <= 90) {
// // If it's a valid uppercase letter, return its position in the alphabet
//    return A - 64; // A=1, B=2, ...
//     }
// // If the character is not an uppercase letter, return -1 (indicating an invalid character)

// return-1;
//  }

//  let result = getAlpha("A")/getAlpha("A")
//  console.log(result);

// for(let i=result; i<=100 ;i++){
//     console.log(i);
// }



function getAlpha(char) {
    let A = char.toUpperCase().charCodeAt(0);
    if (A >= 65 && A <= 90) {
   return A - 64; // A=1, B=2, ...
}
return-1;
 }

 let result = getAlpha("A")/getAlpha("A")
 console.log(result);

for(let i=result; i<=100 ;i++){
    console.log(i);
}