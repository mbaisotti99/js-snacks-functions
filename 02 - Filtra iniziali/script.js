/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

getLetter = (init, array) => {
    let word = [];
    for (let i = 0; i < array.length; i++)
        {
            if (array[i].includes(init))
                {
                    word.push(array[i])
                }
        }
    return word;
}

// Invoca la funzione qui e stampa il risultato in console

const result = getLetter("A", names)
console.log(result);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]