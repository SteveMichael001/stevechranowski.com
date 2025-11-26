# Project Status & Progress Log

**Last Updated:** November 24, 2025
**Project:** notebook-hub-stream (Personal Website)
**Owner:** Steve Chranowski
**Domain:** stevechranowski.com (registered on Cloudflare)

---

## 🎯 Project Overview

Personal website/blog built with React + TypeScript + Vite, deployed on Vercel with 2-way sync to Lovable and GitHub.

**Live Site:** [Your Vercel URL]
**GitHub Repo:** https://github.com/SteveMichael001/notebook-hub-stream
**Lovable Project:** [Your Lovable project URL]

---

## ✅ Completed Tasks

### 1. GitHub Integration
- ✅ Connected Lovable project to GitHub repository
- ✅ Set up 2-way sync (Lovable ↔️ GitHub)
- ✅ Cloned repository locally to `/Users/stevenchranowski/AI-Workspace/Apps/notebook-hub-stream`

### 2. Code Simplification
- ✅ Removed 120+ lines of dead Twitter integration code from MicroUpdates.tsx
- ✅ Simplified MicroUpdates from carousel to vertical list (185 lines → 76 lines)
- ✅ Removed twitter_config from siteData.ts
- ✅ Simplified Footer from 3 columns to 2 columns
- ✅ Fixed Contact form with honest "demo mode" disclaimer

### 3. Header & UI Improvements
- ✅ Added Header component with "SC" logo and hamburger menu (created in Lovable, synced via GitHub)
- ✅ Fixed footer link spacing (changed from inline-block to flex column layout)

### 4. Content Updates
- ✅ **Blog Post 1:** "An Ode to Discipline" - Real personal content about discipline and commitment
- ✅ **Blog Post 2:** "Building in Public" - Kept as example
- ✅ **Blog Post 3:** "The Great Rate Hike" - FedEx/UPS shipping insights (replaced AI productivity post)

### 5. Social Links & Contact Info
- ✅ Fixed LinkedIn URL: `https://www.linkedin.com/in/stevenchranowski/`
- ✅ Fixed Instagram URL: `https://www.instagram.com/stevemichael.001/`
- ✅ Updated email to: `stevenchranowski3@gmail.com`
- ✅ Applied changes across Footer.tsx, Contact.tsx, and siteData.ts

### 6. Vercel Deployment
- ✅ Created Vercel account
- ✅ Connected GitHub to Vercel
- ✅ Imported notebook-hub-stream repository
- ✅ Fixed dependency conflict (downgraded date-fns from 4.1.0 to 3.6.0)
- ✅ Successfully deployed to production
- ✅ Set up automatic deployments on git push

### 7. YouTube Bento Box Integration (November 23-24, 2025)
- ✅ Investigated version sync across Local/GitHub/Vercel/Lovable platforms
- ✅ Attempted Twitter feed integration (pivoted due to account limitations)
- ✅ **YouTube Data API v3 Setup:**
  - Created Google Cloud project "Personal Website"
  - Generated API key: Secured in environment variables
  - Enabled YouTube Data API v3
  - Learned OAuth vs API keys (educational deep-dive)
- ✅ **Built YouTubeFeed Component:**
  - Fetches playlist items via YouTube Data API
  - Displays 3 equal-sized video cards in bento box layout
  - Horizontal scroll for additional videos
  - Hover effects with play button overlays
  - Auto-updates when playlist changes (on page load)
  - Loading and error states with fallbacks
- ✅ **Security Implementation:**
  - API key stored in `.env` file (local)
  - Added `.env` to `.gitignore`
  - Configured `VITE_YOUTUBE_API_KEY` in Vercel environment variables
  - All environments (Production, Preview, Development)
- ✅ **Playlist:** `PLFRRQCWz9XkBc-oeOwBak5NulA0wpXt1y`
- ✅ Deployed to production with full functionality

### 8. Content Cleanup
- ✅ Removed "Building in Public" blog post from siteData.ts
- ✅ Now showing 2 blog posts: "An Ode to Discipline" & "The Great Rate Hike"

### 9. Domain Registration & Setup
- ✅ **Domain Search:** Launched agent to find available domains
  - Target: steve.com, stevemichael.com, stevechranowski.com
  - Researched alternatives across multiple TLDs
  - Compared pricing at Cloudflare, Porkbun, Namecheap
- ✅ **Domain Registered:** stevechranowski.com
  - **Registrar:** Cloudflare
  - **Cost:** $10.62/year (transparent pricing, same renewal)
  - **Features:** Auto-renew enabled, WHOIS privacy included
  - **Status:** Purchased, awaiting DNS configuration
- ⏳ **Next:** Connect domain to Vercel (pending)

---

## 🔧 Technical Details

