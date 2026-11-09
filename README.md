# COMP1802 - Web Design Projects

A collection of projects and assignments for the **Web Design** course at Ho Chi Minh City University of Education. The repository contains **24 themed websites** and **2 foundational exercises**. Each themed website has its own interface and can run independently.

[Open the project catalogue](./index.html) to browse screenshots, filter by category, and search by name, website topic, or feature. The website interfaces remain in Vietnamese; these README documents are written in English.

## Course Information

| Field | Details |
| --- | --- |
| Course | Web Design |
| Course code | COMP1802 |
| Instructor | M.Sc. Hien Tran Hy Luong |
| Faculty | Faculty of Information Technology |
| University | Ho Chi Minh City University of Education (HCMUE) |

## Author

| Field | Details |
| --- | --- |
| Name | Minh Khiem Truong |
| Major | Information Technology |
| University | Ho Chi Minh City University of Education (HCMUE) |

## Getting Started

The websites use HTML5, CSS3, and plain JavaScript. No build step or package installation is required to run them.

From the repository root, start a static server:

```sh
python -m http.server 8080
```

Open `http://localhost:8080/` to use the catalogue. Live Server is another option. Use localhost for account features: password hashing relies on the browser's Web Crypto API. Each project folder is self-contained and can be served separately.

## Projects

### E-commerce Websites

| Project | Website topic | Main features |
| --- | --- | --- |
| [NEP](./fashion/index.html) | Fashion store | Clothing and accessories, category filters, product details, cart, simulated orders |
| [MACH](./tech/index.html) | Technology and computer hardware store | Device search, specifications, prices, cart, simulated orders |
| [GO NHA](./furniture/index.html) | Furniture store | Showroom layout, dimensions and materials, product details, cart |
| [TAY MOC](./handmade/index.html) | Handmade goods store | Craft journal, pottery and woven products, product details, simulated orders |
| [TRANG](./bookstore/index.html) | Bookstore | Book search, descriptions and formats, typographic covers, cart |
| [THANG HOA](./flowers/index.html) | Flower and gift shop | Occasion-based browsing, bouquet prices, cart, simulated orders |
| [VUON SOM](./organic/index.html) | Produce and grocery store | Produce listings, package units, search and filters, cart totals |

### Travel, Culture, and Entertainment Websites

| Project | Website topic | Main features |
| --- | --- | --- |
| [CHAM DA LAT](./dalat/index.html) | Da Lat destination guide | Local destination photographs, numbered stops, visitor notes |
| [DI CHAM](./tours/index.html) | Tour booking | Destination and duration search, itineraries, simulated bookings |
| [HIEN](./homestay/index.html) | Homestay room booking | Room information, amenities, dates, nights and party size, simulated booking costs |
| [BEP DOC MIEN](./cuisine/index.html) | Vietnamese regional cuisine | Dish photographs, culinary background, serving suggestions |
| [MUA HOI](./festivals/index.html) | Cultural festival guide | Regional browsing, cultural context, visitor guidance |
| [SUAT TOI](./tickets/index.html) | Film and music ticket booking | Sample programs, dates, ticket quantities, simulated bookings |

### Learning Websites

| Project | Website topic | Main features |
| --- | --- | --- |
| [CUNG HOC](./language/index.html) | Language school | Language and level filters, sample lessons, completion tracking |
| [MO LOP](./courses/index.html) | Online learning platform | Course browsing, sample lessons, locally saved progress |
| [GHI CHEP](./study-blog/index.html) | Study blog | HTML, CSS, and JavaScript notes, study methods, project preparation |
| [XUONG WEB](./coding/index.html) | Web development learning | Editor-style navigation, practice examples, lesson completion |
| [THU TRI](./quiz/index.html) | Web knowledge quiz | Questions, answer explanations, scores, restart, saved best result |

### Utility Websites

