# Movimenti FANUC

## 1. Tipi di movimento

I principali movimenti FANUC sono:

* `J` – movimento in giunti;
* `L` – movimento lineare.

Il movimento può essere definito tramite:

* velocità;
* percentuale di velocità;
* terminazione;
* configurazione del robot;
* eventuali parametri aggiuntivi.

## 2. FINE e CNT

Con terminazione `FINE` il robot completa il movimento e raggiunge il punto prima di procedere con l'istruzione successiva.

Con terminazione `CNT` il controller può raccordare il movimento successivo, il punto non deve quindi essere considerato necessariamente raggiunto con precisione.

La traiettoria effettiva può dipendere dalla velocità e dai parametri del movimento: una traiettoria verificata a bassa velocità non deve essere considerata automaticamente sicura alla velocità massima.

## 4. Skip Jump

`SkipJump` permette di interrompere un movimento quando viene verificata una condizione e di saltare a una label.


```text
SKIP CONDITION <condizione>
L ... SkipJump, LBL[1]
...
LBL[1]
```

È utile per realizzare:

* cancellazione del movimento;
* recovery;
* gestione di condizioni esterne;
* interruzione controllata della sequenza.




Una strategia comune consiste nell'utilizzare una variabile booleana per autorizzare o cancellare i movimenti:

```text
ContinueOK = 1
→ movimento consentito

ContinueOK = 0
→ movimento saltato/cancellato
```

La variabile deve essere gestita in modo coerente tra:

* supervisione;
* gestione errori;
* sequenza di movimento;
* eventuale PLC.


## 5. Precisione della posizione

Quando è necessario garantire l'arrivo sul punto:

* utilizzare `FINE` come terminazione dell'ultimo movimento;
* utilizzare accelerazioni e velocità compatibili con la precisione richiesta (es. `ACC20`).

## 6. Buffer dei movimenti

FANUC esegue normalmente le istruzioni di movimento in sequenza: l'istruzione successiva viene eseguita solo al completamento del movimento precedente.

Non bisogna assumere un comportamento equivalente ai controller che utilizzano un buffer di traiettorie completamente programmabile (vedi robot STAUBLI).

## 7. Coordinate W, P, R

Nelle posizioni cartesiane FANUC:

* `W` → rotazione attorno a X;
* `P` → rotazione attorno a Y;
* `R` → rotazione attorno a Z.

L'orientamento deve essere interpretato considerando il sistema di coordinate e l'ordine delle rotazioni utilizzato dal controller.

## 8. UTOOL e UFRAME

La posizione cartesiana di un punto dipende anche da:

* `UTOOL`;
* `UFRAME`.

Prima di verificare o modificare una posizione è quindi fondamentale controllare tool e frame attivi.
