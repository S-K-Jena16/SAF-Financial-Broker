# SAF Advisory – Corporate Financial Consultancy Website

A professional, responsive corporate financial consultancy website built with **React (Vite)**, **Tailwind CSS**, and **React Router**.

## Features

- **Responsive layout** – Works on mobile, tablet, and desktop
- **Reusable components** – Navbar, Footer, Hero Section, Service Card, Section Title
- **Pages** – Home, About, Services, Service Details (dynamic by ID), Contact, Career
- **Dynamic services** – Data in `src/data/services.js`, displayed across Home and Services
- **Contact form** – Functional UI (no backend); shows success state on submit
- **Career page** – Open roles list and application form UI

## Folder structure

```
src/
  components/
    common/       # Navbar, Footer, SectionTitle
    home/         # HeroSection, AboutPreview, ServicesList, WhyChooseUs, Testimonials, ContactCTA
    services/     # ServiceCard
  data/           # services.js, testimonials.js, whyChooseUs.js
  pages/          # Home, About, Services, ServiceDetails, Contact, Career
  App.jsx
  main.jsx
  index.css
```

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Tech stack

- React 18
- Vite 5
- React Router 6
- Tailwind CSS 4
