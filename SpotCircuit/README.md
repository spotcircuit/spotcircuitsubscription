# SpotCircuit Project

SpotCircuit is a collection of specialized landing pages and tools for various industry-specific offers. The project is built with Next.js and includes auxiliary tools like an image finder utility.

## Project Structure

```
spotcircuit/
├── ecommerce-offers/           # E-commerce industry offers
│   └── shopify_offer/         # Shopify SEO + AEO Mastery Package
│       ├── components/        # React components
│       │   ├── Header.tsx    # Navigation and header
│       │   ├── Hero.tsx      # Hero section
│       │   ├── Problem.tsx   # Problem and solutions
│       │   ├── Services.tsx  # Services offered
│       │   ├── FAQ.tsx       # FAQ section
│       │   ├── Booking.tsx   # Consultation booking
│       │   └── Footer.tsx    # Footer section
│       ├── pages/            # Next.js pages
│       ├── public/           # Static assets
│       │   └── static/       # Images and media
│       └── styles/           # CSS and styling
├── components/                # Shared components
├── styles/                   # Global styles
└── utils/                    # Shared utilities
```

## Features Checklist

### v1.0 - Initial Release
- [x] Basic landing page structure
- [x] Hero section with main value proposition
- [x] Problem section highlighting pain points
- [x] Comprehensive solutions section
- [x] Case studies showcase
- [x] FAQ section
- [x] Booking/consultation form
- [x] Responsive design

### v1.1 - Navigation Update
- [x] SpotCircuit logo in header and footer
- [x] Navigation links to all sections:
  - [x] The Problem -> #problem-section
  - [x] Results -> #real-results
  - [x] How It Works -> #six-steps
  - [x] Case Studies -> #case-studies
  - [x] FAQ -> #faq
  - [x] Contact -> #booking
- [x] Smooth scrolling to sections
- [x] Mobile-responsive navigation

## Development Environment

### Prerequisites
- Node.js 18+
- npm or yarn

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Git Repository Structure

The repository includes:
- All source code
- Images and media files in `/public/static/images/`
- Component-specific styles
- Configuration files
- Documentation

## Version History

### v1.1
- Added proper section IDs for navigation
- Updated navigation menu with correct links
- Added FAQ section to navigation
- Added booking section wrapper
- Fixed case studies section link
- Ensured all navigation items point to correct sections

### v1.0
- Initial release with basic landing page structure
- All core sections implemented
- Responsive design
- Basic navigation

## Landing Page Components

Each landing page should include these essential components:

### 1. Hero Section
- Visually striking design
- High-quality industry-specific imagery
- Clear value proposition
- Compelling headline and subheadline
- Primary call-to-action

### 2. Problem/Solution Statement
- Industry-specific challenges
- Clear solution presentation
- Persuasive language
- Relevant statistics
- Key pain points addressed

### 3. Unique Selling Proposition (USP)
- Key differentiators
- Proprietary technology highlights
- Industry expertise showcase
- Competitive advantages
- Feature highlights

### 4. Benefits Section
- Visual benefit cards/blocks
- Custom icons
- Tangible outcomes
- Metrics and data points
- Clear value demonstration

### 5. Social Proof
- Client testimonials
- Success metrics
- Client logos
- Case studies
- Industry recognition

### 6. Trust Elements
- Industry certifications
- Experience highlights
- Partnership logos
- Achievement badges
- Security features

### 7. FAQ Section
- Common questions
- Clear answers
- Searchable interface
- Topic grouping
- Mobile-optimized layout

## Technical Implementation Checklist

### Performance
- [ ] Optimize image loading
- [ ] Implement lazy loading
- [ ] Minimize bundle size
- [ ] Enable caching
- [ ] Monitor load times

### Responsiveness
- [ ] Mobile-first approach
- [ ] Tablet optimization
- [ ] Desktop enhancement
- [ ] Cross-browser testing
- [ ] Touch interface support

### Analytics
- [ ] Event tracking
- [ ] Conversion monitoring
- [ ] User behavior analysis
- [ ] A/B testing setup
- [ ] Performance metrics

### Security
- [ ] Form validation
- [ ] Data encryption
- [ ] API protection
- [ ] Error handling
- [ ] Privacy compliance

## Tools and Utilities

### Image Finder Tool
Located in `medical_spa_offers/aeo_offer/utils/image_finder_web.py`
- Searches Pixabay and Pexels APIs
- Downloads and processes images
- Manages categories and sizing
- Automatic optimization
- Metadata management

### Component Library
Located in `components/ui/`
- Button
- Card
- Accordion
- Form elements
- Navigation components

## Contributing

1. Keep industry-specific code in respective directories
2. Reuse shared components when possible
3. Follow the established project structure
4. Document any new utilities or tools
5. Maintain consistent coding standards

## Environment Variables

Create a `.env.local` file with:
```env
PIXABAY_API_KEY=your_key_here
PEXELS_API_KEY=your_key_here
```

## Quality Assurance

Before deploying any landing page:
1. Test all interactive elements
2. Verify form submissions
3. Check analytics integration
4. Validate responsive design
5. Review content accuracy
6. Test load performance
7. Verify SEO elements
8. Check accessibility
9. Cross-browser testing
10. Security validation

## Notes

- This project runs independently on port 3800 to avoid conflicts
- Each offer can have its own specific requirements and tools
- The project uses Tailwind CSS for styling
- TypeScript is used throughout the project
- Regular maintenance and updates are scheduled
