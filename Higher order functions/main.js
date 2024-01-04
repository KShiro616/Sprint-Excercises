// function printMessage( message ) {

//   console.log( message );

// };

const printMessage = (message) => console.log(message);

printMessage("quite the message")

// function createMultplication (number1, number2) {

//   let result = number1 * number2;

//   return result;

// };

const createMultplication = (number1,number2) => number1 * number2;

const array = [ 1,2,3,4,5,6,7,8,9 ];

console.log(array.map(element => createMultplication(element, element)));





