# Security Policy

## About This Project

SecureProfile is a personal portfolio website built as part of the
Cybrexa Cybersecurity Internship (Project 01/04). It is a static
website (HTML, CSS, JavaScript) with no backend, database, or user
authentication system.

## Supported Versions

This project has a single live version, hosted via GitHub Pages.
Only the latest version on the `main` branch is maintained.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Security Measures Implemented

- **XSS Prevention:** All user-facing form inputs (Contact page) are
  validated and sanitized on the client side before processing.
- **No inline scripts:** JavaScript is kept in external `.js` files,
  reducing exposure to script injection.
- **Safe external links:** All links opening in a new tab use
  `rel="noopener noreferrer"` to prevent tabnabbing attacks.
- **No sensitive data storage:** This site does not collect, store,
  or transmit sensitive personal data.

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please
report it responsibly:

- **Email:** farahzahid301@gmail.com
- **GitHub:** Open a private security advisory on this repository,
  or contact via the profile linked in the repo.

Please do not open a public GitHub issue for security
vulnerabilities. I will acknowledge reports within a few days and
work on a fix as soon as possible.

## Scope

This policy covers the SecureProfile website code only
(HTML/CSS/JS files in this repository). It does not cover
third-party services used (GitHub Pages, Font Awesome CDN, Google
Fonts CDN).