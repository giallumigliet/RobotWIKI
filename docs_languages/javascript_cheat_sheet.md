# JavaScript --- cheat sheet sintetica

> JavaScript usa `{}` per delimitare i blocchi e normalmente `;` per
> terminare le istruzioni. Il punto e virgola è spesso facoltativo
> grazie all'ASI (Automatic Semicolon Insertion), ma è consigliabile
> usarlo con coerenza.

  -----------------------------------------------------------------------------------------
  Concetto                            Sintassi JavaScript / esempio
  ----------------------------------- -----------------------------------------------------
  **Inizio programma**                esecuzione dall'alto verso il basso; in un file `.js`
                                      non serve una keyword iniziale

  **Fine programma**                  fine del file o terminazione del flusso

  **Terminatore**                     `;` (consigliato)

  **Commento singola riga**           `// commento`

  **Commento multilinea**             `/* commento */`

  **Dichiarazione variabile           `let n = 10;`
  riassegnabile**                     

  **Dichiarazione costante**          `const nome = "Ada";`

  **Variabile legacy**                `var n = 10;` (in genere evitare in codice nuovo)

  **Tipi primitivi**                  `number`, `string`, `boolean`, `bigint`, `symbol`,
                                      `undefined`, `null`

  **Array**                           `const a = [1, 2, 3];`

  **Oggetto**                         `const p = { x: 10, y: 20 };`

  **Assegnazione**                    `n = 10;`

  **Confronti**                       `===` `!==` `<` `<=` `>` `>=`

  **Uguaglianza debole**              `==` `!=` (con conversione di tipo; di norma
                                      preferire `===` e `!==`)

  **Logica booleana**                 `&&`, `||`, `!`

  **IF**                              `if (cond) { ... }`

  **ELSE**                            `else { ... }`

  **ELSE IF**                         `else if (cond) { ... }`

  **WHILE**                           `while (cond) { ... }`

  **DO/WHILE**                        `do { ... } while (cond);`

  **FOR classico**                    `for (let i = 0; i < 10; i++) { ... }`

  **FOR...OF**                        `for (const valore of array) { ... }`

  **FOR...IN**                        `for (const chiave in oggetto) { ... }`

  **SWITCH / CASE**                   `switch (x) { case 1: ...; break; default: ...; }`

  **Funzione**                        `function somma(a, b) { return a + b; }`

  **Arrow function**                  `const somma = (a, b) => a + b;`

  **Chiamata funzione**               `somma(2, 3);`

  **Return**                          `return valore;`

  **Interruzione ciclo**              `break;`

  **Salta iterazione**                `continue;`

  **Gestione errori**                 `try { ... } catch (err) { ... } finally { ... }`

  **Eccezione**                       `throw new Error("Errore");`

  **Stringhe**                        `"test"`, `'test'`, `` `Ciao ${nome}` ``

  **Booleani**                        `true` / `false`

  **Valore assente**                  `null` (assenza intenzionale), `undefined` (non
                                      definito)

  **Stampa console**                  `console.log("test");`

  **Input/output**                    dipendono dall'ambiente: browser, Node.js o API
                                      specifiche

  **Attesa asincrona**                `await funzioneAsync();` dentro una funzione `async`
                                      o in un contesto che supporta top-level await

  **Promise**                         `funzioneAsync().then(r => ...).catch(err => ...);`

  **Import / export**                 `import { x } from "./modulo.js";` /
                                      `export function f() { ... }`
  -----------------------------------------------------------------------------------------

## Mini esempio

``` javascript
const numeri = [1, 2, 3, 4, 5];

function quadrato(n) {
  return n * n;
}

for (const n of numeri) {
  if (n % 2 === 0) {
    console.log(`${n}² = ${quadrato(n)}`);
  }
}

console.log("DONE");
```

## Note utili

-   Preferisci `const` quando una variabile non deve essere riassegnata;
    usa `let` quando serve riassegnarla.
-   Usa `===` e `!==` per evitare conversioni di tipo implicite nei
    confronti.
-   Gli array sono indicizzati da `0`; per esempio, `a[0]` è il primo
    elemento.
-   `for...of` scorre i valori degli elementi; `for...in` scorre le
    chiavi enumerabili di un oggetto.
-   Le operazioni asincrone spesso restituiscono una `Promise`; `await`
    ne attende il risultato senza bloccare l'intero ambiente.