### Tech Stack
- **Framework:** React 18.3.1
- **Language:** TypeScript 5.8.3
- **Build Tool:** Vite 5.4.19
- **Styling:** Tailwind CSS + shadcn/ui components
- **Package Manager:** npm
- **Deployment:** Vercel (automatic deployment from GitHub)
- **APIs:** YouTube Data API v3
- **Domain:** Cloudflare DNS + Registration

### Key Files & Locations
- **Content Data:** `src/data/siteData.ts` (all blog posts, micro-updates, projects, social links)
- **Components:** `src/components/` (Header, Footer, Contact, YouTubeFeed, etc.)
- **Main Entry:** `src/main.tsx` → `src/App.tsx` → `src/pages/Index.tsx`
- **Routing:** React Router (/, /blog/:slug, /404)
- **Environment:** `.env` (API keys, excluded from Git)
- **TypeScript Types:** `src/vite-env.d.ts` (window extensions, API types)

### Dependency Issue Fixed
**Problem:** npm ERESOLVE conflict between date-fns@4.1.0 and react-day-picker@8.10.1
**Solution:** Downgraded date-fns to 3.6.0 in package.json
**Commit:** `d851ffc` - "Fix date-fns version for Vercel deployment"

---

## 🔄 How Everything Connects

```
┌─────────────┐         2-way sync         ┌─────────────┐
│   Lovable   │ ←─────────────────────────→ │   GitHub    │
└─────────────┘                             └─────────────┘
                                                    ↓
                                            Auto-deployment
                                                    ↓
                                            ┌─────────────┐
                                            │   Vercel    │
                                            └─────────────┘
                                                    ↑
                                              git push
                                                    │
                                            ┌─────────────┐
                                            │    Local    │
                                            └─────────────┘
```

### Workflow
1. **Make changes in Lovable** → Auto-commits to GitHub → Auto-deploys to Vercel
2. **Make changes locally** → Git push to GitHub → Auto-deploys to Vercel + Syncs to Lovable
3. **Changes from GitHub** → Git pull locally → Already synced to Lovable

---

## 📝 Recent Commits (Latest First)

```
a1fb2f5 - Remove 'Building in Public' blog post
2f47e97 - Add YouTube bento box with API integration
2a294b3 - Replace Twitter feed with YouTube playlist embed
59a9906 - Fix Twitter feed loading and error handling
b793cac - Replace MicroUpdates with TwitterFeed component
2132ea6 - Add comprehensive project status and progress documentation
41c3ffb - Fix: Replace Shindig Productions image
ccc1d74 - Add event image to projects
27b26a1 - Update blog post dates
d47112e - Update featured post content
```

---

## 🚧 Known Issues & Solutions

### Issue 1: Social Links Showing 404
**Cause:** Wrong usernames in code
- LinkedIn was `stevechranowski` (missing 'n')
- Instagram was `stevechranowski` (wrong username entirely)

**Fixed:**
- LinkedIn: `https://www.linkedin.com/in/stevenchranowski/`
- Instagram: `https://www.instagram.com/stevemichael.001/`

### Issue 2: Vercel Caching Old Deployment
**Cause:** Browser cache or Vercel serving stale build
**Solution:** Force new deployment with empty commit: `git commit --allow-empty -m "Force redeploy"`

### Issue 3: Local and Remote Out of Sync
**Solution:**
- Always `git pull` before starting work
- Use `git status` to check sync status
- Remember Lovable changes auto-push to GitHub

---

## 📋 TODO / Next Steps

### High Priority (In Progress)
- ⏳ **Connect stevechranowski.com to Vercel**
  - Add domain in Vercel dashboard
  - Get DNS records from Vercel
  - Configure A and CNAME records in Cloudflare
  - Verify DNS propagation
  - SSL will be automatic via Vercel

### Content Improvements (Future)
- [ ] Add more blog posts with real content
- [ ] Update micro-updates with recent activities
- [ ] Add real projects to Projects section
- [ ] Update About section if needed
- [ ] Add photos/images to blog posts

### Technical Enhancements (Future)
- [ ] Set up Google Analytics (GA measurement ID in siteData.ts)
- [ ] Implement actual contact form (currently demo mode)
  - Option 1: Web3Forms (free)
  - Option 2: EmailJS
  - Option 3: Custom backend
- [ ] Add RSS feed for blog
- [ ] Add OpenGraph/Twitter meta tags for better sharing
- [ ] Consider adding a newsletter signup

---

## 🎨 Current Site Structure

