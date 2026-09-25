# KAREL

## 1. Quando utilizzare KAREL

KAREL è il linguaggio di programmazione avanzato dei controller FANUC.

È utile quando sono necessarie funzioni non facilmente realizzabili tramite TP, ad esempio:

* elaborazioni matematiche;
* gestione avanzata di dati;
* gestione file;
* comunicazioni TCP/IP;
* accesso a informazioni del controller;
* conversioni di coordinate;
* funzioni personalizzate.

## 2. Sviluppo

Con RoboGuide:

```text
Files
→ New File
→ .KL
```

Dopo aver scritto il programma:

1. salvare il `.KL`;
2. eseguire `BUILD`;
3. verificare la generazione del `.PC`;
4. trasferire il `.PC` sul controller;
5. eseguire il `LOAD`.

## 3. Compilazione

Il BUILD genera il programma compilato `.PC`.

È possibile utilizzare anche `ktrans.exe` da riga di comando, quando disponibile nell'installazione FANUC.

Esempio:

```text
ktrans nomefile.kl
```

Il comando esegue la compilazione del sorgente KAREL e segnala eventuali errori.

## 4. Aggiornamento di un KAREL

Quando si modifica un KAREL già installato:

1. modificare il `.KL`;
2. eseguire nuovamente il BUILD;
3. verificare il nuovo `.PC`;
4. verificare eventuali file `.VR`;
5. caricare la nuova versione sul controller.

Se necessario, rimuovere la versione precedente prima del LOAD per evitare di utilizzare file rimasti sul controller.

## 5. Sorgente e compilato

Il file `.KL` è il sorgente.

Il `.PC` è il programma compilato utilizzabile dal controller.

È buona pratica conservare sempre i sorgenti `.KL` in un repository versionato.

Il backup FANUC non deve essere considerato un sostituto del repository dei sorgenti.
