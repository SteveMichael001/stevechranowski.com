# Steve Chranowski — Personal Hub & Blog

A calm, minimalist personal website inspired by [wabi.ai](https://wabi.ai). Built with React, TypeScript, and Tailwind CSS.

**Live URL**: https://lovable.dev/projects/92dddec5-513f-4b94-bfd0-b76c343ae476

---

## Features

- ✅ **Hero section** with confident CTAs
- ✅ **Micro-updates stream** (reverse-chron, Twitter/tumblelog style)
- ✅ **Blog system** with featured posts, tags, reading time, clean reading layout
- ✅ **Projects grid** (portfolio showcase)
- ✅ **Events calendar** (upcoming/past)
- ✅ **Contact form** (webhook-ready)
- ✅ **SEO metadata** (Open Graph, Twitter cards)
- ✅ **Mobile-first responsive design**
- ✅ **Sample content** (6 posts, 8 micro-updates, 3 projects, 3 events)

---

## Content Management

All content is editable in **`src/data/siteData.ts`**. This acts as a simple CMS.

### Site Configuration

Edit basic site info:

```typescript
export const siteConfig = {
  site_name: "Steve Chranowski",
  hero_headline: "Doing things. Shamelessly sharing them.",
  about_text: "Your bio here...",
  social_links: [...],
  // ... more fields
};
```

### Adding Blog Posts

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "post-7",
    title: "Your Post Title",
    slug: "your-post-slug",
    date: "2025-10-15T10:00:00Z",
    tags: ["tag1", "tag2"],
    category: "Essays",
    excerpt: "Short summary...",
    body_html: `<p>Your content in HTML...</p>`,
    reading_time: 5,
    published: true,
    featured: false
  },
  // ... existing posts
];
```

### Adding Micro-Updates

```typescript
export const microUpdates: MicroUpdate[] = [
  {
    id: "mu-9",
    text: "Your short update here...",
    date: "2025-10-15T14:30:00Z",
    tags: ["tag"],
    published: true
  },
  // ... existing updates
];
```

### Adding Projects

```typescript
export const projects: Project[] = [
  {
    id: "proj-4",
    title: "New Project",
    slug: "new-project",
    excerpt: "Short description...",
    link: "https://project-url.com",
    featured: true,
    tags: ["tag1", "tag2"]
  },
  // ... existing projects
];
```

### Adding Events

```typescript
export const events: Event[] = [
  {
    id: "evt-4",
    date: "2025-12-01T19:00:00Z",
    title: "Event Title",
    location: "San Diego",
    link: "https://event-link.com",
    past: false
  },
  // ... existing events
];
```

---

## Design System

Defined in `src/index.css` and `tailwind.config.ts`:

**Colors:**
- Background: `#FBFBFB` (off-white)
- Foreground: `#0F1720` (charcoal)
- Accent: `#0EA5A4` (teal)

**Typography:**
- UI: Inter Variable
- Longform reading: Georgia serif

**Layout:**
- Max content width: 1100px
- Reading width: 780px
- Mobile-first breakpoints: 420, 768, 1024, 1440px

---

## SEO & Metadata

Edit meta tags in `index.html`:

```html
<title>Steve Chranowski — Doing things. Shamelessly sharing them.</title>
<meta name="description" content="..." />
<meta property="og:image" content="YOUR_IMAGE_URL" />
```

Each blog post automatically includes:
- Reading time calculation
- Social share functionality
- Semantic HTML structure

---

## Webhooks & Integrations

### Contact Form

Set webhook URL in `siteData.ts`:

```typescript
contact_form_webhook_url: "https://your-webhook-url.com"
```

### Analytics

Add Google Analytics ID:

```typescript
ga_measurement_id: "G-XXXXXXXXXX"
```

---

## Publishing Workflow

1. **Edit content** in `src/data/siteData.ts`
2. **Preview changes** in Lovable (auto-updates)
3. **Deploy** by clicking "Publish" in Lovable UI

---

## Exporting & Hosting

This project can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static host

Build command: `npm run build`  
Output directory: `dist/`

---

## File Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── MicroUpdates.tsx
│   ├── BlogIndex.tsx
│   ├── Projects.tsx
│   ├── Events.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── siteData.ts     # ← EDIT THIS for content
├── pages/
│   ├── Index.tsx       # Main hub page
│   ├── BlogPost.tsx    # Individual post template
│   └── NotFound.tsx
├── index.css           # Design system
└── App.tsx             # Routes
```

---

## Customization Tips

### Change Colors

Edit `src/index.css`:

```css
:root {
  --background: 0 0% 98.4%;
  --foreground: 210 65% 8%;
  --accent: 179 93% 34%; /* Change this */
}
```

### Add Drop Cap to Posts

Add `drop-cap` class to first paragraph:

```html
<p class="drop-cap">First paragraph with fancy drop cap...</p>
```

### Swap Hero Image

Replace the placeholder div in `src/components/Hero.tsx` with:

```tsx
<img 
  src="/path/to/your-image.jpg" 
  alt="Steve Chranowski"
  className="w-full h-full object-cover"
/>
```

---

## Next Steps

- Replace hero image placeholder with your photo
- Add featured images to blog posts
- Customize color scheme
- Connect contact form webhook
- Add analytics tracking
- Export to static host

---

## Tech Stack

- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **shadcn/ui** (components)
- **Lucide React** (icons)
- **date-fns** (date formatting)
- **React Router** (navigation)

---

## Support

Questions? Feedback? [Open an issue](https://lovable.dev/projects/92dddec5-513f-4b94-bfd0-b76c343ae476) or email steve@example.com.

Built with [Lovable](https://lovable.dev) ❤️