| Project | Website topic | Main features |
| --- | --- | --- |
| [VIEC NHO](./todo/index.html) | Personal task manager | Priorities, completion checkboxes, status filters, progress |
| [SO CHI](./expenses/index.html) | Personal income and expense tracker | Dated transactions, categories, calculated totals and balance |
| [HEN NGAY](./calendar/index.html) | Personal event calendar | Month navigation, dated events, day selection, saved event management |
| [KHOANG NGHI](./appointments/index.html) | Personal care appointment booking | Service fees and durations, time slots, local duplicate-slot checks |
| [KHUNG](./gallery/index.html) | Personal photo album | Topic filters, large-image viewing, local image uploads |
| [BAN NHO](./mini-tools/index.html) | Browser utility toolkit | Calculator, countdown timer, monthly calendar, tool switching |

### Foundational Exercises

| Project | Website topic | Technology | Links |
| --- | --- | --- | --- |
| Aquarium | Animated aquarium | HTML, CSS | [View](./aquarium/index.html) / [Source](./aquarium/) |
| CV | Personal resume | HTML, CSS | [View](./cv/index.html) / [Source](./cv/) |

## Shared Pages and Data

The 24 themed websites include home, a catalogue or equivalent workspace, about, contact, registration, login, password changes, feedback, and content entry. Each project contains six initial content definitions; their role depends on the topic. Utility definitions are not six separate products or applications. A product-based group submission must still provide at least five products per student.

Demonstration accounts, submissions, uploaded content, and other supported application data use a separate localStorage namespace for each project. Contact and feedback forms save data locally rather than sending messages. Orders, tour bookings, room bookings, tickets, and appointments are simulations. There is no backend, real payment processing, cross-device synchronization, or production authentication system.

Each project README explains its own features, design decisions, limitations, and suggested presentation.

## Design and Source Files

Each website has its own layout, typography, navigation, and content presentation. Pages within a project share a consistent identity. Motion is restrained, and layouts support desktop and mobile screens.

The HTML, CSS, and JavaScript inside each project folder are the current source of truth. The original generators, such as `scripts/build-projects.py`, `scripts/refine-design.py`, and `scripts/main-template.js`, remain as historical scaffolding. **Do not rerun them or copy their output over the current files:** they would replace the independent designs and custom behavior.

Catalogue styles and filtering are maintained in `css/catalogue.css` and `js/catalogue.js`. The actual interface screenshots used in the catalogue are stored in `previews/`.

Content images are stored inside each project. Some projects include source notes in `images/SOURCES.md`. Images illustrate the topics and should not be treated as verified photographs of a real business or a specific merchandise listing. Additional self-hosted fonts include their license files in `fonts/`.

## Verification

The existing browser checks use Python, Playwright, and Chromium. With a static server running on port 8080, run them from the repository root using a Python environment that has Playwright and its browser installed:

```sh
python scripts/check-redesign.py
python scripts/check-flows.py
```

- `check-redesign.py` loads 216 themed project pages at widths of 390, 1024, and 1440 pixels. It checks for JavaScript errors, missing resources, and horizontal overflow, and saves homepage screenshots under `artifacts/redesign/`.
- `check-flows.py` exercises accounts, password changes, cart checkout, booking, duplicate appointment slots, tasks, expenses, events, quizzes, calculator and timer behavior, lesson progress, image uploads, and feedback.

The catalogue has also been checked at 320, 390, 768, 1024, and 1440 pixels, including its category filters, accent-insensitive search, empty state, and reset control.

## Course Report and Presentation

Prepare the DOCX/PDF report, actual team contributions, and the 20-minute group presentation separately. The project READMEs provide outlines; they do not replace the report or guarantee a grade.

Suggested report topics are the project name, rationale, objectives, scope, intended audience, page map, design choices, use of HTML5/CSS3/JavaScript, demonstrated interactions, validation, conclusion, and future development.

Bootstrap and jQuery are not used in the current implementation. Confirm the instructor's expectations if every library named in the exam brief must be included.

## License

Repository code is licensed under the [MIT License](./LICENSE). Third-party photographs and fonts remain subject to their own source licenses.
