# FANUC TP --- cheat sheet sintetica

> **Nota:** TP (Teach Pendant) è un linguaggio/insieme di istruzioni del
> controller FANUC, non un linguaggio testuale generale. Qui la sintassi
> è resa nel formato "testuale" tipico delle liste/LS. Sul pendant molte
> istruzioni non mostrano `;`; nei file LS il formato può invece
> riportare il terminatore di riga. Le funzioni disponibili dipendono da
> controller, software e opzioni.

  -----------------------------------------------------------------------
  Concetto                            Sintassi TP / esempio
  ----------------------------------- -----------------------------------
  **Inizio programma**                `/PROG MAIN` → sezioni `/ATTR`,
                                      `/MN`

  **Fine programma**                  `/END`

  **Terminatore**                     **Pendant:** nessuno; **LS:**
                                      tipicamente `;` a fine istruzione

  **Commento**                        `! commento`

  **Assegnazione**                    `R[1]=10` · `PR[1]=PR[2]` ·
                                      `DO[1]=ON`

  **Tipi / dati**                     `R[]` = registro numerico; `PR[]` =
                                      registro posizione; `SR[]` = string
                                      register; `DI/DO` = I/O digitali;
                                      `AI/AO` = analogici; `GI/GO` =
                                      group I/O; `F[]` = flag; `AR[]` =
                                      argument register

  **Costanti**                        numeri, `ON/OFF`, stringhe `"..."`

  **Confronti**                       `=` `<>` `<` `<=` `>` `>=`

  **Logica booleana**                 `AND`, `OR`, `NOT` (condizioni TP;
                                      max condizioni per IF dipende dal
                                      software)

  **IF**                              `IF R[1]>0,JMP LBL[10]` /
                                      `IF DI[1]=ON,CALL PICK`

  **ELSE / ELSE IF**                  `ELSE` / `ELSE IF ...` disponibili
                                      nelle versioni/software che
                                      supportano il blocco IF esteso;
                                      spesso TP usa IF→JMP/CALL

  **ENDIF**                           `ENDIF` per IF a blocchi

  **WHILE**                           `WHILE R[1]<10` ... `ENDWHILE`

  **FOR**                             `FOR R[1]=1 TO 10` ... `ENDFOR`

  **SWITCH / CASE**                   `SELECT R[1]` → casi con
                                      `JMP LBL[]` o `CALL ...`; `SELECT`
                                      è l'equivalente TP più vicino a
                                      switch/case

  **CALL programma**                  `CALL PICK`

  **CALL con argomenti**              `CALL PROG(arg1, arg2)` ---
                                      supporto e forma dipendono da
                                      versione/opzioni

  **Ritorno da subroutine**           fine del programma chiamato; per
                                      uscite/abort usare le relative
                                      istruzioni TP

  **Label**                           `LBL[1]`

  **Salto**                           `JMP LBL[1]`

  **Salto condizionale**              `IF cond,JMP LBL[1]`

  **Loop infinito classico**          `LBL[1]` → ... → `JMP LBL[1]`

  **WAIT tempo**                      `WAIT 1.00(sec)`

  **WAIT condizione**                 `WAIT DI[1]=ON`

  **WAIT con timeout**                `WAIT DI[1]=ON TIMEOUT,LBL[99]`

  **Movimento Joint**                 `J P[1] 100% FINE`

  **Movimento Linear**                `L P[1] 100mm/sec FINE`

  **Movimento Circular**              `C P[2] P[3] 100mm/sec FINE`

  **Precisione / blending**           `FINE` / `CNT10`, `CNT100`

  **Posizione corrente ("HERE")**     insegnamento dal pendant; in logica
                                      TP si può catturare la posizione,
                                      ad es. `PR[1]=LPOS` (cartesiana)

  **Posizione articolare corrente**   `PR[1]=JPOS` (quando appropriato)

  **Output**                          `DO[1]=ON` / `DO[1]=OFF`

  **Pulse output**                    `PULSE DO[1]` (forma esatta dipende
                                      dalla configurazione/software)

  **Input**                           `DI[1]=ON` / `DI[1]=OFF`

  **Messaggio**                       `MESSAGE[...]` / istruzioni
                                      messaggio disponibili secondo
                                      software; per diagnostica usare le
                                      funzioni TP del controller

  **Task / multitasking**             TP può avviare task/programmi
                                      concorrenti tramite le funzioni di
                                      task del controller; `RUN` è il
                                      concetto chiave per creare/avviare
                                      un child task

  **Abort / stop**                    `ABORT` / `PAUSE` / istruzioni di
                                      stop secondo contesto

  **UFRAME / UTOOL**                  selezione/configurazione tramite
                                      dati di sistema e istruzioni TP; il
                                      movimento usa il frame/tool attivi

  **Offset**                          `OFFSET` / `PR[...]` / registri
                                      posizione, a seconda della funzione
                                      richiesta

  **I/O analogici**                   `AI[1]`, `AO[1]`

  **Math**                            operazioni sui registri `R[]`; con
                                      **Math Function** sono disponibili
                                      funzioni/calcoli aggiuntivi

  **Array "logico"**                  nessun array dichiarabile come in
                                      RAPID/KAREL: si riservano blocchi
                                      di `R[]` o `PR[]`, eventualmente
                                      indicizzati

  **Nota compatibilità**              `FOR/ENDFOR`, blocchi IF e alcune
                                      istruzioni dipendono da
                                      generazione/controller/software
                                      installato
  -----------------------------------------------------------------------

## Mini esempio

``` text
/PROG MAIN
/MN
  1:  R[1]=0 ;
  2:  J P[1] 100% FINE ;
  3:  LBL[1] ;
  4:  R[1]=R[1]+1 ;
  5:  CALL PICK ;
  6:  WAIT DI[1]=ON ;
  7:  IF R[1]>=10,JMP LBL[99] ;
  8:  JMP LBL[1] ;
  9:  LBL[99] ;
 10:  J P[1] 100% FINE ;
/END
```

### "Mental mapping"

`TP = istruzioni + registri + label + I/O`.

## Riferimenti

-   FANUC America: documentazione/Tech Transfer su TP e gestione di
    label/jump e modifica di programmi LS.
-   FANUC HandlingTool / Controller Operator Manual: `FOR/ENDFOR`,
    `SELECT`, `IF`, `WAIT`, movimenti.
