# Architettura ABB

## 1. Controller e ambiente

La programmazione ABB dei robot industriali si basa sul linguaggio **RAPID** e viene normalmente sviluppata e verificata tramite **RobotStudio** oppure direttamente sul controller tramite FlexPendant.

La struttura concreta dipende da:
- generazione del controller;
- versione di RobotWare;
- opzioni software installate;
- numero di task e assi esterni;
- configurazione della cella.

## 2. Programmi RAPID

Un'applicazione RAPID è organizzata principalmente in moduli e routine.

Struttura concettuale:

```text
Controller
├── Task
│   ├── Module
│   │   ├── Data
│   │   ├── PROC
│   │   ├── FUNC
│   │   └── TRAP
│   └── ...
└── altri Task
```

### PROC

Una `PROC` è una procedura richiamabile dal programma.

```rapid
PROC Ciclo()
    MoveJ pHome, v100, fine, tool1;
    MoveL pWork, v200, fine, tool1;
ENDPROC
```

### FUNC

Una `FUNC` restituisce un valore e viene utilizzata per elaborazioni o decisioni.

### TRAP

Una `TRAP` è una routine associata alla gestione di eventi/interruzioni configurati nel sistema RAPID.

## 3. Task

Una cella può utilizzare più task, ad esempio per:
- movimento robot;
- logiche di supervisione;
- gestione di segnali;
- sincronizzazione tra robot.

Le applicazioni MultiMove possono coordinare più task secondo la configurazione del controller.

## 4. Principio importante

Non tutte le routine hanno lo stesso ruolo.

È buona pratica separare:
- sequenza principale;
- movimenti;
- gestione I/O;
- gestione errori;
- funzioni di calcolo;
- supervisione.

Prima di modificare un programma verificare sempre quale task lo esegue e quali altri task dipendono dai suoi dati o segnali.

## 5. Dati e configurazione

In RAPID i dati possono essere dichiarati come `CONST`, `VAR` o `PERS`.

Esempio:

```rapid
CONST num Velocita := 100;
VAR num Contatore := 0;
PERS robtarget pHome := [...];
```

La scelta del tipo deve essere coerente con il modo in cui il dato viene utilizzato e mantenuto dal controller.

## 6. Checklist prima di una modifica

- [ ] Backup della cella eseguito.
- [ ] Versione RobotWare registrata.
- [ ] Task interessato identificato.
- [ ] Modulo interessato identificato.
- [ ] Tool e WorkObject verificati.
- [ ] I/O coinvolti identificati.
- [ ] Modifica testata in simulazione quando possibile.
- [ ] Recovery previsto prima della prova sul robot.
