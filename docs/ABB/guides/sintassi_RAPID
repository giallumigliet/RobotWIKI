# ABB RAPID --- cheat sheet sintetica

> RAPID usa moduli/procedure/funzioni e, nella sintassi normale, `;`
> come terminatore delle istruzioni. Le strutture `IF`, `FOR`, `WHILE`,
> `TEST` ecc. si chiudono con keyword dedicate.

  -----------------------------------------------------------------------
  Concetto                            Sintassi RAPID / esempio
  ----------------------------------- -----------------------------------
  **Modulo**                          `MODULE MainModule` ... `ENDMODULE`

  **Routine principale**              `PROC main()` ... `ENDPROC`

  **Fine programma**                  `ENDPROC` / `RETURN;`; `EXIT;` per
                                      terminazione forte

  **Terminatore**                     `;`

  **Commento**                        `! commento`

  **Variabile**                       `VAR num n;`

  **Costante**                        `CONST num c:=10;`

  **Persistente**                     `PERS num n:=0;`

  **Tipi base**                       `num`, `bool`, `string`, `byte`,
                                      `dnum`

  **Tipi robot**                      `pos`, `orient`, `robtarget`,
                                      `jointtarget`, `tooldata`,
                                      `wobjdata`, `speeddata`,
                                      `zonedata`, `jointpos`, `pose`,
                                      ecc.

  **Array**                           `VAR num a{10};`

  **Record / strutture**              `RECORD ...` / tipi strutturati
                                      predefiniti e definiti dall'utente
                                      secondo RAPID

  **Assegnazione**                    `n := 10;`

  **Confronti**                       `=` `<>` `<` `<=` `>` `>=`

  **Logica booleana**                 `AND`, `OR`, `XOR`, `NOT`

  **IF**                              `IF cond THEN` ... `ENDIF`

  **ELSE IF**                         `ELSEIF cond THEN`

  **ELSE**                            `ELSE`

  **WHILE**                           `WHILE cond DO` ... `ENDWHILE`

  **FOR**                             `FOR i FROM 1 TO 10 DO` ...
                                      `ENDFOR`

  **TEST / switch-like**              `TEST expr` → `CASE 1:` ...
                                      `DEFAULT:` → `ENDTEST`

  **CALL procedura**                  `Pick p1;`

  **CALL funzione**                   `x := MyFunction(a);`

  **Return**                          `RETURN;`

  **Salto**                           `GOTO label;`

  **Label**                           `label:`

  **Loop infinito**                   `WHILE TRUE DO ... ENDWHILE`

  **WAIT tempo**                      `WaitTime 1.0;`

  **WAIT condizione**                 `WaitUntil DI[1]=1;`

  **WAIT movimento**                  le istruzioni di movimento sono
                                      sincrone rispetto all'esecuzione
                                      RAPID; per attese esplicite usare
                                      le istruzioni/funzioni dedicate

  **Movimento Joint**                 `MoveJ p1,v100,z10,tool0;`

  **Movimento Lineare**               `MoveL p1,v100,z10,tool0;`

  **Movimento assoluto articolare**   `MoveAbsJ jHome,v100,fine,tool0;`

  **Movimento circolare**             `MoveC pMid,pEnd,v100,z10,tool0;`

  **HERE / posizione corrente**       `p := CRobT();`

  **HERE articolare**                 `j := CJointT();`

  **Offset**                          `p2 := Offs(p1,10,0,0);`

  **Offset tool**                     `p2 := RelTool(p1,10,0,0);`

  **I/O digitale**                    `SetDO doGrip,1;` / `Reset doGrip;`

  **Lettura DI**                      `IF diPart=1 THEN ...` oppure
                                      `WaitUntil diPart=1;`

  **Messaggio FlexPendant**           `TPWrite "Hello";`

  **Log su file/seriale**             `Write logfile,"text";`

  **Errore/log diagnostico**          `ErrWrite "Header","Reason";` /
                                      `ErrLog ...` secondo
                                      RobotWare/licenza

  **Task**                            multitasking con task configurati
                                      nel controller; ogni task esegue
                                      moduli RAPID propri

  **Modulo/task**                     `MODULE ... ENDMODULE`;
                                      l'associazione a un task è
                                      configurazione del controller

  **Interrupt**                       `CONNECT intno WITH handler;` +
                                      `ISignalDI`, `IWatch`, ecc. secondo
                                      sorgente

  **Stop**                            `Stop;`

  **Terminazione forte**              `EXIT;`

  **Tool**                            `tool0`, `tooldata`

  **WorkObject**                      `wobj0`, `wobjdata`

  **Velocità**                        `v100`, `v500`, custom `speeddata`

  **Accuratezza/blending**            `fine`, `z1`, `z10`, `z50`, ecc.

  **Function**                        `FUNC num f(num x)` ... `RETURN x;`
                                      ... `ENDFUNC`

  **Procedure**                       `PROC p()` ... `ENDPROC`
  -----------------------------------------------------------------------

## Mini esempio

``` text
MODULE MainModule

    VAR num i;
    VAR robtarget pHere;

    PROC main()

        pHere := CRobT();

        FOR i FROM 1 TO 5 DO

            IF DI_Ready = 1 THEN
                MoveJ pHere, v100, fine, tool0;
            ELSEIF DI_Fault = 1 THEN
                TPWrite "FAULT";
            ELSE
                WaitTime 0.1;
            ENDIF

        ENDFOR

        TPWrite "DONE";

    ENDPROC

ENDMODULE
```

## Note utili

-   `:=` è assegnazione; `=` è confronto.
-   `<>` è "diverso da".
-   `TEST ... CASE ... DEFAULT ... ENDTEST` è il costrutto RAPID più
    vicino a `switch/case`.
-   `CRobT()` legge il `robtarget` corrente; `CJointT()` legge gli
    angoli correnti.
