import loremIpsumFeature from "@/assets/lorem-ipsum-feature.png";
import shindigProject from "@/assets/shindig-project.jpg";
import shindigBanner2 from "@/assets/shindig-banner-2.jpg";
import shindigBanner3 from "@/assets/shindig-banner-3.jpg";
import shindigBanner4 from "@/assets/shindig-banner-4.jpg";

// Central CMS-editable content
export const siteConfig = {
  site_name: "Steve Chranowski",
  site_tagline: "Doing things. Shamelessly sharing them.",
  hero_headline: "Doing things. Shamelessly sharing them.",
  hero_subhead: "Short notes, experiments, and an occasional musing by <em>Steve Chranowski</em>",
  hero_cta1_text: "Read latest",
  hero_cta1_anchor: "#writing",
  hero_cta2_text: "What I'm doing now",
  hero_cta2_anchor: "#micro-updates",
  
  about_text: `I'm Steve - Playing the field, building things, trying to leave my mark. By day, I resell UPS & FedEx services. By night, I'm riffing with my business partner, experimenting with AI, staying active, and spending time with the wifey and pup. Designing a life I want to live, instead of going through the motions.

Currently learning: Claude Code,  Agents

Based in San Diego. Always curious. Skeptical optimist. Extroverted Introvert.`,

  contact_form_webhook_url: "",
  ga_measurement_id: "",
  
  social_links: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/stevechranowski" },
    { name: "Instagram", url: "https://www.instagram.com/stevechranowski" },
    { name: "Spotify", url: "https://open.spotify.com/user/steve" },
    { name: "Email", url: "mailto:stevenchranowski3@gmail.com" }
  ],

  theme_colors: {
    primary: "#0EA5A4",
    background: "#FBFBFB",
    foreground: "#0F1720"
  },

  now_status: "2025 — Learning to build in public. One experiment at a time."
};

export interface MicroUpdate {
  id: string;
  text: string;
  date: string;
  tags?: string[];
  external_link?: string;
  published: boolean;
}

