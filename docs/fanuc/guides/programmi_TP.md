# Programmazione TP

## 1. Registri e punti

I principali dati utilizzati nei programmi TP sono:

* **R** – Numeric Register;
* **PR** – Position Register;
* **SR** – String Register;
* **P** – punti locali al programma;
* **F** – Flag booleani;
* **DI/DO** – ingressi e uscite digitali;
* **GI/GO** – gruppi di ingressi/uscite.

I registri sono globali rispetto ai programmi che li utilizzano, ma è possibile comunque avere delle variabili locali.

## 2. CALL e RUN

`CALL` richiama un programma come sottoprogramma.

`RUN` avvia un programma in parallelo all'esecuzione sequenziale del chiamante, quando previsto dalla configurazione FANUC.

## 3. Loop

Il comportamento equivalente a un ciclo `while` può essere realizzato tramite salti a label:

```text
LBL[1]

...

JMP LBL[1]
```

## 4. Label

Le `LBL[]` permettono di identificare punti del programma verso i quali effettuare salti.

Sono particolarmente utilizzate per:

* cicli;
* gestione condizioni;
* Skip Jump;
* recovery.


## 5. Selezione

Il comportamento equivalente a una selezione `switch` può essere realizzata tramite `SELECT R[]`:

```text
SELECT R[112]
    =10, CALL CASE_START ;
    =20, CALL CASE_PICK ;
    =30, CALL CASE_PLACE ;
    =(-1), CALL CONTROL_CASE ;
    =90, CALL HOMING ;
    ELSE CALL ERROR
```

Il select ammette solo CALL, RUN, JMP e movimenti.



