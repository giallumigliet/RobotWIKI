# Python --- cheat sheet sintetica

> Python usa l'indentazione per delimitare i blocchi e non richiede `;`
> alla fine delle istruzioni. Per convenzione si usano 4 spazi per
> livello di indentazione.

  ------------------------------------------------------------------------------------------
  Concetto                            Sintassi Python / esempio
  ----------------------------------- ------------------------------------------------------
  **Inizio programma**                inizio del file `.py`; nessuna keyword obbligatoria

  **Fine programma**                  fine del file o del flusso di esecuzione

  **Terminatore**                     normalmente nessuno

  **Commento**                        `# commento`

  **Stringa multilinea**              `"""testo su più righe"""`

  **Variabile intera**                `n = 10`

  **Decimale**                        `x = 3.14`

  **Stringa**                         `nome = "Ada"`

  **Booleano**                        `attivo = True` / `False`

  **Valore nullo**                    `None`

  **Tipi comuni**                     `int`, `float`, `str`, `bool`, `list`, `tuple`,
                                      `dict`, `set`

  **Annotazione tipo**                `n: int = 10`

  **Lista**                           `a = [1, 2, 3]`

  **Tupla**                           `p = (10, 20)`

  **Dizionario**                      `persona = {"nome": "Ada", "eta": 30}`

  **Insieme**                         `s = {1, 2, 3}`

  **Assegnazione**                    `n = 10`

  **Confronti**                       `==` `!=` `<` `<=` `>` `>=`

  **Identità**                        `is` / `is not`

  **Appartenenza**                    `in` / `not in`

  **Logica booleana**                 `and`, `or`, `not`

  **IF**                              `if cond:` seguito da un blocco indentato

  **ELSE**                            `else:`

  **ELSE IF**                         `elif cond:`

  **WHILE**                           `while cond:`

  **FOR**                             `for i in range(10):`

  **FOR su collezione**               `for elemento in lista:`

  **SWITCH / CASE**                   `match valore:` con `case ...:` (Python 3.10+)

  **Funzione**                        `def somma(a, b):`

  **Chiamata funzione**               `somma(2, 3)`

  **Return**                          `return valore`

  **Interruzione ciclo**              `break`

  **Salta iterazione**                `continue`

  **Funzione anonima**                `lambda x: x * 2`

  **Comprehension**                   `[x * 2 for x in valori]`

  **Gestione errori**                 `try:` ... `except Exception as e:` ... `finally:`

  **Eccezione**                       `raise ValueError("Errore")`

  **Import modulo**                   `import math` / `from math import sqrt`

  **Stampa**                          `print("Ciao")`

  **Input testuale**                  `nome = input("Nome: ")`

  **File**                            `with open("file.txt", "r", encoding="utf-8") as f:`

  **Stringa formattata**              `f"Ciao {nome}"`

  **Classe**                          `class Robot:`

  **Entry point**                     `if __name__ == "__main__":`
  ------------------------------------------------------------------------------------------

## Mini esempio

``` python
def quadrato(n: int) -> int:
    return n * n


numeri = [1, 2, 3, 4, 5]

for n in numeri:
    if n % 2 == 0:
        print(f"{n}^2 = {quadrato(n)}")

print("DONE")
```

## Note utili

-   L'indentazione è sintassi: mantieni coerenti i livelli, normalmente
    con 4 spazi.
-   `range(5)` produce i valori `0, 1, 2, 3, 4`, non include il limite
    finale.
-   `==` confronta valori; `is` verifica l'identità dell'oggetto ed è
    usato comunemente con `None` (`x is None`).
-   Le liste sono mutabili; le tuple sono generalmente usate per
    sequenze che non devono essere modificate.
-   Le annotazioni (`n: int`, `-> int`) documentano i tipi, ma non
    impongono automaticamente controlli a runtime.
-   `match/case` è disponibile da Python 3.10.
