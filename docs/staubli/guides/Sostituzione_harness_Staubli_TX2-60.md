# Sostituzione harness -- Stäubli TX2-60

## Guida operativa sintetica basata sugli appunti del corso

> **Avvertenza:** questa guida riorganizza gli appunti del corso. Non sostituisce il manuale ufficiale Stäubli. Prima
> dell'intervento verificare la revisione del manuale applicabile al
> modello esatto, alla versione del controllore e alla
> configurazione del robot. Se una fase non è chiara o richiede una
> forzatura, fermarsi e consultare il manuale o l'assistenza Stäubli.

## 1. Materiale e attrezzatura

-   Connettore di manutenzione e connettore alimentazione 24 V.
-   Pendant.
-   Dispositivo di sblocco freni; se necessario, alimentazione esterna a
    24 V.
-   Utensili adatti alle viti presenti, comprese brugole piccole e
    utensile per estrarre i terminali/fasi.
-   Pennarelli di colori diversi, nastro adesivo (preferibilmente con
    una linea ben visibile).
-   Contenitori separati per viti e minuteria, organizzati per zona e
    fase di smontaggio.
-   Fotocamera/telefono.
-   Guanti adatti al lavoro con componenti ingrassati.
-   Tensionimetro per cinghie, se disponibile. In alternativa, un'app di
    analisi della frequenza può essere usata: consigliata l'app **"Smart Belt Drive"**.

## 2. Azioni preliminari

1.  **Portare il robot in posizione di riferimento.** Dal pendant aprire
    `Robot > Calibration > Reference` e selezionare `Factory Marks`. Allineare gli assi ai riferimenti di fabbrica (circa 0°). Il J3 viene invece portato a circa 90° per agevolare l'accesso.
2.  **Se un asse non può essere mosso in jog normalmente**, usare lo sblocco
    freni.
3.  Dal menu `Robot > Calibration`, creare e salvare un riferimento del
    robot (per esempio `REF1`) nella posizione di lavoro. Annotare i
    valori degli assi e verificare che il riferimento sia stato
    memorizzato correttamente.
4.  Rimuovere i carter necessari per accedere ai vani.
5.  **Creare riferimenti fisici per il J4**, fondamentale per
    ripristinare la posizione:
    -   applicare nastro con una linea che attraversi le due parti del
        braccio ai lati del J4;
    -   tracciare un riferimento tra puleggia e struttura fissa;
    -   fotografare i segni e la posizione della puleggia. I riferimenti
        fisici aiutano il rimontaggio, ma non sostituiscono la verifica
        della calibrazione.
6.  Fotografare tutti i vani **prima di scollegare o spostare
    componenti**, includendo instradamento, colori, numerazioni, connettori, terre, fascette e passaggi dei cavi. Ripetere le foto dopo aver liberato un gruppo.

## 3. Messa in sicurezza prima dello smontaggio

1.  Spegnere il controllore e scollegare la presa di alimentazione 24 V.
2.  Indossare guanti: il grasso presente nell'area del cablaggio può
    impregnare le mani.

## 4. Smontaggio dell'harness

### 4.1 Rimozione del polso

1.  Estrarre in parte il polso.
2.  Rimuovere la staffa a L.
3.  Scollegare i connettori identificati per gli assi 5 e 6 e i
    connettori encoder, fotografando e annotando numeri e orientamento.
4.  Scollegare il collegamento di terra del polso.
5.  Estrarre il polso.

### 4.2 Piastra I/O e pacco valvole -- apertura J2, lato valvole

1.  Fotografare il cablaggio e la disposizione delle fascette nella
    zona.
2.  Svitare la piastra delle valvole quanto basta per liberare i cavi
    I/O; rimuovere le fascette che impediscono l'estrazione.
3.  Scollegare i connettori di alimentazione del pacco valvole.
4.  Fotografare i tubi pneumatici, includendo marcature, colori e punti
    di collegamento (in quali asole alloggiano).
5.  Scollegare i tubi pneumatici. Dove presenti, usare i raccordi rapidi
    senza tirare o piegare i tubi. 
6.  Estrarre il pacco valvole/elettrovalvole svitando i fissaggi
    previsti.

### 4.3 Apertura J4 e liberazione dei cavi del polso

1.  Dall'apertura J4, fotografare l'instradamento dei cavi dietro il
    motore e sotto il carter.
