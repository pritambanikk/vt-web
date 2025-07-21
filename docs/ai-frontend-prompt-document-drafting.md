# AI Frontend Generation Prompt: Document Drafting Landing Page

## High-Level Goal
Create a responsive, user-centric Document Drafting service landing page for Vakil Tech that showcases legal document creation services with a warm, approachable "desi touch" brand voice and clear call-to-action for lead generation.

## Detailed, Step-by-Step Instructions

### 1. Project Context & Tech Stack Setup
- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS v4 (no config file required)
- **Component Library**: shadcn/ui components for consistency
- **File Location**: Create `src/app/document-drafting/page.tsx`
- **Component Location**: Create `src/components/features/landing-pages/document-drafting-landing.tsx`

### 2. Page Structure Implementation
1. Create the main page component that imports and renders the landing page component
2. Ensure the page inherits the shared layout with header and footer from `src/app/layout.tsx`
3. Implement the following sections in order:
   - Hero section with compelling headline and service overview
   - Service details with feature breakdown
   - Pricing information
   - Benefits and value proposition
   - Call-to-action section

### 3. Hero Section Design
1. Create a hero section with:
   - Main headline: "Professional Legal Document Drafting"
   - Subheadline: "Employment contracts, partnership deeds, and business agreements crafted by expert legal professionals"
   - Starting price display: "Starting from ₹2,999"
   - Primary CTA button: "Draft Document" (placeholder for lead form)
   - Background: Warm off-white/cream with subtle red accents

### 4. Service Details Section
1. Create a features grid showcasing:
   - **Employment Contracts**: Professional agreements for hiring and employment
   - **Partnership Deeds**: Legal documentation for business partnerships
   - **Business Agreements**: Comprehensive commercial contracts
2. Each feature should include:
   - Icon or visual element
   - Feature title
   - Brief description
   - Benefit statement

### 5. Pricing & Value Proposition
1. Display pricing prominently: "Starting from ₹2,999"
2. Include value propositions:
   - Expert legal professionals
   - Customized to your business needs
   - Legally compliant and enforceable
   - Fast turnaround time
   - Ongoing support and revisions

### 6. Call-to-Action Implementation
1. Create a prominent CTA section with:
   - Compelling copy about getting started
   - "Draft Document" button (placeholder for lead form integration)
   - Secondary CTA for consultation or more information
2. Ensure the CTA stands out visually with red accent colors

### 7. Responsive Design Implementation
1. **Mobile-First Approach**: Design for mobile screens first (320px+)
2. **Tablet Adaptation**: Optimize for tablet screens (768px+)
3. **Desktop Enhancement**: Full desktop experience (1024px+)
4. **Breakpoints**: Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)

### 8. Branding & Visual Design
1. **Color Palette**:
   - Primary: Warm off-white/cream backgrounds
   - Accent: Red (#DC2626 or similar) for CTAs and highlights
   - Text: Dark gray for readability
   - Subtle shadows and borders for depth
2. **Typography**: Use system fonts with proper hierarchy
3. **Spacing**: Consistent padding and margins using Tailwind spacing scale
4. **"Desi Touch"**: Warm, approachable tone in copy and visual elements

## Code Examples, Data Structures & Constraints

### Existing Component Structure
```typescript
// Follow the pattern from existing homepage components
// src/components/features/homepage/services-overview.tsx
// Use similar structure and styling patterns
```

### Required Imports
```typescript
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// Add other shadcn/ui components as needed
```

### Component Structure
```typescript
// Main page component
export default function DocumentDraftingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <DocumentDraftingLanding />
    </main>
  )
}

// Landing page component
export function DocumentDraftingLanding() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      {/* Service Details */}
      {/* Pricing */}
      {/* CTA Section */}
    </div>
  )
}
```

### DO NOT Include
- Complex animations or interactions (keep it simple)
- External API calls or data fetching
- Form functionality (this will be added in future stories)
- Complex state management
- Custom CSS (use Tailwind classes only)

## Define a Strict Scope

### Files to Create/Modify
- `src/app/document-drafting/page.tsx` (new file)
- `src/components/features/landing-pages/document-drafting-landing.tsx` (new file)

### Files to Leave Untouched
- `src/app/layout.tsx` (already contains header/footer)
- `src/components/ui/` (shadcn/ui components)
- `src/app/globals.css` (global styles)
- Any existing homepage components
- Any other service landing pages

### Content Requirements
- All content should be static and hardcoded
- Focus on the four main document types: Employment Contracts, Partnership Deeds, Business Agreements
- Pricing: "Starting from ₹2,999"
- CTA: "Draft Document" button
- Maintain consistency with homepage design and branding

### Accessibility Requirements
- Proper heading hierarchy (h1, h2, h3)
- Alt text for any images or icons
- Sufficient color contrast (WCAG AA standards)
- Keyboard navigation support
- Screen reader friendly structure

### Performance Considerations
- Use semantic HTML elements
- Optimize images if any are included
- Minimize JavaScript complexity
- Ensure fast loading with static content

## Success Criteria
- Page loads successfully at `/document-drafting`
- Responsive design works across mobile, tablet, and desktop
- Consistent branding with homepage
- Clear call-to-action for lead generation
- Accessible design meeting WCAG AA standards
- Clean, professional appearance with "desi touch" warmth

---

**Important Note**: This AI-generated code will require careful human review, testing, and refinement to be considered production-ready. Pay special attention to accessibility, responsive behavior, and brand consistency during implementation. 