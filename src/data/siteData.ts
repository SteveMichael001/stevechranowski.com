import loremIpsumFeature from "@/assets/lorem-ipsum-feature.png";

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
    { name: "LinkedIn", url: "https://linkedin.com/in/stevechranowski" },
    { name: "Instagram", url: "https://instagram.com/stevechranowski" },
    { name: "Spotify", url: "https://open.spotify.com/user/steve" },
    { name: "Email", url: "mailto:steve@example.com" }
  ],

  theme_colors: {
    primary: "#0EA5A4",
    background: "#FBFBFB",
    foreground: "#0F1720"
  },

  now_status: "2025 — Learning to build in public. One experiment at a time."
};

// Twitter feed configuration
export const twitter_config = {
  enabled: true,
  username: "stevechranowski",
  max_tweets: 10,
  exclude_replies: true,
  exclude_retweets: true,
  refresh_interval: 900000, // 15 minutes in milliseconds
  merge_with_manual: true, // Show both live tweets and manual updates
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
    title: "Lorem Ipsum Dolor Sit Amet",
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
  }
];

export interface Project {
  id: string;
  title: string;
  slug: string;
  image?: string;
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
    excerpt: "Launched a house music events and entertainment brand in San Diego with best friend, Hussain",
    link: "https://shindig.productions",
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
