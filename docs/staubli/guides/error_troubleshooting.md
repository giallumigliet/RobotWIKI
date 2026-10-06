# Errori e Troubleshooting Stäubli

## 1. MCPES1

Errore Hardware che può comparire quando viene scollegato il pendant. Comune su controllori CS8.

Risoluzione:
```text
Attaccare pendant
↓
Premere fungo pendant
↓
Premere fungo HMI
↓
Resetta da HMI con il tasto blu
↓
ACKNOWLEDGE dell'errore da Control panel del pendant
↓
Togliere fungo HMI
↓
Togliere fungo pendant
↓
Stacca pendant
```
Se l'errore persiste più volte sarà necessario riavviare il controllore.


## 2. Unrecognized symbol $
Aggiungere ADDON relativo alla funzione non riconosciuta.


## 3. I/O not linked...
Controllare:
- variabili `dio`/`aio` non collegate da software;
- configurazione I/O scheda;
- collegamento fisico.


## 4. I/O tutti con un ?????
Di solito è un problema di configurazione di scheda di rete.

Da SYCON:
- (se PROFINET) verificare che il nome del robot nella scheda sia corretto.
- (se Ethernet/IP) verificare che l'indirizzo IP del robot nella scheda sia corretto.

