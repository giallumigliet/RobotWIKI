/*
==================================================
CONFIGURAZIONE
==================================================
*/

const OWNER = "giallumigliet";
const REPO = "RobotWIKI";

const DOCS_FOLDER = "docs";

const CONTENT_URL =
    `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/${DOCS_FOLDER}/content.json`;

const RAW_BASE =
    `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/`;


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
CONVERSIONE NOMI
==================================================
*/

function formatName(filename) {

    let name =
        filename.replace(
            /\.[^/.]+$/,
            ""
        );

    return name
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
}


/*
==================================================
URL FILE
==================================================
*/

function githubRawURL(path) {

    return (
        RAW_BASE +
        path
    );
}


/*
==================================================
CARICA CONTENT.JSON
==================================================
*/

async function loadContent() {

    try {

        brandsGrid.innerHTML = `
            <div class="loading">
                Caricamento...
            </div>
        `;

        const response =
            await fetch(
                CONTENT_URL
            );

        if (!response.ok) {

            throw new Error(
                "Impossibile caricare content.json"
            );

        }

        const data =
            await response.json();


        allBrands =
            data.brands.map(
                brand => ({

                    id:
                        brand.id,

                    name:
                        formatName(
                            brand.id
                        ),

                    robots:
                        brand.robots || [],

                    guides:
                        brand.guides || []

                })
            );


        renderBrands();


    } catch (error) {

        brandsGrid.innerHTML = `

            <div class="loading">

                Impossibile caricare
                la documentazione.

                <br><br>

                ${escapeHTML(
                    error.message
                )}

            </div>

        `;

    }
}


/*
==================================================
LOGO MARCA
==================================================

Il nome del file deve essere:

logo.png
logo.jpg
logo.jpeg
logo.webp
logo.svg
logo.gif

Il JS prova direttamente i possibili URL.
NON usa GitHub API.
==================================================
*/

async function findBrandLogo(
    brand
) {

    const extensions = [
        "png",
        "jpg",
        "jpeg",
        "webp",
        "svg",
        "gif"
    ];


    for (
        const extension
        of extensions
    ) {

        const url =
            githubRawURL(
                `${DOCS_FOLDER}/${brand.id}/logo.${extension}`
            );


        try {

            const response =
                await fetch(
                    url,
                    {
                        method: "HEAD"
                    }
                );


            if (response.ok) {

                return url;

            }

        } catch (error) {

            /*
                Ignora il formato
                non trovato.
            */

        }

    }


    return null;
}


/*
==================================================
MOSTRA MARCHE
==================================================
*/

async function renderBrands(
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


    if (
        filtered.length === 0
    ) {

        brandsGrid.innerHTML = `
            <div class="loading">
                Nessuna marca trovata.
            </div>
        `;

        return;

    }


    /*
        Crea subito le card.
        Il logo viene caricato
        successivamente.
    */

    filtered.forEach(
        brand => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "brand-card";


            card.innerHTML = `

                <div class="brand-icon">

                    <span>🤖</span>

                </div>

                <div>

                    <strong>
                        ${escapeHTML(
                            brand.name
                        )}
                    </strong>

                    <small>
                        Visualizza robot e guide
                    </small>

                </div>

            `;


            card.addEventListener(
                "click",
                () => showBrand(brand)
            );


            brandsGrid.appendChild(
                card
            );


            /*
                Carica il logo
                senza bloccare
                le altre card.
            */

            findBrandLogo(
                brand
            ).then(
                logo => {

                    if (!logo) {
                        return;
                    }


                    const image =
                        document.createElement(
                            "img"
                        );


                    image.src =
                        logo;


                    image.alt =
                        brand.name;


                    image.onload =
                        () => {

                            const icon =
                                card.querySelector(
                                    ".brand-icon"
                                );

                            icon.innerHTML = "";

                            icon.appendChild(
                                image
                            );

                        };

                }
            );

        }
    );
}


