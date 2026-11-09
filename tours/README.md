# DI CHAM - Tour Booking Website

## Goal and Scope

Help visitors browse sample travel itineraries, narrow the list by destination and duration, and complete a simulated booking. The topic demonstrates catalog filtering, form validation, and cost calculations without a backend.

**Intended audience:** Travelers comparing short trips and planning a suitable departure date.

The documentation and website interface are in English.

## Running the Project

This is a standalone website built with HTML5, CSS3, and plain JavaScript. No package installation or build step is required. Open [index.html](index.html) with Live Server, or start a local HTTP server from this folder:

```sh
python -m http.server 8080
```

Then visit `http://localhost:8080`. Using a local server is recommended for the demo account features, which use the browser's Web Crypto API. The folder can be copied and run independently.

## Pages and Source Files

| File | Purpose |
| --- | --- |
| [index.html](index.html) | Home page |
| [products.html](products.html) | Main content listing and project-specific interactions |
| [about.html](about.html) | Project introduction |
| [contact.html](contact.html) | Contact form demonstration |
| [feedback.html](feedback.html) | Feedback form |
| [register.html](register.html) | Demo account registration |
| [login.html](login.html) | Demo account sign-in |
| [change-password.html](change-password.html) | Demo password change |
| [manage.html](manage.html) | Add an entry with an image |

`css/style.css` contains the functional styling, `css/identity.css` defines the project identity, and `css/responsive.css` contains responsive rules. `js/data.js` provides six sample entries; `js/main.js` handles browser interactions and storage.

## Features

- Browse six sample tours and read their itineraries.
- Search by destination, filter by trip duration and category, and sort by price.
- Choose a departure date and number of travelers, calculate the estimated total, and save a simulated booking.
- Add a custom entry with a local image upload.
- Register, sign in, and change a demo account password.
- Validate form inputs and display success or error messages.
- Save contact messages and feedback on the current browser.

## Data and Limitations

Each project has its own `localStorage` namespace. Saved entries, accounts, messages, and any booking records remain in the current browser and do not synchronize between browsers or devices. Clearing site data removes those records.

Demo passwords use salted hashing. This is not a production authentication system: there is no server-side authentication, authorization, or database. Use test details rather than real credentials or personal information.

Bookings are browser-only demonstrations. The website does not confirm tour availability, contact an operator, collect payment, or issue a real reservation.

## Visual Design and Assets

A tour-search interface with a destination form, duration filters, sidebar controls, and results arranged in readable rows. Each result places itinerary information beside its sample price and booking action.

The pages use responsive layouts, labeled form fields, keyboard navigation, and visible focus indicators. Motion is restrained; reduced-motion preferences are respected where applicable. The project collection has been checked at viewport widths of 390, 1024, and 1440 pixels.

See [image source notes](images/SOURCES.md) for the available asset references. Local Noto Serif font files and their license are included in `fonts/`; see [OFL.txt](fonts/OFL.txt).

The HTML, CSS, and JavaScript in this folder are the current source of truth. Do not rerun the older page generators in the repository's `scripts/` folder or copy their templates over these files, because that would overwrite the project-specific design and behavior.

## Coursework Requirements

- Six sample entries provide a starting point for the minimum of five entries per student. A larger group must expand its content to meet the required contribution per member.
- The project includes home, listing, introduction, contact, feedback, and demo account pages.
- Responsive styling and user interactions are implemented with native HTML, CSS, and JavaScript.
- Bootstrap and jQuery are not included. If the instructor requires every library named in the examination brief, confirm that requirement before submission.

## Report and Presentation Outline

1. State the project name, motivation, goals, audience, and scope.
2. Present the page map and explain the layout, colors, and typography.
3. Explain the HTML5, CSS3, JavaScript, and browser-storage implementation.
4. Demonstrate the main interaction, search or filtering, image upload, demo account flow, and feedback form.
5. Show desktop and mobile layouts, including invalid input and empty states.
6. Summarize the completed frontend and its current limitations.

Prepare the DOCX/PDF report, the group's actual task allocation, and the 20-minute presentation separately. This README is a supporting outline, not a replacement for the report. Having the required pages does not guarantee a particular grade.

## Future Development

Add a backend, database, server-side authentication, and role-based authorization. Replace browser-only demonstrations with validated server workflows where needed, and expand the content and automated checks before any real deployment.
