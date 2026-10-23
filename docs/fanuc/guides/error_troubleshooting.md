# Errori e Troubleshooting

## 1. Errori comuni


### 1. SRVO-038 Pulse mismatch

Un `SRVO-038 Pulse mismatch` è associato alla coerenza della posizione encoder/mastering, generalmente dopo un upload di un vecchio backup.


Prima di procedere verificare:

* backup disponibili;
* eventuali movimenti effettuati dopo il backup;
* stato del mastering;
* stato dei servo.

Se è disponibile un backup della condizione immediatamente precedente all'upload e il robot non è stato mosso nel frattempo, è possibile caricare i due file:
`SYSSERVO.SV`
`SYSSERVO.VA`

Se non è possibile ripristinare una condizione servo coerente, può essere necessario eseguire nuovamente il mastering secondo la procedura FANUC prevista per il modello.






### 2. Stato non va in Prod - ROBOGUIDE

Prod dipende dagli UOP, quindi verificare il valore della variabile di sistema `$RMT_MASTER`.

ROBOGUIDE su PC tende a resettare $RMT_MASTER a 2.

Per controllare gli UOP con i FLAG o PLC, $RMT_MASTER deve essere settata a 0.

