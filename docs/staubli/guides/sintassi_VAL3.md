# Stäubli VAL3 --- cheat sheet sintetica

> Sintassi VAL3 molto compatta e senza `;`. La grafia delle keyword è
> normalmente quella mostrata dal riferimento VAL3 della versione
> installata; alcune versioni mostrano `elseIf`/`elsif` in esempi
> diversi.

  -----------------------------------------------------------------------
  Concetto                            Sintassi VAL3 / esempio
  ----------------------------------- -----------------------------------
  **Inizio programma**                `begin`

  **Fine programma**                  `end`

  **Terminatore**                     **nessuno**

  **Commento**                        `// commento`

  **Assegnazione**                    `n=10`

  **Tipi semplici**                   `bool`, `num`, `string`

  **Tipi I/O**                        `dio`, `aio`, `sio`

  **Tipi robot**                      `trsf`, `frame`, `tool`, `point`,
                                      `joint`, `config`, `mdesc`

  **Array**                           `num a[10]` / `point p[10]`

  **Confronti**                       `==` `!=` `<` `<=` `>` `>=`

  **Logica booleana**                 `&&`, `||`, `!`

  **IF**                              `if cond` ... `endIf`

  **ELSE**                            `else`

  **ELSE IF**                         `elseIf cond`

  **WHILE**                           `while cond` ... `endWhile`

  **DO/UNTIL**                        `do` ... `until cond`

  **FOR**                             `for i = 1 to 10 step 1` ...
                                      `endFor`

  **SWITCH / CASE**                   `switch expr` → `case value` →
                                      `break` → `default` → `endSwitch`

  **CALL**                            `call pick(p1)`

  **Return**                          `return`

  **Salti**                           niente `GOTO/JMP-LBL` classico;
                                      normalmente si usa
                                      `if/while/call/return`

  **Delay**                           `delay(1.0)`

  **WAIT condizione**                 `wait(cond)`

  **WAIT movimento**                  `waitEndMove()`

  **Timeout / wait con timeout**      `watch(cond, 5)` → ritorna `bool`
                                      dopo max 5 s

  **Movimento Joint/PTP**             `movej(p1,tool,mDesc)` oppure
                                      `movej(j1,tool,mDesc)`

  **Movimento Lineare**               `movel(p1,tool,mDesc)`

  **Movimento Circolare**             `movec(pMid,pEnd,tool,mDesc)`

  **Approach**                        `appro(p, {0,0,-100,0,0,0})`

  **HERE cartesiano**                 `pHere = here(tool, frame)`

  **HERE articolare**                 `jHere = herej()`

  **I/O digitale**                    `dio` / `di` / `do` secondo oggetto
                                      dichiarato

  **Messaggio operatore**             `putln("text")` /
                                      `popUpMsg("text")`

  **Log diagnostico**                 `logMsg(...)` secondo
                                      versione/libreria; non confondere
                                      `log()` con "log" di diagnostica

  **Task**                            `taskCreate(...)`,
                                      `taskCreateSync(...)`,
                                      `taskKill(...)`, `taskResume(...)`,
                                      `taskSuspend(...)`

  **Stato task**                      `taskStatus(...)`

  **Stringhe**                        `"test"`

  **Booleani**                        `true` / `false`

  **Numeri**                          `num`

  **Costante geometrica**             `{x,y,z,rx,ry,rz}` per `trsf`;
                                      joint come `{j1,...,j6}`

  **Blending**                        contenuto nel `mdesc`
                                      (velocità/accelerazione/blending
                                      ecc.)
  -----------------------------------------------------------------------

## Mini esempio

``` text
num i
point pHere

begin

pHere = here(flange, world)

for i = 1 to 5
  if isSettled()==false
    waitEndMove()
  endIf

  movej(pHere, flange, mNomSpeed)
  waitEndMove()

  delay(0.1)
endFor

putln("DONE")

end
```

## Note utili

-   I movimenti VAL3 sono **accodati/asinc­roni** rispetto al flusso di
    istruzioni: per sincronizzarti con la fine del movimento usa
    `waitEndMove()`.
-   `here()` restituisce la posizione comandata corrente del tool nel
    frame richiesto; `herej()` la posizione articolare corrente.
-   `switch/case` richiede `break`.
