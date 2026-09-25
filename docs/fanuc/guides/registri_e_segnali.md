# Registri e segnali FANUC

## 1. Numeric Register – R

I registri `R[]` contengono valori numerici globali.

Sono utilizzati per:

* stati;
* contatori;
* parametri;
* codici errore;
* dati di processo;
* risultati di calcoli.

## 2. Position Register – PR

I `PR[]` contengono posizioni del robot.

Possono rappresentare:

* punti del ciclo;
* appro;
* TCP;
* punti calcolati;
* vertici di zone.

## 3. String Register – SR

Gli `SR[]` contengono stringhe, utili quando il programma deve gestire dati testuali.

## 4. Flag e Marker

I `F[]` sono segnali booleani.

Possono essere utilizzati per:

* condizioni di programma;
* interblocchi;
* simulazione;
* collegamento logico a segnali UOP o digitali.

I `M[]` sono segnali booleani ottenuto tramite una logica tra segnali: AND, OR, NOT, ...

## 5. DI/DO e AI/AO

I `DI[]` e `DO[]` sono rispettivamente ingressi e uscite digitali.

I `AI[]` e `AO[]` sono rispettivamente ingressi e uscite analogiche.


## 6. GI e GO

I `GI[]` e `GO[]` permettono di gestire gruppi di bit come valori numerici.

Sono utili per lo scambio di dati con PLC o dispositivi esterni.

## 7. Configurazione

Il numero di registri e altri elementi disponibili dipende dalla configurazione del controller.

La modifica della quantità degli elementi può richiedere l'avvio in Controlled Start (**RACK**, **SLOT**...).

