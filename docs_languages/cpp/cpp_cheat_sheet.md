# C++ --- cheat sheet sintetica

> C++ è un linguaggio compilato e tipizzato staticamente. I blocchi sono
> delimitati da `{}` e le istruzioni semplici terminano normalmente con
> `;`.

  -------------------------------------------------------------------------------------------
  Concetto                            Sintassi C++ / esempio
  ----------------------------------- -------------------------------------------------------
  **Inclusione librerie**             `#include <iostream>`

  **Inizio programma**                `int main() {`

  **Fine programma**                  `return 0;` seguito da `}`

  **Terminatore**                     `;`

  **Commento singola riga**           `// commento`

  **Commento multilinea**             `/* commento */`

  **Variabile intera**                `int n = 10;`

  **Decimale**                        `double x = 3.14;` / `float x = 3.14f;`

  **Carattere**                       `char c = 'A';`

  **Booleano**                        `bool attivo = true;`

  **Stringa**                         `std::string testo = "ciao";`

  **Costante**                        `const int limite = 10;`

  **Deduzione tipo**                  `auto x = 10;`

  **Array statico**                   `int a[3] = {1, 2, 3};`

  **Array dinamico / vettore**        `std::vector<int> a = {1, 2, 3};`

  **Assegnazione**                    `n = 10;`

  **Confronti**                       `==` `!=` `<` `<=` `>` `>=`

  **Logica booleana**                 `&&`, `||`, `!`

  **IF**                              `if (cond) { ... }`

  **ELSE**                            `else { ... }`

  **ELSE IF**                         `else if (cond) { ... }`

  **WHILE**                           `while (cond) { ... }`

  **DO/WHILE**                        `do { ... } while (cond);`

  **FOR classico**                    `for (int i = 0; i < 10; ++i) { ... }`

  **FOR range-based**                 `for (const auto& x : valori) { ... }`

  **SWITCH / CASE**                   `switch (x) { case 1: ...; break; default: ...; }`

  **Funzione**                        `int somma(int a, int b) { return a + b; }`

  **Chiamata funzione**               `somma(2, 3);`

  **Return**                          `return valore;`

  **Interruzione ciclo**              `break;`

  **Salta iterazione**                `continue;`

  **Riferimento**                     `int& r = n;`

  **Puntatore**                       `int* p = &n;`

  **Accesso tramite puntatore**       `*p`

  **Classe**                          `class Robot { public: void avvia(); };`

  **Struttura**                       `struct Punto { double x; double y; };`

  **Namespace standard**              `std::cout`, `std::string`, `std::vector`

  **Stampa**                          `std::cout << "Ciao" << std::endl;`

  **Input**                           `std::cin >> n;`

  **Gestione errori**                 `try { ... } catch (const std::exception& e) { ... }`

  **Eccezione**                       `throw std::runtime_error("Errore");`
  -------------------------------------------------------------------------------------------

## Mini esempio

``` cpp
#include <iostream>
#include <vector>

int quadrato(int n) {
    return n * n;
}

int main() {
    std::vector<int> numeri = {1, 2, 3, 4, 5};

    for (const auto n : numeri) {
        if (n % 2 == 0) {
            std::cout << n << "^2 = " << quadrato(n) << '\\n';
        }
    }

    std::cout << "DONE\\n";
    return 0;
}
```

## Note utili

-   Il codice C++ deve essere compilato; ad esempio con
    `g++ main.cpp -o programma`.
-   Gli indici di array e `std::vector` partono da `0`.
-   `std::vector` è spesso preferibile agli array C quando la dimensione
    può variare.
-   `const auto&` permette di leggere elementi senza copiarli, utile
    soprattutto per oggetti grandi.
-   `=` assegna un valore; `==` confronta due valori.
-   Evita puntatori non necessari e gestioni manuali della memoria
    quando puoi usare contenitori e smart pointer della libreria
    standard.
