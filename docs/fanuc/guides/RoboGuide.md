# RoboGuide e simulazione

## 1. RoboGuide

ROBOGUIDE è l'ambiente di simulazione FANUC.

Può essere utilizzato per:

* sviluppo;
* test;
* verifica traiettorie;
* simulazione I/O;
* configurazione della cella;
* sviluppo e compilazione KAREL.

## 2. Salvataggio

Il salvataggio della cella non deve essere dato per scontato.

Durante lo sviluppo salvare frequentemente il progetto.

## 3. Teach Pendant virtuale

Le operazioni principali includono:

```text
SHIFT + FWD
```

per avviare il programma.

Per l'esecuzione step-by-step:

```text
SHIFT + STEP + FWD
```

In caso di fault:

```text
RESET
```

Per abortire i programmi:

```text
FCTN
→ ABORT (ALL)
```

## 4. Test Run

La simulazione può essere eseguita tramite:

```text
Test-Run
→ Run Panel
```

## 5. External I/O Connection

Per collegare I/O tra robot o dispositivi simulati:

```text
Tools
→ External I/O Connection
```

Dopo il riavvio dei controller o del software può essere necessario ripristinare la connessione.

## 6. CAD

I modelli CAD possono essere importati per rappresentare:

* fixture;
* ambiente;
* tool;
* componenti della cella.

Per i tool è possibile aggiungere un CAD come link del tool.

## 7. Space Function

Le zone possono essere simulate e verificate tramite la configurazione Space Function.

È importante verificare sia il comportamento nominale sia quello durante ingresso/uscita dalla zona.

## 8. Simulazione senza PLC

In assenza del PLC, i segnali necessari possono essere simulati tramite Flag o configurazioni I/O equivalenti.

