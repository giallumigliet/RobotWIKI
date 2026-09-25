# Homing e Space Function


## 1. Space Function

Le zone FANUC vengono configurate tramite:

```text
MENU
→ SETUP
→ NEXT
→ Space fnct.
```

Una zona può essere definita geometricamente tramite i relativi limiti.

Le Space Function possono essere utilizzate per:

* interblocchi;
* zone di interferenza;
* limitazioni operative;
* gestione dell'homing.

## 2. Zone di interferenza

Quando un robot deve entrare in una zona controllata, devono essere verificate tutte le condizioni di autorizzazione previste dalla cella.

Se una zona non è autorizzata, il robot può non essere in grado di entrarvi oppure, se già presente, potrebbe non essere autorizzato a muoversi.

## 3. Aggiunta e modifica di una zona

Per aggiungere una nuova zona è necessario:

1. configurare la Space Function;
2. assegnare il relativo segnale;
3. aggiungere la zona alla logica di controllo;
4. verificare gli interblocchi della zona.

Per modificare una zona è necessario prima disabilitarla.

## 4. Verifica

Dopo aver modificato le zone è necessario verificare:

* ingresso nella zona;
* permanenza nella zona;
* uscita dalla zona;
* comportamento in caso di perdita dell'autorizzazione.