2.  Sfilare con cautela i cavi del polso e scollegare i connettori
    ancora collegati.
3.  Rimuovere le fascette che vincolano il cablaggio e il carter nero,
    conservando la posizione di ogni fissaggio.

### 4.4 Cinghia e motore J4

1.  **Misurare e registrare la tensione iniziale della cinghia** prima
    di allentarla.
2.  Allentare gradualmente la vite di tensionamento per scaricare la
    tensione.
3.  Rimuovere le 4 viti previste per liberare il motore. Raccomandato di   non alterare inutilmente le 3 viti di fissaggio al casting.
4.  Togliere la cinghia senza danneggiarla e senza spostare la puleggia
    oltre i riferimenti registrati.
5.  Scollegare il connettore encoder del J4 e rimuovere il motore
    secondo la sequenza prevista.
6.  Fotografare la zona retrostante al motore, il percorso dei cavi e la
    posizione delle fascette.

### 4.5 Fasi motore, terre e fascette -- aperture J2/J3/J4

1.  Dalle aperture J2 lato motori e J4, identificare e fotografare le
    fasi del motore prima di scollegarle.
2.  Scollegare le fasi con l'estrattore corretto previsto per i
    terminali. Non fare leva sui fili e non usare utensili troppo
    grandi: si rischia di danneggiare il terminale o l'isolamento.
3.  Rimuovere le fascette metalliche e le altre fascette che vincolano
    l'harness, facendo attenzione ai bordi taglienti e a non incidere
    l'isolamento.
4.  Dalle aperture J2 lato motori e J3, rimuovere i collegamenti di
    terra. Se possibile, togliere la vite e riavvitarla nella sua sede
    per evitare di perderla; mantenere identificata ogni terra. Scollegare connettori encoder e 24 V (un connettore 24 V è in più, agganciato a una staffa).

### 4.6 Estrazione dei tubi e del cablaggio

1.  Verificare che siano stati liberati tutti i fissaggi e scollegati
    tutti i connettori, le terre e i tubi necessari.
2.  Raggruppare i cavi in fasci gestibili usando nastro temporaneo,
    senza stringere eccessivamente e senza coprire identificazioni o
    danneggiare i connettori.
3.  Sfilare prima i tubi pneumatici quando richiesto dal percorso e
    dalla configurazione; evitare torsioni, pieghe strette e trazioni
    sui raccordi. I cavi I/O, più ingombranti, vanno gestiti per ultimi nella sequenza di estrazione indicata dagli appunti, dopo aver liberato il percorso degli altri cavi. Se il cablaggio non scorre, **non forzare**: cercare una fascetta o un vincolo ancora presente.
4.  Procedere nell'ordine indicato, verificando il
    percorso reale del cablaggio:
    -   estrarre dalla zona J3;
    -   proseguire dall'apertura J2 lato valvole;
    -   completare dall'apertura J2 lato motori.
5.  Estrarre il cablaggio completo mantenendo protetti i connettori e
    annotando l'orientamento di ogni gruppo.

### 4.7 Rimozione della parte inferiore e della scheda DSI

1.  Fotografare la parte inferiore e l'orientamento del componente nero.
2.  Svitare il componente nero alla base del robot e sfilarlo senza
    intrappolare i cavi.
3.  Aprire il coperchio dell'alloggiamento della scheda DSI e
    fotografare scheda, connettori, guarnizioni e orientamento.
4.  Rimuovere la scheda DSI secondo la procedura prevista, senza toccare
    o piegare contatti e componenti elettronici.
5.  Conservare la scheda originale in modo protetto: la scheda del vecchio harness viene trasferita sul nuovo cablaggio.
6.  A questo punto, completare l'estrazione dell'harness.

## 5. Preparazione del nuovo harness

1.  Confrontare il nuovo harness con quello rimosso: verificare che non vi siano differenze di variante o di orientamento della piastra di supporto. Configurazione della piastrina diversa per montaggio verticale/orizzontale.
3.  Trasferire la scheda DSI rispettando l'orientamento obbligato dei connettori e delle guide; non forzare la scheda.
4.  Controllare guarnizioni e superfici di tenuta e sostituire gli
    elementi danneggiati secondo le specifiche.
