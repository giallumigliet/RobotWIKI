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

