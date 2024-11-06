/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

getVowels = (string) =>
    {
        let vowelsNumb = 0;
        const vowels = ["a", "e", "i", "o", "u"]
        letters = string.split('')
        for (let i = 0; i < letters.length; i++){
            for (let j = 0; j < vowels.length; j++){
                if (letters[i] === vowels[j]){
                    vowelsNumb++
                } 
            }
        }
        return vowelsNumb; 
    }

// Invoca la funzione qui e stampa il risultato in console

let result = getVowels(word);
console.log(result);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)