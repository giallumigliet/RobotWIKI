# FANUC KAREL --- cheat sheet sintetica

> KAREL è il linguaggio testuale strutturato FANUC. La disponibilità di
> alcune routine e degli environment (`%ENVIRONMENT`) dipende dal
> controller/opzioni.

  -----------------------------------------------------------------------
  Concetto                            Sintassi KAREL / esempio
  ----------------------------------- -----------------------------------
  **Inizio programma**                `PROGRAM MAIN`

  **Dichiarazioni**                   `CONST` / `TYPE` / `VAR` /
                                      `ROUTINE`

  **Inizio esecuzione**               `BEGIN`

  **Fine programma**                  `END MAIN`

  **Terminatore**                     **nessun `;`**

  **Commento**                        `-- commento`

  **Assegnazione**                    `i = 10`

  **Tipi base**                       `INTEGER`, `REAL`, `BOOLEAN`,
                                      `STRING[n]`

  **Tipi robot**                      `XYZWPR`, `XYZWPREXT`, `JOINTPOS`,
                                      `CONFIG`, `VECTOR`, `PATH`, ecc.

  **Array**                           `ARRAY[1..10] OF INTEGER` (forma
                                      dipendente dalla dichiarazione
                                      completa)

  **Confronti**                       `=` `<>` `<` `<=` `>` `>=`

  **Logica booleana**                 `AND`, `OR`, `NOT`

  **IF**                              `IF cond THEN` ... `ENDIF`

  **ELSE**                            `ELSE`

  **ELSE IF**                         `ELSIF cond THEN`

  **WHILE**                           `WHILE cond DO` ... `ENDWHILE`

  **FOR**                             `FOR i = 1 TO 10 DO` ... `ENDFOR`

  **REPEAT**                          `REPEAT` ... `UNTIL(cond)`

  **SWITCH / CASE**                   `SELECT expr OF` → `CASE(...)` →
                                      `ENDSELECT`

  **CALL routine locale**             `MyRoutine` oppure `MyRoutine(arg)`

  **CALL TP program**                 `CALL_PROG('NAME', status)`

  **Parametri**                       `ROUTINE foo(x : INTEGER)` / `IN`,
                                      `OUT`, `INOUT` secondo
                                      dichiarazione

  **Return**                          `RETURN` oppure `RETURN(value)`
                                      nelle routine che restituiscono un
                                      valore

  **Label**                           `myLabel::`

  **Salto**                           `GOTO myLabel`

  **WAIT**                            `WAIT FOR cond`

  **Delay**                           `DELAY 1.0`

  **Movimento cartesiano**            `MOVE TO p`

  **Movimento lungo path**            `MOVE ALONG path`

  **Posizione corrente / PR**         `p = GET_POS_REG(1,status)`

  **PR articolare**                   `j = GET_JPOS_REG(1,status)`

  **Scrittura PR**                    `SET_POS_REG(1,p,status)`

  **I/O digitale**                    `DIN[1]` / `DOUT[1]`

  **Scrittura output**                `DOUT[1] = ON`

  **Lettura registro**                `GET_REG(...)`

  **String register**                 `GET_STR_REG(...)` /
                                      `SET_STR_REG(...)`

  **Messaggio TP**                    tipicamente `WRITE(...)` verso il
                                      dispositivo/porta TP appropriato;
                                      le routine `TPERROR`, `TPPROMPT`,
                                      ecc. gestiscono finestre/feedback
                                      TP

  **Log/file**                        `OPEN`, `WRITE`, `CLOSE` su
                                      file/porta

  **Task**                            `RUN_TASK(...)`, `CONT_TASK`,
                                      `PAUSE_TASK`, `ABORT_TASK`,
                                      `GET_TSK_INFO(...)`

  **Interrupt/condition handler**     `CONDITION[n]:` → `WHEN cond DO`
                                      ... `ENDCONDITION`

  **Stop/abort**                      `PAUSE`, `ABORT`, `ABORT_TASK(...)`
                                      secondo contesto

  **Environment**                     direttive `%ENVIRONMENT ...` per
                                      abilitare gruppi di built-in

  **Costante**                        `CONST MAX = 10`

  **Routine**                         `ROUTINE NAME ... END NAME`

  **Function**                        routine con tipo di ritorno, ad es.
                                      `ROUTINE f(x:INTEGER):INTEGER`
  -----------------------------------------------------------------------

## Mini esempio

``` text
PROGRAM MAIN

VAR
  i      : INTEGER
  status : INTEGER
  p      : XYZWPR

BEGIN
  p = GET_POS_REG(1, status)

  FOR i = 1 TO 5 DO
    IF DIN[1] = ON THEN
      MOVE TO p
    ELSE
      DELAY 0.1
    ENDIF
  ENDFOR

END MAIN
```

## Note utili

-   `KAREL` separa chiaramente **dichiarazioni** e **codice
    eseguibile**.
-   Per il movimento robot, la sintassi e i tipi esatti dipendono dal
    gruppo di movimento e dagli environment abilitati.
-   `CALL_PROG` è diverso da una normale chiamata di routine KAREL:
    serve, tra le altre cose, per interagire con programmi TP.
