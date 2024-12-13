// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// array di oggetti(bici)

const bikes = [
    {
        brandName: "Specialized",
        weight: 1500
    },
    {
        brandName: "Bianchi",
        weight: 1000
    },
    {
        brandName: "Cannondale",
        weight: 700
    },
    {
        brandName: "Colnago",
        weight: 850
    }
];

// ordinamento degli oggetti in base al peso dal più leggero al più pesante

let bike = bikes[0]

for(let i = 0; i < bikes.length; i++) {
    if(bikes[i].weight < bike.weight) {
        bike = bikes[i];
    }
}
// stampo la bici più leggera

console.log(`la bici più leggera è la ${bike.brandName}`)