import loremIpsumFeature from "@/assets/lorem-ipsum-feature.png";
import shindigProject from "@/assets/shindig-project.jpg";
import shindigBanner2 from "@/assets/shindig-banner-2.jpg";
import shindigBanner3 from "@/assets/shindig-banner-3.jpg";
import shindigBanner4 from "@/assets/shindig-banner-4.jpg";
import shindigIntentions from "@/assets/shindig-intentions.png";

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
    slug: "ode-to-discipline",
    date: "2025-11-01T10:00:00Z",
    tags: ["personal", "discipline", "growth"],
    category: "Essays",
    excerpt: "The worst pains in life come from lack of discipline. The greatest pains in life come from strength in persistence.",
    featured_image: loremIpsumFeature,
    body_html: `
      <p class="drop-cap">The worst pains in life come from lack of discipline. The greatest pains in life come from strength in persistence.</p>
      
      <p>I was 11 years old, sitting in the nook of our home in front of my parents. I hated running at the time, I really didn't enjoy a ton of physical excursion in general. Don't get me wrong, our father made sure we were three sport athletes but it wasn't my strongest interest.</p>

      <p>So it was something as simple as pulling my parents for a chat and telling them I didn't want to continue playing travel soccer… in the middle of the season. There was something excruciatingly painful when I brought myself to do it, not exactly sure why, but looking back I think it was because I knew I was letting myself down.</p>

      <p>I put on my biggest pouty face - I wasn't afraid to pull crying jags. I also made sure the reason for quitting was not about my distaste for cardio - that wasn't going to move the needle. It was because I was no longer interested in the game, my time would be better spent on my studies or a different sport. Learned at a young age that we had to strategically plan these conversations to get what we wanted, at least that's what my brother and I told ourselves.</p>

      <p>My parents folded. I won.</p>

      <h2>The Slippery Slope</h2>

      <p>When I think of discipline, I'm constantly reminded of this memory. It kicked off a string of accepting mediocrity, which I now soley blame on my lack of self-discipline. My father was a creature of competition; I rebelled by being lax. It was the "cool" thing to do. I started making more and more decisions to be "cool" instead of being myself, and at that time, I had no understanding of long-term consequences. I became more focused on short-term pleasure while leveraging my natural-born gifts to get me by.</p>

      <p>Everything would be just fine…Well, everything has been fine, everything has been more than fine, but I wasn't put on this planet to be ordinary. You know how the next line goes…I want to be extraordinary and in order to do so I want to be in an endless pursuit of discipline. I know it's possible - I've done it for short stints and never feel better, but I always come creeping back for shorter and shorter periods. Progress but not there yet.</p>

      <h2>What Holds Me Back</h2>

      <p>When I think about what personally prevents me from being my best self, a disciplined being who does what he says he is going to do, who does what he truly loves, I can list the items immediately…</p>

      <p>The ironic part is the items that I superficially enjoy, the short-term, immediate dopamine rushes are what hold me back - the drinking, smoking, sexual fixations, drugs. Mine might sound more vulgar than yours, but we all have this list and we tell ourselves over and over that we'll stop and then we just continue the roller coaster. Immediate high followed by a rush of regret, self-doubt, and negative self-talk. Yours might be food, the phone, a boy or a girl, it could be the tv, or social media. It doesn't really matter but everyone has potential for there version of greatness but most people just let it slip right by them. Living a life of going through the motions. Too each their own, but that sounds like shit.</p>

      <h2>My Commitment</h2>

      <p><strong>On November 10th 2025, I commit to the following:</strong> No drinking in the house, nor on weekdays. No THC. No Drugs. No Nicotine. I will practive this for at lease 6 months and will report back with further entries through out this time period.</p>

      <p>There is a root cause for my lack of discipline, and I believe there is a root cause for everyone's lack of discipline. People over complicate the root cause, but it's quite simple. Figure it out and cut it out.</p>

      <p>And if this piece makes you think I'm an addict or turns you off about me, then that's ok, but I think it's shortsighted. Self-actualizing and realizing what's holding me back is, in my opinion, the beauty here. Taking my addictive nature, and targeting it at what gives me true long term joy is the direction this is pointed. It's like that classic quote that goes something like "the pain of staying the same, outweighs the pain of making a change" and you can just decide to make a change. Just do it, have a feedback loop, make an adjustment, do it some more, rinse and repeat.</p>

      <h2>What I Truly Love</h2>

      <p>By sticking to doing what I say I'm not going to do above, it will allow me to do more of what I truly love, which includes: Daily physical fitness, daily reading, growing my book of business, building businesses, loving my fiance, dog, and family, surfing, being a good business partner, experiencing new hospitality environments - restaurants, events, hotels.</p>
    `,
    reading_time: 5,
    published: true,
    featured: true
  },
  {
    id: "post-3",
    title: "The Great Rate Hike: How FedEx & UPS Price Increases Gut Your Shipping Budget",
    slug: "carrier-pricing-reality-check",
    date: "2025-11-01T09:30:00Z",
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
    images: [shindigProject, shindigBanner2, shindigBanner3, shindigBanner4, shindigIntentions],
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
