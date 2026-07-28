# SFG UI Lab Architecture

## Overview

SFG UI Lab is a growing collection of high-quality, production-ready website sections and reusable UI components built with Next.js, React, Tailwind CSS, Framer Motion, and React Three Fiber.

The goal is to create a library that helps:

- Build client websites faster
- Showcase design and development skills
- Provide inspiration for future projects
- Encourage reusable, maintainable code

Every section should be production-ready and easy to integrate into real websites.

---

# Core Principles

## 1. Reusability First

Before creating something new, ask:

> Can this already be built using existing components?

Examples:

- Use the shared Button component
- Use the shared Container component
- Use shared typography components
- Use reusable Three.js effects

Avoid copying code between sections.

---

## 2. Composition Over Duplication

Sections should be assembled from smaller building blocks.

Example:

Hero

├── Container
├── Heading
├── Text
├── Button
└── Snow Effect

instead of one massive Hero component containing everything.

---

## 3. Data Driven

The gallery should never be hardcoded.

Every section is registered inside the data folder.

Adding a new section should require:

1. Create component
2. Register metadata

Nothing else.

---

## 4. Single Responsibility

Every component should have one clear responsibility.

Good:

Button

Bad:

Button + Modal + Navigation

---

## 5. Mobile First

Every section must work on:

- Mobile
- Tablet
- Desktop

Desktop enhancements should never break mobile layouts.

---

## 6. Accessibility

Whenever possible:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Alt text
- Proper heading hierarchy

---

# Folder Structure

src/

    app/
    components/
    data/
    hooks/
    lib/
    styles/
    types/
    utils/

---

## app/

Contains application routes.

Example

app/

    page.tsx

    sections/

        page.tsx

        [category]/

            page.tsx

            [slug]/

                page.tsx

    playground/

    docs/

---

## components/

Contains all reusable components.

components/

    effects/

    layouts/

    preview/

    sections/

    ui/

---

### sections/

Website sections grouped by category.

sections/

    heroes/

    about/

    services/

    pricing/

    testimonials/

    faq/

    contact/

    footers/

---

### ui/

Reusable design system components.

Examples

Button

Badge

Card

Container

Heading

SectionTitle

Input

Tag

Icon

---

### effects/

Reusable visual effects.

Examples

Snow

Rain

Stars

Aurora

Fog

Fireflies

CameraRig

FloatingParticles

Effects should never depend on a specific section.

---

### layouts/

Reusable layout primitives.

Examples

Centered

Split

Grid

Editorial

FullWidth

---

### preview/

Components used only inside the gallery.

Examples

Preview Card

Section Badge

Category Pill

Preview Controls

---

# Data

The gallery is driven by metadata.

Every section must register itself.

Example

Winter Wonder

Category

Hero

Difficulty

Advanced

Tags

Three.js

Snow

Framer Motion

The component itself should not contain this information.

---

# Naming Convention

Folders

PascalCase

Button/

Snow/

WinterWonder/

Files

PascalCase for components

Button.tsx

Snow.tsx

HeroCentered.tsx

camelCase for utilities

utils.ts

formatDate.ts

kebab-case for routes

winter-wonder

luxury-split

---

# Component Rules

UI components

May never import section components.

Effects

May never import section components.

Sections

May import:

UI

Effects

Layouts

Hooks

Utilities

Never the other way around.

---

# Styling

Primary styling

Tailwind CSS

Conditional classes

cn()

Never concatenate long class strings manually.

Animations

Framer Motion

3D

React Three Fiber

---

# Design Philosophy

Less is more.

Whitespace is a feature.

Animation should support the design, not distract from it.

Every section should feel premium.

---

# Performance

Avoid unnecessary re-renders.

Lazy load heavy components.

Memoize expensive calculations.

Use React Three Fiber responsibly.

Mobile performance matters.

---

# Adding a New Section

Step 1

Create component

components/

sections/

heroes/

HeroMinimal.tsx

Step 2

Register metadata

data/

heroes.ts

Step 3

Preview appears automatically.

No routing changes required.

---

# Future Goals

Sections

- Heroes
- About
- Services
- Pricing
- Testimonials
- FAQ
- Contact
- Footers
- Blog
- Team
- CTA
- Features

Effects

- Snow
- Rain
- Aurora
- Stars
- Fireflies
- Fog
- Floating Particles
- Camera Rig

Layouts

- Split
- Centered
- Editorial
- Grid
- Masonry

Templates

- Agency
- Restaurant
- SaaS
- Photography
- Medical
- Portfolio
- Luxury
- Fitness
- AI Startup

---

# Definition of Done

A section is complete when it is:

✓ Responsive

✓ Accessible

✓ Reusable

✓ Production Ready

✓ Properly documented

✓ Added to the gallery

✓ Registered in metadata

✓ Uses existing UI components whenever possible