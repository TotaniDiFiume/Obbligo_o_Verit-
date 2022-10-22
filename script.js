function no() {
    alert("Non puoi usare questa modalità al momento")
}

let n_domanda = 0;

let ordine = [
    "Desi","Puleo","Emma","Bogar"
]

let domanda = [
    "Preferisci che il tuo partner tace o ti piacciono i lamenti?",
    "Cosa ti eccita di più nel sesso?",
    "Fai flessioni sopra il tuo partner steso a terra e bacialo.",
    "Ti piace il sesso anale?",
    "Rimuovi la biancheria intima del giocatore alla tua destra senza togliergli gli altri vestiti.",
    "Dai a un altro giocatore una succosa sculacciata sul sedere.",
    "Qualè la tua fantasia preferita per divertirti?",
    "Tocca le parti intime di una persona del sesso opposto.",
    "Avere un orgasmo falso (con espressioni e suoni del viso adeguati).",
    "È la tua occasione per brillare! Accendi un po 'di musica e fai uno strip show per il gruppo. Devi rimuovere tutto tranne le mutande.",
    "Massaggia il sedere di un altro membro del gruppo.",
    "Quand’è stata l’ultima volta che hai fatto sesso.",
    "Twerk per 30 secondi.",
    "Benda te stesso, gira intorno per dieci secondi, chiunque stai indicando alla fine, vai nella stanza successiva e goditi 7 minuti di paradiso.",
    "Parlaci del miglior orgasmo che tu abbia mai avuto",
    "Scegli qualcuno dal gruppo per darti una sculacciata.",
    "L’hai mai preso nel sedere.",
    "Partecipa ai preliminari con me per cinque minuti.",
    "Quand’è stata l’ultima volta che ti sei masturbato/a.",
    "Qual è il tuo giocattolo 'speciale' preferito.",
    "Bacia le parti intime del tuo partner.",
    "Hai mai avuto orgasmi multipli?",
    "Siedi sulle ginocchia di una persona del sesso opposto senza vestiti addosso.",
    "Ottieni un altro giocatore molto eccitato.",
    "Tocca il seno del tuo partner.",
    "Twerk solo in mutande per un minuto.",
    "Con quante persone hai dormito.",
    "Racconta la tua prima volta con una voce sexy.",
    "Bacia il culo a qualcuno.",
    "La tua più grande vergogna a letto.",
    "Sei mai stato scoperto mentre facevi sesso?",
    "Mostra al gruppo le tue tette.",
    "Fai una lap dance in topless alla persona più lontana da te.",
    "Chi è la tua porno star preferita.",
    "Fai la tua migliore posa yoga in mutande.",
    "Hai mai fantasticato su una persona di fronte a te?",
    "Togliti due capi di abbigliamento, il gruppo decide quali pezzi.",
    "Scegli qualcuno dal gruppo per darti una sculacciata.",
    "Racconta la storia di come hai perso la verginità.",
    "Qual’è la cosa più cattiva che tu abbia mai fatto sotto la doccia?",
    "Fai un giro per 10 secondi. Bacia la persona davanti a te alla fine della rotazione.",
    "Fai il tuo miglior orgasmo mentre guardi un membro del gruppo.",
    "Fai una lap dance in topless alla persona più lontana da te.",
    "Qual’è il maggior numero di orgasmi che hai raggiunto in una notte.",
    "Togliti i pantaloni davanti al resto del gruppo.",
    "Il gruppo decide chi chiamare, devi provare a convincerli a fare sesso con te.",
    "Fai una lap dance alla persona di fronte a te.",
    "Metti la mano sulle parti intime di un altro giocatore per 10 secondi.",
    "Siediti sulle ginocchia di un membro del gruppo fin che non si eccita.",
    "Devi tenere la mano sull’interno della coscia della persona accanto a te per il prossimo round.",
    "Fai un'impressione della tua posizione sessuale preferita con un cuscino"
]

function casuale() {
    document.getElementById("domanda").textContent = domanda[n_domanda];
    n_domanda++
}