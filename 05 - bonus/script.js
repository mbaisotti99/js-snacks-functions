/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

salutamiBene = (nome) => {
    date = new Date ();
    let saluto = ""
    let hour = date.getHours();
    if (hour > 13 && hour < 17){
        saluto = `Buon Pomeriggio ${nome} sono le ${hour}:${date.getSeconds()}`
    }else if (hour >= 17 && hour <= 22) {
        saluto = `Buonasera ${nome}, sono le ${hour}:${date.getSeconds()}`
    } else if (hour > 22 || hour === 0 || hour <= 5){
        saluto = `Buonanontte ${nome} sono le ${hour}:${date.getSeconds()} Un adeguato riposo notturno è un elemento fondamentale per uno stile di vita sano e attivo`
    } else if (hour > 5 && hour <= 13){
        saluto = `Buongiorno ${nome} sono le ${hour}:${date.getSeconds()}` 
    }
    return saluto
}


// Invoca la funzione qui e stampa il risultato in console

message = salutamiBene(name);
console.log(message);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
