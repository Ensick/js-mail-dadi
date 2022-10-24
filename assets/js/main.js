
// Mail
// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer

let listaemail = ["fede.censi96@gmail.com" , "marco96@gmail.com" , "kevin96@gmail.com"]

// console.log(listaemail)

let scriviemail = document.getElementById("email")

let verifica =  document.getElementById("verifica")


function controllaEmail(){

   scriviemail.value
   
   scriviemail.push


   let conferma = false

   for (let x = 0; x < listaemail.length; x++){

    if(listaemail[x] === scriviemail.value){

        conferma = true
        console.log("sei gia registrato")
    }

   }

   if(conferma == true){

        verifica.innerText = `Sei già registrato!`

   }else{

        verifica.innerText = `Non sei già registrato!`
        
   }

   

}


