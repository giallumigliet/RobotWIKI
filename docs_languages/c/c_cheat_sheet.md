# C --- cheat sheet sintetica

> C è un linguaggio compilato e tipizzato staticamente, usato spesso per
> sistemi embedded, firmware e software di sistema. I blocchi sono
> delimitati da `{}` e le istruzioni terminano normalmente con `;`.

  ----------------------------------------------------------------------------------------
  Concetto                            Sintassi C / esempio
  ----------------------------------- ----------------------------------------------------
  **Inclusione libreria**             `#include <stdio.h>`

  **Inizio programma**                `int main(void) {`

  **Fine programma**                  `return 0;` seguito da `}`

  **Terminatore**                     `;`

  **Commento singola riga**           `// commento` (C99 e successivi)

  **Commento multilinea**             `/* commento */`

  **Intero**                          `int n = 10;`

  **Intero lungo**                    `long n = 100000L;`

  **Intero senza segno**              `unsigned int n = 10U;`

  **Decimale**                        `float x = 3.14f;` / `double x = 3.14;`

  **Carattere**                       `char c = 'A';`

  **Stringa C**                       `char testo[] = "ciao";`

  **Booleano**                        `#include <stdbool.h>` poi `bool attivo = true;`
                                      (C99+)

  **Costante**                        `const int limite = 10;`

  **Macro costante**                  `#define LIMITE 10`

  **Array**                           `int a[3] = {1, 2, 3};`

  **Array di caratteri**              `char nome[20] = "Ada";`

  **Assegnazione**                    `n = 10;`

  **Confronti**                       `==` `!=` `<` `<=` `>` `>=`

  **Logica booleana**                 `&&`, `||`, `!`

  **IF**                              `if (cond) { ... }`

  **ELSE**                            `else { ... }`

  **ELSE IF**                         `else if (cond) { ... }`

  **WHILE**                           `while (cond) { ... }`

  **DO/WHILE**                        `do { ... } while (cond);`

  **FOR**                             `for (int i = 0; i < 10; i++) { ... }`
                                      (dichiarazione nel `for` supportata da C99+)

  **SWITCH / CASE**                   `switch (x) { case 1: ...; break; default: ...; }`

  **Funzione**                        `int somma(int a, int b) { return a + b; }`

  **Prototipo funzione**              `int somma(int a, int b);`

  **Chiamata funzione**               `somma(2, 3);`

  **Return**                          `return valore;`

  **Interruzione ciclo**              `break;`

  **Salta iterazione**                `continue;`

  **Puntatore**                       `int *p = &n;`

  **Dereferenziazione**               `*p`

  **Indirizzo variabile**             `&n`

  **Struttura**                       `struct Punto { int x; int y; };`

  **Definizione di tipo**             `typedef unsigned char byte;`

  **Allocazione dinamica**            `malloc()` / `calloc()` da `<stdlib.h>`

  **Liberazione memoria**             `free(ptr);`

  **Stampa formattata**               `printf("n = %d\\n", n);`

  **Input formattato**                `scanf("%d", &n);` (controllare il valore
                                      restituito)

  **Lettura carattere**               `getchar();`

  **File**                            `FILE *f = fopen("dati.txt", "r");`

  **Gestione errore file**            controllare `f == NULL`; poi chiudere con
                                      `fclose(f);`

  **Stringhe C**                      funzioni come `strlen()`, `strcmp()`, `strcpy()` da
                                      `<string.h>`

  **Operatore ternario**              `ris = cond ? a : b;`

  **Operatore modulo**                `resto = n % 2;`

  **Enumerazione**                    `enum Stato { SPENTO, ACCESO };`
  ----------------------------------------------------------------------------------------

## Mini esempio

``` c
#include <stdio.h>

int quadrato(int n) {
    return n * n;
}

int main(void) {
    int numeri[] = {1, 2, 3, 4, 5};
    int dimensione = (int)(sizeof(numeri) / sizeof(numeri[0]));

    for (int i = 0; i < dimensione; i++) {
        if (numeri[i] % 2 == 0) {
            printf("%d^2 = %d\\n", numeri[i], quadrato(numeri[i]));
        }
    }

    printf("DONE\\n");
    return 0;
}
```

## Note utili

-   Il C richiede normalmente una fase di compilazione; ad esempio:
    `gcc main.c -o programma`.
-   Gli indici degli array partono da `0`. In C un array non conosce
    automaticamente la propria lunghezza: per un array locale come
    quello dell'esempio, `sizeof(a) / sizeof(a[0])` calcola il numero di
    elementi. Questa formula non funziona allo stesso modo su un
    parametro funzione dichiarato come array, perché lì viene trattato
    come puntatore.
-   Le stringhe C sono array di `char` terminati dal carattere nullo
    `\\0`; bisogna riservare spazio anche per il terminatore.
-   `scanf()` richiede indirizzi per la maggior parte delle variabili,
    per esempio `scanf("%d", &n)`. Verifica il valore restituito per
    controllare se la lettura è riuscita.
-   I puntatori e la memoria dinamica sono potenti ma richiedono
    attenzione: evita accessi fuori dai limiti, doppie liberazioni e uso
    di memoria già liberata.
-   `malloc()` restituisce un puntatore che va controllato rispetto a
    `NULL`; la memoria allocata va rilasciata con `free()` quando non
    serve più.
-   `const` impedisce di modificare un oggetto attraverso quel nome, ma
    non rende automaticamente costanti tutti gli oggetti raggiungibili
    tramite un puntatore.
-   Per codice portabile, specifica lo standard C richiesto dal progetto
    e consulta la documentazione del compilatore e della piattaforma.
