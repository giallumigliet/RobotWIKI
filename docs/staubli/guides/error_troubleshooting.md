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


## 5. High temperature in Power supply or 24V2 feedback missing
Verificare che il led verde 24 V2 sul controllore sia acceso (24V2 è il feedback per i freni). 

Se spento allora dovrebbe lampeggiare il modo regolare l'ultimo led arancione, il numero di blink corrisponde al codice errore.
L'errore 8 è il più comune e indica un problema nel cablaggio di interconnessione tra il controllore e il braccio.

La causa più probabile è che dei pin sui connettori maschio siano rotti o piegati: se sono rotti sul connettore maschio del cavo (lato controllore) basta aprire il connettore e sostituire i pin, se invece sono rotti i pin del connettore maschio dell'harness del braccio allora o si cambiano i pin (difficile) o va sostituito l'intero harness del robot.





