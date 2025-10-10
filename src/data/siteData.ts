// Central CMS-editable content
export const siteConfig = {
  site_name: "Steve Chranowski",
  site_tagline: "Doing things. Shamelessly sharing them.",
  hero_headline: "Doing things. Shamelessly sharing them.",
  hero_subhead: "Short notes, experiments, and the occasional long piece — direct from San Diego.",
  hero_cta1_text: "Read latest",
  hero_cta1_anchor: "#writing",
  hero_cta2_text: "What I'm doing now",
  hero_cta2_anchor: "#micro-updates",
  
  about_text: `I'm Steve — building things at the intersection of creativity and pragmatism. By day, I help clients navigate logistics and billing nightmares. By night, I'm experimenting with code, cooking elaborate meals, and occasionally catching waves.

Currently learning: Rust, fermenting vegetables, how to not overthink everything.

Based in San Diego. Always curious. Sometimes skeptical. Reliably verbose.`,

  contact_form_webhook_url: "",
  ga_measurement_id: "",
  
  social_links: [
    { name: "LinkedIn", url: "https://linkedin.com/in/stevechranowski" },
    { name: "Instagram", url: "https://instagram.com/stevechranowski" },
    { name: "Mastodon", url: "https://mastodon.social/@steve" },
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
    id: "post-6",
    title: "Why I'm Building in Public (Even When It's Uncomfortable)",
    slug: "building-in-public",
    date: "2025-10-07T10:00:00Z",
    tags: ["meta", "transparency", "entrepreneurship"],
    category: "Essays",
    excerpt: "For years, I kept projects private until they were 'ready.' That day never came. Here's what changed.",
    body_html: `
      <p class="drop-cap">For years, I kept projects private until they were "ready." That day never came.</p>
      
      <p>The perfectionism trap is real: wait until the design is polished, the copy is perfect, the feature set is complete. But "complete" is a moving target, and perfectionism is procrastination in a fancy hat.</p>

      <h2>The Shift</h2>
      
      <p>I started sharing work-in-progress updates on Twitter. Small stuff: screenshots of bugs, half-formed ideas, random observations. The response surprised me — people engaged with the messy middle more than the polished end product.</p>

      <p>Turns out, everyone loves a good origin story. And origin stories happen in real-time, not in retrospectives.</p>

      <h2>What I've Learned</h2>

      <p><strong>1. Feedback comes faster.</strong> When you share early, you catch issues before they compound. That "brilliant" feature idea? Someone will gently tell you it's been done (better) elsewhere.</p>

      <p><strong>2. Accountability is built-in.</strong> Public commitments are harder to abandon. Not because of external pressure, but because you've already invested social capital.</p>

      <p><strong>3. The work improves.</strong> Knowing someone might read this makes me think harder about clarity, structure, usefulness. Writing for an audience — even a small one — raises the bar.</p>

      <h2>The Discomfort Tax</h2>

      <p>There's a cost: vulnerability. Putting half-baked ideas into the world means accepting they'll be judged. Sometimes harshly. Sometimes by people who've never built anything themselves.</p>

      <p>But the alternative — silent iteration in a vacuum — is costlier. You miss the serendipity: the random connection, the unexpected collaboration, the person who says "I'm working on something similar."</p>

      <h2>So Here We Are</h2>

      <p>This site is an experiment in radical transparency. I'll share wins, failures, and the messy middle. Some posts will age poorly. Some projects will fizzle. That's the point.</p>

      <p>If you're on the fence about sharing your work: start small. One screenshot. One observation. One honest post about what you're learning.</p>

      <p>The world has enough polished case studies. It needs more honest field notes.</p>
    `,
    reading_time: 4,
    published: true,
    featured: true
  },
  {
    id: "post-5",
    title: "How I Saved a Client $14,000 with a Spreadsheet",
    slug: "logistics-savings-spreadsheet",
    date: "2025-10-01T14:00:00Z",
    tags: ["logistics", "consulting", "tools"],
    category: "Work",
    excerpt: "Most billing errors hide in plain sight. Here's the system I built to catch them — and why Excel is still underrated.",
    body_html: `
      <p>A client called: their freight costs had doubled in six months. No explanation from the carrier. Just bigger invoices.</p>

      <p>I suspected billing errors — dimensional weight calculations, accessorial charges, zone misclassifications. The usual suspects. But proving it required auditing hundreds of shipments.</p>

      <h2>The System</h2>

      <p>I built a Google Sheets template that:</p>
      
      <ul>
        <li>Imports shipment data via CSV</li>
        <li>Recalculates dimensional weight using carrier rules</li>
        <li>Flags discrepancies over 5%</li>
        <li>Generates a dispute-ready summary</li>
      </ul>

      <p>Total build time: ~6 hours. Total savings: $14,187 over 12 months.</p>

      <h2>What I Found</h2>

      <p>Three recurring issues:</p>

      <p><strong>1. Dimensional weight rounding errors.</strong> The carrier's system rounded up to the nearest pound; contract terms specified rounding to the nearest ounce. Small difference, but it added up.</p>

      <p><strong>2. Duplicate accessorial charges.</strong> "Residential delivery" fees were applied twice on 23% of invoices. Copy-paste error in their billing software, likely.</p>

      <p><strong>3. Zone miscalculation.</strong> A warehouse relocation changed the origin ZIP, but the carrier's system wasn't updated. Every shipment was charged from the old zone (farther = more expensive).</p>

      <h2>Why This Matters</h2>

      <p>Logistics is a low-margin game. A 2% error can erase profitability. But most companies don't audit invoices — too time-consuming, too tedious.</p>

      <p>That's where simple tools shine. You don't need a fancy SaaS platform. A well-designed spreadsheet + a few hours of auditing can uncover thousands in hidden costs.</p>

      <h2>Takeaway</h2>

      <p>If you're paying for anything at scale (freight, SaaS subscriptions, cloud hosting), assume there are billing errors. Build a lightweight audit system. It pays for itself immediately.</p>
    `,
    reading_time: 3,
    published: true
  },
  {
    id: "post-4",
    title: "Surfing and Software: Lessons from the Lineup",
    slug: "surfing-software-lessons",
    date: "2025-09-22T08:00:00Z",
    tags: ["surfing", "philosophy", "learning"],
    category: "Essays",
    excerpt: "What paddling out at Blacks Beach taught me about timing, patience, and knowing when to commit.",
    body_html: `
      <p>I started surfing two years ago. Still terrible at it. But the lessons translate surprisingly well to building software.</p>

      <h2>1. Positioning Matters More Than Effort</h2>

      <p>You can paddle your heart out, but if you're in the wrong spot, you'll miss every wave. Surfing rewards spatial awareness and timing, not just brute force.</p>

      <p>Same with software. You can work 80-hour weeks on the wrong feature and get nowhere. Positioning — picking the right problem, at the right time, for the right audience — is half the battle.</p>

      <h2>2. Commit or Get Crushed</h2>

      <p>Hesitation is death. When a wave comes, you either paddle hard and pop up, or you halfheartedly commit and get pummeled.</p>

      <p>Projects are the same. Half-launched products, half-written posts, half-baked ideas — they linger in draft purgatory. Full commitment doesn't guarantee success, but hesitation guarantees obscurity.</p>

      <h2>3. Wipeouts Are Data</h2>

      <p>Every wipeout teaches you something: wrong angle, late takeoff, too far forward. The feedback loop is immediate and unforgiving.</p>

      <p>Shipping is the software equivalent. Launch something, watch it fail (or succeed), adjust. Waiting for certainty is waiting forever.</p>

      <h2>4. Respect the Locals</h2>

      <p>Surf etiquette exists for a reason: safety, fairness, community. Break the rules, and you'll get called out (or worse).</p>

      <p>Online communities have their own etiquette. Lurk first. Contribute thoughtfully. Don't be the person who drops in on someone else's wave.</p>

      <h2>The Long Game</h2>

      <p>Surfing is humbling. You never "master" it — you just get slightly less bad. The ocean doesn't care about your ego.</p>

      <p>Building things is similar. There's always a better solution, a cleaner implementation, a smarter approach. The goal isn't perfection; it's incremental improvement and occasional moments of flow.</p>

      <p>Now if you'll excuse me, I have a date with some head-high waves and inevitable humility.</p>
    `,
    reading_time: 4,
    published: true
  },
  {
    id: "post-3",
    title: "The VibeCode Experiment: Building a Music Visualizer in Rust",
    slug: "vibecode-experiment",
    date: "2025-09-15T16:00:00Z",
    tags: ["code", "projects", "rust"],
    category: "Projects",
    excerpt: "What started as a weekend hack turned into a deep dive on audio processing, WebAssembly, and why Rust makes you a better developer.",
    body_html: `
      <p>I wanted a music visualizer that didn't suck. Most are either too flashy (RGB vomit) or too boring (flat bars). I wanted something organic, responsive, alive.</p>

      <p>So I built VibeCode: a real-time audio visualizer using Rust + WebAssembly. It analyzes frequency data and renders fluid, wave-like animations synced to your music.</p>

      <h2>Why Rust?</h2>

      <p>Two reasons:</p>

      <p><strong>1. Performance.</strong> Real-time audio processing in JavaScript is... suboptimal. Rust compiles to WebAssembly, which runs near-native speeds in the browser. Smooth 60fps animations, even on old hardware.</p>

      <p><strong>2. Learning.</strong> Rust forces you to think deeply about memory, ownership, and concurrency. It's like doing push-ups for your brain — painful at first, but you get stronger.</p>

      <h2>The Technical Stack</h2>

      <ul>
        <li><strong>Audio input:</strong> Web Audio API (frequency analysis via FFT)</li>
        <li><strong>Processing:</strong> Rust (compiled to WASM)</li>
        <li><strong>Rendering:</strong> Canvas API + custom shaders</li>
        <li><strong>UI:</strong> Vanilla JS (no framework bloat)</li>
      </ul>

      <h2>What I Learned</h2>

      <p><strong>Rust's borrow checker is your friend.</strong> Yes, it's annoying at first. But once you understand ownership, entire classes of bugs disappear. No null pointer exceptions. No race conditions. Just correct code.</p>

      <p><strong>WebAssembly is the future.</strong> We're at the "early jQuery" phase — tooling is rough, debugging is painful, but the potential is massive. Expect WASM to power the next generation of web apps.</p>

      <p><strong>Constraints breed creativity.</strong> Audio visualizers are an old idea. But limiting the aesthetic (organic shapes, muted colors, smooth motion) forced me to explore subtler design choices.</p>

      <h2>Try It</h2>

      <p>VibeCode is live at <a href="https://vibecode.dev">vibecode.dev</a>. Plug in your Spotify, upload a file, or use the demo tracks. Best experienced with headphones and dim lights.</p>

      <p>Code is open source. Contributions welcome. PRs reviewed with excessive scrutiny. 😉</p>
    `,
    reading_time: 3,
    published: true
  },
  {
    id: "post-2",
    title: "My Daily System (2025 Edition)",
    slug: "daily-system-2025",
    date: "2025-09-08T09:00:00Z",
    tags: ["productivity", "systems", "habits"],
    category: "Notes",
    excerpt: "The routines, tools, and rituals that keep me functional. Spoiler: it's simpler than you think.",
    body_html: `
      <p>People love asking about "productivity systems." Here's mine. It's boring, but it works.</p>

      <h2>Morning (6:00 – 9:00 AM)</h2>

      <ul>
        <li><strong>6:00:</strong> Wake up. No snooze. Phone stays in another room.</li>
        <li><strong>6:15:</strong> Coffee + journal. Three pages, stream-of-consciousness. Clears mental clutter.</li>
        <li><strong>7:00:</strong> Deep work block. No email, no Slack. Usually coding or writing.</li>
        <li><strong>8:30:</strong> Quick workout. Nothing fancy — push-ups, squats, stretches.</li>
        <li><strong>9:00:</strong> Shower, breakfast, comms check.</li>
      </ul>

      <h2>Work (9:00 AM – 5:00 PM)</h2>

      <p>I batch tasks by energy level:</p>

      <ul>
        <li><strong>High energy (9–12):</strong> Client calls, problem-solving, creative work.</li>
        <li><strong>Medium energy (12–2):</strong> Email, admin, light coding.</li>
        <li><strong>Low energy (2–5):</strong> Meetings, research, organizing notes.</li>
      </ul>

      <p>Lunch is at 12:30. Always away from the desk. Usually leftovers or a quick walk to a taco shop.</p>

      <h2>Evening (5:00 – 10:00 PM)</h2>

      <ul>
        <li><strong>5:00:</strong> Hard stop. Close laptop. No "just one more thing."</li>
        <li><strong>5:30:</strong> Cook dinner. This is therapy disguised as a meal.</li>
        <li><strong>7:00:</strong> Free time. Read, tinker with side projects, watch something.</li>
        <li><strong>9:30:</strong> Wind down. No screens. Stretch, plan tomorrow, lights out by 10:30.</li>
      </ul>

      <h2>Tools I Actually Use</h2>

      <ul>
        <li><strong>Calendar:</strong> Google Calendar (simple, syncs everywhere)</li>
        <li><strong>Tasks:</strong> Things 3 (beautiful, fast, minimal friction)</li>
        <li><strong>Notes:</strong> Obsidian (plain text, future-proof)</li>
        <li><strong>Writing:</strong> iA Writer (distraction-free markdown)</li>
        <li><strong>Code:</strong> VS Code (the standard for a reason)</li>
      </ul>

      <h2>What I've Stopped Doing</h2>

      <ul>
        <li>Tracking every minute (Toggl, RescueTime, etc.) — too much overhead</li>
        <li>Morning news/social media — just noise</li>
        <li>Complex GTD setups — simple task lists win</li>
        <li>Forcing "flow state" — it happens or it doesn't</li>
      </ul>

      <h2>The Real Secret</h2>

      <p>Consistency beats optimization. A mediocre system followed daily > perfect system followed sporadically.</p>

      <p>Start simple. Adjust as needed. Ignore productivity gurus (including me).</p>
    `,
    reading_time: 3,
    published: true
  },
  {
    id: "post-1",
    title: "Lessons from Fermenting 50 Pounds of Vegetables",
    slug: "fermenting-vegetables-lessons",
    date: "2025-08-28T12:00:00Z",
    tags: ["cooking", "experimentation", "learning"],
    category: "Essays",
    excerpt: "What a kimchi obsession taught me about patience, microbiology, and accepting failure as data.",
    body_html: `
      <p>Last winter, I fermented 50 pounds of vegetables. Kimchi, sauerkraut, pickles, hot sauce. My fridge looked like a science experiment. My apartment smelled... alive.</p>

      <p>Here's what I learned.</p>

      <h2>1. Patience is a Skill</h2>

      <p>Fermentation happens on its own timeline. You can't rush it. The bacteria don't care about your schedule.</p>

      <p>First batch of kimchi? I peeked every day. "Is it ready? Is it fizzy enough?" The constant interference slowed the process. Lesson: set it, forget it, check in a week.</p>

      <p>Same with creative work. Some ideas need to marinate. Forcing them prematurely yields mediocre results.</p>

      <h2>2. Failure is Data</h2>

      <p>Batch #3: mold. Batch #7: too salty. Batch #12: mysteriously slimy.</p>

      <p>Each failure taught me something: ratios matter, temperature matters, cleanliness REALLY matters. I kept a fermentation log (yes, really). Tracked variables, adjusted recipes, iterated.</p>

      <p>By batch #20, I had a reliable system. Consistent results. Reproducible flavor profiles. The early failures weren't wasted — they were R&D.</p>

      <h2>3. Embrace the Mess</h2>

      <p>Fermentation is chaotic. Jars leak. Smells linger. Counter space disappears. You can't be precious about it.</p>

      <p>Building things (software, businesses, lives) is similarly messy. If you wait for the perfect setup, you'll never start. Embrace the chaos. Clean up later.</p>

      <h2>4. Constraints Breed Creativity</h2>

      <p>I limited myself to seasonal, local vegetables. No exotic imports. This forced experimentation: radish greens, carrot tops, beet stems.</p>

      <p>Result? Unique flavors I wouldn't have discovered otherwise. Turns out kohlrabi makes killer kimchi.</p>

      <p>Constraints clarify. They force you to work with what's available, not what's ideal.</p>

      <h2>5. Share the Weird Stuff</h2>

      <p>I gave jars to friends. Most reactions: "This is... interesting." Translation: weird. But a few people loved it. Asked for recipes. Started their own experiments.</p>

      <p>Putting your work (fermented or otherwise) into the world is scary. Not everyone will get it. That's okay. The ones who do? They're your people.</p>

      <h2>Final Thought</h2>

      <p>Fermentation is just controlled decay. You're harnessing rot to create something better.</p>

      <p>Life works the same way: take what's raw, add time and pressure, let it transform. The result won't be perfect, but it'll be yours.</p>

      <p>Now if you'll excuse me, I have a batch of hot sauce that needs burping.</p>
    `,
    reading_time: 4,
    published: true
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
    id: "proj-3",
    title: "VibeCode",
    slug: "vibecode",
    excerpt: "Real-time music visualizer built with Rust + WebAssembly. Organic animations synced to your tunes.",
    link: "https://vibecode.dev",
    featured: true,
    tags: ["rust", "wasm", "audio"]
  },
  {
    id: "proj-2",
    title: "Shindig Productions",
    slug: "shindig",
    excerpt: "Event planning toolkit. CRM + logistics + vendor management. Built for small teams.",
    link: "https://shindig.productions",
    featured: true,
    tags: ["saas", "events"]
  },
  {
    id: "proj-1",
    title: "Logistics Audit Tool",
    slug: "logistics-audit",
    excerpt: "Google Sheets template for catching freight billing errors. Saved clients $50k+ so far.",
    link: "#",
    featured: false,
    tags: ["tools", "consulting"]
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