/*
==================================================
APRI MARCA
==================================================
*/

async function showBrand(
    brand
) {

    currentBrand =
        brand;


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

async function loadRobots(
    brand
) {

    robotsGrid.innerHTML = "";


    if (
        !brand.robots ||
        brand.robots.length === 0
    ) {

        robotsGrid.innerHTML = `
            <div class="loading">
                Nessun robot inserito.
            </div>
        `;

        return;
    }


    brand.robots.forEach(
        robotFolder => {

            const robot =
                readRobot(
                    brand,
                    robotFolder
                );


            createRobotCard(
                robot
            );

        }
    );
}


/*
==================================================
LEGGE ROBOT
==================================================

Non usa API.

I file vengono cercati
secondo una struttura standard.
==================================================
*/

function readRobot(
    brand,
    folderName
) {

    const path =
        `${DOCS_FOLDER}/${brand.id}/robots/${folderName}`;


    return {

        name:
            formatName(
                folderName
            ),

        path,

        markdown:
            `${path}/${folderName}.md`,

        image:
            `${path}/${folderName}.jpg`,

        files: []

    };
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
        document.createElement(
            "div"
        );


    card.className =
        "robot-card";


    const imageHTML = `

        <div class="robot-card-image">

            <img
                src="${githubRawURL(
                    robot.image
                )}"
                alt="${escapeHTML(
                    robot.name
                )}"
                onerror="
                    this.parentElement.innerHTML =
                    '<div class=&quot;robot-card-image no-image&quot;>🤖</div>'
                "
            >

        </div>

    `;


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


    robotsGrid.appendChild(
        card
    );
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


    robotImage.onerror =
        () => {

            robotImage.style.display =
                "none";

            robotImagePlaceholder.style.display =
                "flex";

        };


    /*
        FILE
    */

    robotFiles.innerHTML = "";


    /*
        Senza API non possiamo
        sapere automaticamente
        quali PDF esistono.

        Quindi i file vengono
        definiti in content.json
        quando necessario.
    */

    if (
        robot.files &&
        robot.files.length > 0
    ) {

        robot.files.forEach(
            file => {

                const button =
                    document.createElement(
                        "a"
                    );


                button.className =
                    "action-button";


                button.href =
                    githubRawURL(
                        `${robot.path}/${file}`
                    );


                button.target =
                    "_blank";


                button.rel =
                    "noopener";


                button.textContent =
                    getFileLabel(
                        file
                    );


                robotFiles.appendChild(
                    button
                );

            }
        );

    }


    /*
        MARKDOWN
    */

    await loadMarkdown(
        githubRawURL(
            robot.markdown
        ),
        robotMarkdown
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/*
==================================================
NOME FILE
==================================================
*/

function getFileLabel(
    filename
) {

    const name =
        filename.replace(
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

    guidesGrid.innerHTML = "";


    if (
        !brand.guides ||
        brand.guides.length === 0
    ) {

        guidesGrid.innerHTML = `
            <div class="loading">
                Nessuna guida inserita.
            </div>
        `;

        return;
    }


    brand.guides.forEach(
        file => {

            createGuideCard(
                file,
                brand
            );

        }
    );
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
        document.createElement(
            "div"
        );


    card.className =
        "guide-card";


    const name =
        formatName(
            file
        );


    card.innerHTML = `

        <div class="guide-icon">
            📄
        </div>

        <h3>
            ${escapeHTML(
                name
            )}
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
            file
        );


    guideBrand.textContent =
        brand.name;


    await loadMarkdown(
        githubRawURL(
            `${DOCS_FOLDER}/${brand.id}/guides/${file}`
        ),
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

function showHome() {

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


document
    .getElementById(
        "backToBrands"
    )
    .addEventListener(
        "click",
        showHome
    );


document
    .getElementById(
        "logo"
    )
    .addEventListener(
        "click",
        showHome
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

loadContent();
