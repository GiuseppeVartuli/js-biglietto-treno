/*
 Descrizione:
Il programma dovrà chiedere all'utente:

 il numero di chilometri che vuole percorrere
e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

Queste sono le regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli).
L'output del prezzo finale va stampata in pagina assicurandoci sia leggibile da un essere umano (massimo due cifre decimali, per indicare centesimi sul prezzo). 
*/

// Numero km :

const km = prompt("Quanti km devi effettuare?");

// Età passeggero :

const age = prompt("Quanti anni hai?");

// Prezzo del biglietto :

const price = km * 0.21;

console.log(price);

// Calcolo per minoremmi o over 65:

if (age < 18) {
  const minor = (price * 20) / 100;

  console.log(minor);
} else if (age > 65) {
  const over = (price * 40) / 100;

  console.log(over);
}

// Stampare in pagina

const prezzo = document.getElementById("prezzo");

prezzo.innerHTML = `il costo del biglietto è: ${price}`;