```
Home Page (/)
├── Header (SC logo + hamburger menu)
├── Hero Section
├── About Section
├── Writing Section (Blog Posts)
│   ├── Featured: "An Ode to Discipline"
│   └── "The Great Rate Hike"
├── Projects Section (Shindig Productions)
├── Now Watching Section (YouTube Bento Box)
│   └── 3-5 videos from playlist, horizontally scrollable
├── Contact Section (Demo mode)
└── Footer (Navigate + Connect)
```

---

## 🔑 Important Files Reference

### Configuration Files
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration

### Data Files
- `src/data/siteData.ts` - **MAIN CONTENT FILE**
  - Blog posts (3 total)
  - Micro updates (8 total)
  - Projects (1 total - Shindig)
  - Social links
  - Site config (name, tagline, about text)

### Component Files
- `src/components/Header.tsx` - Navigation header
- `src/components/Footer.tsx` - Footer with links
- `src/components/Contact.tsx` - Contact form (demo mode)
- `src/components/YouTubeFeed.tsx` - **YouTube playlist bento box with API integration**
- `src/components/Hero.tsx` - Hero section
- `src/components/About.tsx` - About section
- `src/components/Writing.tsx` - Blog posts grid
- `src/components/BlogIndex.tsx` - Blog listing component
- `src/components/Projects.tsx` - Projects showcase

---

## 🛠 Common Commands

### Development
```bash
npm run dev          # Start dev server (http://localhost:8080)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Git Workflow
```bash
git status           # Check what's changed
git pull             # Pull latest from GitHub
git add -A           # Stage all changes
git commit -m "msg"  # Commit with message
git push origin main # Push to GitHub (triggers Vercel deploy)
```

### Troubleshooting
```bash
npm install          # Reinstall dependencies
rm -rf node_modules package-lock.json && npm install  # Clean reinstall
git log --oneline -5 # See recent commits
```

---

## 📞 Contact & Social Links (Current)

- **Email:** stevenchranowski3@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/stevenchranowski/
- **Instagram:** https://www.instagram.com/stevemichael.001/
- **Spotify:** https://open.spotify.com/user/steve

---

## 🎓 What We Learned

### Key Concepts Covered
1. **Git/GitHub**: Version control, commits, push/pull, 2-way sync with external services
2. **Lovable Integration**: AI web builder with GitHub sync capabilities
3. **Vercel Deployment**: Serverless hosting with automatic deployments
4. **React Components**: Modular architecture, props, state management
5. **Dependency Management**: NPM, package.json, resolving conflicts
6. **Build Tools**: Vite for fast development and optimized production builds

### Problems Solved
1. Removing dead code and simplifying components
2. Fixing broken social media links (wrong usernames)
3. Resolving NPM dependency conflicts (date-fns)
4. Managing 3-way sync between local/GitHub/Lovable
5. Forcing cache-busting deployments in Vercel

---

## 📸 Screenshots & Links

**Vercel Dashboard:** Check for latest deployments
**GitHub Repo:** https://github.com/SteveMichael001/notebook-hub-stream
**Local Dev:** http://localhost:8080 (when dev server running)

---

## 💡 Tips for Next Session

1. **Always start with:** `git pull` to sync latest changes from Lovable
2. **Before making changes:** Check `git status` to see if you're up to date
3. **After Lovable edits:** Pull changes locally before editing files
4. **Check Vercel:** After pushing, wait 2-3 minutes and verify deployment succeeded
5. **Hard refresh browser:** Cmd+Shift+R to clear cache when testing

---

## 🎯 Quick Start for Next Time

```bash
cd /Users/stevenchranowski/AI-Workspace/Apps/notebook-hub-stream
git pull                    # Get latest changes
npm run dev                 # Start dev server
# Make your changes
git add -A
git commit -m "Description"
git push origin main        # Deploy to production
```

---

## 📚 Learning Sessions

### Session 1: OAuth vs API Keys (November 23, 2025)
**Topic:** Understanding the difference between OAuth and API keys
**Method:** Baby-step teaching approach
**Concepts Covered:**
- Hotel key analogy (API Key = master key, OAuth = check-in process)
- When to use each authentication method
- Real-world example: FedEx API (OAuth for client authorization)
- YouTube API (simple API key for public data)

**Key Takeaway:** OAuth is for accessing private data on behalf of users. API keys are for accessing public data or making requests as yourself.

---

**Last Session (November 23-24, 2025):**
- ✅ Investigated and synced all versions across platforms
- ✅ Built YouTube bento box with API integration
- ✅ Set up Google Cloud API credentials and learned OAuth fundamentals
- ✅ Configured secure environment variables across Local/Vercel
- ✅ Removed outdated blog content
- ✅ Registered stevechranowski.com domain on Cloudflare
- ⏳ Next: Connect domain to Vercel

**Current Status:**
✅ Site is live and fully functional with YouTube integration
✅ Domain purchased (stevechranowski.com)
⏳ DNS configuration pending
