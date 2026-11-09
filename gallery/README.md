# KHUNG - Personal Photo Album

## Purpose and Scope

A photographic collection for viewing outdoor scenes and adding images to a local album. This topic provides a practical setting for HTML structure, responsive CSS, input validation, and JavaScript interaction.

## Run Locally

Open this folder with Live Server, or start a static server from the repository root:

```sh
python -m http.server 8080
```

Then visit `http://localhost:8080/gallery/`. The project uses HTML5, CSS3, and plain JavaScript. There is no build step, framework, or package installation. Use localhost rather than a direct file URL for the account features, which require the browser's Web Crypto API. Each project folder is self-contained and can also be served independently.

## Features

- Browse six sample photographs in an asymmetric image layout.
- Search images by name and filter them by category.
- Open a photograph in a larger dialog.
- Add an image, title, description, and category through the content form.
- Save uploaded content in localStorage for later visits on the same browser.

All themed projects also include registration, login, password changes, contact, feedback, and local content-entry forms. Forms validate input and display a result message. Contact and feedback submissions are saved locally; they do not send email.

## File Structure

- `index.html`: home page or main application workspace.
- `products.html`: service list, photo album, or equivalent tool workspace.
- `about.html`, `contact.html`, `feedback.html`: project information and local demonstration forms.
- `register.html`, `login.html`, `change-password.html`: demonstration account flows.
- `manage.html`: add local content and an image.
- `css/style.css`, `css/responsive.css`, `css/identity.css`: base styles, responsive rules, and project identity.
- `js/data.js`: six initial content definitions.
- `js/main.js`: shared application and form behavior.
- `js/ui.js`: project-specific layout and interactions.
- `images/`: local photographs and visual assets.

## Interface Design

A charcoal exhibition interface with large typography, varied image sizes, and minimal captions. The design gives photographs more space than controls or promotional copy. Motion is kept minimal. Responsive layouts, visible keyboard focus, and form labels support desktop and mobile use.

## Data and Limitations

Image uploads accept JPEG, PNG, or WebP files up to 1 MB. Browser storage is limited; images are not uploaded to a server or shared with other users.

This project uses its own `comp1802:gallery:` localStorage namespace. Data is not synchronized between browsers or devices and is removed if site storage is cleared. Demonstration accounts store salted password hashes, but this frontend-only implementation is not a production authentication system. Use test credentials rather than real personal information.

Photographs are stored locally. Where provided, `images/SOURCES.md` records image sources. Additional fonts include their license files in `fonts/`.

## Course Requirements and Presentation

- Pages cover home, the main feature, about, contact, registration, login, password changes, feedback, and content entry.
- Six initial content definitions are included. For a product-based group submission, add enough products to meet the requirement of at least five per student; utility definitions should not be presented as merchandise.
- Responsive layouts and topic-specific interactions demonstrate HTML5, CSS3, and JavaScript skills.
- Bootstrap and jQuery are not included. Confirm the instructor's expectations if every library named in the exam brief must be used.

Prepare the DOCX/PDF report, actual team contributions, and 20-minute group presentation separately. This README is an outline, not a substitute for the report or a guarantee of a grade.

Suggested presentation:

1. Explain the topic, intended audience, objectives, and scope.
2. Show the page map and justify layout, color, and typography choices.
3. Explain how HTML, CSS, JavaScript, and browser storage work together.
4. Demonstrate the main feature, account flows, content entry, and feedback.
5. Show mobile behavior, persistence where supported, and invalid-input handling.
6. Summarize the frontend result and propose a backend, database, and server-side authentication as future work.

## Maintenance

Edit the HTML, CSS, and JavaScript directly in this folder. These files are the current source of truth. Do not rerun the legacy generators or copy `scripts/main-template.js` over the current scripts: doing so would overwrite this project's design and custom behavior.
