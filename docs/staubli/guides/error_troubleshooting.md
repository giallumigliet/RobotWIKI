# Errori e Troubleshooting Stäubli

## 1. Metodo

Quando compare un errore:

```text
Errore
↓
Codice/messaggio
↓
Task/program
↓
Istruzione
↓
Stato robot
↓
I/O e comunicazioni
↓
Causa
↓
Recovery
```

## 2. Movimento non eseguito

Controllare:
- potenza robot;
- modalità operativa;
- stato di sicurezza;
- programma/task;
- tool;
- frame;
- punto;
- parametri di movimento;
- eventuali stop o condizioni di attesa.

## 3. I/O non funziona

Controllare:
- collegamento fisico;
- configurazione I/O;
- variabile `dio`/`aio`;
- collegamento al segnale di sistema;
- interblocchi;
- stato del task.

## 4. Comunicazione socket

Se una comunicazione `sio` non funziona verificare:
- configurazione della porta;
- IP/endpoint;
- timeout;
- stato della connessione;
- buffer;
- formato dei dati;
- programma che gestisce la comunicazione.

## 5. Recovery

Prima di ripartire verificare:
- posizione attuale;
- stato tool;
- pezzo presente;
- pinza;
- I/O;
- task sospesi;
- eventuali uscite rimaste attive.

## 6. Regola fondamentale

Non risolvere un errore modificando casualmente parametri di sistema. Conservare prima un backup e individuare la causa dell'allarme.
