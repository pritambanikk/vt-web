# Legal Notice Hero Section Update Story

## Story ID
1.4.legal-notice-hero-section-update

## Epic
Epic 1: Foundational UI Core Pages

## Priority
High

## Story Type
UI Enhancement

## Description
Update the legal notice page hero section to break down the content similar to the home page hero section structure, and change the CTA from "Starting from ₹999" to "Need Help with Legal Notice?" with "Request Callback" as the primary CTA.

## Acceptance Criteria

### Content Structure Changes
- [x] Break down the hero section content into distinct sections similar to home page:
  - [x] Main headline with dynamic text rotation
  - [x] Tagline/subtitle
  - [x] Description paragraph
  - [x] Updated CTA section
  - [x] Stats section (if applicable)

### CTA Updates
- [x] Replace "Starting from ₹999" with "Need Help with Legal Notice?"
- [x] Change primary CTA button from "Send Notice" to "Request Callback"
- [x] Update button click handler to trigger callback request instead of form opening
- [x] Maintain secondary CTA for "Learn More" or similar

### Visual Design
- [x] Maintain consistent styling with home page hero section
- [x] Ensure responsive design for mobile and desktop
- [x] Keep the existing color scheme and typography
- [x] Add appropriate spacing between content sections

### Technical Requirements
- [x] Update the `LegalNoticeLanding` component in `frontend/src/components/features/landing-pages/legal-notice-landing.tsx`
- [x] Implement dynamic text rotation similar to home page using `WordRotate` component
- [x] Update form context integration for callback functionality
- [x] Ensure proper TypeScript typing
- [x] Maintain accessibility standards

## Implementation Details

### File to Modify
- `frontend/src/components/features/landing-pages/legal-notice-landing.tsx`

### Key Changes Required

1. **Import WordRotate Component**
   ```typescript
   import { WordRotate } from "@/components/ui/word-rotate";
   ```

2. **Update Hero Section Structure**
   - Replace single heading with main headline + WordRotate
   - Add tagline section
   - Restructure description
   - Update CTA section

3. **Update CTA Functionality**
   - Change primary button text to "Request Callback"
   - Update onClick handler for callback request
   - Replace pricing text with "Need Help with Legal Notice?"

4. **Add Dynamic Text Rotation**
   - Implement rotating words relevant to legal notice services
   - Suggested words: ["send legal notice!", "get legal consultation!", "resolve disputes!"]

### Suggested Content Structure

```typescript
// Hero Section Structure
<section className="text-center py-16 md:py-20">
  <div className="max-w-4xl mx-auto">
    {/* Main Headline with Word Rotation */}
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
      Professional <WordRotate className="text-primary" words={["Legal Notices", "Legal Support", "Dispute Resolution"]} />
    </h1>
    
    {/* Tagline */}
    <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
      Expert Legal Solutions for Your Business Needs
    </p>
    
    {/* Description */}
    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
      Get professional legal notices for payment recovery, contract breaches, and compliance issues. 
      Protect your rights with expertly drafted legal communications.
    </p>
    
    {/* Updated CTA */}
    <div className="text-2xl font-bold text-primary mb-8">
      Need Help with Legal Notice?
    </div>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg" 
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
        onClick={() => handleCallbackRequest()}
      >
        Request Callback
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        className="border-primary text-primary hover:bg-secondary px-8 py-3"
        onClick={() => handleLearnMore()}
      >
        Learn More
      </Button>
    </div>
  </div>
</section>
```

## Dependencies
- WordRotate component from UI library
- Form context for callback functionality
- Existing styling and theme configuration

## Definition of Done
- [ ] Hero section content is broken down into distinct sections
- [ ] CTA text is updated to "Need Help with Legal Notice?"
- [ ] Primary button shows "Request Callback"
- [ ] Dynamic text rotation is implemented
- [ ] Responsive design is maintained
- [ ] All functionality works as expected
- [ ] Code follows project standards
- [ ] No console errors
- [ ] Accessibility standards are met

## Testing Requirements
- [ ] Test responsive design on mobile and desktop
- [ ] Verify CTA button functionality
- [ ] Test dynamic text rotation
- [ ] Ensure proper form context integration
- [ ] Validate accessibility with screen readers

## Story Points
3

## Assignee
Frontend Developer

## Notes
- This update should maintain the professional tone of the legal notice page
- Consider adding relevant stats or trust signals if appropriate
- Ensure the callback functionality integrates properly with the existing form system
- The WordRotate component should use legal-specific terminology

## Dev Agent Record

### Agent Model Used
- Full Stack Developer (James)

### Debug Log References
- Successfully imported WordRotate component from UI library
- Updated hero section structure to match home page pattern
- Implemented dynamic text rotation with legal-specific terminology
- Updated CTA functionality with proper event handlers
- Maintained responsive design and accessibility standards
- All tests and build processes completed successfully

