Accessibility-First Responsive Website

This is a responsive and accessibility-focused website built using HTML, CSS, and JavaScript. The project follows WCAG accessibility guidelines and includes keyboard navigation, semantic HTML structure, ARIA labels, skip links, and responsive layouts for all screen sizes.

Features

Accessibility:

Skip to Main Content link

Keyboard navigation support

ARIA labels and roles

Semantic HTML structure

High contrast mode toggle

Focus outlines for all interactive elements

Proper heading hierarchy

Accessible forms with labels

Responsive Design:

Mobile-first layout

Responsive navigation bar

Flexbox and Grid layouts

Works on all screen sizes

Pages:

Home

Services

About

Contact

Tech Stack

HTML

CSS

JavaScript

WCAG Guidelines

ARIA Roles

Folder Structure

project-folder/
│── index.html
│── services.html
│── about.html
│── contact.html
│
├── css/
│ ├── style.css
│ ├── services.css
│ ├── about.css
│ ├── contact.css
│
├── js/
│ └── main.js
│
└── assets/
├── images/
├── icons/
└── logo.png

How to Run

Clone the repository
git clone https://github.com/your-username/accessibility-first-website.git

Open the folder

Open index.html in any browser

Accessibility Code Examples

Skip link:
<a href="#main-content" class="skip-link">Skip to main content</a>

ARIA label:

<nav aria-label="Main Navigation">

Focus outline:
:focus {
outline: 3px solid black;
outline-offset: 3px;
}

High contrast mode:
document.body.classList.toggle("high-contrast");

What This Project Shows

Understanding of accessibility

Semantic HTML usage

Responsive design

Clean CSS and JavaScript

User-friendly design

Multi-page website structure

Live Demo

(Add Netlify link after deployment)

Author

Pandena Keerthi




