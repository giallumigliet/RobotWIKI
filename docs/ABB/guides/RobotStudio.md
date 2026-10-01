# Backup e Restore ABB

## 1. Prima di modificare la cella

Eseguire un backup prima di modificare:
- programmi RAPID;
- configurazione I/O;
- parametri di sistema;
- opzioni RobotWare;
- configurazioni relative a tool e WorkObject;
- dati di calibrazione.

Il contenuto esatto del backup dipende dal controller e dalla procedura utilizzata.

## 2. Cosa documentare

Per ogni backup conservare almeno:

```text
ABB_Cell/
├── Backup/
├── RAPID/
├── RobotStudio/
└── Info/
```

Nella documentazione registrare:
- modello controller;
- versione RobotWare;
- data backup;
- applicazione/cella;
- modifiche effettuate;
- eventuali opzioni installate.

## 3. Programmi RAPID

Quando possibile conservare separatamente i sorgenti RAPID utilizzati dalla cella.

Questo rende più semplice:
- confrontare versioni;
- revisionare modifiche;
- ricostruire una configurazione;
- lavorare offline con RobotStudio.

## 4. Restore

Un restore deve essere eseguito solo dopo avere verificato:
- compatibilità del backup;
- controller destinatario;
- versione RobotWare;
- configurazione della cella;
- calibrazione e mastering;
- tool e WorkObject;
- I/O;
- opzioni software.

## 5. Mastering e calibrazione

Non sovrascrivere indiscriminatamente dati relativi a calibrazione e mastering.

Dopo un intervento sul controller verificare lo stato di calibrazione prima di eseguire movimenti automatici.

## 6. RobotStudio

Quando la cella dispone di un progetto RobotStudio, conservarne una copia coerente con la versione software utilizzata.

Il progetto offline non deve essere considerato automaticamente equivalente al contenuto reale del controller: prima di un restore verificare sempre le differenze.
