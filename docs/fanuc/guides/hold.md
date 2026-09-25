# HOLD, stati e controllo

## 1. HOLD

Il segnale FANUC `UI[2] HOLD` permette di fermare l'esecuzione del movimento e congelare il programma che lo sta eseguendo.

La ripartenza può essere gestita tramite `UI[6]` RESTART secondo la configurazione del sistema.

## 2. HOLD e programma

È importante distinguere tra:

* robot fisicamente fermo;
* programma in pausa;
* programma non in esecuzione;
* programma congelato durante un movimento;
* stato logico richiesto dalla supervisione.

Queste condizioni non sono equivalenti.

## 3. Stato logico e stato reale

In un'architettura che utilizza una macchina a stati è utile distinguere:

* **stato richiesto/logico** – stato deciso dalla supervisione BG Logic;
* **stato reale** – stato in cui si trova effettivamente l'esecuzione del programma TP.

I due valori possono temporaneamente essere differenti.


```text
Stato reale = 20
        ↓
si verifica un errore
        ↓
supervisione → stato richiesto = 30
        ↓
programma precedente congelato
        ↓
stato reale può essere ancora = 20
```

Non bisogna quindi utilizzare unicamente lo stato logico per decidere se è possibile effettuare un restart, ma la combinazione di entrambi.


## 4. Restart

Prima di eseguire automaticamente un restart verificare sempre:

1. che il programma corretto sia effettivamente in esecuzione;
2. che il programma non sia in una condizione critica;
3. che le condizioni di sicurezza siano valide;
4. che lo stato reale dell'esecuzione sia coerente con lo stato richiesto;
5. che eventuali movimenti precedenti siano stati gestiti correttamente.

## 6. Modalità manuale

In modalità manuale, il movimento JOG richiede la corretta configurazione dei segnali di abilitazione e l'utilizzo dello SHIFT del Teach Pendant secondo la configurazione FANUC.
