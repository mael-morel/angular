
// un tableau d'objets
var fruits = [
    {nom: 'fraise', couleur: 'rouge'},
    {nom: 'poire', couleur: 'jaune'},
    {nom: 'pomme', couleur: 'vert'},
    {nom: 'cerise', couleur: 'rouge'}
    ];

//simple fonction nommée
function printFruit(fruit) {
    console.log(fruit.nom + ' ' + fruit.couleur);
}

// usage d'une callback
function processFruit(fruitsArray, myCallback) {
    //usage d'une fonction anonyme comme callback
    fruitsArray.forEach(function(fruit){
        // usage de la callback
        myCallback(fruit);
    });

    myCallback(fruitsArray[0]);
}

//la fonction nommée 'printFruit' est passée en paramètre
processFruit(fruits, printFruit);

function fruitsFilter(fruit) {
    return fruit.couleur === 'rouge';
}

var fruit = fruits.filter(fruitsFilter);

console.log(fruit);
