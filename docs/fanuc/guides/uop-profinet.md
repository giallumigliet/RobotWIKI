# UOP e Profinet

## 1. UOP

Gli UOP FANUC permettono di controllare il robot tramite segnali esterni, tipicamente provenienti dal PLC.

Tra i segnali più importanti ci sono:

* `UI[2]` – HOLD;
* `UI[6]` – START/RESTART secondo configurazione;
* segnali di selezione programma;
* segnali di stato del controller.

La mappatura effettiva dipende dalla configurazione della cella.


## 2. Simulazione UOP

In RoboGuide è possibile simulare il PLC tramite Flag.

Quando si utilizza una configurazione senza controllo UOP esterno, verificare anche lo stato della variabile di sistema:

```text
$RMT_MASTER
```

## 4. Profinet

Per utilizzare Profinet è necessario:

1. verificare l'hardware installato;
2. avviare il controllore in **Controlled Start**;
3. configurare la scheda;
4. configurare il robot come **Profinet Device** o secondo il ruolo previsto;
5. configurare gli I/O (configurare i byte di scambio);
6. mappare **DI/DO** e **GI/GO**;
7. configurare il PLC;
8. fornire il **file GSDML** al PLC;
9. verificare lo scambio dati.



## 5. Mapping

La mappatura degli I/O FANUC utilizza tipicamente:

```text
Rack
Slot
Start
```

Il significato dei segnali deve essere documentato in una tabella specifica della cella.
