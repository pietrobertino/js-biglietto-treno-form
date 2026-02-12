
//Registro il nodo dell'input dell'età e dell'input dei km in due costanti, 
// ed una per il nodo del form e per il nome del passeggero

const ageInputNode = document.getElementById("passenger_age");
const kmInputNode = document.getElementById("ticket_km");
const nameInputNode = document.getElementById("passenger_name");
const formNode = document.querySelector("form");

//Registro i nodi necessari per l'output in delle costanti
const ticketNode = document.querySelector(".ticket_info");
const nameOutputNode = document.querySelector(".name");
const priceOutputNode = document.querySelector(".price");
const carriageNode = document.querySelector(".carriage");
const ticketNumberNode = document.querySelector(".ticket_number");

//Definisco la funzione per calcolare il prezzo del biglietto
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

//Definisco una funzione che mi calcoli il vagone 
const getCarriageNumber = () =>  Math.floor(Math.random() * 12) + 1;

//Definisco una funzione che mi calcoli il numero del biglietto
function getTicketNumber() {
    let ticket_number = "";
    for (let i=0; i<6; i++) {
        ticket_number += Math.floor(Math.random() * 10);

    }
    return ticket_number;
}

//aggiungo un event listener per quando viene sumbittato il form
formNode.addEventListener("submit", function(event){
    
    //Blocco il refresh della pagina (default behaviour del submit)
    event.preventDefault();

    //rendo visibile il blocco dell'output
    ticketNode.style.display = "block";


    //assegno i valori inseriti dall'utente all'interno degli input a delle
    //appropriate costanti
    const passenger_age = ageInputNode.value;
    const route_km = kmInputNode.value;
    const full_name = nameInputNode.value;

    //Calcolo il prezzo del biglietto richiamando la funzione definita in precedenza
    //utilizzando le variabili appena create come argomenti e lo registro 
    //in una costante
    const price = getTicketPrice(passenger_age, route_km);
    const ticket_number = getTicketNumber();
    const carriage_number = getCarriageNumber();

    //Inserisco i valori del nome e del prezzo del biglietto all'interno dei
    //rispettivi elementi HTML
    nameOutputNode.innerHTML += full_name;
    priceOutputNode.innerHTML += `&euro; ${price}`;
    carriageNode.innerHTML += carriage_number;
    ticketNumberNode.innerHTML += ticket_number;
    
})
