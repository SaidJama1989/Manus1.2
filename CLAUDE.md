# A1 Networking Next.js Project Notes

## Project Overview
- Next.js website for A1 Networking, an IT consultancy firm
- Site showcases services: network infrastructure, WiFi solutions, office relocations, managed IT services
- Uses Next.js 13.3.4 with the Pages Router, React 18, Tailwind CSS, and Framer Motion

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run linting checks

## Troubleshooting Notes
To resolve the "missing required error components" error:
1. Create simplified pages without using the Layout component
2. Add `NEXT_SKIP_REQUIRED_ERROR_COMPONENTS=1` to the .env file
3. Simplify the error components (404.js, 500.js, _error.js) 
4. Modify next.config.js to disable strict mode and minification

## Color Scheme
- Using Tailwind's standard blue color palette:
  - Primary: blue-600
  - Primary Light: blue-100
  - Primary Dark: blue-700
- Previously used custom theme colors (primary, primary-light, primary-dark)

## Assets
- Logo files:
  - A1-Networking-Horizontal-Logo.png - Full logo for header
  - A1-Networking-Logo-Icon.png - Icon version for favicon
- Located in the /public directory

## Site Structure
- Home page - Overview of company services
- About page - Company history and values
- Services page - Details of offered services
- Contact page - Contact form and information