import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portfolioDir = path.join(__dirname, '../src/content/portfolio');

const dummyData = {
    'wedding-invitation-template.md': `---
title: "Wedding Invitation Template"
description: "Clean, elegant wedding invitation template with a modern minimalist design, featuring delicate typography and soft floral accents."
image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop"
category: "Designer at Swana"
canva_link: "https://canva.com"
order: 1
layout_template: "bento"
gallery:
  - "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1510076857176-7cefa3ac81eb?q=80&w=1471&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1327&auto=format&fit=crop"
---

## Project Overview

This **Wedding Invitation Template** was designed with elegance and minimalism in mind. The goal was to create a versatile layout that couples can easily customize while maintaining a premium look.

### The Challenge

Couples often struggle to find templates that feel luxurious without being overly cluttered. Our objective was to balance generous white space with beautiful typography.

### Design Approach

1. **Typography First:** Selected a classic serif font paired with a clean sans-serif for readability.
2. **Subtle Accents:** Added a muted floral motif that doesn't overpower the text.
...`,
    'bridal-shower-card.md': `---
title: "Bridal Shower Card"
description: "Beautifully crafted bridal shower invitation card with floral motifs and pastel watercolor textures."
image: "https://images.unsplash.com/photo-1518002054494-3a6f943e57d0?q=80&w=1287&auto=format&fit=crop"
category: "Designer at Swana"
canva_link: "https://canva.com"
order: 2
layout_template: "basic"
---

## A Touch of Spring

The Bridal Shower Card project was an exploration of soft dynamics. We used a custom watercolor technique to create a background that feels painted and deeply personal.

### Key Features
- **Print-Ready:** Configured with CMYK colors and bleed margins for professional printing.
- **Customizable:** Fully editable in Canva, allowing users to swap out floral corners based on their seasonal theme.
- **Friendly Tone:** The typography conveys warmth and excitement, suitable for close friends and family gatherings.

It has become one of our best-selling templates on the platform!
`,
    'save-the-date-template.md': `---
title: "Save The Date Template"
description: "Romantic save-the-date template with a soft color palette and a dedicated space for a couple's portrait."
image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1470&auto=format&fit=crop"
category: "Designer at Swana"
canva_link: "https://canva.com"
order: 3
layout_template: "basic"
---

## Preserving The Moment

A "Save the Date" is often the first glimpse guests get of a wedding's aesthetic. This layout focuses on highlighting a beautiful, candid photograph of the couple.

### Typography & Layout
By employing a bold but elegant script font for the headline, the design instantly feels celebratory. The rest of the necessary information (Date, Location, Website) is kept minimal and sans-serif so the focus remains entirely on the photograph.

Perfect for couples who want their love story to take center stage.
`,
    'umrah-promo-social-media.md': `---
title: "Umrah Promo Social Media"
description: "Engaging feed post design for travel agency social media campaigns focusing on spiritual journeys."
image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1374&auto=format&fit=crop"
category: "Designer at Elhaqq"
canva_link: "https://canva.com"
order: 4
layout_template: "bento"
gallery:
  - "https://images.unsplash.com/photo-1564769662533-4f00a87b4156?q=80&w=1454&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1579450841285-d8ae0a8af0fe?q=80&w=1443&auto=format&fit=crop"
---

## Digital Campaign Context

For Elhaqq Tour & Travel, social media presence is paramount. This Instagram feed promo was designed to capture attention while maintaining a respectful and spiritual undertone appropriate for Umrah packages.

### Design Principles

1. **High Contrast:** Used deep greens and rich gold to signify premium service and Islamic heritage.
2. **Clear Value Proposition:** Price and package inclusions are the most prominent text elements after the headline.
3. **Emotional Imagery:** Incorporated high-quality, inspiring imagery of the Kaaba at twilight to evoke a sense of longing and peace.

### Results
This template format increased click-through rates on Instagram ads by **45%** over the previous quarter, proving that clarity combined with emotional resonance drives engagement.
`,
    'travel-package-brochure.md': `---
title: "Travel Package Brochure"
description: "Professional multi-page brochure layout for Hajj & Umrah travel packages, detailing itineraries and accommodations."
image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e27f5?q=80&w=1471&auto=format&fit=crop"
category: "Designer at Elhaqq"
canva_link: "https://canva.com"
order: 5
layout_template: "basic"
---

## Comprehensive Information Design

Brochures for travel agencies need to pack a tremendous amount of logistical information without overwhelming the reader. 

### Structuring the Content
We utilized a strict grid system to organize:
- Day-by-day itineraries
- Flight details
- Hotel accommodations (Makkah & Madinah)
- Pricing tiers

By using distinct iconography for amenities (Wi-Fi, Meals, Transport), we reduced text clutter.

### The Final Output
The final deliverable was a 12-page premium booklet printed on matte-finish paper, providing prospective pilgrims with a tangible, high-quality guide to their upcoming journey.
`,
    'instagram-story-template.md': `---
title: "Instagram Story Template"
description: "Eye-catching Instagram story template featuring smooth animations for flash sales and travel promotions."
image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1374&auto=format&fit=crop"
category: "Designer at Elhaqq"
canva_link: "https://canva.com"
order: 6
layout_template: "side-by-side"
---

## Capturing Attention in Seconds

Instagram Stories are fleeting. To make an impact, the design needs to be instantly recognizable and guide the user's eye to the "Swipe Up" or "Link in Bio" action.

### Key Elements
- **Vertical Optimization:** Designed exclusively for a 9:16 aspect ratio.
- **Negative Space:** Left strategic room at the top and bottom to ensure UI elements (like the Instagram handle or reply box) don't cover critical info.
- **Bold Call-to-Action:** Used contrasting accent colors for the "Book Now" buttons to drive conversions.

This template is fully modular, allowing the marketing team to swap images and text swiftly for daily updates.
`
};

console.log('Resetting dummy data...');

if (!fs.existsSync(portfolioDir)) {
    fs.mkdirSync(portfolioDir, { recursive: true });
}

// Clear existing markdown files in that directory
const files = fs.readdirSync(portfolioDir);
for (const file of files) {
    if (file.endsWith('.md')) {
        fs.unlinkSync(path.join(portfolioDir, file));
    }
}

// Write the original dummy data
for (const [filename, content] of Object.entries(dummyData)) {
    fs.writeFileSync(path.join(portfolioDir, filename), content);
    console.log(`Created ${filename}`);
}

console.log('Dummy data has been successfully reset!');
