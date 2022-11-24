// 
/** GIOCO DEI DADI:
 *  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.

    1. Generare un numero random due volte: una per il giocatore e una per il computer;
    2. Comparare i numeri:
        2.1 SE il numero del giocatore è più alto del numero del computer ALLORA il giocatore ha vinto;
        2.2 SE il numero del computer è più alto del numero del giocatore ALLORA il computer ha vinto;
        2.3 SE i due numeri sono uguali ALLORA non ha vinto nessuno.
 */

// 1.

const quote = 'Il numero uscito dal dado';

let playerNumber = Math.floor(Math.random() * 6) + 1;

document.getElementById('output-1').innerHTML = quote + ' del giocatore é: ' + playerNumber;
console.log(playerNumber);

let computerNumber = Math.floor(Math.random() * 6) + 1;

document.getElementById('output-2').innerHTML = quote + ' del computer é: ' + computerNumber;
console.log(computerNumber);

// 2.

let winner;

if ( playerNumber > computerNumber ) {
    winner = 'IL GIOCATORE HA VINTO!';
} else if ( computerNumber > playerNumber ) {
    winner = 'IL COMPUTER HA VINTO!';
} else {
    winner = 'Non ha vinto nessuno, ritira il dado!';
}

console.log(winner);
document.getElementById('output-3').innerHTML = winner;
