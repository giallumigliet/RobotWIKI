
import json
from pathlib import Path


DOCS = Path("docs")
DOCS_LANGUAGES = Path("docs_languages")

OUTPUT = DOCS / "content.json"
LANGUAGES_OUTPUT = DOCS / "languages-content.json"

IMAGE_EXTENSIONS = {
    ".jpg", ".jpeg", ".png", ".webp", ".gif"
}

LOGO_EXTENSIONS = {
    ".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"
}


def find_logo(brand_folder):
    for extension in LOGO_EXTENSIONS:
        logo = brand_folder / f"logo{extension}"
        if logo.exists():
            return logo.name
    return None


def find_robot_files(robot_folder):
    files = []

    for file in sorted(robot_folder.iterdir()):
        if not file.is_file():
            continue

        if file.suffix.lower() in IMAGE_EXTENSIONS:
            continue

        if file.suffix.lower() == ".md":
            if file.name.lower() == (
                robot_folder.name.lower() + ".md"
            ):
                continue

        files.append(file.name)

    return files


def find_robot_markdown(robot_folder):
    expected = robot_folder / f"{robot_folder.name}.md"

    if expected.exists():
        return expected.name

    markdown_files = sorted(robot_folder.glob("*.md"))

    if markdown_files:
        return markdown_files[0].name

    return None


def find_robot_image(robot_folder):
    for extension in IMAGE_EXTENSIONS:
        image = robot_folder / f"{robot_folder.name}{extension}"
        if image.exists():
            return image.name

    for file in sorted(robot_folder.iterdir()):
        if (
            file.is_file()
            and file.suffix.lower() in IMAGE_EXTENSIONS
        ):
            return file.name

    return None


def generate_brands():
    brands = []

    if not DOCS.exists():
        print("Cartella docs non trovata.")
        return

    for brand_folder in sorted(DOCS.iterdir()):
        if not brand_folder.is_dir():
            continue

        brand = {
            "id": brand_folder.name,
            "logo": find_logo(brand_folder),
            "robots": [],
            "guides": []
        }

        # ROBOT
        robots_folder = brand_folder / "robots"

        if robots_folder.exists():
            for robot_folder in sorted(robots_folder.iterdir()):
                if not robot_folder.is_dir():
                    continue

                robot = {
                    "id": robot_folder.name,
                    "markdown": find_robot_markdown(robot_folder),
                    "image": find_robot_image(robot_folder),
                    "files": find_robot_files(robot_folder)
                }

                brand["robots"].append(robot)

        # GUIDE
        guides_folder = brand_folder / "guides"

        if guides_folder.exists():
            for file in sorted(guides_folder.iterdir()):
                if file.is_file() and file.suffix.lower() == ".md":
                    brand["guides"].append(file.name)

        brands.append(brand)

    DOCS.mkdir(parents=True, exist_ok=True)

    OUTPUT.write_text(
        json.dumps(
            {"brands": brands},
            indent=4,
            ensure_ascii=False
        ),
        encoding="utf-8"
    )

    print(f"Generato {OUTPUT}")


def generate_languages():
    languages = []

    if not DOCS_LANGUAGES.exists():
        print("Cartella docs_languages non trovata.")
        return

    for language_folder in sorted(DOCS_LANGUAGES.iterdir()):
        if not language_folder.is_dir():
            continue

        markdown_files = sorted(
            file for file in language_folder.iterdir()
            if file.is_file() and file.suffix.lower() == ".md"
        )

        if not markdown_files:
            continue

        documents = []

        for file in markdown_files:
            documents.append({
                "id": file.stem,
                "title": file.stem.replace("_", " ").replace("-", " "),
                "file": file.name,
                "path": f"{language_folder.name}/{file.name}"
            })

        languages.append({
            "id": language_folder.name,
            "title": language_folder.name.replace("_", " ").replace("-", " "),
            "documents": documents
        })

    DOCS.mkdir(parents=True, exist_ok=True)

    LANGUAGES_OUTPUT.write_text(
        json.dumps(
            {"languages": languages},
            indent=4,
            ensure_ascii=False
        ),
        encoding="utf-8"
    )

    print(f"Generato {LANGUAGES_OUTPUT}")


def generate():
    generate_brands()
    generate_languages()


if __name__ == "__main__":
    generate()