export const microUpdates: MicroUpdate[] = [
  {
    id: "mu-8",
    text: "Just fixed a tricky FedEx billing issue — client saved $1.2k this month. Small wins compound.",
    date: "2025-10-08T14:30:00Z",
    tags: ["work", "logistics"],
    published: true
  },
  {
    id: "mu-7",
    text: "Discovered a new coffee spot in North Park. Their cortado game is strong ☕",
    date: "2025-10-06T09:15:00Z",
    tags: ["san diego", "coffee"],
    published: true
  },
  {
    id: "mu-6",
    text: "Finally shipped the VibeCode update — now supports audio waveform visualizations. Check it out →",
    date: "2025-10-04T18:45:00Z",
    tags: ["projects", "code"],
    external_link: "https://vibecode.dev",
    published: true
  },
  {
    id: "mu-5",
    text: "Reading 'Thinking in Bets' by Annie Duke. Already changing how I approach decisions under uncertainty.",
    date: "2025-10-02T11:20:00Z",
    tags: ["reading", "decision-making"],
    published: true
  },
  {
    id: "mu-4",
    text: "Experimented with sous vide duck breast. 135°F for 2 hours, then seared. Game changer. 🍽️",
    date: "2025-09-30T20:00:00Z",
    tags: ["cooking"],
    published: true
  },
  {
    id: "mu-3",
    text: "Surfed Blacks Beach this morning. Waves were clean. Brain is clear. This is the way.",
    date: "2025-09-28T07:45:00Z",
    tags: ["surfing", "san diego"],
    published: true
  },
  {
    id: "mu-2",
    text: "Debugging a Rust lifetime error at 11pm is a special kind of torture. But I learned something.",
    date: "2025-09-26T23:15:00Z",
    tags: ["code", "learning"],
    published: true
  },
  {
    id: "mu-1",
    text: "Launched this site. It's a work in progress — like everything else. Feedback welcome.",
    date: "2025-09-25T16:00:00Z",
    tags: ["meta", "projects"],
    published: true
  }
];

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  tags: string[];
  category: string;
  excerpt: string;
  body_html: string;
  featured_image?: string;
  reading_time: number;
  published: boolean;
  canonical_url?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "An Ode to Discipline",
    slug: "lorem-ipsum",
    date: "2025-10-07T10:00:00Z",
    tags: ["example", "demo"],
    category: "Essays",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featured_image: loremIpsumFeature,
    body_html: `
      <p class="drop-cap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      <h2>Excepteur Sint Occaecat</h2>
      
      <p>Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

      <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      <h2>Nemo Enim Ipsam</h2>

      <p><strong>Voluptatem quia voluptas sit aspernatur.</strong> Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

      <p><strong>Neque porro quisquam est.</strong> Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>

      <p><strong>Ut labore et dolore magnam aliquam.</strong> Quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>

      <h2>Quis Autem Vel Eum</h2>

      <p>Iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>

      <h2>Similique Sunt</h2>

      <p>In culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>

      <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
    `,
    reading_time: 4,
    published: true,
    featured: true
  },
  {
    id: "post-2",
    title: "Building in Public: Why I'm Sharing Everything",
    slug: "building-in-public",
    date: "2025-09-28T14:00:00Z",
    tags: ["business", "transparency", "learning"],
    category: "Essays",
    excerpt: "Most entrepreneurs hide their process. I'm doing the opposite. Here's why documenting the messy middle might be the smartest thing I've ever done.",
    body_html: `
      <p class="drop-cap">I used to think that success meant keeping your cards close to your chest. Don't show your hand. Don't reveal your strategy. Don't let anyone see you struggle.</p>

      <p>But somewhere along the way, I realized that hiding the process was costing me more than protecting it. So I made a decision: build everything in public. Share the wins, the losses, the pivots, and the boring stuff in between.</p>

      <h2>The Fear of Being Judged</h2>

      <p>The first time I posted about a failed project, I expected crickets—or worse, mockery. Instead, I got messages from strangers saying, "I needed to hear this." People connected with the honesty more than they ever connected with the polished highlight reel.</p>

      <p>Building in public isn't about oversharing for attention. It's about creating a record of the journey. It's about helping someone who's three steps behind you. It's about accountability.</p>

      <h2>What I've Learned So Far</h2>

      <p><strong>Transparency builds trust faster than perfection.</strong> When you show your work—the messy prototypes, the late-night debugging sessions, the revenue numbers—people see you as real, not as a brand trying to sell them something.</p>

      <p><strong>Feedback comes to those who ask publicly.</strong> I've gotten better product ideas from Twitter replies than from months of private brainstorming. When you build in public, your audience becomes your co-conspirator.</p>

      <p><strong>Documentation is a gift to your future self.</strong> Every update I share is a breadcrumb for when I inevitably forget why I made a certain decision. Public updates force clarity.</p>

      <h2>The Messy Middle is Where Growth Happens</h2>

      <p>Most people only share the before and after. The dumpster fire apartment renovation photo next to the stunning finished kitchen. The "I was broke" story next to the "now I'm thriving" flex.</p>

      <p>But the messy middle—the part where you're figuring it out in real time—that's where the magic is. That's where the lessons are. That's the part worth documenting.</p>

      <p>So I'm sharing it all. The experiments. The setbacks. The small wins that don't look impressive but feel monumental. Because if I can help one person avoid a mistake I made, or inspire someone to start their own thing, then the vulnerability is worth it.</p>

      <h2>What's Next</h2>

      <p>I'm committing to weekly updates on whatever I'm building. No filter. No perfect lighting. Just the raw, unpolished journey of trying to create something from nothing.</p>

      <p>If you're on a similar path, I'd love to hear from you. Let's build in public together.</p>
    `,
    reading_time: 3,
    published: true,
    featured: false
  },
  {
    id: "post-3",
    title: "How I Use AI to 10x My Productivity (Without Losing My Soul)",
    slug: "ai-productivity",
    date: "2025-10-15T09:30:00Z",
    tags: ["AI", "productivity", "tools"],
    category: "Guides",
    excerpt: "AI tools are everywhere. But most people use them wrong. Here's how I integrate AI into my workflow without becoming dependent—or lazy.",
    body_html: `
      <p class="drop-cap">Everyone's talking about AI like it's either going to save us or destroy us. Meanwhile, I'm over here using it to write better emails and debug code faster. The truth is, AI is just a tool—and like any tool, it's all about how you use it.</p>

      <p>I've been experimenting with AI assistants for the past year, and I've landed on a system that genuinely makes me more productive without turning me into a passive consumer of machine-generated output.</p>

      <h2>Rule #1: AI is a Thought Partner, Not a Replacement</h2>

      <p>I don't ask AI to "write a blog post about X." That's lazy, and the output is always generic. Instead, I use it as a sparring partner. I'll dump my rough ideas, ask it to poke holes in my logic, or request it to reframe something in a way I hadn't considered.</p>

      <p>The final work is still mine. The AI just helps me get unstuck faster.</p>

      <h2>Rule #2: Automate the Boring Stuff</h2>

      <p><strong>Email drafts.</strong> I use AI to generate first drafts of routine emails. I edit them to add personality, but it saves me 10+ minutes per day.</p>

      <p><strong>Code boilerplate.</strong> Writing CRUD endpoints for the 100th time? AI can scaffold it in seconds. I review, refactor, and move on.</p>

      <p><strong>Meeting summaries.</strong> After calls, I feed the transcript to an AI and get a clean summary with action items. Game changer.</p>

      <h2>Rule #3: Keep the Human Touch</h2>

      <p>Here's where most people go wrong: they outsource their voice. AI-generated content is getting better, but it still lacks soul. It doesn't have *your* experiences, your quirks, your humor.</p>

      <p>So I edit everything. I add stories. I inject personality. I make sure it sounds like me, not like a corporate blog post written by an algorithm.</p>

      <h2>My Current Stack</h2>

      <p>For the curious, here's what I'm using:</p>

      <ul>
        <li><strong>Claude Code</strong> – For coding tasks, debugging, refactoring</li>
        <li><strong>ChatGPT</strong> – General research, brainstorming, email drafts</li>
        <li><strong>Notion AI</strong> – Summarizing meeting notes, organizing ideas</li>
        <li><strong>Grammarly</strong> – Catching typos I'd otherwise miss</li>
      </ul>

      <h2>The Bottom Line</h2>

      <p>AI won't make you creative. It won't give you good ideas. It won't replace deep work.</p>

      <p>But it *will* free up mental bandwidth for the stuff that actually matters. Use it to handle the grunt work, so you can focus on the work that only you can do.</p>

      <p>That's the sweet spot.</p>
    `,
    reading_time: 5,
    published: true,
    featured: false
  }
];

