# Movimenti ABB

## 1. Tipi principali

Le istruzioni RAPID più comuni per il movimento sono:

- `MoveJ` – movimento articolare;
- `MoveL` – movimento lineare del TCP;
- `MoveC` – movimento circolare;
- `MoveAbsJ` – movimento espresso direttamente nello spazio articolare.

Esempio:

```rapid
MoveJ pHome, v100, fine, tool1;
MoveL pWork, v200, fine, tool1;
MoveC pVia, pEnd, v200, z10, tool1;
```

## 2. Robtarget

Un `robtarget` descrive una posizione robotica e comprende informazioni di posizione, orientamento e configurazione, oltre agli eventuali assi esterni.

Quando un movimento dà un risultato inatteso controllare sempre il `robtarget` e il sistema di riferimento utilizzato.

## 3. Velocità

La velocità è normalmente definita tramite `speeddata`.

Esempio:

```rapid
MoveL pWork, v200, fine, tool1;
```

Il valore di velocità deve essere scelto in funzione del processo, del carico e della traiettoria.

## 4. Terminazione e zone

RAPID utilizza `zonedata` per descrivere il comportamento nei punti di passaggio.

`fine` indica un punto di arresto preciso.

Esempio:

```rapid
MoveL p1, v200, fine, tool1;
MoveL p2, v200, z10, tool1;
```

Con una zona il robot può raccordare il movimento invece di fermarsi esattamente sul punto.

## 5. Tool e WorkObject

Un movimento deve essere interpretato insieme al tool e, quando utilizzato, al WorkObject.

```rapid
MoveL p1, v200, fine, tool1 \WObj:=wobjProcess;
```

Prima di modificare un punto verificare:
- TCP del tool;
- orientamento del tool;
- WorkObject;
- orientamento del WorkObject;
- configurazione del robot;
- eventuali assi esterni.

## 6. Regola pratica

Prima di modificare un movimento:

```text
Backup
↓
Verifica tool
↓
Verifica WorkObject
↓
Verifica punto
↓
Verifica velocità/zone
↓
Test in simulazione
↓
Test manuale a bassa velocità
```

La traiettoria deve essere validata anche alle condizioni operative reali.
