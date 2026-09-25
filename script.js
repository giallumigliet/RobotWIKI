const OWNER = "giallumigliet";
const REPO = "RobotWIKI";
const BRANCH = "main";
const DOCS_FOLDER = "docs";

const RAW_BASE =
    `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/`;

const CONTENT_URL =
    `${RAW_BASE}${DOCS_FOLDER}/content.json?v=${Date.now()}`;


// ===============================
// ELEMENTI HTML
// ===============================

const brandsGrid = document.getElementById("brandsGrid");
const robotsGrid = document.getElementById("robotsGrid");
const guidesList = document.getElementById("guidesList");

const homeView = document.getElementById("homeView");
const brandView = document.getElementById("brandView");
const robotView = document.getElementById("robotView");
const guideView = document.getElementById("guideView");

const brandTitle = document.getElementById("brandTitle");
const robotTitle = document.getElementById("robotTitle");
const guideTitle = document.getElementById("guideTitle");

const robotImage = document.getElementById("robotImage");
const robotFiles = document.getElementById("robotFiles");
const robotMarkdown = document.getElementById("robotMarkdown");

const guideMarkdown = document.getElementById("guideMarkdown");

const searchInput = document.getElementById("searchInput");
const backButton = document.getElementById("backButton");
const logoButton = document.getElementById("logo");


// ===============================
// DATI
// ===============================

let allBrands = [];
let currentBrand = null;


// ===============================
// UTILITÀ
// ===============================

function formatName(filename) {
    let name = filename.replace(/\.[^/.]+$/, "");

    return name
        .split("_")
        .map(word => {
            if (!word) return "";
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
}


function escapeHTML(text) {
    if (!text) return "";

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function githubRawURL(path) {
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


function isImage(filename) {
    const extension = filename
        .split(".")
        .pop()
        .toLowerCase();

    return [
        "jpg",
        "jpeg",
        "png",
        "webp",
        "gif"
    ].includes(extension);
}


// ===============================
// CARICAMENTO CONTENT.JSON
// ===============================

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
                `Errore caricamento content.json: ${response.status}`
            );
        }

        const data = await response.json();

        allBrands = (data.brands || []).map(brand => ({
            ...brand,
            name: formatName(brand.id)
        }));

        renderBrands();

    } catch (error) {
        console.error(error);

        brandsGrid.innerHTML = `
            <div class="loading">
                Errore nel caricamento dei contenuti.
                <br>
                <small>
                    Verifica che <strong>docs/content.json</strong>
                    esista.
                </small>
            </div>
        `;
    }
}


// ===============================
// HOME - MARCHE
// ===============================

