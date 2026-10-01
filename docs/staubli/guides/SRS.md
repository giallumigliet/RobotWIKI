# Stäubli Robotics Suite (SRS)

## 1. Scopo

Stäubli Robotics Suite viene utilizzato per lavorare con applicazioni e controller Stäubli e per la simulazione/emulazione delle celle compatibili.

Può essere utilizzato per:
- sviluppo VAL3;
- verifica sintassi;
- simulazione;
- trasferimento applicazioni;
- gestione di dati e configurazioni;
- preparazione delle modifiche prima del caricamento sul controller.

## 2. Workflow consigliato

```text
Backup controller
↓
Copia applicazione
↓
Modifica in SRS
↓
Verifica sintassi
↓
Simulazione/emulazione
↓
Test I/O
↓
Trasferimento controllato
↓
Test manuale
↓
Test automatico
```

## 3. Trasferimenti

Prima di un trasferimento verificare sempre:
- sorgente;
- destinazione;
- applicazione selezionata;
- versione software;
- file modificati.

Evitare trasferimenti indiscriminati dell'intero controller quando è sufficiente trasferire una singola applicazione o un insieme controllato di file.

## 4. Emulatori

Quando disponibili, gli emulatori SRS permettono di verificare parte della logica prima di intervenire sul robot reale.

La simulazione non sostituisce:
- verifica della sicurezza;
- verifica I/O reali;
- verifica della calibrazione;
- prova controllata sulla cella.

## 5. Versioni

Registrare sempre la versione SRS e VAL3 utilizzata per la modifica.
