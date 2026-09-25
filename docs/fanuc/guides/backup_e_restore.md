# Backup e Restore FANUC

## 1. Full System Backup

Per un backup completo utilizzare, quando disponibile:

```text
Full System Backup
→ All of above
```

Il semplice System Backup può non contenere tutti i file necessari alla ricostruzione completa del software (inoltre non genera i `.LS`).

## 2. Organizzazione del backup

Struttura consigliata:

```text
NomeCella/
└── Robot_1/
    └── BACKUP/
    └── KAREL/
```

Nella cartella **BACKUP** saranno raccolti i file del Full System Backup, nella cartella **KAREL** saranno presenti le sorgenti KAREL `.KL`, aggiornate dopo ogni modifica da Roboguide.

Infatti nel controllore non sono generalmente presenti i `.KL`, ma solo i file `.PC` generati dalla compilazione dei KAREL.


## 4. Restore

Durante il restore, prestare particolare attenzione ai file di sistema servo e master.
Per non causare un errore `SRVO-038 Pulse mismatch`, in una procedura di ripristino **è necessario escludere** i file:

- `SYSSERVO.SV`
- `SYSSERVO.VA`
- `SYSMAST.SV`
- `SYSMAST.VA`


Prima del restore, bisogna riavviare il controllore in modalità controlled:

```text
FCTN
→ CYCLE POWER
→ OPTIONS
→ CTRL
```

Per avviare il restore:

```text
MENU 
→ FILE
→ navigare nella directory contenente il backup;
→ RESTORE 
→ All of above
```
E infine un avvio del controllore in `COLD`.

```text
FCTN
→ START (COLD)
```


## 6. Image Backup

Un Image Backup è legato allo specifico controller e alla sua configurazione.

Non deve essere utilizzato indiscriminatamente per trasferire l'immagine di un robot su un altro robot.

Va utilizzato secondo le procedure FANUC previste, ad esempio in occasione di interventi importanti sul controller o aggiornamenti software compatibili.
