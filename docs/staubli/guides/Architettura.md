# Architettura Stäubli

## 1. Controller e ambiente

I robot Stäubli moderni utilizzano controller della famiglia **CS8/CS9** e applicazioni programmate in **VAL3**.

Lo sviluppo e la simulazione possono essere effettuati tramite **Stäubli Robotics Suite (SRS)**.

La configurazione concreta dipende dal controller, dalla versione VAL3/SRS e dalle opzioni installate.

## 2. Applicazione VAL3

Una applicazione VAL3 contiene programmi, dati e librerie organizzati per realizzare una funzione della cella.

Struttura concettuale:

```text
Applicazione
├── Programmi
├── Variabili
├── I/O
├── Tools
├── Frames
├── Points
└── Librerie
```

## 3. Programmi e task

VAL3 permette di organizzare l'applicazione in più programmi/task.

È utile separare:
- sequenza principale;
- gestione movimenti;
- I/O;
- comunicazioni;
- supervisione;
- recovery.

## 4. Programma principale

Una struttura tipica può essere:

```text
start()
├── inizializzazione
├── verifica condizioni
├── ciclo principale
├── gestione processo
└── stop/recovery
```

Il programma reale deve essere adattato alla struttura dell'applicazione.

## 5. CS8 e CS9

Le funzioni disponibili possono cambiare tra generazioni di controller e versioni software.

Prima di modificare un'applicazione verificare:
- controller;
- versione VAL3;
- versione SRS;
- opzioni;
- configurazione I/O;
- applicazioni installate.

## 6. Checklist

- [ ] Backup applicazione.
- [ ] Backup controller.
- [ ] Versione VAL3 registrata.
- [ ] Versione SRS registrata.
- [ ] Task interessato identificato.
- [ ] Tool e frame verificati.
- [ ] I/O coinvolti identificati.
- [ ] Test su emulatore quando possibile.
