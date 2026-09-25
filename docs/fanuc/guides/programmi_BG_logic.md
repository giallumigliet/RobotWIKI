# BG Logic

## 1. Scopo

La BG Logic permette di eseguire continuamente una logica in background rispetto al programma TP principale.

È indicata per funzioni che devono continuare a essere valutate quando il programma di movimento è fermo.

## 2. Applicazioni tipiche

Può essere utilizzata per:

* supervisione;
* gestione degli stati;
* gestione segnali;
* aggiornamento di variabili;
* controllo di condizioni operative;
* diagnostica.

Non deve essere utilizzata per eseguire movimenti del robot.

## 3. Configurazione

La BG Logic viene configurata da:

```text
MENU
→ SETUP
→ NEXT
→ BG Logic
```

Una volta associato un programma, il controller lo esegue ciclicamente.

Non è quindi necessario inserire un ciclo `WHILE` nel programma BG Logic.

## 4. Group Mask

I programmi BG Logic non devono controllare gruppi motion, quindi deve avere `GROUP_MASK`:

```text
*,*,*,*,*,*,*,*
```

## 5. Modifica di una BG Logic

Prima di modificare un programma utilizzato come BG Logic:

1. fermare la relativa BG Logic;
2. abortire il programma se necessario;
3. effettuare la modifica;
4. verificare il programma;
5. riattivare la BG Logic.

## 6. Principio progettuale

La BG Logic deve rimanere semplice.

È preferibile suddividere funzioni diverse in programmi distinti, evitando di concentrare tutta la supervisione in un'unica logica difficilmente diagnosticabile (errori, controllo di posizione, aggiornamento segnali...).
