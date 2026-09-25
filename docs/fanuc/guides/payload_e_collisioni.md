# Payload e Collision Detection

## 1. Payload

Il payload deve rappresentare correttamente il carico effettivamente movimentato dal robot.

Un payload errato può influenzare:

* false collisioni o collisioni non rilevate.
* prestazioni del movimento e comportamento dei servo;
* accuratezza della diagnostica;


## 2. Configurazione

I payload possono essere configurati tramite:

```text
MENU
→ NEXT
→ SYSTEM
→ MOTION
```

Nel programma possono essere selezionati tramite:

```text
PAYLOAD[n]
```

## 3. Collision Guard

La configurazione del Collision Guard può essere verificata tramite:

```text
MENU
→ SETUP
→ Col Guard
```

La sensibilità deve essere impostata in funzione dell'applicazione e verificata durante il commissioning.

## 4. Disturbance Torque

Le informazioni relative al Disturbance Torque possono essere consultate nello stato degli assi:

```text
MENU
→ NEXT
→ STATUS
→ Axis
```

## 5. Collision Detection

La Collision Detection può essere attivata tramite TP con:

```text
COL DETECTION ON
```

Prima di abilitarla verificare:

* payload;
* assegnazione gruppo motion;
* programma interessato;
* condizioni meccaniche;
* traiettoria;
* parametri di sensibilità.

Una configurazione di collision detection non corretta può generare falsi interventi oppure non rilevare correttamente determinate condizioni.
