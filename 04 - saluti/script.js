/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

salutami = (nome) => {
    let saluto = "Ciao ";
    let result = saluto + nome;
    return result 
}

// Invoca la funzione qui e stampa il risultato in console

const salutazione = salutami(name);
console.log(salutazione);


//Risultato atteso se si passa 'Mario': // ciao Mario