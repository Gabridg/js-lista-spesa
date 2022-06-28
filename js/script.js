/*
Descrizione:
Rivediamo l’esercizio della lista della spesa visto insieme, 
ma questa volta con il ciclo while al posto del ciclo for. Facciamo 
attenzione a non dimenticare tutte le differenze implementative che il 
ciclo while ci impone, in particolare alla variabile di indice.
Consigli:
Potete provare a fare l'esercizio una prima volta col for e poi convertire 
piano piano in while.
Lista della spesa (da convertire in array)
1 Uova
2 Pane
3 Latte
4 Biscotti
5 Pasta
6 Affettati
7 Formaggio
8 Verdura
9 Frutta
*/
console.log('JS OK');

const listItem = ["uova", "pane", "latte", "biscotti", "pasta", "affettati", "formaggio", "verdura", "frutta"];

const shopList = document.getElementById('lista-spesa');



// for (let i = 0; i < listItem.length; i++) {
//     item += `<li> ${listItem[i]}</li>`;

// }

let item = '';

let i = 0;

while (i < listItem.length) {
    item += `<li> ${listItem[i]}</li>`;
    i++;
}

shopList.innerHTML = item;

console.log(item);