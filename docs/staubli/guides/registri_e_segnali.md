# Registri e segnali Stäubli

## 1. Tipi principali

VAL3 utilizza diversi tipi per rappresentare dati e I/O.

| Tipo | Uso |
|---|---|
| `num` | Valori numerici |
| `bool` | Stati booleani |
| `string` | Testo |
| `dio` | I/O digitali |
| `aio` | I/O analogici |
| `sio` | Seriali e socket |
| `joint` | Dati articolari |
| `point` | Posizioni cartesiane |
| `frame` | Sistemi di riferimento |
| `tool` | Utensili |
| `mdesc` | Parametri di movimento |

## 2. I/O digitali

Le variabili `dio` possono essere collegate agli I/O del sistema.

Esempio concettuale:

```text
dio dGripper
↓
collegamento al segnale di sistema
↓
dioSet(...)
```

La mappatura reale dipende dalla configurazione dell'applicazione/controller.

## 3. I/O analogici

Gli `aio` sono utilizzati per segnali analogici o numerici secondo la configurazione del sistema.

## 4. Comunicazioni

Gli `sio` possono essere utilizzati per porte seriali e comunicazioni socket.

Per il troubleshooting verificare:
- collegamento;
- configurazione porta;
- stato socket;
- timeout;
- dati ricevuti/inviati.

## 5. Gruppi di I/O

`dio` può anche essere utilizzato come array per rappresentare gruppi di bit e convertire valori binari tramite funzioni come `dioGet()` e `dioSet()`.

## 6. Diagnostica

Quando un segnale non funziona verificare:

1. collegamento fisico;
2. configurazione I/O;
3. collegamento della variabile VAL3;
4. stato del programma;
5. interblocchi;
6. eventuali errori runtime.

## 7. Attenzione

Non assumere una numerazione I/O standard tra celle diverse. La configurazione deve essere verificata direttamente sul controller.
