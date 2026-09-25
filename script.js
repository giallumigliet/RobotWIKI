/*
==================================================
CONFIGURAZIONE GITHUB
==================================================

MODIFICA SOLO QUESTE DUE RIGHE.

Esempio:

https://github.com/mariorossi/robot-wiki

diventa:

OWNER = "mariorossi"
REPO  = "robot-wiki"
*/

const OWNER = "giallumigliet";

const REPO = "RobotWIKI";


/*
==================================================
CONFIGURAZIONE
==================================================
*/

const DOCS_FOLDER = "docs";

const GITHUB_API =
    "https://api.github.com/repos/"
    + OWNER
    + "/"
    + REPO
    + "/contents/";


/*
==================================================
ELEMENTI HTML
==================================================
*/

const homeView =
    document.getElementById("homeView");

const brandView =
    document.getElementById("brandView");

const robotView =
    document.getElementById("robotView");

const guideView =
    document.getElementById("guideView");


const brandsGrid =
    document.getElementById("brandsGrid");

const robotsGrid =
    document.getElementById("robotsGrid");

const guidesGrid =
    document.getElementById("guidesGrid");


const brandName =
    document.getElementById("brandName");

const brandDescription =
    document.getElementById("brandDescription");

const brandIcon =
    document.getElementById("brandIcon");


const robotName =
    document.getElementById("robotName");

const robotDescription =
    document.getElementById("robotDescription");

const robotImage =
    document.getElementById("robotImage");

const robotImagePlaceholder =
    document.getElementById(
        "robotImagePlaceholder"
    );

const robotFiles =
    document.getElementById("robotFiles");

const robotMarkdown =
    document.getElementById(
        "robotMarkdown"
    );


const guideTitle =
    document.getElementById("guideTitle");

const guideBrand =
    document.getElementById("guideBrand");

