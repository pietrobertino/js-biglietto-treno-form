//Inserisco l'età del passeggero in una costante
// const passenger_age = document.getElementById("passenger_age").value;

// //Inseriesco i km da percorrere in una costante
// const km = document.getElementById("ticket_km").value;

//Chiedo all'utente la sua età
const passenger_age  = Number(prompt("Digita la tua età"));

//Chiedo all'utente i kilometri che vuole percorrere
const km = Number(prompt("Digita i km da percorrere"));



//definisco la funzione per calcolare il prezzo del biglietto
function getTicketPrice(age,km) {

    const rate_per_km = 0.21;
    let discount_multiplier = 1;
    let price;

    if (age<18) {
        discount_multiplier = 0.8;
    } else if (age>=65) {
        discount_multiplier = 0.6;
    }

    price = rate_per_km*km*discount_multiplier;

    return price.toFixed(2);
}

console.log(getTicketPrice(passenger_age,km));