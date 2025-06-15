# LadifyX – Project Management Landing Page

## Overview

LadifyX is a modern, responsive landing page (and demo) for a project management platform. It offers a streamlined user experience for onboarding, authentication (signup/login), project creation, task management, team collaboration, and sales contact. The project is structured as a static frontend (HTML, CSS, and JavaScript) with a minimal backend (Node.js/Express) for demo purposes.

## Project Structure

- **html/** – Contains all HTML pages (e.g. index, login, signup, dashboard, create-project, create-task, invite-team, learn-more, contact-sales, demo, terms, getting-started).
- **style/** – Contains CSS files (styles.css, login.css, signup.css, contact.css, demo.css, getstrated.css) for styling the pages.
- **java_script/** – Contains script.js (for navigation, testimonials slider, form validation, animations, etc.).
- **backend/** – Contains a minimal Node.js/Express server (server.js) and package.json (dependencies: express, mongoose, cors, body-parser) for demo signup (MongoDB local).
- **assest/** – Contains images (author.jpg, author2.jpg, author3.jpg, favicon.jpg, background.webp) and other static assets.

## Features

### Frontend (HTML Pages)

- **index.html** – Main landing page (with hero, features, testimonials, pricing, and CTA sections).
- **login.html** – Sign-in page (with form validation, "Remember me" checkbox, and "Forgot password" link).
- **signup.html** – Registration page (with robust password validation, terms agreement, and "Back to Home" link).
- **dashboard.html** – A placeholder dashboard (intended for project/task management).
- **create-project.html** – A placeholder page for project creation.
- **create-task.html** – A placeholder page for task creation.
- **invite-team.html** – A placeholder page for inviting team members.
- **learn-more.html** – A "Learn More" page (with links to guides, tips, and FAQs).
- **contact-sales.html** – A "Contact Sales" page (with a "Request a Demo" form, company info, and live chat details).
- **demo.html** – A "Watch Demo" page (with a video placeholder, feature cards, and CTA buttons).
- **terms.html** – A "Terms and Conditions" page (outlining usage rules).
- **getting-started.html** – An onboarding page (with step cards, key features, and a progress bar).

### Styling (CSS)

- **styles.css** – Global styles (reset, typography, buttons, header, hero, features, testimonials, pricing, contact, footer, and responsive media queries).
- **login.css** – Custom styles for the login page (container, form, error states, "Remember me" and "Forgot password").
- **signup.css** – Custom styles for the signup page (container, form, password requirements, terms agreement, and responsive adjustments).
- **contact.css** – Custom styles for the "Contact Sales" page.
- **demo.css** – Custom styles for the "Watch Demo" page.
- **getstrated.css** – Custom styles for the "Getting Started" page.

### JavaScript (script.js)

- Navigation toggle (mobile menu).
- Smooth scrolling for anchor links.
- Testimonials slider (auto-rotate and dynamic card creation).
- Form validation (email, password, required fields) and simulated submission (for login, signup, and contact forms).
- Intersection Observer (for scroll animations on feature cards, step cards, etc.).
- Scroll-based animations (e.g. parallax effect on hero, header shadow).

### Backend (Node.js/Express)

- **server.js** – A minimal Express server  that connects to a local MongoDB (mongodb://localhost:27017/ladifyx) and exposes a signup endpoint (/api/signup) (using mongoose for a User schema).
- **package.json** – Lists dependencies (express, mongoose, cors, body-parser) and metadata (name, version, license).

### Assets

- **assest/** – Contains images (author.jpg, author2.jpg, author3.jpg, favicon.jpg, background.webp) used in the landing page.

## Running the Project

### Prerequisites

- Node.js (and npm) installed.
- A local MongoDB instance (or update the connection string in backend/server.js).

### Instructions

1. **Clone the repository** (or download the project files).
2. **Install backend dependencies** (in the "backend" folder):
   • cd backend
   • npm install
3. **Start the backend server** (in the "backend" folder):
   • node server.js (or "npm start" if a start script is added).

4. **Open the HTML pages** (in the "html" folder) in your browser (e.g. open "html/index.html" for the landing page).

## Summary

LadifyX is a comprehensive landing page (and demo) for a project management platform. It features a modern, responsive design (using HTML, CSS, and JavaScript) and a minimal backend (Node.js/Express) for demo signup. The project is organized into folders (html, style, java_script, backend, assest) and includes pages for onboarding, authentication, project/task creation, team invites, learning resources, sales contact, and terms. For further details, please refer to the individual files (e.g. index.html, login.html, signup.html, backend/server.js, style/styles.css, java_script/script.js, etc.). 
