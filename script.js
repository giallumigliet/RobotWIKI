const OWNER = "giallumigliet";
const REPO = "RobotWIKI";
const BRANCH = "main";
const DOCS_FOLDER = "docs";

const RAW_BASE =
    `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/`;

const CONTENT_URL =
    `${RAW_BASE}${DOCS_FOLDER}/content.json?v=${Date.now()}`;


// =================================
// ELEMENTI HTML
// =================================

const brandsGrid = document.getElementById("brandsGrid");
const robotsGrid = document.getElementById("robotsGrid");
const guidesGrid = document.getElementById("guidesGrid");

const homeView = document.getElementById("homeView");
const brandView = document.getElementById("brandView");
const robotView = document.getElementById("robotView");
const guideView = document.getElementById("guideView");

const brandName = document.getElementById("brandName");
const brandDescription = document.getElementById("brandDescription");

const robotName = document.getElementById("robotName");
const robotDescription = document.getElementById("robotDescription");

const robotImage = document.getElementById("robotImage");
const robotImagePlaceholder =
    document.getElementById("robotImagePlaceholder");

const robotFiles = document.getElementById("robotFiles");
const robotMarkdown = document.getElementById("robotMarkdown");

const guideBrand = document.getElementById("guideBrand");
const guideTitle = document.getElementById("guideTitle");
const guideMarkdown = document.getElementById("guideMarkdown");

const searchInput = document.getElementById("searchInput");

const backToBrands =
    document.getElementById("backToBrands");

const backToBrandFromRobot =
    document.getElementById("backToBrandFromRobot");

const backToBrandFromGuide =
    document.getElementById("backToBrandFromGuide");

const logoButton =
    document.getElementById("logo");


// =================================
// DATI
// =================================

let allBrands = [];
let currentBrand = null;


// =================================
// UTILITÀ
// =================================

function formatName(filename) {

    let name = filename.replace(/\.[^/.]+$/, "");

    return name
        .split("_")
        .map(word => {

            if (!word) {
                return "";
            }

            return (
                word.charAt(0).toUpperCase() +
                word.slice(1)
            );
        })
        .join(" ");
}


