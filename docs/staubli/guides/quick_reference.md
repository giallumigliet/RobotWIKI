# Stäubli – Quick Reference

## Movimento

| Istruzione | Funzione |
|---|---|
| `movej` | Movimento articolare |
| `movel` | Movimento lineare |
| `movec` | Movimento circolare |
| `waitEndMove()` | Sincronizzazione con fine movimento |

## Tipi VAL3

| Tipo | Funzione |
|---|---|
| `bool` | Booleano |
| `num` | Numero |
| `string` | Testo |
| `dio` | I/O digitale |
| `aio` | I/O analogico |
| `sio` | Seriale/socket |
| `point` | Punto cartesiano |
| `joint` | Posizione articolare |
| `frame` | Sistema di riferimento |
| `tool` | Utensile |
| `mdesc` | Parametri movimento |

## I/O

Funzioni comuni:

```text
dioGet(...)
dioSet(...)
```

## Comunicazioni

```text
sioGet(...)
sioSet(...)
```

Per socket e porte seriali verificare sempre la configurazione del controller.

## Controller

```text
CS8
CS9
```

La disponibilità delle funzioni dipende dalla versione software.

## Prima di modificare un movimento

- [ ] Backup
- [ ] Tool
- [ ] Frame
- [ ] Punto
- [ ] Configurazione
- [ ] mdesc
- [ ] I/O
- [ ] Interferenze
- [ ] Test SRS
- [ ] Test manuale
- [ ] Recovery verificato

## Principi fondamentali

1. Verificare sempre tool e frame.
2. Conservare l'applicazione VAL3 originale.
3. Registrare versione VAL3 e SRS.
4. Non assumere una mappatura I/O standard.
5. Testare le modifiche in SRS quando possibile.
6. Non modificare dati di calibrazione senza procedura appropriata.
