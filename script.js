function no() {
    alert("Non puoi usare questa modalità al momento")
}

let n_domanda = 0;

let ordine = [
    "Desi","Puleo","Emma","Bogar"
]

let domanda = [
    "Preferisci che il tuo partner tace o ti piacciono i lamenti?",
    "Fai flessioni sopra il tuo partner steso a terra e bacialo.",
    "Ti piace il sesso anale?",
    "Rimuovi la biancheria intima del giocatore alla tua destra senza togliergli gli altri vestiti.",
    "Qualè la tua fantasia preferita per divertirti?",
    "Tocca le parti intime di una persona del sesso opposto.",
    "Avere un orgasmo falso (con espressioni e suoni del viso adeguati).",
    "Massaggia il sedere di un altro membro del gruppo.",
    "Quand’è stata l’ultima volta che hai fatto sesso.",
    "Benda te stesso, gira intorno per dieci secondi, chiunque stai indicando alla fine, vai nella stanza successiva e goditi 7 minuti di paradiso.",
    "Parlaci del miglior orgasmo che tu abbia mai avuto",
    "Partecipa ai preliminari con me per cinque minuti.",
    "Quand’è stata l’ultima volta che ti sei masturbato/a.",
    "Bacia le parti intime del tuo partner.",
    "Siedi sulle ginocchia di una persona del sesso opposto senza vestiti addosso.",
    "Tocca il seno del tuo partner.",
]

function casuale() {
    document.getElementById("domanda").textContent = domanda[n_domanda];
    n_domanda++
}