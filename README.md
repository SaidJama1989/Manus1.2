# A1 Networking - Next.js Website

This is a Next.js website for A1 Networking, an IT consulting company that provides services including network infrastructure, WiFi solutions, office relocations, and managed IT services.

## Prerequisites

Before you can run this project, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later) or [Yarn](https://yarnpkg.com/) (v1.22.x or later)

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd a1networking-nextjs
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
a1networking-nextjs/
├── public/               # Static assets
│   ├── favicon.ico
│   ├── logo.svg
│   └── images/
│       ├── hero-banner.jpg
│       ├── service-icons/
│       │   ├── network-infrastructure.svg
│       │   ├── wifi-solutions.svg
│       │   ├── office-relocations.svg
│       │   └── managed-it.svg
│       └── testimonials/
│           └── person1.jpg, person2.jpg, etc.
├── src/
│   ├── components/       # React components
│   │   ├── layout/       # Layout components
│   │   ├── ui/           # UI components
│   │   ├── sections/     # Page sections
│   │   └── forms/        # Form components
│   ├── pages/            # Next.js pages
│   │   ├── index.js      # Homepage
│   │   ├── about.js      # About page
│   │   ├── contact.js    # Contact page
│   │   └── services/     # Services pages
│   └── styles/           # CSS styles
│       ├── globals.css   # Global styles
│       └── theme.js      # Theme configuration
├── package.json          # Project dependencies and scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