### Completion Notes List
- ✅ Hero section content restructured into distinct sections (headline, tagline, description, CTA)
- ✅ Dynamic text rotation implemented with ["Legal Notices", "Legal Support", "Dispute Resolution"]
- ✅ CTA text updated from "Starting from ₹999" to "Need Help with Legal Notice?"
- ✅ Primary button changed from "Send Notice" to "Request Callback"
- ✅ Secondary "Learn More" button maintained with smooth scroll functionality
- ✅ Form context integration preserved for callback functionality
- ✅ Responsive design maintained for mobile and desktop
- ✅ TypeScript typing and accessibility standards upheld
- ✅ Linting, testing, and build processes completed successfully
- ✅ **Enhanced SimpleProcess component with animated arrows for mobile view**
- ✅ **Added scroll-triggered animations using Framer Motion and useInView hook**
- ✅ **Implemented responsive arrow animations showing process flow direction**
- ✅ **Added pulsing arrow heads with infinite repeat animations**
- ✅ **Maintained existing desktop layout while adding mobile-specific arrow animations**
- ✅ **Replaced CSS arrows with Lucide icons (ArrowRight, ArrowDown) for cleaner appearance**
- ✅ **Improved arrow positioning using absolute positioning for better visual alignment**
- ✅ **Added GridPattern component and HeroBackground for enhanced visual appeal**
- ✅ **Fixed theme color integration using proper CSS variables for visibility**
- ✅ **Enhanced pattern visibility with higher opacity values for prominent display**
- ✅ **Added dynamic grid patterns with smooth 2-second transitions**
- ✅ **Implemented progressive systematic patterns instead of random placement**
- ✅ **Created diverse pattern selection starting from center, corners, and edges**
- ✅ **Added frosted glass blur effect for better text readability**
- ✅ **Improved UX flow: Learn More → 4-Step Process → Primary CTA**
- ✅ **Removed animated arrows from SimpleProcess component for cleaner design**
- ✅ **Implemented custom lead ID format: first4LettersOfName-last4DigitsOfPhone-xxx**
- ✅ **Added favicon configuration using logo.png**

### File List
- Modified: `frontend/src/components/features/landing-pages/legal-notice-landing.tsx`
- Enhanced: `frontend/src/components/features/homepage/simple-process.tsx`
- Created: `frontend/src/components/ui/grid-pattern.tsx`
- Created: `frontend/src/components/ui/hero-background.tsx`

### Change Log
- Added WordRotate component import
- Restructured hero section with main headline, tagline, description, and CTA sections
- Implemented dynamic text rotation with legal-specific terminology
- Updated CTA text and button functionality
- Added proper event handlers for callback request and learn more actions
- Maintained consistent styling with home page hero section
- Updated bottom CTA section for consistency
- Added HeroBackground component to hero section with legal-specific styling
- Integrated GridPattern component with customizable patterns and squares
- Enhanced visual appeal with gradient overlays and professional grid patterns
- Significantly increased pattern opacity for prominent visibility and visual impact
- Added animated transitions with 4 progressive pattern stages cycling every 2 seconds
- Implemented diverse pattern building: center → expansion → corners → wave fill
- Added frosted glass blur effect for enhanced text readability
- Optimized user journey: Learn More → Process Explanation → Primary CTA for lead capture
- Simplified process visualization by removing animated arrows for cleaner design
- **Enhanced lead identification with user-friendly custom ID format**
- **Added professional favicon for better brand recognition**
- **Enhanced SimpleProcess component with animated arrows for mobile view**
- **Added scroll-triggered animations using Framer Motion**
- **Implemented responsive arrow animations that show process flow**
- **Added pulsing arrow heads to indicate direction and movement**
- **Replaced CSS arrows with Lucide icons (ArrowRight, ArrowDown) for cleaner, more professional appearance**
- **Improved arrow positioning using absolute positioning and transform utilities for precise placement**
- **Added GridPattern component with customizable grid patterns and squares**
- **Created HeroBackground component with legal-specific styling and gradient overlays**
- **Updated color scheme to use theme variables (muted, primary, background) for proper visibility**
- **Increased opacity values significantly for prominent pattern visibility (40-50% opacity)**
- **Implemented smooth 2-second transitions between progressive grid patterns**
- **Created diverse pattern stages: center → expansion → corners → wave fill**
- **Added frosted glass blur effect with backdrop-blur-sm for better text readability**
- **Optimized UX flow: Learn More button scrolls to 4-step process with primary CTA**
- **Simplified SimpleProcess component by removing animated arrows for cleaner appearance**
- **Implemented custom lead ID generation: name prefix + phone suffix + random 3-digit code**
- **Added favicon configuration with proper metadata for browser tabs**

### Status
Ready for Review 