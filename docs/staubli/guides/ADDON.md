# ADDON

## Azioni preliminari
- Verificare la versione del controllore, sarà qualcosa come `s8.20.3`.
- Se la versione del controllore fisico è diversa da quella della cella SRS, crea un nuovo controllore su SRS della stessa versione del robot fisico.
- Scarica dal portale MyStaubli gli ADDON della versione del controllore.

## 1. Aggiunta ADDON su SRS
- Nella cartella dell'ADDON scaricata da MyStaubli, eseguire il file `.exe`.
- Click destro sul controllore>Configurazione controllore>Tendina ADDON: flaggare l'ADDON aggiunto per attivarlo.
  
## 2. Aggiunta ADDON su controllore fisico
- Connettersi al controllore fisico con FTP (per esempio con FileZilla).
- Trovare il file `.so` della cartella **CS9** presente nella cartella dell'ADDON scaricata da MyStaubli.
- Copiare il file `.so` nel controllore fisico nella directory **usr/app** (se non esiste la cartella app, bisogna crearla).
- Riavviare il controllore.
 
