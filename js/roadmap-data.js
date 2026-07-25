/* ============================================================
   ROADMAP STAFF - Obiettivi di partenza
   Questi obiettivi vengono caricati SOLO la prima volta (se il
   browser non ha ancora dati salvati). Dopo la prima apertura,
   tutte le modifiche (nuovi obiettivi, commenti, completamenti)
   vengono salvate in localStorage e questa lista non viene più
   letta automaticamente: per aggiungerne altri usa il pulsante
   "+ Nuovo obiettivo" direttamente nella pagina.
   ============================================================ */

const ROADMAP_DEFAULT_GOALS = [
  {
    title: "Controllare lavoro Vanilla Unicorn",
    description:
      "1. Prendere il lavoro del Vanilla Unicorn.\n" +
      "2. Testare le funzionalità di crafting dei drink/oggetti previsti.\n" +
      "3. Testare la postazione DJ (avvio, cambio brano, volume in area).\n" +
      "4. Verificare che gli spawn point e le animazioni del personale funzionino correttamente.\n" +
      "5. Segnalare qui sotto nei commenti eventuali bug o comportamenti anomali riscontrati."
  },
  {
    title: "Controllare shop.html e i prezzi",
    description:
      "1. Aprire ogni categoria dello shop e verificare che le immagini si carichino.\n" +
      "2. Confrontare i prezzi mostrati con quelli effettivi in game.\n" +
      "3. Segnalare eventuali prodotti mancanti o non più disponibili."
  }
];
