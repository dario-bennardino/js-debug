/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
//VERSIONE CON ERRORI
for (let i = 0; i > 5; i++) {
    console.log(i);
}

/*
E' un ciclo for impostato male non partirà mai poichè la condizione è falsa doveva essere i < 5 allora incrementa

VERSIONE CORRETTA
for (let i = 0; i < 5; i++) {
    console.log(i);
}
*/


// ESERCIZIO 2

//VERSIONE CON ERRORI
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }


//Nell'esercizio 2 c'è un errore non bisogna mettere l'uguale singolo poichè assegna ma un triplo uguale di uguaglianza

//VERSIONE CORRETTA
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}




// ESERCIZIO 3
//VERSIONE CON ERRORI
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

//VERSIONE CORRETTA
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// L'esercizio 3 è una funzione loopFive aveva errori di sintassi in qualnto al posto del ; aveva le virgole nel ciclo for. Adesso stamperà in console da 1 a 4.



// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
/*
E' un ciclo for che mi cicla un array e controlla tutti i numeri dell'array se pari li pusha nel nuovo array evenNumber
Errori
2 errori di sintassi 
- i++; non serve il punto e virgola
- numbers % 2 = 0 invece di numbers % 2 === 0
- La condizione nell'if dovrebbe essere numbers[i] % 2 === 0 e non numbers % 2 = 0
- aggiungere il valore numbers[i]
- Il return dovrebbe essere al di fuori del ciclo for, altrimenti la funzione termina dopo la prima iterazione
- fare il console.log con all'interno la chiamata alla funzione


*/
//VERSIONE CON ERRORI
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];

//     for (let i = 0; i < numbers.length - 1; i++;) {

//         if (numbers % 2 = 0); {
//             //aggiungere il valore numbers[i]
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//         //Il return dovrebbe essere al di fuori del ciclo for, altrimenti la funzione termina dopo la prima iterazione
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


//versione corretta

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    
    return evenNumbers;
}


console.log(displayEvenNumbers());