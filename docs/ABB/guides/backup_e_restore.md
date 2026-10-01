# Errori e Troubleshooting ABB

## 1. Metodo di diagnosi

Quando compare un errore non limitarsi a cancellare il messaggio.

Seguire:

```text
Errore
↓
Codice e descrizione
↓
Task interessato
↓
Istruzione che ha generato l'errore
↓
Stato robot/I/O
↓
Causa
↓
Recovery
```

## 2. Movimento non eseguito

Controllare:
- motori abilitati;
- modalità operativa;
- stato di sicurezza;
- task in esecuzione;
- eventuali stop;
- tool;
- WorkObject;
- posizione target;
- configurazione robot.

## 3. I/O non commuta

Controllare:
- segnale RAPID;
- mappatura I/O;
- dispositivo I/O;
- interblocchi;
- stato del task;
- eventuali errori di comunicazione.

## 4. Errore di programma

Controllare:
- riga interessata;
- variabili utilizzate;
- tipo dei dati;
- valori non inizializzati;
- modulo caricato;
- versione RobotWare.

## 5. Recovery

Un recovery corretto deve riportare la cella in uno stato noto.

Prima di ripartire verificare:
- posizione robot;
- stato tool;
- stato pinza/processo;
- pezzo presente;
- uscite attive;
- condizioni di sicurezza;
- punto di ripartenza.

## 6. Regola fondamentale

Non modificare parametri di sistema o dati di calibrazione solo per eliminare un allarme. Prima identificare la causa e conservare un backup della configurazione originale.
