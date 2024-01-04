
// //1
// function printMessage( message ) {

//   console.log( message );

// };

// const printMessage = (message) => console.log(message);

// printMessage("quite the message")

// //2
// function createMultplication (number1, number2) {

//   let result = number1 * number2;

//   return result;

// };

// const createMultplication = (number1,number2) => number1 * number2;

// //3

// const array = [ 1,2,3,4,5,6,7,8,9 ];

// console.log(array.map(element => createMultplication(element, element)));

// //4

// const sortBeersABV = (beers) => {
//   const sortedBeers = beers.sort((a, b) => b.abv - a.abv)

//   return sortedBeers.slice(0, 10);
// }

// console.log(sortBeersABV(beers));

// //5

// const sortBeersIBU = (beers) => {
//   const sortedBeers = beers.sort((a, b) => a.ibu - b.ibu);


//   for (let i = 0; i < sortedBeers.length; i++) {
//     typeof sortedBeers[i].ibu === "number" ? "" : sortedBeers.shift(i); 
//   };
//    //si la cerveza iterada NO tiene definido IBU, la saca del array que devolvió el sort.

//   return sortedBeers.slice(0, 10);
// } 

// console.log(sortBeersIBU(beers));

// //6

// const matchBeerName = (beers, nameToMatch) => {
//   let match =  `Beer "${nameToMatch}" not found!`;

//     beers.forEach(beer => {
//     if (beer.name === nameToMatch) match = beer;
//   });

//   return match
// }
// console.log(matchBeerName(beers, "Buzz"));

//7

// const matchBeerIBU = (beers, IBUToMatch) => {
//   //Nos aseguramos de que el IBU sea un número.
//   if (typeof IBUToMatch !== "number") return console.error("You must input a number for the IBU!");

//   let match =  `There is no beer with an ibu of "${IBUToMatch}"`;

//   for (const beer of beers) {
//     if (beer.ibu === IBUToMatch) match = beer;
//   }

//   return match;
// }
// console.log(matchBeerIBU(beers, 38))

//8

// const beerOnIndex = (beers, beerName) => {
//   for (let i = 0; i < beers.length; i++) {
//     if (beers[i].name === beerName) return `The position of the beer "${beerName}" in the beers array is [${i}]`;
//   }

//   return console.error(`"${beerName}" does not exist`)

// };

// console.log(beerOnIndex(beers, "Fake Lager"));

//9

// const limitBeerAlcoholLevel = (beers, ABVNotToExceed) => {
//   //nos aseguramos de que ABVNotToExceed sea un numero.
//   if (typeof ABVNotToExceed !== "number") return console.error("You must input a number for the ABV!")

//   const beersWithinABVLevel = [];

//   for (const beer of beers) {
//     if (beer.abv <= ABVNotToExceed) {
//       const withinABVLevel = {
//         name: beer.name,
//         abv: beer.abv,
//         ibu: beer.ibu
//       }

//       beersWithinABVLevel.push(withinABVLevel)
//     }
//   }

//   return beersWithinABVLevel;

// }

// console.log(limitBeerAlcoholLevel(beers, 5));


//10

// function sortBeerByProperty(beers, propertyName, boolean ) {

//   //Nos aseguramos de que la propiedad exista.
//   if(!beers[0].hasOwnProperty(propertyName)) return console.error(`The property "${propertyName}" does not exist as a beer property`);
//   //nos aseguramos de que el tercer valor sea un valor booleano.
//   if(typeof boolean !== "boolean") return console.error(`The third parameter "${boolean}" must be a Boolean! Either true or false.`);

//     if(boolean) {
//       const sortedBeers = beers.sort((a, b) => b[propertyName] - a[propertyName])
//       return sortedBeers.slice(0, 10);
//     } else {
//       const sortedBeers = beers.sort((a, b) => a[propertyName] - b[propertyName])
//       return sortedBeers.slice(0, 10);
//     }
// }

// console.log(sortBeerByProperty(beers, "ibu", false));