function escapeHTML(text) {

    if (!text) {
        return "";
    }

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function rawURL(path) {

    return `${RAW_BASE}${path}`;
}


function getFileLabel(filename) {

    const lower = filename.toLowerCase();

    if (lower.includes("datasheet")) {
        return "📄 Datasheet";
    }

    if (
        lower.includes("manuale") ||
        lower.includes("manual")
    ) {
        return "📘 Manuale";
    }

    return `📎 ${formatName(filename)}`;
}



function getGuideIcon(filename) {

    const name = filename
        .replace(/\.md$/i, "")
        .replace(/_/g, " ")
        .toLowerCase()
        .trim();

    if (name === "error troubleshooting") {
        return "⚠️";
    }

    if (name === "quick reference") {
        return "🎯";
    }

    return "📚";
}
// =================================
// GESTIONE PAGINE
// =================================

function hideAllViews() {

    homeView.classList.add("hidden");
    brandView.classList.add("hidden");
    robotView.classList.add("hidden");
    guideView.classList.add("hidden");
}


function showHome() {

    hideAllViews();

    homeView.classList.remove("hidden");

    currentBrand = null;

    if (searchInput) {
        searchInput.value = "";
    }

    renderBrands();
}


function showBrand(brand) {

    currentBrand = brand;

    hideAllViews();

    brandView.classList.remove("hidden");

    brandName.textContent =
        formatName(brand.id);

    brandDescription.textContent =
        "Robot e guide disponibili per questo produttore.";

    loadRobots(brand);
    loadGuides(brand);
}


function showRobot(robot) {

    hideAllViews();

    robotView.classList.remove("hidden");

    robotName.textContent =
        formatName(robot.id);

    robotDescription.textContent =
        "Documentazione del robot.";

    setupRobotImage(robot);
    setupRobotFiles(robot);
    loadRobotMarkdown(robot);
}


function showGuide(file) {

    hideAllViews();

    guideView.classList.remove("hidden");

    guideBrand.textContent =
        formatName(currentBrand.id);

    guideTitle.textContent =
        formatName(file);

    guideMarkdown.innerHTML = `
        <div class="loading">
            Caricamento...
        </div>
    `;

    const url = rawURL(
        `${DOCS_FOLDER}/${currentBrand.id}/guides/${file}`
    );

    loadMarkdown(
        url,
        guideMarkdown
    );
}


// =================================
// CONTENT.JSON
// =================================

async function loadContent() {

    try {

        const response = await fetch(
            CONTENT_URL,
            {
                cache: "no-store"
            }
        );

        if (!response.ok) {

            throw new Error(
                `Errore content.json: ${response.status}`
            );
        }

        const data =
            await response.json();

        allBrands =
            data.brands || [];

        renderBrands();

    } catch (error) {

        console.error(error);

        brandsGrid.innerHTML = `
            <div class="loading">
                Impossibile caricare i contenuti.
                <br>
                <small>
                    Controlla che
                    <strong>docs/content.json</strong>
                    sia presente.
                </small>
            </div>
        `;
    }
}


// =================================
// MARCHE
// =================================

function renderBrands(filter = "") {

    brandsGrid.innerHTML = "";

    const search =
        filter.toLowerCase().trim();

    const filtered =
        allBrands.filter(brand =>
            formatName(brand.id)
                .toLowerCase()
                .includes(search)
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

        let logoHTML = `
            <span>🤖</span>
        `;

        if (brand.logo) {

            const logoURL = rawURL(
                `${DOCS_FOLDER}/${brand.id}/${brand.logo}`
            );

            logoHTML = `
                <img
                    src="${logoURL}"
                    alt="${escapeHTML(formatName(brand.id))}"
                >
            `;
        }

        card.innerHTML = `
            <div class="brand-icon ${brand.logo ? "" : "no-logo"}">
                ${logoHTML}
            </div>

            <div>
                <strong>
                    ${escapeHTML(formatName(brand.id))}
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

        brandsGrid.appendChild(card);
    });
}


// =================================
// ROBOT
// =================================

function loadRobots(brand) {

    robotsGrid.innerHTML = "";

    const robots =
        brand.robots || [];

    if (robots.length === 0) {

        robotsGrid.innerHTML = `
            <div class="loading">
                Nessun robot inserito.
            </div>
        `;

        return;
    }

    robots.forEach(robot => {

        createRobotCard(
            robot,
            brand
        );
    });
}


function createRobotCard(robot, brand) {

    const card =
        document.createElement("div");

    card.className =
        "robot-card";

    let imageHTML = `
        <div class="robot-card-image no-image">
            🤖
        </div>
    `;

    if (robot.image) {

        const imageURL = rawURL(
            `${DOCS_FOLDER}/${brand.id}/robots/${robot.id}/${robot.image}`
        );

        imageHTML = `
            <div class="robot-card-image">
                <img
                    src="${imageURL}"
                    alt="${escapeHTML(formatName(robot.id))}"
                >
            </div>
        `;
    }

    card.innerHTML = `
        ${imageHTML}

        <div class="robot-card-info">

            <h3>
                ${escapeHTML(formatName(robot.id))}
            </h3>

            <p>
                Apri scheda →
            </p>

        </div>
    `;

    card.addEventListener(
        "click",
        () => {

            const robotData = {
                ...robot,
                brand: brand
            };

            showRobot(robotData);
        }
    );

    robotsGrid.appendChild(card);
}


// =================================
// PAGINA ROBOT
// =================================

function setupRobotImage(robot) {

    robotImage.removeAttribute("src");

    if (robot.image) {

        const imageURL = rawURL(
            `${DOCS_FOLDER}/${robot.brand.id}/robots/${robot.id}/${robot.image}`
        );

        robotImage.src = imageURL;
        robotImage.alt =
            formatName(robot.id);

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
}


function setupRobotFiles(robot) {

    robotFiles.innerHTML = "";

    const files =
        robot.files || [];

    if (files.length === 0) {

        return;
    }

    files.forEach(file => {

        const url = rawURL(
            `${DOCS_FOLDER}/${robot.brand.id}/robots/${robot.id}/${file}`
        );

        const button =
            document.createElement("a");

        button.className =
            "action-button";

        button.href =
            url;

        button.target =
            "_blank";

        button.rel =
            "noopener noreferrer";

        button.textContent =
            getFileLabel(file);

        robotFiles.appendChild(button);
    });
}


async function loadRobotMarkdown(robot) {

    robotMarkdown.innerHTML = `
        <div class="loading">
            Caricamento...
        </div>
    `;

    if (!robot.markdown) {

        robotMarkdown.innerHTML = `
            <div class="loading">
                Nessuna documentazione disponibile.
            </div>
        `;

        return;
    }

    const url = rawURL(
        `${DOCS_FOLDER}/${robot.brand.id}/robots/${robot.id}/${robot.markdown}`
    );

    await loadMarkdown(
        url,
        robotMarkdown
    );
}


// =================================
// GUIDE
// =================================

function loadGuides(brand) {

    guidesGrid.innerHTML = "";

    const guides =
        brand.guides || [];

    if (guides.length === 0) {

        guidesGrid.innerHTML = `
            <div class="loading">
                Nessuna guida inserita.
            </div>
        `;

        return;
    }

    guides.forEach(file => {

        const card =
            document.createElement("div");

        card.className =
            "guide-card";

        card.innerHTML = `
            <div class="guide-icon">
                ${getGuideIcon(file)}
            </div>

            <h3>
                ${escapeHTML(formatName(file))}
            </h3>
        `;

        card.addEventListener(
            "click",
            () => showGuide(file)
        );

        guidesGrid.appendChild(card);
    });
}


// =================================
// MARKDOWN
// =================================

async function loadMarkdown(url, target) {

    try {

        const response =
            await fetch(
                `${url}?v=${Date.now()}`,
                {
                    cache: "no-store"
                }
            );

        if (!response.ok) {

            throw new Error(
                `Errore Markdown: ${response.status}`
            );
        }

        const markdown =
            await response.text();

        target.innerHTML =
            marked.parse(markdown);

    } catch (error) {

        console.error(error);

        target.innerHTML = `
            <div class="loading">
                Impossibile caricare il documento.
            </div>
        `;
    }
}


// =================================
// NAVIGAZIONE
// =================================

if (logoButton) {

    logoButton.addEventListener(
        "click",
        showHome
    );
}


if (backToBrands) {

    backToBrands.addEventListener(
        "click",
        showHome
    );
}


if (backToBrandFromRobot) {

    backToBrandFromRobot.addEventListener(
        "click",
        () => {

            if (currentBrand) {
                showBrand(currentBrand);
            } else {
                showHome();
            }
        }
    );
}


if (backToBrandFromGuide) {

    backToBrandFromGuide.addEventListener(
        "click",
        () => {

            if (currentBrand) {
                showBrand(currentBrand);
            } else {
                showHome();
            }
        }
    );
}


// =================================
// RICERCA
// =================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {

            renderBrands(
                event.target.value
            );
        }
    );
}


// =================================
// AVVIO
// =================================

loadContent();
