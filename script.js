/*
    ==========================================
    CONFIGURAZIONE ROBOT
    ==========================================

    Qui aggiungi le informazioni sui robot.

    Il campo "file" deve corrispondere
    al file presente dentro /docs/marca/

    Esempio:

    docs/fanuc/r2000.md
*/


const robots = {

    fanuc: {

        name: "FANUC",

        description: "Robot industriali FANUC",

        robots: [
            {
                name: "R-2000",
                file: "docs/fanuc/r2000.md"
            },

            {
                name: "LR Mate 200iD",
                file: "docs/fanuc/lr-mate-200id.md"
            },

            {
                name: "M-20iA",
                file: "docs/fanuc/m20ia.md"
            }
        ]
    },


    staubli: {

        name: "STAUBLI",

        description: "Robot industriali STAUBLI",

        robots: [
            {
                name: "TX2-60",
                file: "docs/staubli/tx2-60.md"
            },

            {
                name: "TX2-90",
                file: "docs/staubli/tx2-90.md"
            }
        ]
    },


    abb: {

        name: "ABB",

        description: "Robot industriali ABB",

        robots: [
            {
                name: "IRB 120",
                file: "docs/abb/irb-120.md"
            }
        ]
    },


    kuka: {

        name: "KUKA",

        description: "Robot industriali KUKA",

        robots: [
            {
                name: "KR 6",
                file: "docs/kuka/kr-6.md"
            }
        ]
    }

};


/*
    ==========================================
    ELEMENTI HTML
    ==========================================
*/

const brandsSection =
    document.getElementById("brands");

const robotSection =
    document.getElementById("robotSection");

const documentSection =
    document.getElementById("documentSection");

const robotList =
    document.getElementById("robotList");

const brandTitle =
    document.getElementById("brandTitle");

const brandDescription =
    document.getElementById("brandDescription");

const documentTitle =
    document.getElementById("documentTitle");

const markdownContent =
    document.getElementById("markdownContent");

const backButton =
    document.getElementById("backButton");

const backToRobots =
    document.getElementById("backToRobots");

const searchInput =
    document.getElementById("searchInput");


/*
    ==========================================
    MARCHE
    ==========================================
*/

const brandButtons =
    document.querySelectorAll(".brand-card");


brandButtons.forEach(button => {

    button.addEventListener("click", () => {

        const brand =
            button.dataset.brand;

        showBrand(brand);

    });

});


/*
    ==========================================
    MOSTRA ROBOT DI UNA MARCA
    ==========================================
*/

function showBrand(brand) {

    const data = robots[brand];

    if (!data) {
        return;
    }


    // Nasconde le altre sezioni

    brandsSection.classList.add("hidden");

    documentSection.classList.add("hidden");


    // Mostra la sezione robot

    robotSection.classList.remove("hidden");


    // Titolo

    brandTitle.textContent =
        data.name;

    brandDescription.textContent =
        data.description;


    // Pulisce la lista

    robotList.innerHTML = "";


    // Crea i pulsanti

    data.robots.forEach(robot => {

        const button =
            document.createElement("button");

        button.className =
            "robot-button";


        button.innerHTML = `
            <div class="robot-name">
                🤖 ${robot.name}
            </div>

            <div class="robot-file">
                ${robot.file}
            </div>
        `;


        button.addEventListener(
            "click",
            () => openMarkdown(robot)
        );


        robotList.appendChild(button);

    });

}


/*
    ==========================================
    APRE IL FILE MARKDOWN
    ==========================================
*/

async function openMarkdown(robot) {

    try {

        const response =
            await fetch(robot.file);


        if (!response.ok) {

            throw new Error(
                `File non trovato: ${robot.file}`
            );

        }


        const markdown =
            await response.text();


        /*
            Converte Markdown -> HTML
        */

        markdownContent.innerHTML =
            marked.parse(markdown);


        documentTitle.textContent =
            robot.name;


        /*
            Cambia schermata
        */

        robotSection.classList.add(
            "hidden"
        );

        documentSection.classList.remove(
            "hidden"
        );


        /*
            Torna all'inizio della pagina
        */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


    } catch (error) {

        markdownContent.innerHTML = `
            <h2>Errore</h2>

            <p>
                Non è stato possibile caricare
                il file Markdown.
            </p>

            <pre>${error.message}</pre>
        `;

        documentSection.classList.remove(
            "hidden"
        );

    }

}


/*
    ==========================================
    TORNA ALLE MARCHE
    ==========================================
*/

backButton.addEventListener(
    "click",
    () => {

        robotSection.classList.add(
            "hidden"
        );

        documentSection.classList.add(
            "hidden"
        );

        brandsSection.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/*
    ==========================================
    TORNA ALLA LISTA ROBOT
    ==========================================
*/

backToRobots.addEventListener(
    "click",
    () => {

        documentSection.classList.add(
            "hidden"
        );

        robotSection.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/*
    ==========================================
    RICERCA
    ==========================================
*/

searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .toLowerCase()
                .trim();


        if (!query) {

            brandButtons.forEach(button => {
                button.style.display = "";
            });

            return;
        }


        /*
            Cerca tra le marche
        */

        brandButtons.forEach(button => {

            const brand =
                button.dataset.brand;

            const data =
                robots[brand];


            let found =
                data.name
                    .toLowerCase()
                    .includes(query);


            /*
                Cerca anche nei nomi
                dei robot
            */

            data.robots.forEach(robot => {

                if (
                    robot.name
                        .toLowerCase()
                        .includes(query)
                ) {

                    found = true;

                }

            });


            button.style.display =
                found ? "" : "none";

        });

    }
);