export interface Project {
  id: string;
  title: string;
  slug: string;
  image?: string;
  images?: string[];
  excerpt: string;
  link: string;
  featured: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "proj-2",
    title: "Shindig Productions",
    slug: "shindig",
    images: [shindigProject, shindigBanner2, shindigBanner3, shindigBanner4],
    excerpt: "Launched a house music events and entertainment brand in San Diego with best friend, Hussain",
    link: "https://www.instagram.com/shindigusa/",
    featured: true,
    tags: ["live events", "first LLC"]
  }
];

export interface Event {
  id: string;
  date: string;
  title: string;
  location: string;
  link?: string;
  past?: boolean;
}

export const events: Event[] = [
  {
    id: "evt-3",
    date: "2025-11-15T19:00:00Z",
    title: "SD Tech Meetup — Building in Public",
    location: "North Park, San Diego",
    link: "https://sdtech.dev",
    past: false
  },
  {
    id: "evt-2",
    date: "2025-10-20T10:00:00Z",
    title: "Rust Workshop @ UCSD",
    location: "UC San Diego",
    past: false
  },
  {
    id: "evt-1",
    date: "2025-09-10T18:00:00Z",
    title: "Logistics Innovation Summit",
    location: "Virtual",
    link: "https://logisticssummit.co",
    past: true
  }
];
