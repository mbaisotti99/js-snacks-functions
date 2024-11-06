/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.


getInitials = (array) => {
    
    let initials = [];
    for (i = 0; i < array.length; i++){
        initials[i] = array[i].slice(0,1); 
    }
    return initials;
}

// Invoca la funzione qui e stampa il risultato in console

const init = getInitials(names);

console.log(init);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]