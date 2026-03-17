# Women's Safety & Community (India)

A frontend-only, mobile-first React website focused on women's safety in India. Built with React, Material UI (MUI), and React Router.

## Features

- **Sticky header** with logo, title, and navigation (Home, About, Raise Complaint)
- **Home**: Carousel (Safety Tips, Community Support, Helplines, Raise Complaint) and tabbed content
- **Safety tab**: Accordions for self-defense, travel, night safety, emergency preparedness + Quick Safety Hacks
- **Community tab**: Instagram, YouTube, and other platforms (NGOs, Facebook, Twitter)
- **Helplines tab**: India-only numbers (1091, 112, 100, 102) and transport safety (Uber, Rapido, Ola)
- **Complaint tab**: Form with validation; submits via EmailJS or **mailto** fallback to `suryawanshijatin07@gmail.com`
- **About page**: Purpose, India focus, community support, awareness & reporting
- **Footer**: "Stay Safe. Stay Strong." and social link placeholders

## Tech Stack

- React (functional components + hooks)
- Material UI (MUI v5/v7)
- React Router DOM
- EmailJS (optional) for form submission
- Vite

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Routes: `/home`, `/about`, `/complaint`.

## Complaint Form: EmailJS (optional)

By default the form uses **mailto** (opens your email client with a pre-filled draft to `suryawanshijatin07@gmail.com`).

To use EmailJS instead, create a `.env` file (see `.env.example`) and set:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Get these from [EmailJS](https://www.emailjs.com/). Your template should accept: `to_email`, `from_name`, `from_email`, `phone`, `message`.

## Project Structure

```
src/
  components/   Header, Footer, CarouselSection, TabsSection, AccordionItem, ComplaintForm, QuickSafetyHacks
  pages/        Home, About, Complaint
  theme/        MUI theme (purple, pink, white)
  data/         staticData.js (all static content)
```

## Build

```bash
npm run build
npm run preview   # preview production build
```

No backend required. All data is static; form uses EmailJS or mailto only.
