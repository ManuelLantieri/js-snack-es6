// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// scrivo funzione che in un array prenda elementi da un punto ad unaltro
function getArrayElement(array, a, b) {
    const arraySelectedElements = [];

    for(let i = a; i <= b; i++) {
        arraySelectedElements.push(array[i])
    }
    return arraySelectedElements;
}

// scrivo un array di città

const city = ["Roma", "Torino", "Napoli", "Milano", "Venezia", "Bari", "Firenze"]

// utilizzo la funzione su questo arrai
const newArrayCity = getArrayElement(city, 2, 4);
console.log(newArrayCity);