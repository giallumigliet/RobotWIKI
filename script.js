/*
==================================================
CONFIGURAZIONE WIKI
==================================================
*/

const wiki = {

    fanuc: {

        name: "FANUC",

        icon: "🟡",

        description:
            "Robot industriali FANUC con cui ho avuto esperienza.",


        robots: [

            {
                name: "R-2000iC",

                image:
                    "assets/fanuc/r2000.jpg",

                description:
                    "Robot antropomorfo a 6 assi per applicazioni industriali.",

                datasheet:
                    "docs/fanuc/robots/r2000-datasheet.pdf",

                manual:
                    "docs/fanuc/robots/r2000-manuale.pdf",

                markdown:
                    "docs/fanuc/robots/r2000.md"
            },


            {
                name: "LR Mate 200iD",

                image:
                    "assets/fanuc/lr-mate-200id.jpg",

                description:
                    "Robot compatto per applicazioni di assemblaggio e manipolazione.",

                datasheet:
                    "docs/fanuc/robots/lr-mate-200id-datasheet.pdf",

                manual:
                    "docs/fanuc/robots/lr-mate-200id-manuale.pdf",

                markdown:
                    "docs/fanuc/robots/lr-mate-200id.md"
            }

        ],


        guides: [

            {
                title: "Programmazione",

                icon: "💻",

                description:
                    "Programmazione, TP, KAREL e procedure.",

                file:
                    "docs/fanuc/guides/programmazione.md"
            },


            {
                title: "Manutenzione",

                icon: "🔧",

                description:
                    "Manutenzione ordinaria e procedure.",

                file:
                    "docs/fanuc/guides/manutenzione.md"
            },


            {
                title: "Errori",

                icon: "⚠️",

                description:
                    "Errori, allarmi e relative soluzioni.",

                file:
                    "docs/fanuc/guides/errori.md"
            },


            {
                title: "Controller",

                icon: "🎛️",

                description:
                    "Risoluzione problemi e configurazione controller.",

                file:
                    "docs/fanuc/guides/controller.md"
            }

        ]

    },


    /*
    ==================================================
    STAUBLI
    ==================================================
    */

    staubli: {

        name: "STAUBLI",

        icon: "🔵",

        description:
            "Robot industriali STAUBLI con cui ho avuto esperienza.",


        robots: [

            {
                name: "TX2-60",

                image:
                    "assets/staubli/tx2-60.jpg",

                description:
                    "Robot industriale STAUBLI TX2-60.",

                datasheet:
                    "docs/staubli/robots/tx2-60-datasheet.pdf",

                manual:
                    "docs/staubli/robots/tx2-60-manuale.pdf",

                markdown:
                    "docs/staubli/robots/tx2-60.md"
            }

        ],


        guides: [

            {
                title: "Programmazione",

                icon: "💻",

                description:
                    "Programmazione VAL3 e procedure.",

                file:
                    "docs/staubli/guides/programmazione.md"
            },


            {
                title: "Manutenzione",

                icon: "🔧",

                description:
                    "Procedure di manutenzione.",

                file:
                    "docs/staubli/guides/manutenzione.md"
            },


            {
                title: "Errori",

                icon: "⚠️",

                description:
                    "Allarmi e diagnostica.",

                file:
                    "docs/staubli/guides/errori.md"
            }

        ]

    },


    /*
    ==================================================
    ABB
    ==================================================
    */

    abb: {

        name: "ABB",

        icon: "🔴",

        description:
            "Robot industriali ABB.",

        robots: [],

        guides: [

            {
                title: "Programmazione",

                icon: "💻",

                description:
                    "Programmazione RAPID.",

                file:
                    "docs/abb/guides/programmazione.md"
            }

        ]

    },


    /*
    ==================================================
    KUKA
    ==================================================
    */

    kuka: {

        name: "KUKA",

        icon: "🟠",

        description:
            "Robot industriali KUKA.",

        robots: [],

        guides: []

    }

};


/*
==================================================
ELEMENTI DOM
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

const brandLogo =
    document.getElementById("brandLogo");


const robotName =
    document.getElementById("robotName");

const robotDescription =
    document.getElementById("robotDescription");

const robotImage =
    document.getElementById("robotImage");

const datasheetButton =
    document.getElementById("datasheetButton");

const manualButton =
    document.getElementById("manualButton");

const robotMarkdown =
    document.getElementById("robotMarkdown");


const guideTitle =
    document.getElementById("guideTitle");

const guideCategory =
    document.getElementById("guideCategory");

const guideMarkdown =
    document.getElementById("guideMarkdown");


const searchInput =
    document.getElementById("searchInput");


/*
==================================================
STATO
==================================================
*/

let currentBrand = null;


/*
==================================================
HOME
==================================================
*/

function showHome() {

    homeView.classList.remove("hidden");

    brandView.classList.add("hidden");

    robotView.classList.add("hidden");

    guideView.classList.add("hidden");

}


/*
==================================================
CREA LE CARDS DELLE MARCHE
==================================================
*/

