# Movimenti Stäubli

## 1. Tipi principali

Le istruzioni di movimento VAL3 più comuni includono:

- `movej` – movimento articolare;
- `movel` – movimento lineare;
- `movec` – movimento circolare.

Le chiamate utilizzano punti, tool e parametri di movimento coerenti con la configurazione dell'applicazione.

## 2. Punti

VAL3 distingue i dati relativi al movimento robotico, ad esempio:
- punti cartesiani;
- posizioni articolari;
- configurazione;
- trasformazioni.

Prima di modificare un punto verificare il sistema di riferimento e il tool associato.

## 3. Tool e frame

Il movimento deve essere interpretato in relazione a:
- tool;
- frame;
- punto target;
- configurazione del robot;
- parametri di movimento.

Un errore nel tool o nel frame può produrre una traiettoria differente da quella attesa.

## 4. Parametri di movimento

VAL3 utilizza strutture dedicate ai parametri di movimento, tra cui `mdesc`.

I parametri possono includere aspetti come:
- velocità;
- accelerazione;
- decelerazione;
- tool;
- frame;
- comportamento della traiettoria.

## 5. Buffer e sequenziamento

VAL3 dispone di un meccanismo di sequenziamento dei task e delle istruzioni di movimento. Alcune istruzioni, tra cui `waitEndMove()`, possono essere utilizzate quando è necessario sincronizzare la logica con la fine del movimento.

Non assumere che il comportamento del controller sia identico a quello di FANUC o ABB.

## 6. Workflow di modifica

```text
Backup
↓
Verifica tool/frame
↓
Verifica punto
↓
Verifica mdesc
↓
Simulazione SRS
↓
Test manuale
↓
Test automatico
```

## 7. Regola pratica

Una traiettoria deve essere verificata anche nelle condizioni reali di velocità, carico e processo. La sola validazione grafica in simulazione non sostituisce il test controllato sulla cella.
