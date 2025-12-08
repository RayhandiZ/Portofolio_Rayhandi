# Design Guidelines: Rayhandi Zulmi Portfolio

## Design Approach
**Reference-Based Approach**: Inspired by modern developer portfolios like those seen on Awwwards and contemporary tech portfolios (Linear, Vercel, GitHub profiles). The design balances technical sophistication with visual elegance, emphasizing interactivity and smooth user experience.

**Design Principles**:
- Dynamic yet purposeful: Interactive elements that enhance understanding, not distract
- Technical sophistication: Clean, modern aesthetic reflecting SI/tech expertise
- Content-first hierarchy: Skills and projects take center stage
- Fluid interactions: Smooth transitions between sections

## Color Scheme
Per user request: Dark mode theme with blue/purple gradients representing the Sistem Informasi field.

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Inter' - Clean, modern sans-serif for body text and UI
- Accent: 'Space Grotesk' - Technical, geometric feel for headings and emphasis

**Hierarchy**:
- Hero Title: Space Grotesk, bold weight, 3xl-5xl responsive
- Section Headings: Space Grotesk, semibold, 2xl-4xl responsive
- Subheadings: Inter, semibold, xl-2xl
- Body Text: Inter, regular, base-lg
- Labels/Captions: Inter, medium, sm-base

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Micro spacing (gaps, padding): 4, 6
- Component spacing: 8, 12
- Section padding: 16, 20, 24

**Grid Structure**:
- Container: max-w-7xl with px-6 for comfortable reading
- Responsive breakpoints: Mobile-first, utilizing md: and lg: variants

## Component Library

### Navigation
- Fixed/sticky header with blur backdrop
- Logo/name on left, navigation links center/right
- Smooth scroll navigation to sections
- Mobile: Hamburger menu with slide-in overlay

### Hero Section
**Layout**: Full viewport (80-90vh), centered content with offset photo
- Profile photo: Rounded or geometric frame, positioned asymmetrically (right side or offset)
- Name: Large, bold typography with gradient text treatment
- Role/Title: Animated typewriter effect showing "Full-stack Developer | Data Analyst | Data Engineer"
- CTA buttons: Primary "View Projects" + Secondary "Contact Me" with gap-4
- Scroll indicator: Subtle animated arrow/icon

**Images**: Hero profile photo - professional headshot with technical/modern backdrop or abstract tech-themed background

### About Me Section
**Layout**: Two-column on desktop (40/60 split), stacked on mobile
- Left: Extended bio text, education, approach to work
- Right: Interactive skill visualization
- Skill Bars: Animated progress indicators for:
  - Full-stack Development
  - Data Analysis  
  - Data Engineering
  - Database Management
- Each skill: Icon + label + animated percentage bar

### Services Section
**Layout**: 4-column grid (lg), 2-column (md), 1-column (mobile)
- Service Cards with hover lift effect:
  1. Full-stack Development (icon: code brackets)
  2. Data Analytics (icon: chart/graph)
  3. Data Engineering (icon: pipeline/flow)
  4. Database Design (icon: database cylinder)
- Each card: Large icon, title, 2-3 line description
- Spacing: gap-8 between cards, p-8 internal padding

### Projects Gallery
**Layout**: Grid with category filter tabs
- Filter Pills: "All", "Web Development", "Data Analysis", "Data Engineering", "Database"
- Project Cards: Masonry/grid layout, 3 columns (lg), 2 (md), 1 (mobile)
- Card Structure:
  - Project thumbnail/screenshot
  - Title overlay with gradient backdrop
  - Tech stack tags
  - Brief description on hover
  - "View Details" link
- Hover: Slight scale, shadow enhancement

### Contact Section ("Let's Design Together")
**Layout**: Centered content, max-w-2xl
- Section title with engaging copy
- Contact Form:
  - Full name input
  - Email input
  - Subject/Topic dropdown
  - Message textarea
  - Submit button (full-width on mobile)
- Form spacing: gap-6 between fields
- Social Links: Row of icon buttons below form (LinkedIn, GitHub, Instagram)

### Footer
**Layout**: Simple, centered
- Copyright text
- Quick links (About, Services, Projects, Contact)
- Social icons repeated
- Spacing: py-12

## Interaction Patterns

**Scroll Animations**:
- Fade-in-up for section entries (stagger for multiple items)
- Parallax subtle movement on hero background
- Skill bars animate on scroll into view

**Hover States**:
- Cards: Lift (translateY -4px) + shadow enhancement
- Buttons: Slight scale (1.05) + brightness increase
- Links: Underline slide-in animation

**Transitions**:
- Default: transition-all duration-300 ease-in-out
- Smooth scroll behavior for anchor navigation

## Responsive Behavior

**Mobile (< 768px)**:
- Stack all multi-column layouts to single column
- Navigation collapses to hamburger
- Reduce font sizes by 1-2 steps
- Full-width buttons
- Simplified animations (reduce motion)

**Tablet (768px - 1024px)**:
- 2-column maximum for grids
- Comfortable touch targets (min 44px)

**Desktop (> 1024px)**:
- Full layout capabilities
- Enhanced hover states
- Parallax effects active

## Icon System
**Library**: Heroicons (outline style for most, solid for emphasis)
- Consistent 24px base size, scale to 32px-48px for section icons
- Use sparingly for clarity, not decoration

## Images
- **Hero Section**: Professional headshot of Rayhandi Zulmi, high-quality, modern lighting
- **Optional Background**: Subtle geometric patterns or tech-inspired abstract elements
- **Projects**: Screenshots/mockups of actual project work (8-12 projects recommended)

This design creates a sophisticated, interactive portfolio that showcases technical expertise while maintaining visual elegance and professional credibility.