function renderBrands(filter = "") {

    brandsGrid.innerHTML = "";

    const search = filter.toLowerCase().trim();

    const filtered = allBrands.filter(brand =>
        brand.name.toLowerCase().includes(search)
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

        const card = document.createElement("div");

        card.className = "brand-card";

        let logoHTML = `<span>🤖</span>`;

        if (brand.logo) {

            const logoURL = githubRawURL(
                `${DOCS_FOLDER}/${brand.id}/${brand.logo}`
            );

            logoHTML = `
                <img
                    src="${logoURL}"
                    alt="${escapeHTML(brand.name)}"
                >
            `;
        }

        card.innerHTML = `
            <div class="brand-icon">
                ${logoHTML}
            </div>

            <div>
                <strong>
                    ${escapeHTML(brand.name)}
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


// ===============================
// PAGINA MARCA
// ===============================

function showBrand(brand) {

    currentBrand = brand;

    homeView.style.display = "none";
    robotView.style.display = "none";
    guideView.style.display = "none";

    brandView.style.display = "block";

    brandTitle.textContent = brand.name;

    loadRobots(brand);
    loadGuides(brand);
}


// ===============================
// ROBOT
// ===============================

function loadRobots(brand) {

    robotsGrid.innerHTML = "";

    const robots = brand.robots || [];

    if (robots.length === 0) {

        robotsGrid.innerHTML = `
            <div class="loading">
                Nessun robot inserito.
            </div>
        `;

        return;
    }

    robots.forEach(robot => {

        const robotData = {
            ...robot,
            name: formatName(robot.id),
            brand: brand
        };

        createRobotCard(robotData);
    });
}


function createRobotCard(robot) {

    const card = document.createElement("div");

    card.className = "robot-card";

    let imageHTML = `
        <div class="robot-card-image placeholder">
            🤖
        </div>
    `;

    if (robot.image) {

        const imageURL = githubRawURL(
            `${DOCS_FOLDER}/${robot.brand.id}/robots/${robot.id}/${robot.image}`
        );

        imageHTML = `
            <div class="robot-card-image">
                <img
                    src="${imageURL}"
                    alt="${escapeHTML(robot.name)}"
                >
            </div>
        `;
    }

    card.innerHTML = `
        ${imageHTML}

        <div class="robot-card-content">

            <h3>
                ${escapeHTML(robot.name)}
            </h3>

            <span>
                Apri scheda →
            </span>

        </div>
    `;

    card.addEventListener(
        "click",
        () => showRobot(robot)
    );

    robotsGrid.appendChild(card);
}


// ===============================
// PAGINA ROBOT
// ===============================

async function showRobot(robot) {

    brandView.style.display = "none";
    homeView.style.display = "none";
    guideView.style.display = "none";

    robotView.style.display = "block";

    robotTitle.textContent = robot.name;

    // IMMAGINE
    if (robot.image) {

        robotImage.src = githubRawURL(
            `${DOCS_FOLDER}/${robot.brand.id}/robots/${robot.id}/${robot.image}`
        );

        robotImage.alt = robot.name;
        robotImage.style.display = "block";

    } else {

        robotImage.removeAttribute("src");
        robotImage.style.display = "none";
    }


    // FILE / PDF
    robotFiles.innerHTML = "";

    const files = robot.files || [];

    if (files.length === 0) {

        robotFiles.innerHTML = `
            <div class="loading">
                Nessun documento disponibile.
            </div>
        `;

    } else {

        files.forEach(file => {

            const url = githubRawURL(
                `${DOCS_FOLDER}/${robot.brand.id}/robots/${robot.id}/${file}`
            );

            const button = document.createElement("a");

            button.className = "file-button";

            button.href = url;
            button.target = "_blank";
            button.rel = "noopener noreferrer";

            button.textContent = getFileLabel(file);

            robotFiles.appendChild(button);
        });
    }


    // MARKDOWN ROBOT
    robotMarkdown.innerHTML = `
        <div class="loading">
            Caricamento...
        </div>
    `;

    if (robot.markdown) {

        const markdownURL = githubRawURL(
            `${DOCS_FOLDER}/${robot.brand.id}/robots/${robot.id}/${robot.markdown}`
        );

        await loadMarkdown(
            markdownURL,
            robotMarkdown
        );

    } else {

        robotMarkdown.innerHTML = `
            <div class="loading">
                Nessuna documentazione disponibile.
            </div>
        `;
    }
}


// ===============================
// GUIDE
// ===============================

function loadGuides(brand) {

    guidesList.innerHTML = "";

    const guides = brand.guides || [];

    if (guides.length === 0) {

        guidesList.innerHTML = `
            <div class="loading">
                Nessuna guida inserita.
            </div>
        `;

        return;
    }

    guides.forEach(file => {

        const button = document.createElement("button");

        button.className = "guide-button";

        button.textContent = formatName(file);

        button.addEventListener(
            "click",
            () => showGuide(file, brand)
        );

        guidesList.appendChild(button);
    });
}


async function showGuide(file, brand) {

    brandView.style.display = "none";
    homeView.style.display = "none";
    robotView.style.display = "none";

    guideView.style.display = "block";

    guideTitle.textContent = formatName(file);

    guideMarkdown.innerHTML = `
        <div class="loading">
            Caricamento...
        </div>
    `;

    const markdownURL = githubRawURL(
        `${DOCS_FOLDER}/${brand.id}/guides/${file}`
    );

    await loadMarkdown(
        markdownURL,
        guideMarkdown
    );
}


// ===============================
// MARKDOWN
// ===============================

async function loadMarkdown(url, target) {

    try {

        const response = await fetch(
            `${url}?v=${Date.now()}`,
            {
                cache: "no-store"
            }
        );

        if (!response.ok) {
            throw new Error(
                `Errore caricamento Markdown: ${response.status}`
            );
        }

        const markdown = await response.text();

        target.innerHTML = marked.parse(markdown);

    } catch (error) {

        console.error(error);

        target.innerHTML = `
            <div class="loading">
                Impossibile caricare il documento.
            </div>
        `;
    }
}


// ===============================
// HOME
// ===============================

function showHome() {

    homeView.style.display = "block";
    brandView.style.display = "none";
    robotView.style.display = "none";
    guideView.style.display = "none";

    currentBrand = null;

    if (searchInput) {
        searchInput.value = "";
    }

    renderBrands();
}


// ===============================
// RICERCA
// ===============================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {
            renderBrands(event.target.value);
        }
    );
}


// ===============================
// NAVIGAZIONE
// ===============================

if (backButton) {

    backButton.addEventListener(
        "click",
        () => {

            if (robotView.style.display === "block") {

                showBrand(currentBrand);

            } else if (guideView.style.display === "block") {

                showBrand(currentBrand);

            } else {

                showHome();
            }
        }
    );
}


if (logoButton) {

    logoButton.addEventListener(
        "click",
        showHome
    );
}


// ===============================
// AVVIO
// ===============================

loadContent();
