# ABB – Quick Reference

## Movimenti

| Istruzione | Funzione |
|---|---|
| `MoveJ` | Movimento articolare |
| `MoveL` | Movimento lineare |
| `MoveC` | Movimento circolare |
| `MoveAbsJ` | Movimento nello spazio articolare |

## Dati robot

| Tipo | Funzione |
|---|---|
| `robtarget` | Posizione robotica |
| `tooldata` | Tool/TCP |
| `wobjdata` | WorkObject |
| `jointtarget` | Target articolare |
| `speeddata` | Parametri di velocità |
| `zonedata` | Terminazione/raccordo |

## Variabili

| Tipo | Uso |
|---|---|
| `CONST` | Costante |
| `VAR` | Variabile |
| `PERS` | Dato persistente |
| `num` | Numero |
| `bool` | Booleano |
| `string` | Testo |

## I/O

```rapid
SetDO doGripper, 1;
WaitDI diReady, 1;
```

## Esempio movimento

```rapid
MoveJ pHome, v100, fine, tool1;
MoveL pWork, v200, z10, tool1 \WObj:=wobjProcess;
```

## Prima di modificare un movimento

- [ ] Backup
- [ ] Tool
- [ ] WorkObject
- [ ] Robtarget
- [ ] Configurazione
- [ ] Velocità
- [ ] Zona
- [ ] I/O
- [ ] Collisioni/interferenze
- [ ] Test in RobotStudio
- [ ] Test manuale

## Principi fondamentali

1. Verificare sempre tool e WorkObject.
2. Non confondere un progetto RobotStudio con il contenuto reale del controller.
3. Conservare i sorgenti RAPID.
4. Verificare la versione RobotWare.
5. Non modificare dati di calibrazione senza procedura appropriata.
6. Testare le modifiche che influenzano il movimento.
