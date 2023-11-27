/* DICHIARAZIONE ARRAY SPESA */
const spesa = ["uova", "pecorino", "guanciale", "pepe", "pasta", "pane", "tonno", "insalata"]

/* DICHIARAZIONE VARIABILE i A 0 */
let i = 0;

/* CICLO WHILE */ /* FINCHE i è MINORE DELLA LUNGHEZZA DELL'ARRAY */
while( i < spesa.length){
    
    /* COSTANTE prodotto */
    const prodotto = spesa[i] ;

    /* ANDIAMO A RIPRENDERE LA LISTA NELL'HTML E GLI AGGIUNGIAMO UNA LI CON IL PRODOTTO AD OGNI CICLO */
    document.querySelector(`ul`).innerHTML += `<li>${prodotto}</li>`

    /* STAMPIAMO I PRODOTTI IN CONSOLE */
    console.log(prodotto)

    /* AD OGNI CICLO i AUMENTA DI 1 */
    i++

}