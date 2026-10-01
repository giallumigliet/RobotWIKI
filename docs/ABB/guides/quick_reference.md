# Registri e segnali ABB

## 1. Variabili RAPID

RAPID utilizza diversi tipi di dati.

Esempi:

```rapid
VAR num contatore;
VAR bool cicloOk;
VAR string codice;
PERS robtarget pHome;
```

I principali attributi sono:

- `CONST` – valore costante;
- `VAR` – variabile;
- `PERS` – dato persistente.

## 2. Posizioni

I tipi più importanti per la robotica sono:

- `robtarget` – posizione robotica;
- `tooldata` – definizione del tool/TCP;
- `wobjdata` – WorkObject;
- `jointtarget` – target articolare.

## 3. I/O

I segnali I/O vengono configurati nel sistema del controller e utilizzati dal programma RAPID.

Esempi:

```rapid
SetDO doGripper, 1;
WaitDI diPartPresent, 1;
```

Per gruppi di segnali possono essere utilizzate le relative tipologie di signal e istruzioni RAPID previste dalla configurazione.

## 4. Interblocchi

Gli I/O non devono essere usati solo come comandi isolati. In una cella industriale è buona pratica definire condizioni di interblocco.

Esempio concettuale:

```text
Start
↓
Safety OK
↓
Robot ready
↓
Part present
↓
Tool ready
↓
Movimento
```

## 5. Diagnostica

Quando un I/O non funziona verificare in ordine:

1. stato fisico del dispositivo;
2. configurazione I/O del controller;
3. nome del segnale RAPID;
4. stato del task;
5. eventuali interblocchi;
6. eventuali errori del controller.

## 6. Attenzione

La disponibilità dei segnali e la loro mappatura dipendono dalla configurazione della cella. Non assumere che due controller ABB abbiano la stessa mappatura I/O.
