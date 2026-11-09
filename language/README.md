# CUNG HOC - Language Center Website

## Goal and Scope

A language-center website for learners comparing classes by language and proficiency level. The project uses a familiar education setting to practice page layout, structured content, filtering, and browser interactions.

## Running the Project

Open [index.html](./index.html) to view the site, or serve this directory with Live Server. For the account demonstration, use a local HTTP server such as Live Server or localhost so browser cryptography APIs are available.

The project uses native HTML5, CSS3, and JavaScript. No build step is required. Images are stored locally, with Unsplash used for the sample photography. The folder can be copied and run independently.

## Structure

| File or directory | Purpose |
| --- | --- |
| [index.html](./index.html) | Home page and project-specific entry point |
| [products.html](./products.html) | Main catalog or practice screen |
| [about.html](./about.html) | Project introduction |
| [contact.html](./contact.html) | Contact-message demonstration |
| [feedback.html](./feedback.html) | Feedback form |
| [register.html](./register.html), [login.html](./login.html), [change-password.html](./change-password.html) | Demonstration account workflows |
| [manage.html](./manage.html) | Add a local content record and image |
| [css/style.css](./css/style.css), [css/responsive.css](./css/responsive.css) | Project styling and responsive layouts |
| [js/data.js](./js/data.js) | Six initial sample content records |
| [js/main.js](./js/main.js), [js/identity.js](./js/identity.js) | Core interactions and project-specific presentation behavior |

Each project uses its own localStorage namespace.

## Features

- Browse six sample classes, filter by language, and review the proficiency-level pathway.
- Open a class to read a sample lesson written for the selected language.
- Mark sample lessons as complete and retain completion records in the current browser.
- Search the class catalog, inspect class details, and add local content records with an uploaded image.

Forms validate required input and display result messages. Shared account workflows cover registration, sign-in, sign-out, and password changes. Contact messages and feedback are stored locally; they are not sent to an external recipient.

## Data and Limitations

Demonstration accounts use salted password hashes stored in the browser. This is not production authentication. There is no backend, server-side authorization, cross-browser synchronization, or real payment processing. Use separate test credentials and avoid entering sensitive personal information.

localStorage data is limited to the current browser and origin. Clearing browser storage removes saved accounts, content, feedback, and progress or scores. An uploaded image can fail to save if the browser storage quota is exceeded.

## Course Requirements

- Six sample content records are included. If the course requires at least five products or equivalent content items per student, a larger group must add enough appropriate content for every member.
- Responsive layouts support desktop and mobile screens, with keyboard navigation, visible focus states, and labeled form controls.
- Motion is kept minimal; reduced-motion preferences are respected where motion is used.
- Account, feedback, and topic-specific interaction workflows are included.
- Bootstrap and jQuery are not included in the current implementation. Confirm the instructor's expectations if the assessment requires those libraries explicitly.

## Report and Demonstration Outline

1. State the project name, motivation, goals, target audience, and scope.
2. Present the page structure and explain the layout and color choices.
3. Describe the HTML5, CSS3, JavaScript, and browser-storage implementation.
4. Demonstrate language filtering, a suitable sample lesson, and saved lesson completion. Also demonstrate image uploads, account workflows, and feedback.
5. Check desktop and mobile layouts and show how invalid input is handled.
6. Conclude with the completed frontend workflow and future work, such as a backend, authorization, and a database.

Prepare the DOCX/PDF report, actual team contribution record, and 20-minute presentation including questions separately. This README is an outline, not a replacement for the report. The presence of the required pages does not guarantee an assessment score.

## Design Rationale and Maintenance

A warm language-school layout combines a course finder, a CEFR-level ladder, and class introductions. Language categories and a clear progression path help learners choose a suitable starting point. The account, contact, and information pages retain the same visual identity.

The HTML, CSS, and JavaScript files in this folder are the current source of truth. Do not run the old page generators in the repository's scripts directory to update this design; they can overwrite the independent layout and interactions.
