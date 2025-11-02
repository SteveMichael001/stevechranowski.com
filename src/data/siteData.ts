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
    { name: "LinkedIn", url: "https://www.linkedin.com/in/stevenchranowski/" },
    { name: "Instagram", url: "https://www.instagram.com/stevemichael.001/" },
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
    title: "The Great Rate Hike: How FedEx & UPS Price Increases Gut Your Shipping Budget",
    slug: "carrier-pricing-reality-check",
    date: "2025-10-15T09:30:00Z",
    tags: ["logistics", "business", "shipping"],
    category: "Essays",
    excerpt: "As a parcel shipping advisor, I've watched FedEx and UPS crank up U.S. domestic rates every year from 2022 through 2025. Despite their PR about 'enhancing service,' these hikes are hammering your margins.",
    body_html: `
      <p class="drop-cap">As a parcel shipping advisor, I've watched FedEx and UPS crank up U.S. domestic rates every year from 2022 through 2025. Despite their PR about "enhancing service," these hikes – on base rates, fuel surcharges, and endless fees – are hammering your margins and driving up costs for you and your customers. Below is a no-nonsense look at what's really happening to your shipping costs and why it's bad for business.</p>

      <h2>What This Means for Your Business</h2>

      <p><strong>Shrinking Margins:</strong> Annual rate increases of 5.9%–6.9% (every single year) compound into double-digit cost growth. When surcharges are factored in, many shippers saw total cost increases north of 10% in a single year.</p>

      <p><strong>Surcharge Overload:</strong> Fuel surcharges, residential fees, and handling surcharges now account for 30–40% of total shipping spend, up from ~10–15% pre-2020. Most are automatically applied, often unnoticed.</p>

      <p><strong>Paying More for Less Service:</strong> Despite higher rates, carriers have reduced delivery windows, ended weekend services in some areas, and consolidated facilities. Your access to service is shrinking.</p>

      <p><strong>Customer Experience Erosion:</strong> Delays, reduced flexibility, and higher pass-through costs impact your brand promise to the customer.</p>

      <h2>2022–2025: Annual Rate Hikes Are the New Normal</h2>

      <p>FedEx and UPS used to raise prices by ~4.9% annually. That ended in 2022. Here's what followed:</p>

      <ul>
        <li><strong>2022:</strong> +5.9% average GRI</li>
        <li><strong>2023:</strong> +6.9% — the steepest in over a decade</li>
        <li><strong>2024:</strong> +5.9%</li>
        <li><strong>2025:</strong> +5.9% (FedEx already confirmed)</li>
      </ul>

      <p>These numbers only reflect base rate increases. With surcharges added, effective shipping cost growth has been much higher. Cumulatively, most shippers are paying 25–30% more today than they did in 2021, even if volume stayed flat.</p>

      <h2>Surcharges and "Fee Creep": The Silent Profit Killers</h2>

      <p><strong>Fuel Surcharges – Quiet Climbs:</strong> Between 2024 and 2025, FedEx and UPS each raised their fuel surcharge tables multiple times. By mid-2025, UPS Ground fuel surcharges climbed from ~15% to over 19%, and FedEx hit 20.5%, despite falling diesel costs. A 4 percentage point increase in the fuel surcharge can quietly add over $2,400 in shipping costs per year for a business spending $5,000 per month on shipping.</p>

      <h2>Current Shipping Fees and Strategies</h2>

      <p><strong>Residential & Delivery Area Surcharges:</strong> These fees have risen steadily and apply to more ZIP codes than ever. UPS's Remote Area surcharge now sits around $14 per package, while FedEx's similar surcharges apply across a growing list of delivery zones.</p>

      <p><strong>Oversize & Handling Fees:</strong> These are where the real damage hits:</p>

      <ul>
        <li>FedEx Additional Handling: Up to $55 per package based on zone and criteria</li>
        <li>UPS Additional Handling: Also hitting $50+ depending on dimension or weight</li>
        <li>FedEx Oversize: Tops out at $305 per package in 2025</li>
        <li>UPS Large Package Surcharge (Residential): Reaches $297.50</li>
      </ul>

      <p>These fees have risen 20–28% annually for 3 years straight, far outpacing base GRIs.</p>

      <h2>Higher Prices, Less Service</h2>

      <p><strong>FedEx Network Consolidation:</strong> Shut down 100+ Ground and Express stations, ended Sunday delivery in many ZIPs, and removed service from several FedEx Office locations. All part of a cost-cutting initiative — with no price breaks for you.</p>

      <p><strong>UPS: Revenue Over Volume:</strong> Focused on high-margin shipments. Their "Better not Bigger" strategy is about maximizing revenue per piece — not growing total volume. For many shippers with ~$5–50K monthly spend, this translated into effective rate inflation without access to enterprise-tier pricing support.</p>

      <h2>Bottom Line</h2>

      <p>If you ship heavier, larger, or time-sensitive parcels, you've been hit hardest — not just by rate hikes, but by aggressive fee layering. The carriers are optimizing for their shareholders, not your business. Understanding these changes is the first step to fighting back.</p>
    `,
    reading_time: 6,
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
