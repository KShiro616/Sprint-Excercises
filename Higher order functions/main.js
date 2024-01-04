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

const beerIteratorV3 = (beers) => {
  return beers.map((beer) => {

    const whatBeerIsIt = { 
      name: beer.name,
      image: `${beer.image_url}`,
      description: beer.description,
      abv: beer.abv
    };

      return whatBeerIsIt;
  }
  );
} 

const cardMaker = (beerSelection) => {
  
  beerSelection.forEach(beer => {
    const main = document.querySelector("main");
    const card = `
    <article class="card">
    <h1>${beer.name}</h1>
    <img src="${beer.image}">
    <h2>${beer.abv > 6 ? `Quite Strong! [${beer.abv} abv]` : `Rather average [${beer.abv} abv]`} </h2>
    <p>${beer.description}</p>
    </article>
    `;
    main.innerHTML+= card;
    
  });
  
}

cardMaker(beerIteratorV3(beers))





