# Rayhandi Zulmi Portfolio

## Overview
Personal portfolio website for Rayhandi Zulmi, a Sistem Informasi (Information Systems) specialist. The website showcases skills in Full-stack Development, Data Analysis, Data Engineering, and Database Management.

## Current State
- **Status**: MVP Complete
- **Last Updated**: December 2024

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Wouter (routing)
- **Backend**: Express.js, Node.js
- **Styling**: Tailwind CSS with custom animations
- **State Management**: TanStack Query

## Project Architecture

### Frontend Structure
```
client/src/
├── components/
│   ├── Navigation.tsx    # Fixed navbar with smooth scrolling
│   ├── Hero.tsx          # Hero section with typewriter effect
│   ├── About.tsx         # About section with animated skill bars
│   ├── Services.tsx      # Services cards grid
│   ├── Projects.tsx      # Projects gallery with category filters
│   ├── Contact.tsx       # Contact form with validation
│   └── Footer.tsx        # Footer with social links
├── pages/
│   └── home.tsx          # Main portfolio page
├── lib/
│   └── queryClient.ts    # API client configuration
└── App.tsx               # Root component with routing
```

### Backend Structure
```
server/
├── routes.ts             # API endpoints (contact form)
├── storage.ts            # In-memory storage for contact messages
└── index.ts              # Express server setup
```

### Shared
```
shared/
└── schema.ts             # Data models and TypeScript interfaces
```

## Features
1. **Navigation**: Fixed header with smooth scroll navigation, mobile responsive hamburger menu
2. **Hero Section**: Animated typewriter effect showing rotating roles
3. **About Section**: Skill bars with scroll-triggered animations
4. **Services Section**: 4 service cards with hover effects
5. **Projects Gallery**: Filterable project cards by category
6. **Contact Form**: Form with validation and API integration
7. **Footer**: Social links and quick navigation

## Design Theme
- Dark mode with blue/purple gradients
- Space Grotesk font for headings, Inter for body
- Smooth animations and transitions
- Fully responsive design

## API Endpoints
- `POST /api/contact` - Submit contact form message
- `GET /api/contact` - Retrieve contact messages

## User Preferences
- Dark theme preferred
- Professional and modern aesthetic
- Smooth animations and interactions
- Focus on SI (Sistem Informasi) field

## Running the Project
```bash
npm run dev
```
The application runs on port 5000.
