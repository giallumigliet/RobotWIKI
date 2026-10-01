# Backup e Restore Stäubli

## 1. Backup

Per i controller Stäubli è possibile utilizzare procedure di backup del controller e trasferimento delle applicazioni.

La procedura concreta dipende da CS8/CS9 e dalla versione di SRS.

## 2. Organizzazione consigliata

```text
Staubli_Cell/
├── Backup/
├── VAL3/
├── SRS/
└── Info/
```

Conservare separatamente:
- applicazioni VAL3;
- librerie;
- configurazioni;
- dati I/O;
- progetto SRS;
- informazioni sulla versione software.

## 3. SRS

SRS dispone di strumenti per il trasferimento tra computer/emulatore e controller e di funzioni di backup.

Prima di trasferire una modifica verificare la direzione del trasferimento:

```text
PC / Emulator
      ↓
Controller
```

oppure:

```text
Controller
      ↓
PC / Backup
```

## 4. Restore

Prima di un restore verificare:
- controller destinatario;
- versione VAL3;
- versione SRS;
- compatibilità applicazione;
- I/O;
- tool;
- frame;
- punti;
- calibrazione;
- opzioni software.

## 5. Calibrazione

Non sovrascrivere indiscriminatamente dati relativi alla calibrazione del robot.

Dopo un intervento sul controller verificare lo stato di calibrazione e la coerenza delle posizioni prima di eseguire movimenti automatici.

## 6. Regola pratica

Un backup deve essere sufficiente per ricostruire la configurazione documentata, ma non va considerato automaticamente compatibile con un altro controller o con un'altra versione software.