const guideMarkdown =
    document.getElementById(
        "guideMarkdown"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


/*
==================================================
STATO
==================================================
*/

let currentBrand = null;

let allBrands = [];


/*
==================================================
CONVERSIONE NOME FILE
==================================================

r_2000ic
↓
R 2000ic

programmazione_base
↓
Programmazione Base

gestione_allarmi
↓
Gestione Allarmi
*/

function formatName(filename) {

    /*
        Rimuove estensione
    */

    let name =
        filename.replace(
            /\.[^/.]+$/,
            ""
        );


    /*
        "_" diventa spazio
        e la parola successiva
        inizia con maiuscola
    */

    name =
        name
            .split("_")
            .map(word => {

                if (!word) {
                    return "";
                }

                return (
                    word.charAt(0).toUpperCase()
                    +
                    word.slice(1)
                );

            })
            .join(" ");


    return name;

}


/*
==================================================
CHIAMATA GITHUB API
==================================================
*/

async function githubList(path) {

    const response =
        await fetch(
            GITHUB_API + path
        );


    if (!response.ok) {

        throw new Error(
            "GitHub API error: "
            + response.status
        );

    }


    return await response.json();

}


/*
==================================================
SCOPRE LE MARCHE
==================================================
*/

async function loadBrands() {

    try {

        brandsGrid.innerHTML = `
            <div class="loading">
                Caricamento...
            </div>
        `;


        const items =
            await githubList(
                DOCS_FOLDER
            );


        /*
            Solo cartelle
        */

        const folders =
            items.filter(
                item =>
                    item.type === "dir"
            );


        allBrands =
            folders.map(folder => ({

                id: folder.name,

                name:
                    formatName(
                        folder.name
                    ),

                path:
                    folder.path

            }));


        renderBrands();


    } catch (error) {

        brandsGrid.innerHTML = `

            <div class="loading">

                Impossibile leggere
                il repository GitHub.

                <br><br>

                ${error.message}

            </div>

        `;

    }

}


/*
==================================================
MOSTRA MARCHE
==================================================
*/

function renderBrands(
    filter = ""
) {

    brandsGrid.innerHTML = "";


    const filtered =
        allBrands.filter(
            brand =>
                brand.name
                    .toLowerCase()
                    .includes(
                        filter.toLowerCase()
                    )
        );


    if (filtered.length === 0) {

        brandsGrid.innerHTML = `
            <div class="loading">
                Nessuna marca trovata.
            </div>
        `;

        return;

    }


    filtered.forEach(brand => {

        const card =
            document.createElement("div");


        card.className =
            "brand-card";


        card.innerHTML = `

            <div class="brand-icon">
                🤖
            </div>

            <div>

                <strong>
                    ${brand.name}
                </strong>

                <small>
                    Documentazione
                </small>

            </div>

        `;


        card.addEventListener(
            "click",
            () => showBrand(brand)
        );


        brandsGrid.appendChild(card);

    });

}


/*
==================================================
APRI MARCA
==================================================
*/

async function showBrand(brand) {

    currentBrand = brand;


    homeView.classList.add(
        "hidden"
    );

    robotView.classList.add(
        "hidden"
    );

    guideView.classList.add(
        "hidden"
    );

    brandView.classList.remove(
        "hidden"
    );


    brandName.textContent =
        brand.name;

    brandDescription.textContent =
        "Robot e documentazione "
        + brand.name;

    brandIcon.textContent =
        "🤖";


    robotsGrid.innerHTML = `
        <div class="loading">
            Caricamento robot...
        </div>
    `;


    guidesGrid.innerHTML = `
        <div class="loading">
            Caricamento guide...
        </div>
    `;


    /*
        Carica in parallelo
    */

    await Promise.all([
        loadRobots(brand),
        loadGuides(brand)
    ]);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/*
==================================================
CARICA ROBOT
==================================================
*/

async function loadRobots(brand) {

    try {

        const path =
            `${DOCS_FOLDER}/${brand.id}/robots`;


        const items =
            await githubList(path);


        /*
            Ogni cartella dentro
            robots = un robot
        */

        const robotFolders =
            items.filter(
                item =>
                    item.type === "dir"
            );


        robotsGrid.innerHTML = "";


        if (
            robotFolders.length === 0
        ) {

            robotsGrid.innerHTML = `
                <div class="loading">
                    Nessun robot inserito.
                </div>
            `;

            return;

        }


        /*
            Carichiamo il contenuto
            di ogni cartella robot
        */

        for (
            const folder
            of robotFolders
        ) {

            const robot =
                await readRobot(
                    folder
                );


            createRobotCard(
                robot
            );

        }


    } catch (error) {

        robotsGrid.innerHTML = `

            <div class="loading">

                Nessuna cartella
                <strong>robots</strong>
                trovata.

            </div>

        `;

    }

}


/*
==================================================
LEGGE UN ROBOT
==================================================
*/

async function readRobot(
    folder
) {

    const items =
        await githubList(
            folder.path
        );


    const markdown =
        items.find(
            item =>
                item.type === "file"
                &&
                item.name
                    .toLowerCase()
                    .endsWith(".md")
        );


    const image =
        items.find(
            item =>
                item.type === "file"
                &&
                isImage(
                    item.name
                )
        );


    const files =
        items.filter(
            item =>
                item.type === "file"
                &&
                !isImage(
                    item.name
                )
                &&
                !item.name
                    .toLowerCase()
                    .endsWith(".md")
        );


    return {

        name:
            formatName(
                folder.name
            ),

        path:
            folder.path,

        markdown,

        image,

        files

    };

}


/*
==================================================
CONTROLLA IMMAGINE
==================================================
*/

function isImage(
    filename
) {

    const extension =
        filename
            .split(".")
            .pop()
            .toLowerCase();


    return [
        "jpg",
        "jpeg",
        "png",
        "webp",
        "gif"
    ].includes(
        extension
    );

}


/*
==================================================
CREA CARD ROBOT
==================================================
*/

function createRobotCard(
    robot
) {

    const card =
        document.createElement("div");


    card.className =
        "robot-card";


    /*
        Immagine
    */

    let imageHTML;


    if (robot.image) {

        imageHTML = `

            <img
                src="${githubRawURL(
                    robot.image
                )}"
                alt="${escapeHTML(
                    robot.name
                )}"
            >

        `;

    } else {

        imageHTML = `
            <div class="robot-card-image no-image">
                🤖
            </div>
        `;

    }


    /*
        Se c'è immagine
        mettiamo la card-image
    */

    if (robot.image) {

        imageHTML = `

            <div class="robot-card-image">

                ${imageHTML}

            </div>

        `;

    }


    card.innerHTML = `

        ${imageHTML}

        <div class="robot-card-info">

            <h3>
                ${escapeHTML(
                    robot.name
                )}
            </h3>

            <p>
                Apri scheda robot →
            </p>

        </div>

    `;


    card.addEventListener(
        "click",
        () => showRobot(robot)
    );


    robotsGrid.appendChild(card);

}


/*
==================================================
APRI ROBOT
==================================================
*/

async function showRobot(
    robot
) {

    brandView.classList.add(
        "hidden"
    );

    guideView.classList.add(
        "hidden"
    );

    robotView.classList.remove(
        "hidden"
    );


    robotName.textContent =
        robot.name;


    robotDescription.textContent =
        "Documentazione "
        + robot.name;


    /*
        IMMAGINE
    */

    if (robot.image) {

        robotImage.src =
            githubRawURL(
                robot.image
            );

        robotImage.alt =
            robot.name;

        robotImage.style.display =
            "block";

        robotImagePlaceholder.style.display =
            "none";

    } else {

        robotImage.style.display =
            "none";

        robotImagePlaceholder.style.display =
            "flex";

    }


    /*
        FILE
    */

    robotFiles.innerHTML = "";


    robot.files.forEach(
        file => {

            const button =
                document.createElement("a");


            button.className =
                "action-button";


            button.href =
                githubRawURL(
                    file
                );


            button.target =
                "_blank";


            button.rel =
                "noopener";


            button.textContent =
                getFileLabel(
                    file.name
                );


            robotFiles.appendChild(
                button
            );

        }
    );


    /*
        MARKDOWN
    */

    if (robot.markdown) {

        await loadMarkdown(
            githubRawURL(
                robot.markdown
            ),
            robotMarkdown
        );

    } else {

        robotMarkdown.innerHTML = `
            <p>
                Nessuna documentazione
                Markdown disponibile.
            </p>
        `;

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/*
==================================================
NOME DEI FILE PDF
==================================================
*/

function getFileLabel(
    filename
) {

    const name =
        filename
            .replace(
                /\.[^/.]+$/,
                ""
            );


    if (
        name
            .toLowerCase()
            .includes("datasheet")
    ) {

        return "📄 Datasheet";

    }


    if (
        name
            .toLowerCase()
            .includes("manuale")
    ) {

        return "📘 Manuale";

    }


    if (
        name
            .toLowerCase()
            .includes("manual")
    ) {

        return "📘 Manuale";

    }


    return "📎 "
        + formatName(
            name
        );

}


/*
==================================================
CARICA GUIDE
==================================================
*/

async function loadGuides(
    brand
) {

    try {

        const path =
            `${DOCS_FOLDER}/${brand.id}/guides`;


        const items =
            await githubList(path);


        const markdownFiles =
            items.filter(
                item =>
                    item.type === "file"
                    &&
                    item.name
                        .toLowerCase()
                        .endsWith(".md")
            );


        guidesGrid.innerHTML = "";


        if (
            markdownFiles.length === 0
        ) {

            guidesGrid.innerHTML = `
                <div class="loading">
                    Nessuna guida inserita.
                </div>
            `;

            return;

        }


        markdownFiles.forEach(
            file => {

                createGuideCard(
                    file,
                    brand
                );

            }
        );


    } catch (error) {

        guidesGrid.innerHTML = `
            <div class="loading">
                Nessuna cartella
                <strong>guides</strong>
                trovata.
            </div>
        `;

    }

}


/*
==================================================
CREA CARD GUIDA
==================================================
*/

function createGuideCard(
    file,
    brand
) {

    const card =
        document.createElement("div");


    card.className =
        "guide-card";


    const name =
        formatName(
            file.name
        );


    card.innerHTML = `

        <div class="guide-icon">
            📄
        </div>

        <h3>
            ${escapeHTML(name)}
        </h3>

        <p>
            Guida ${escapeHTML(
                brand.name
            )}
        </p>

    `;


    card.addEventListener(
        "click",
        () => showGuide(
            file,
            brand
        )
    );


    guidesGrid.appendChild(
        card
    );

}


/*
==================================================
APRI GUIDA
==================================================
*/

async function showGuide(
    file,
    brand
) {

    brandView.classList.add(
        "hidden"
    );

    robotView.classList.add(
        "hidden"
    );

    guideView.classList.remove(
        "hidden"
    );


    guideTitle.textContent =
        formatName(
            file.name
        );


    guideBrand.textContent =
        brand.name;


    await loadMarkdown(
        githubRawURL(file),
        guideMarkdown
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/*
==================================================
CARICA MARKDOWN
==================================================
*/

async function loadMarkdown(
    url,
    target
) {

    target.innerHTML = `
        <p>
            Caricamento...
        </p>
    `;


    try {

        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Impossibile caricare il file."
            );

        }


        const markdown =
            await response.text();


        target.innerHTML =
            marked.parse(
                markdown
            );


    } catch (error) {

        target.innerHTML = `

            <h2>
                Errore
            </h2>

            <p>
                ${escapeHTML(
                    error.message
                )}
            </p>

        `;

    }

}


/*
==================================================
URL FILE GITHUB
==================================================
*/

function githubRawURL(
    item
) {

    /*
        item può essere:
        - oggetto GitHub API
        - stringa
    */

    const path =
        typeof item === "string"
            ? item
            : item.path;


    return (
        "https://raw.githubusercontent.com/"
        + OWNER
        + "/"
        + REPO
        + "/main/"
        + path
    );

}


/*
==================================================
HTML ESCAPE
==================================================
*/

function escapeHTML(
    text
) {

    return String(text)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/*
==================================================
TORNA HOME
==================================================
*/

document
    .getElementById(
        "backToBrands"
    )
    .addEventListener(
        "click",
        () => {

            homeView.classList.remove(
                "hidden"
            );

            brandView.classList.add(
                "hidden"
            );

            robotView.classList.add(
                "hidden"
            );

            guideView.classList.add(
                "hidden"
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/*
==================================================
TORNA ALLA MARCA DAL ROBOT
==================================================
*/

document
    .getElementById(
        "backToBrandFromRobot"
    )
    .addEventListener(
        "click",
        () => {

            showBrand(
                currentBrand
            );

        }
    );


/*
==================================================
TORNA ALLA MARCA DALLA GUIDA
==================================================
*/

document
    .getElementById(
        "backToBrandFromGuide"
    )
    .addEventListener(
        "click",
        () => {

            showBrand(
                currentBrand
            );

        }
    );


/*
==================================================
RICERCA
==================================================
*/

searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        /*
            Per ora la ricerca
            filtra le marche
            nella home.
        */

        if (
            !brandView.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        renderBrands(
            query
        );

    }
);


/*
==================================================
AVVIO
==================================================
*/

loadBrands();
