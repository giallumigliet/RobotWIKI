# CONFIGURAZIONE SAFETY

## 0. VERSIONI
Ogni robot dispone di una versione safety di default `20x.xxx`.
Con una safety classica bisogna scegliere `10x.xxx`, mentre per una SafeCell+ invece `2.10x`

## 1. INTERFACCE
PROTOCOLLO Ethernet/IP
- Scegliere protocollo `none`. 
- I segnali UsiA, UsiB, UsiC, UsiD e il modo di funzionamento NON devono essere pulsati (tutto `OFF`).

PROTOCOLLO PROFIsafe (con PROFINET)
- Scegliere protocollo `PROFIsafe` con Profile Address scelto dal PLC.
- I segnali UsiA, UsiB, UsiC, UsiD e il modo di funzionamento DEVONO essere pulsati (tutto `ON`).

## 2. MODO DI FUNZIONAMENTO
- Se la safety è gestita dal PLC, seleziona `WMS/PLC esterno:J101/Profilo slave di sicurezza`.
- Non dare la possiblità di accedere alla modalità manuale rapida, ☐.
- Rendere disponibile il modo di funzionamento (manuale/automatico) sull'uscita safety USOB, ☑.

## 3. CONTROLLO RIAVVIO
- Bisogna poter riavviare tramite Software + Hardware (SP2/VAL3/WMSRestart su J101-4).
- Di solito si lasciano le durate di default, senza assegnare il riavvio sull'uscita safety USOC,  ☐.

## 4. ARRESTO DI EMERGENZA
- L'arresto deve usare USIA e J101-7/8 come ingressi.
- Deve usare USOA come uscita, ☑.

## 5. ZONE DI LAVORO
### Posizioni di riferimento (REFERENCING TEST)
Se bisogna fare il referencing si devono indicare le due posizioni di riferimento e i tempi di avviso.
Decidere se attivare solo in modalità automatica.

### Asse (LIMITI GIUNTI)
In seguito all'utilizzo del software BDC (Breaking Distance Calculator) può essere utile limitare i giunti in posizione e la decelerazione massima dei primi tre giunti.

### Test freni (BRAKE TEST)
Se bisogna fare il Brake Test, indicare i tempi di avviso.
Decidere se attivare solo in modalità automatica.


## 6. LIMITE DI VELOCITA'
Impostare limiti di velocità dei giunti e tempi di arresto per ciascun segnale safety in ingresso, se necessario.

## 7. ARRESTO DI SICUREZZA
Modo di funzionamento in manuale ☑ e automatico ☑.
- **UsiA**: modalità di arresto `SS1`.
- **UsiB**: modalità di arresto `SS2`.
- **UsiC**: modalità di arresto `SS1`.
- **UsiD**: modalità di arresto `SS1`.
- **Dispositivo di attivazione**: modalità di arresto `SS1`.

## 8. USCITE
- **UsoA**: segnala `Estop`.
- **UsoB**: segnala `WorkingMode`.
- **UsoC**: segnala `SS2`.
- **Elettrovalvole**: segnala `VAL3 senza controllo di sicurezza`.


# CARICAMENTO SAFETY da SRS
1. Scarica tutto dalla macchina
2. Configura safety (vedi sopra)
3. Salva e esporta la safety sul robot con il corretto indirizzo IP
4. Premere pulsante UPDATE sul controllore
5. Scaricare i file `SafetyStruct.json` `normal.json` `maintenance.json` della corretta versione safety relativi al modello di robot usato (eventualmente scaricali dal sito di Staubli).
6. Con FileZilla sostitusci i 3 file appena scaricati nelle cartelle `config` (SafetyStruct) e `libScpConfig` (normal e maintenance)
7. Riavvia il controllore