5.  Prima di inserire il cablaggio, predisporre etichette e fotografie
    di riferimento per ciascun gruppo.

## 6. Rimontaggio dell'harness

**Principio:** seguire le foto dello smontaggio e ripristinare il
percorso originale. I cavi devono seguire le guide previste, senza
torsioni, incroci impropri, schiacciamenti o interferenze con motori,
pulegge e carter.

1.  Inserire il nuovo harness nel robot seguendo il percorso originale.
    Partire dai cavi più lunghi/ingombranti (I/O) e mantenere i tubi pneumatici per ultimi, così da non ostacolare il passaggio dei cavi. Adattare la sequenza alle istruzioni del ricambio e alle guide effettive.
2.  Inserire i fasci nelle rispettive aperture, controllando a ogni
    passaggio che i connettori non si incastrino e che l'orientamento
    sia corretto.
3.  Fissare il componente nero alla base del robot.
4.  Ricollegare tutte le terre nelle posizioni originali, verificando
    contatto e fissaggio.
5.  Ricollegare le fasi dei motori alle posizioni corrette. Verificare
    numerazione e orientamento prima di inserire i terminali.
6.  Ricollegare i connettori encoder e gli altri connettori elettrici,
    controllando numeri, codici e instradamento.
7.  Riposizionare la piastra valvole I/O e i tubi relativi, seguendo le foto. I tubi rosso e bianco sono normalmente alloggiati insieme nell'asola superiore: confermare sulla configurazione specifica.
8.  Riposizionare il pacco valvole e ricollegare tubi pneumatici e
    connettori.
9.  Ripristinare fascette e fissaggi nelle posizioni fotografate. Le
    fascette possono avere lunghezze diverse: usare la misura corretta.
10. Rimontare il motore J4.
11. Ripristinare il carter nero e i connettori che vi transitano,
    verificando che nessun cavo resti schiacciato.
12. Rimontare la cinghia e il sistema di tensionamento, rimettendo in tensione e verificandone il valore.
12. Ricollegare il polso: fissare la staffa a L,
    ricollegare i connettori degli assi 5 e 6 e gli encoder,
    ripristinare la terra, quindi fissare staffa e polso.
13. Controllare tutti i percorsi prima di chiudere i carter: cavi liberi
    da parti mobili, tubi non piegati, connettori completamente inseriti
    e fascette correttamente posizionate.
14. Riaccendere il robot.
15. Fare le verifiche finali.
16. Chiudere i carter.

## 7. Tensionamento della cinghia J4

1.  Effettuare la misura con il motore correttamente fissato alla
    struttura, così da mantenere l'allineamento tra cinghia e pulegge.
2.  Per la misura tramite frequenza, pizzicare la cinghia al centro sul
    lato liscio e rilevare la frequenza con un tensionimetro o app.
3.  La misura della tensione prima e dopo la manutenzione dovrebbe essere la stessa, MA SOPRATTUTTO la tensione corretta deve avere una frequenza nel range **180-224 Hz**.
4.  Regolare la tensione tramite la vite dedicata, con piccoli
    incrementi.
5.  Dopo ogni regolazione, ricontrollare la misura. 

## 8. Verifiche finali

Eseguire i controlli con la procedura di riavvio e collaudo prevista da
Stäubli e dalle regole di sicurezza del sito.

-   **Riferimenti e calibrazione:**  segni pennarello e scotch allineati, valore giunti uguale al riferimento preso prima della manutenzione (in Robot>Calibration). Eventualmente riallineare il giunto 4.
-   **Movimento degli assi:** controllare ogni asse lungo tutta la corsa (così da controllare tutte le fasi dei motori).
-   **Motori, encoder e freni:** verificare che ogni comando agisca
    sull'asse corretto, che gli encoder forniscano valori coerenti e che
    i freni si blocchino/sblocchino secondo procedura. I connettori
    scambiati possono causare anomalie.
-   **Pneumatica ed elettrovalvole:** verificare collegamenti, tenuta
    dei tubi e funzionamento delle elettrovalvole.
-   **Harness:** controllare che non vi siano cavi schiacciati, tesi,
    attorcigliati o a contatto con parti mobili.
-   **Chiusura:** verificare fissaggi, fascette, terre, guarnizioni e
    assenza di minuteria residua.
-   **Documentazione:** conservare foto, valore della tensione della
    cinghia.


