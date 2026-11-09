# VUON SOM - Produce and Food Store

## Purpose and Scope

A grocery storefront for seasonal vegetables, fruit and other food products. It emphasizes package quantities and prices so visitors can assemble a small shopping basket.

The intended audience is people exploring this product category. The topic provides a familiar setting for practicing page layout, sample data and user interaction entirely in the browser.

## Run Locally

Open [index.html](./index.html), or serve this folder with Live Server or another static HTTP server. The project uses HTML5, CSS3 and vanilla JavaScript without a build step, Bootstrap or jQuery. Use localhost for browser features that require a secure context, including demo password hashing.

Images are stored locally, primarily from Unsplash. The folder can be copied and run independently. Any included fonts are stored locally with their license.

## Pages and Source Files

- [Home](./index.html) introduces the storefront and selected products.
- [Products](./products.html) provides the catalogue and shopping cart.
- [About](./about.html), [Contact](./contact.html) and [Feedback](./feedback.html) provide supporting information and forms.
- [Register](./register.html), [Login](./login.html) and [Change Password](./change-password.html) demonstrate account flows.
- [Add Content](./manage.html) adds a product record with an uploaded image.
- [data.js](./js/data.js) contains six sample product records; [main.js](./js/main.js) handles browser interactions.
- [style.css](./css/style.css), [responsive.css](./css/responsive.css) and [identity.css](./css/identity.css) define the functional base, responsive behavior and project identity.

## Features

- Browse produce and food products; check package quantities and prices before adding items to the basket.
- Add products to the cart, change quantities, remove items and calculate the total.
- Save a simulated order using a validated form.
- Add product information and upload an image through the content form.
- Demonstrate registration, login, password changes, contact messages and feedback.
- Display validation and result messages directly on the page.

Each project uses its own localStorage namespace. Demo passwords are hashed with a salt, but the account flow is not production authentication. Data is stored only in the current browser and is not synchronized between browsers or devices. There is no backend, real payment or delivery service. Use test credentials and sample information only.

## Design

A practical market layout combines search, ingredient groups, compact product tiles and a shopping basket. Purchase units and prices take priority over promotional slogans.

Layouts adapt to desktop and mobile screens. Forms have labels, keyboard navigation and visible focus indicators. Motion is kept minimal; reduced-motion preferences are respected where animations are used.

The HTML, CSS and JavaScript files in this folder are the current source of truth. Maintain this design directly in the folder. Do not run the old page generators in the repository's scripts directory or copy their templates over these files, because that would overwrite the independent layout and behavior.

## Coursework Requirements

- Six sample products cover the minimum of five products for one student. A group submission must include at least five products per student.
- Responsive layouts, account flows, feedback and product interactions demonstrate the required frontend concepts.
- Bootstrap and jQuery are not used in this implementation. If the instructor requires every library listed in the exam brief, confirm that requirement before submission.
- A complete set of pages alone does not guarantee a particular assessment score.

## Suggested Report and Demonstration

1. Present the project name, selection rationale, objectives, audience and scope.
2. Show the site structure and explain the layout, typography and color choices.
3. Describe the HTML5, CSS3 and JavaScript implementation and browser storage.
4. Demonstrate search, product details, the cart, image upload, account flows and feedback.
5. Show desktop and mobile behavior, including invalid input and empty states.
6. Conclude with the completed frontend scope and future work such as a backend, database and access control.

Prepare the DOCX/PDF report, the group's actual task allocation and the 20-minute presentation separately. This README is an outline, not a replacement for those deliverables.
