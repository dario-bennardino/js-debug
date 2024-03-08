/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
//La funzione checkAge() valuta la variabile myAge e generare un messaggio basato sui creiteri impostati
//Errori: message non può essere una costante ma una variabile poichè gli assegneremo valori variabili quindi è una let

//VERSIONE CON ERRORI
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

//VERSIONE CORRETTA
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();


// ESERCIZIO 2
// La funzione definisce un array colors contenente cinque stringhe di nomi di colori
// Errore di battitura lenght invece di length
//Errore di battitura nel console.log degli apici

function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();




// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();





























