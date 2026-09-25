# Opzioni Robot - AddOns

Configurazione da RoboGuide:

```text
click destro sul robot 
→ Proprietà 
→ Serialize robot 
→ Opzioni robot 
→ Next 
→ Finish 
→ Apply
```



## 1. Opzioni di configurazione di base/identificazione


### H510 - Basic Software
Software base del controller FANUC; indispensabile per il funzionamento del robot.
### H521 - Basic Dictionary – English
Aggiunge l'interfaccia e i messaggi del controller in lingua inglese.
### H656 - M-20iD/25 / ARC Mate 120iD
Identifica il modello/configurazione del robot.
### H930 - Digital Servo Function
Funzioni software di base per il controllo servo del robot; normalmente parte della configurazione standard del controller.
### J618 - CE Mark
Configurazione software necessaria per le funzioni/requisiti associati alla conformità CE del controller.
### J508 - Customer Registration
Funzione per la gestione/registrazione di informazioni personalizzate del cliente nel controller; generalmente non necessaria per la programmazione del robot.

## 2. Opzioni che dipendono dalla configurazione/rete

### R558 - Internet Connection / Customization
Funzioni di rete avanzate del controller, tra cui DHCP e servizi Ethernet; utile quando il robot deve integrarsi in una rete IT/di fabbrica.
### R651 - FRL Parameters
Imposta i parametri regionali FANUC; necessario per la configurazione prevista da FANUC Ltd./mercati specifici, non è un'opzione applicativa.

## 3. Opzioni relative al processo

### H552 - HandlingTool
Applicazione FANUC standard per la programmazione e gestione di robot di movimentazione, pick & place e handling.
### J567 - DCS Position/Speed Check
Per applicazioni di sicurezza che devono limitare e controllare posizione, zona e/o velocità del robot tramite DCS.
### J760 - Integrated PMC
Permette di utilizzare il PMC/Ladder integrato per gestire logiche sequenziali e segnali I/O direttamente nel controller.
### R632 - KAREL
Permette di utilizzare programmi KAREL per realizzare funzioni personalizzate e applicazioni più avanzate rispetto al solo TP.
### R648 - User Socket Messaging
Permette al robot di comunicare via TCP/IP socket con PC, PLC o altri dispositivi tramite programmi KAREL.
### R765 - iRDiagnostics
Strumenti di diagnostica e monitoraggio per individuare problemi servo, monitorare riduttori e analizzare le prestazioni del robot.
### R796 - ASCII Program Loader
Permette di caricare sul robot programmi .LS ASCII, utili per trasferire o modificare programmi FANUC tramite PC.
### R854 - Zero Down Time (ZDT)
Raccoglie e invia dati del robot per monitoraggio, manutenzione predittiva e riduzione dei fermi macchina.
### J766 - Maintenance Reminder Plus
Gestisce promemoria e scadenze di manutenzione del robot e dei suoi componenti.


