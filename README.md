# Steve Chranowski — Personal Hub & Blog

A calm, minimalist personal website. Built with React, TypeScript, and Tailwind CSS.

**Live URL**: https://stevechranowski.com

---

## Hosting Stack

- **Domain & DNS**: Cloudflare
- **Hosting**: Vercel
- **Source Control**: GitHub
- **Development**: Lovable (visual editor) + Claude Code (AI pair programming)

---

## Features

- ✅ **Hero section** with confident CTAs
- ✅ **Micro-updates stream** (reverse-chron, Twitter/tumblelog style)
- ✅ **Blog system** with featured posts, tags, reading time, clean reading layout
- ✅ **Projects grid** (portfolio showcase)
- ✅ **YouTube feed** (pulls latest videos from playlist)
- ✅ **Events calendar** (upcoming/past)
- ✅ **Contact links** (email, social)
- ✅ **SEO metadata** (Open Graph, Twitter cards)
- ✅ **Mobile-first responsive design**

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

## Environment Variables

Required in `.env`:

```
VITE_YOUTUBE_API_KEY=your_youtube_api_key
```

Optional (not currently used):
```
contact_form_webhook_url (set in siteData.ts if you want form submissions)
ga_measurement_id (set in siteData.ts for Google Analytics)
```

---

## Publishing Workflow

1. **Edit content** in `src/data/siteData.ts`
2. **Commit & push** to GitHub
3. **Vercel auto-deploys** from main branch

Alternative (visual editing):
1. Open project in Lovable
2. Make changes visually
3. Lovable commits to GitHub → Vercel deploys

---

## Local Development

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

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
│   ├── YouTubeFeed.tsx
│   ├── Events.tsx
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

## Tech Stack

- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **shadcn/ui** (components)
- **Lucide React** (icons)
- **date-fns** (date formatting)
- **React Router** (navigation)

---

## Contact

Email: stevenchranowski3@gmail.com

Built with [Lovable](https://lovable.dev) + [Claude Code](https://claude.ai/code)
