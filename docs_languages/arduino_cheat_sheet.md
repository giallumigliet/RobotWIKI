# Arduino (C++ semplificato) --- cheat sheet sintetica

> Arduino si programma con un linguaggio basato su C++, usando le
> librerie e le funzioni del core della scheda. Gli sketch Arduino non
> sono semplici programmi C standard: normalmente includono `setup()` e
> `loop()` e usano API come `digitalWrite()`, `analogRead()` e
> `millis()`.

  ----------------------------------------------------------------------------------------------------
  Concetto                            Sintassi Arduino / esempio
  ----------------------------------- ----------------------------------------------------------------
  **Linguaggio**                      C++ con librerie e API Arduino

  **File sketch**                     `.ino`

  **Inclusione libreria**             `#include <Servo.h>`

  **Terminatore**                     `;`

  **Commento singola riga**           `// commento`

  **Commento multilinea**             `/* commento */`

  **Inizializzazione**                `int led = 13;`

  **Costante**                        `const int led = 13;`

  **Costante pin**                    `constexpr int ledPin = 13;`

  **Tipi comuni**                     `bool`, `char`, `int`, `long`, `float`, `double`, `String`

  **Intero senza segno**              `unsigned long tempo = 0;`

  **Assegnazione**                    `n = 10;`

  **Confronti**                       `==` `!=` `<` `<=` `>` `>=`

  **Logica booleana**                 `&&`, `||`, `!`

  **IF**                              `if (cond) { ... }`

  **ELSE**                            `else { ... }`

  **ELSE IF**                         `else if (cond) { ... }`

  **WHILE**                           `while (cond) { ... }`

  **DO/WHILE**                        `do { ... } while (cond);`

  **FOR**                             `for (int i = 0; i < 10; i++) { ... }`

  **Funzione**                        `int somma(int a, int b) { return a + b; }`

  **Chiamata funzione**               `somma(2, 3);`

  **Return**                          `return valore;`

  **Array**                           `int valori[3] = {10, 20, 30};`

  **Definizione pin**                 `pinMode(ledPin, OUTPUT);`

  **Pin come ingresso**               `pinMode(pulsantePin, INPUT);`

  **Ingresso con pull-up**            `pinMode(pulsantePin, INPUT_PULLUP);`

  **Uscita digitale**                 `digitalWrite(ledPin, HIGH);` / `digitalWrite(ledPin, LOW);`

  **Lettura digitale**                `int stato = digitalRead(pulsantePin);`

  **Lettura analogica**               `int valore = analogRead(A0);`

  **Uscita PWM**                      `analogWrite(pin, 128);` (solo pin compatibili; risoluzione
                                      dipendente dalla scheda)

  **Ritardo bloccante**               `delay(1000);` (millisecondi)

  **Tempo trascorso**                 `unsigned long t = millis();`

  **Microsecondi**                    `delayMicroseconds(10);` / `micros();`

  **Seriale: avvio**                  `Serial.begin(9600);`

  **Seriale: stampa**                 `Serial.print(valore);` / `Serial.println("Ciao");`

  **Costanti logiche**                `HIGH` / `LOW`, `INPUT` / `OUTPUT` / `INPUT_PULLUP`

  **Interruzioni**                    `attachInterrupt(digitalPinToInterrupt(pin), funzione, mode);`
                                      (supporto dipende dalla scheda)

  **Cambio intervallo**               `map(valore, 0, 1023, 0, 255);` (non limita automaticamente il
                                      risultato)

  **Limita valore**                   `constrain(valore, minimo, massimo);`

  **Generatore casuale**              `random(minimo, massimo);` (massimo escluso)

  **setup()**                         `void setup() { ... }` --- eseguita una volta all'avvio

  **loop()**                          `void loop() { ... }` --- ripetuta continuamente

  **Oggetto String**                  `String testo = "Ciao";` (usare con attenzione su
                                      microcontrollori con poca RAM)
  ----------------------------------------------------------------------------------------------------

## Mini esempio

Lampeggia un LED collegato al pin 13. Su molte schede è disponibile
anche un LED integrato, ma il pin può variare.

``` cpp
const int ledPin = LED_BUILTIN;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  Serial.println("LED acceso");
  delay(500);

  digitalWrite(ledPin, LOW);
  Serial.println("LED spento");
  delay(500);
}
```

## Esempio senza `delay()`

Questo schema permette al programma di continuare a fare altre attività
mentre controlla il tempo trascorso.

``` cpp
const int ledPin = LED_BUILTIN;
unsigned long precedente = 0;
const unsigned long intervallo = 500;
bool acceso = false;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  unsigned long adesso = millis();

  if (adesso - precedente >= intervallo) {
    precedente = adesso;
    acceso = !acceso;
    digitalWrite(ledPin, acceso ? HIGH : LOW);
  }

  // Altre attività possono essere eseguite qui.
}
```

## Note utili

-   Arduino usa **C++**, non propriamente C: sono disponibili funzioni,
    classi, oggetti e librerie C++.
-   `setup()` viene eseguita una volta; `loop()` viene richiamata
    continuamente dal framework Arduino.
-   `delay()` blocca l'esecuzione dello sketch durante l'attesa. Per
    attività concorrenti semplici, spesso è preferibile usare `millis()`
    con un controllo del tempo.
-   `analogRead()` e `analogWrite()` non significano necessariamente la
    stessa cosa su tutte le schede: risoluzione, pin disponibili e
    comportamento dipendono dalla scheda e dal core.
-   `INPUT_PULLUP` attiva una resistenza di pull-up interna: tipicamente
    il pulsante collega il pin a GND e la lettura risulta `LOW` quando
    viene premuto.
-   Con `millis()`, il confronto `adesso - precedente >= intervallo`
    gestisce correttamente il rollover del contatore con intervalli
    ragionevoli.
-   Evita di usare `String` in modo intensivo su microcontrollori con
    poca memoria; buffer `char` possono essere più adatti in alcuni
    casi.
-   I pin, le tensioni e le capacità elettriche variano tra schede:
    verifica sempre le specifiche del modello e non collegare carichi
    che superano i limiti dei pin.
