# Programmi FANUC

## 1. Tipi principali di programmi

In una cella FANUC possono essere presenti principalmente:

* **TP (Teach Pendant)** – sequenze operative e movimenti.
* **KAREL** – funzioni avanzate e gestione dati.
* **BG Logic** – logiche eseguite continuamente in background.
* **Macro / programmi di supporto** – funzioni richiamate dai programmi principali.

La scelta del tipo di programma dipende dalla funzione da realizzare.

## 2. TP

I programmi TP sono normalmente utilizzati per:

* movimenti del robot;
* sequenze operative;
* chiamate a sottoprogrammi;
* gestione delle missioni;
* gestione delle condizioni di ciclo.

La struttura tipica può essere:

```text
PROGRAMMA PRINCIPALE
├── inizializzazione
├── acquisizione dati
├── selezione operazione
├── movimento
└── gestione fine ciclo
```

Il `.TP` è un file criptato, per poter visualizzare il contenuto testuale del codice bisogna far riferimento ai file `.LS`.

## 3. KAREL

KAREL viene utilizzato quando il solo TP non è sufficiente.

È particolarmente utile per:

* elaborazione dati;
* gestione di file e variabili;
* comunicazioni;
* conversioni di coordinate;
* funzioni matematiche;
* gestione avanzata di programmi e registri.

Il KAREL viene compilato generando un file `.PC`.

La KAREL non può essere utilizzato per eseguire movimenti.

## 4. BG Logic

La BG Logic esegue programmi in background indipendentemente dal programma TP principale.

È adatta a logiche che devono continuare a essere valutate mentre il programma principale è in pausa, ad esempio:

* supervisione;
* gestione segnali;
* aggiornamento di stati;
* logiche di controllo;
* gestione di condizioni operative.

La BG Logic non deve essere utilizzata per eseguire movimenti.

## 5. Principio importante: programma principale e supervisione

Quando un programma TP viene congelato durante un movimento, anche i programmi TP chiamanti appartenenti alla stessa catena di esecuzione vengono congelati.

Per questo motivo le logiche che devono continuare a funzionare durante una pausa devono essere progettate separatamente dalla sequenza di movimento.

## 6. Group Mask

Il `GROUP_MASK` determina i gruppi motion utilizzati dal programma.

Per un programma che controlla il gruppo robot 1 (programmi con **movimenti** o con **Collision detection**):

```text
1,*,*,*,*,*,*,*
```

Per un programma che non deve controllare gruppi motion:

```text
*,*,*,*,*,*,*,*
```

È buona pratica assegnare il motion group solo ai programmi che ne hanno effettivamente bisogno.

In particolare **BG Logic** e programmi in **AUTOEXEC** non devono mai controllare gruppi motion (tutto a *).


## 7. Program Select tramite STYLE

Quando viene utilizzata la selezione STYLE, la configurazione può essere verificata tramite:

```text
MENU
→ SETUP
→ Prog Select
→ STYLE
→ Detail
```

La configurazione effettiva dei segnali deve essere verificata direttamente sul controller.

## 8. Programmi in AUTOEXEC

Un programma può essere eseguito automaticamente all'accensione del controllore, configurandolo tramite:

```text
MENU
→ SYSTEM
→ Config
```

Un programma Autoexec:
- deve essere autoconclusivo;
- non deve contenere loop;
- non deve contenere movimenti;
- deve avere Group Mask ******;
- i digitali non possono essere controllati;
- i Flag possono essere utilizzati.
