import loremIpsumFeature from "@/assets/the-life-id-like-to-lead-banner.png";
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
  about_text: `I'm Steve - Playing the field, building things, trying to leave my mark. By day, I help businesses cut UPS and FedEx shipping costs. By night, I'm riffing with my business partner, staying active, and spending time with the wifey and pup. Designing a life I want to live, instead of going through the motions.

Currently learning: OpenClaw, Agents

Based in San Diego. Always curious. Skeptical optimist. Extroverted Introvert.`,

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
    title: "The Life I'd Like to Lead",
    slug: "the-life-id-like-to-lead",
    date: "2026-01-14T10:00:00Z",
    tags: ["personal", "potential", "goals", "growth"],
    category: "Essays",
    excerpt: "The idea of potential has been on my mind. My grandfather seared it into my brain. I've always believed I had the greatest potential in my generation of the family—now it's time to execute.",
    featured_image: loremIpsumFeature,
    body_html: `
      <p class="drop-cap">The life I'd like to lead (the selfish, non-virtuous version)… The purpose of writing this is not to puff my chest, and it's not really for others, but I do want to get comfortable publishing content, so here goes…</p>

      <h2>Potential</h2>

      <p>The idea of potential has been on my mind. My grandfather seared it into my brain. He'd say something along the lines of, "You all have very high potential, but it's your call on what you do with it." I thought about it more a couple of years ago when he passed. I could bullshit reasons as to why, but I've always believed I had the greatest potential in my generation of the family. Nothing against the others. I wouldn't be surprised if they feel the same way about me.</p>

      <p>I still believe this to be true, but I think I've done a pseudo shit job of executing on that potential.</p>

      <p>Where are my millions? Where is my big family home and my vacation homes? Where is my business? Don't get me wrong, I am grateful, and my life is pretty darn good. But straight up: I'm tired of being the guy in the family who is supposed to afford us all the luxuries and take us to the next level, yet I'm not taking swift, consistent action to get us there.</p>

      <h2>It's Not All About the Money (But Some of It Is)</h2>

      <p>Let me be clear: this is not all about the money. But I've always wanted to run my own business. I want a life of adventure. I am a daydreamer. And yes, some of it's about the money.</p>

      <p>I've built a solid foundation of skills over the last 29 years to run a business well and live an adventurous life if I simply decide to execute every day. Running businesses and living a more adventurous life is the next step in my potential. Giving it 100% and doing those things well can lead to the millions, the family homes, and all the ego virtue signaling, lol.</p>

      <h2>The Daydream</h2>

      <p>Here is what I daydream about when I see my future life, the life I'd like to lead:</p>

      <ul>
        <li>I work with others that I am inspired by</li>
        <li>I constantly learn and grow</li>
        <li>I produce way, way more than I consume, whether that's writing, creating content, working on a project, a deal, a system, or a business. Production and action are the key metrics.</li>
        <li>I interview people selfishly to gain access to what they do because I am curious, but I share it with the world as leverage to gain access to more interviews and to broaden my reach</li>
        <li>I run multiple businesses</li>
        <li>I create and operate hospitality businesses so we can travel for "work"</li>
        <li>I do real estate deals</li>
        <li>I own hard assets that generate recurring revenue</li>
        <li>I network with interesting and powerful people</li>
        <li>My city "knows" me and my family</li>
        <li>I positively impact thousands of people's lives every year</li>
        <li>People know that I am a man of my word and that I am trustworthy</li>
        <li>I have a beautiful wife, Keirstyn, and many children</li>
        <li>I employ friends and family</li>
        <li>I build unique communities for our families and friends</li>
        <li>I do LOTS and LOTS of deals in all shapes and sizes, but over time those deals grow and grow, and the efforts snowball</li>
        <li>I take lots of mini adventures</li>
        <li>I am a specimen of peak performance, wellness, and health</li>
        <li>I don't allow drugs to consume me or knock me off the pathway</li>
        <li>Work is play and play is work</li>
        <li>I "work" 7 days a week</li>
        <li>We have four personal properties for friends and family: one at the Jersey Shore or NYC, one in SoCal, one in NorCal or the mountains, and one in Mexico</li>
        <li>I do deep focused work for 2-3 hours a day</li>
        <li>I surf the world</li>
        <li>Porsches are my daily driver</li>
        <li>I'm obsessive</li>
        <li>I simply do what I'm interested in doing</li>
        <li>I have flexibility to homeschool my children</li>
      </ul>

      <p>Some of the above relates more directly to my potential. Some are outcomes of acting on that potential. And all of them are consequences of consistent and quality inputs. Am I doing what I say I'm going to do? Am I embracing serendipity? Am I generating good luck and fortune by putting myself out there? Am I proud of what I am doing?</p>

      <h2>First Principles</h2>

      <p>What first-principle steps and inputs do I need to take NOW to live the life I truly want to lead? This isn't some formula or learning lesson for others, just what my gut is telling me is appropriate at this very moment:</p>

      <ol>
        <li><strong>Business every day:</strong> I will work on a business idea and business deals every day that can be tied to a million-dollar metric by the end of 2026, whether that's value, revenue, profit, or otherwise.</li>
        <li><strong>Physical excellence:</strong> I will eat clean and be physically active 6 days a week.</li>
        <li><strong>Vices don't control me:</strong> Vices are saved for special occasions or to truly enhance an experience. If vices prevent actions 1 and 2, I must stop immediately for a season of clarity. No booze in January to kick off 2026. Push for 90 days. Eliminate nicotine for good. A long T-break is a must.</li>
      </ol>

      <h2>The Reminder</h2>

      <p>I think it's important that I re-read this as much as possible this year. It serves as a healthy reminder to do what I say I am going to do. Build the habits. Do the boring actions. Keep your head down. I can just do things, remember?</p>

      <p>That's the beautiful thing about potential and leading a beautiful life. It's pretty much boundless by everything other than time. My discomfort with the status quo is much, much greater than the comfort of staying the same, so let's stop wasting time.</p>

      <p><em>Yours truly,<br/>Steve Chranowski</em></p>
    `,
    reading_time: 6,
    published: true,
    featured: true
  },
  {
    id: "post-3",
    title: "The Great Rate Hike: How FedEx & UPS Price Increases Gut Your Shipping Budget",
    slug: "carrier-pricing-reality-check",
    date: "2025-11-01T09:30:00Z",
    tags: ["logistics", "business", "shipping"],
    category: "Research",
    excerpt: "As a parcel shipping advisor, I've watched FedEx and UPS crank up U.S. domestic rates every year from 2022 through 2025. Despite their PR about 'enhancing service,' these hikes are hammering your margins.",
    body_html: `
      <p class="drop-cap">As a parcel shipping advisor, I've watched FedEx and UPS crank up U.S. domestic rates every year from 2022 through 2025. Despite their PR about "enhancing service," these hikes on base rates, fuel surcharges, and endless fees are hammering your margins and driving up costs for you and your customers. Below is a no-nonsense look at what's really happening to your shipping costs and why it's bad for business.</p>

      <h2>What This Means for Your Business</h2>

      <p><strong>Shrinking Margins:</strong> Annual rate increases of 5.9%–6.9% (every single year) compound into double-digit cost growth. When surcharges are factored in, many shippers saw total cost increases north of 10% in a single year.</p>

      <p><strong>Surcharge Overload:</strong> Fuel surcharges, residential fees, and handling surcharges now account for 30–40% of total shipping spend, up from ~10–15% pre-2020. Most are automatically applied, often unnoticed.</p>

      <p><strong>Paying More for Less Service:</strong> Despite higher rates, carriers have reduced delivery windows, ended weekend services in some areas, and consolidated facilities. Your access to service is shrinking.</p>

      <p><strong>Customer Experience Erosion:</strong> Delays, reduced flexibility, and higher pass-through costs impact your brand promise to the customer.</p>

      <h2>2022–2025: Annual Rate Hikes Are the New Normal</h2>

      <p>FedEx and UPS used to raise prices by ~4.9% annually. That ended in 2022. Here's what followed:</p>

      <ul>
        <li><strong>2022:</strong> +5.9% average GRI</li>
        <li><strong>2023:</strong> +6.9%, the steepest in over a decade</li>
        <li><strong>2024:</strong> +5.9%</li>
        <li><strong>2025:</strong> +5.9% (FedEx already confirmed)</li>
      </ul>

      <p>These numbers only reflect base rate increases. With surcharges added, effective shipping cost growth has been much higher. Cumulatively, most shippers are paying 25–30% more today than they did in 2021, even if volume stayed flat.</p>

      <h2>Surcharges and "Fee Creep": The Silent Profit Killers</h2>

      <p><strong>Fuel Surcharges, Quiet Climbs:</strong> Between 2024 and 2025, FedEx and UPS each raised their fuel surcharge tables multiple times. By mid-2025, UPS Ground fuel surcharges climbed from ~15% to over 19%, and FedEx hit 20.5%, despite falling diesel costs. A 4 percentage-point increase in the fuel surcharge can quietly add over $2,400 in annual shipping costs for a business spending $5,000 per month.</p>

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

      <p><strong>FedEx Network Consolidation:</strong> Shut down 100+ Ground and Express stations, ended Sunday delivery in many ZIPs, and removed service from several FedEx Office locations. All part of a cost-cutting initiative, with no price breaks for you.</p>

      <p><strong>UPS: Revenue Over Volume:</strong> Focused on high-margin shipments. Their "Better, Not Bigger" strategy is about maximizing revenue per piece, not growing total volume. For many shippers with $5K–$50K in monthly spend, this translated into effective rate inflation without access to enterprise-tier pricing support.</p>

      <h2>Bottom Line</h2>

      <p>If you ship heavier, larger, or time-sensitive parcels, you've been hit hardest, not just by rate hikes, but by aggressive fee layering. The carriers are optimizing for their shareholders, not your business. Understanding these changes is the first step to fighting back.</p>
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
    id: "proj-3",
    title: "RVO",
    slug: "rvo",
    image: "/rvo-screenshot.png",
    excerpt: "Automated shipping invoice audit platform. Upload your FedEx or UPS invoice, we find savings.",
    link: "",
    featured: true,
    tags: ["SaaS", "logistics", "in progress"]
  },
  {
    id: "proj-4",
    title: "NeverMiss",
    slug: "nevermiss",
    image: "/nevermiss-tile.png",
    excerpt: "AI voicemail for contractors. Never lose a lead. When a contractor misses a call, NeverMiss answers, captures the lead, and texts them instantly. Built for plumbers, HVAC techs, electricians — anyone who can't answer while on the job.",
    link: "https://nevermiss-delta.vercel.app",
    featured: true,
    tags: ["AI", "SaaS", "early access"]
  },
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