function renderBrands(filter = "") {

    brandsGrid.innerHTML = "";


    Object.entries(wiki).forEach(
        ([id, brand]) => {

            const searchText =
                brand.name.toLowerCase();


            if (
                filter &&
                !searchText.includes(filter)
            ) {

                return;

            }


            const card =
                document.createElement("div");

            card.className =
                "brand-card";


            card.innerHTML = `

                <div class="brand-icon">
                    ${brand.icon}
                </div>

                <div>

                    <strong>
                        ${brand.name}
                    </strong>

                    <small>
                        ${brand.robots.length}
                        robot ·
                        ${brand.guides.length}
                        guide
                    </small>

                </div>

            `;


            card.addEventListener(
                "click",
                () => showBrand(id)
            );


            brandsGrid.appendChild(card);

        }
    );

}


/*
==================================================
APRI MARCA
==================================================
*/

function showBrand(brandId) {

    const brand =
        wiki[brandId];


    if (!brand) {
        return;
    }


    currentBrand = brandId;


    homeView.classList.add("hidden");

    robotView.classList.add("hidden");

    guideView.classList.add("hidden");

    brandView.classList.remove("hidden");


    brandName.textContent =
        brand.name;

    brandDescription.textContent =
        brand.description;

    brandLogo.textContent =
        brand.icon;


    renderRobots(brand);

    renderGuides(brand);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/*
==================================================
CREA ROBOT CARDS
==================================================
*/

function renderRobots(brand) {

    robotsGrid.innerHTML = "";


    if (brand.robots.length === 0) {

        robotsGrid.innerHTML = `
            <p>
                Nessun robot inserito.
            </p>
        `;

        return;

    }


    brand.robots.forEach(robot => {

        const card =
            document.createElement("div");

        card.className =
            "robot-card";


        card.innerHTML = `

            <div class="robot-card-image">

                <img
                    src="${robot.image}"
                    alt="${robot.name}"
                    onerror="
                        this.style.display='none'
                    "
                >

            </div>


            <div class="robot-card-info">

                <h3>
                    ${robot.name}
                </h3>

                <p>
                    ${robot.description}
                </p>

            </div>

        `;


        card.addEventListener(
            "click",
            () => showRobot(robot)
        );


        robotsGrid.appendChild(card);

    });

}


/*
==================================================
CREA GUIDE
==================================================
*/

function renderGuides(brand) {

    guidesGrid.innerHTML = "";


    if (brand.guides.length === 0) {

        guidesGrid.innerHTML = `
            <p>
                Nessuna guida inserita.
            </p>
        `;

        return;

    }


    brand.guides.forEach(guide => {

        const card =
            document.createElement("div");

        card.className =
            "guide-card";


        card.innerHTML = `

            <div class="guide-icon">
                ${guide.icon}
            </div>

            <h3>
                ${guide.title}
            </h3>

            <p>
                ${guide.description}
            </p>

        `;


        card.addEventListener(
            "click",
            () => showGuide(guide)
        );


        guidesGrid.appendChild(card);

    });

}


/*
==================================================
APRI ROBOT
==================================================
*/

async function showRobot(robot) {

    brandView.classList.add("hidden");

    guideView.classList.add("hidden");

    robotView.classList.remove("hidden");


    robotName.textContent =
        robot.name;

    robotDescription.textContent =
        robot.description;

    robotImage.src =
        robot.image;


    /*
        PDF
    */

    if (robot.datasheet) {

        datasheetButton.href =
            robot.datasheet;

        datasheetButton.style.display =
            "inline-block";

    } else {

        datasheetButton.style.display =
            "none";

    }


    if (robot.manual) {

        manualButton.href =
            robot.manual;

        manualButton.style.display =
            "inline-block";

    } else {

        manualButton.style.display =
            "none";

    }


    /*
        Markdown specifico del robot
    */

    if (robot.markdown) {

        await loadMarkdown(
            robot.markdown,
            robotMarkdown
        );

    } else {

        robotMarkdown.innerHTML = "";

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/*
==================================================
APRI GUIDA
==================================================
*/

async function showGuide(guide) {

    brandView.classList.add("hidden");

    robotView.classList.add("hidden");

    guideView.classList.remove("hidden");


    guideTitle.textContent =
        guide.title;

    guideCategory.textContent =
        wiki[currentBrand].name;


    await loadMarkdown(
        guide.file,
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
    file,
    target
) {

    target.innerHTML = `
        <p>Caricamento...</p>
    `;


    try {

        const response =
            await fetch(file);


        if (!response.ok) {

            throw new Error(
                "File non trovato: " + file
            );

        }


        const markdown =
            await response.text();


        target.innerHTML =
            marked.parse(markdown);


    } catch (error) {

        target.innerHTML = `

            <h2>Errore</h2>

            <p>
                Impossibile caricare
                questo documento.
            </p>

            <pre>
${error.message}
            </pre>

        `;

    }

}


/*
==================================================
NAVIGAZIONE
==================================================
*/

document
    .getElementById("backToBrands")
    .addEventListener(
        "click",
        showHome
    );


document
    .getElementById("backToBrandFromRobot")
    .addEventListener(
        "click",
        () => {

            showBrand(currentBrand);

        }
    );


document
    .getElementById("backToBrandFromGuide")
    .addEventListener(
        "click",
        () => {

            showBrand(currentBrand);

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
                .toLowerCase()
                .trim();


        /*
            Se siamo nella home,
            cerca le marche
        */

        if (
            !brandView.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        renderBrands(query);

    }
);


/*
==================================================
AVVIO
==================================================
*/

renderBrands();
