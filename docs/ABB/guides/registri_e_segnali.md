# Sintassi ABB RAPID

## 1. Struttura di base

RAPID utilizza istruzioni terminate da `;`.

Esempio:

```rapid
PROC main()
    MoveJ pHome, v100, fine, tool1;
    SetDO doGripper, 1;
ENDPROC
```

## 2. Dichiarazioni

I tipi più comuni nella programmazione robotica includono:

```rapid
VAR num contatore;
VAR bool pronto;
VAR string messaggio;
PERS robtarget p1;
PERS tooldata tool1;
PERS wobjdata wobj1;
```

## 3. Condizioni

```rapid
IF pronto THEN
    SetDO doStart, 1;
ELSE
    SetDO doStart, 0;
ENDIF
```

## 4. Cicli

```rapid
WHILE pronto DO
    ...
ENDWHILE
```

Per cicli con numero di iterazioni o gestione più articolata utilizzare le strutture RAPID previste dalla versione di RobotWare installata.

## 5. Chiamate

```rapid
Ciclo();
```

## 6. Gestione degli errori

Le applicazioni RAPID possono utilizzare meccanismi di gestione degli errori e routine `TRAP` in base alla struttura della cella.

Prima di aggiungere una gestione errori verificare:
- quale task è coinvolto;
- quale stato deve assumere la cella;
- quali uscite devono essere riportate in sicurezza;
- come deve essere effettuato il recovery.

## 7. Convenzioni consigliate

Utilizzare nomi espliciti:

```text
pHome
pApproach
pPick
pPlace
toolGripper
wobjProcess
doClamp
diPartPresent
```

Evitare nomi ambigui come `p1`, `x`, `tmp` per dati importanti di produzione.

## 8. Attenzione alle versioni

La sintassi disponibile e le istruzioni opzionali possono dipendere dalla versione di RobotWare e dalle opzioni installate. Prima di utilizzare una funzione verificare la documentazione della versione presente sulla cella.
