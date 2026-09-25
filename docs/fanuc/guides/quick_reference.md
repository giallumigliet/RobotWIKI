# FANUC – Quick Reference

## Movimenti

| Concetto | Significato                             |
| -------- | --------------------------------------- |
| `J`      | Movimento in giunti                     |
| `L`      | Movimento lineare                       |
| `FINE`   | Arrivo sul punto prima di proseguire    |
| `CNT`    | Raccordo del movimento                  |
| `SKIP`   | Interruzione condizionata del movimento |
| `UTOOL`  | Sistema utensile                        |
| `UFRAME` | Sistema di riferimento                  |

## Programmazione

| Elemento | Funzione                |
| -------- | ----------------------- |
| `R[]`    | Numeric Register        |
| `PR[]`   | Position Register       |
| `SR[]`   | String Register         |
| `F[]`    | Flag                    |
| `DI[]`   | Digital Input           |
| `DO[]`   | Digital Output          |
| `GI[]`   | Group Input             |
| `GO[]`   | Group Output            |
| `CALL`   | Chiamata sottoprogramma |
| `RUN`    | Avvio programma         |
| `LBL`    | Label                   |
| `JMP`    | Salto                   |
| `SELECT` | Selezione condizionata  |

## Programmi

```text
TP
→ sequenza e movimenti

KAREL
→ funzioni avanzate

BG Logic
→ supervisione e logiche continue
```

## BG Logic

```text
MENU
→ SETUP
→ NEXT
→ BG Logic
```

## Space Function

```text
MENU
→ SETUP
→ NEXT
→ Space fnct.
```

## User Alarms

```text
MENU
→ SETUP
→ User Alarms
```

## Collision Guard

```text
MENU
→ SETUP
→ Col Guard
```

## Payload

```text
MENU
→ NEXT
→ SYSTEM
→ MOTION
```

## Ref Position

```text
MENU
→ SETUP
→ Ref Position
```

## Program Select

```text
MENU
→ SETUP
→ Prog Select
```

## KAREL

```text
KL
↓ BUILD / ktrans
↓
PC
↓
LOAD
```

## Backup

Preferire:

```text
Full System Backup
→ All of above
```

Conservare separatamente:

```text
KAREL .KL
```

## Restore

Prima di un restore verificare sempre:

* compatibilità del backup;
* controller destinatario;
* versione software;
* mastering;
* file servo;
* file master;
* configurazione I/O;
* opzioni installate.

## Prima di modificare una cella

Checklist:

* [ ] backup completo;
* [ ] sorgenti KAREL salvati;
* [ ] copia del progetto RoboGuide;
* [ ] versione software registrata;
* [ ] configurazione I/O documentata;
* [ ] opzioni FANUC documentate;
* [ ] programma interessato identificato;
* [ ] modifica testata in simulazione quando possibile;
* [ ] recovery verificato.

## Prima di modificare un movimento

Verificare:

* [ ] UTOOL;
* [ ] UFRAME;
* [ ] payload;
* [ ] velocità;
* [ ] terminazione FINE/CNT;
* [ ] configurazione robot;
* [ ] zone;
* [ ] interferenze;
* [ ] collision detection;
* [ ] condizioni Skip/ContinueOK;
* [ ] comportamento in caso di HOLD.

## Principi fondamentali

1. Non confondere stato logico e stato reale del programma.
2. Non utilizzare `CNT` per garantire l'arrivo esatto sul punto.
3. Verificare sempre UTOOL e UFRAME quando si lavora con coordinate.
4. Utilizzare il payload corretto.
5. Non modificare BG Logic senza prima fermarla.
6. Conservare sempre i sorgenti KAREL separatamente dal backup.
7. Non utilizzare un Image Backup indiscriminatamente tra robot diversi.
8. Prima di un restart verificare sempre lo stato reale del programma.
9. Documentare la configurazione I/O della singola cella.
10. Testare sempre le modifiche che possono influenzare movimento, sicurezza o recovery.
