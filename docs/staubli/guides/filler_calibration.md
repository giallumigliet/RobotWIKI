# Calibrazione Robot Filler
Al fine di muoversi parallelamente alla barra porta aghi/tappatura, bisogna creare un nuovo tool calibrato.

## Azioni preliminari
- Se si sta creando un nuovo formato, predisporre il codice e inserire i parametri di ricetta a HMI (info nest: nRow, nColumn, interassi...).
- Munirsi di nest corretto (vuoto) e metterlo nel tool del filler.
- Mettere punta e contropunta: una nel centratore più vicino al centro della macchina, l'altra andrà inserita nel nest secondo la procedura richiesta (o direttamente nel tool per alcuni formati).
- Controllare di avere **OCTAVE** o **Matlab** installato, avendo il programma `CalibToolV2.m` (appartiene alla directory *calibrazione\calibrary*)

## Step calibrazione
1. Interrompere applicazione ciclo.
2. Avviare applicazione `CalibToolV2()`, con cui prendere i punti che definiscono il frame.
3. Caricare punti con il programma `CalibToolV2.m` da **OCTAVE**: run del programma, selezionare "FTP Connection", inserire IP Address del robot da calibrare con username e password del profilo, confermare.
4. Annotare le correzioni di rotazione e creare il tool calibrato con esse.
5. Eventualmente ritoccare anche gli interassi con le correzioni interassi.

**N.B**: l'errore massimo consentito è di **0.3**, in caso contrario riprendere i punti (step 2).


## Tool figlio
Dopo la calibrazione si avrà un tool calibrato. Per essere ancora più precisi si crea un tool figlio del tool calibrato.

Il tool figlio verrà modificato in modo tale da muoversi con esso parallelamente alla barra porta aghi/tappatura: la distanza barra-tool misurata con un calibro in uno degli angoli del tool,
deve rimanere costante negli altri angoli muovendosi con il tool figlio in x o y.

**N.B**: la correzione del tool figlio dovrebbe essere modesta, di solito massimo mezzo grado.
