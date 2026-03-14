import { Download, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

type ExperienceRole = {
  title: string;
  period?: string;
  bullets: string[];
};

type ExperienceEntry =
  | {
      company: string;
      location: string;
      role: string;
      period: string;
      bullets: string[];
      roles?: never;
    }
  | {
      company: string;
      location: string;
      roles: ExperienceRole[];
      role?: never;
      period?: never;
      bullets?: never;
    };

type SkillEntry = {
  title: string;
  items: string;
};

type ContactEntry = {
  label: string;
  href?: string;
};

const experience: ExperienceEntry[] = [
  {
    company: "BridgeSource Consulting",
    location: "San Diego, CA",
    role: "Parcel Shipping Advisor",
    period: "2023 – Present",
    bullets: [
      "Generated $2.5M in recurring annual revenue through new business development: door-to-door prospecting, phone outreach, discovery, logistics audit, proposal, negotiation, and close. 100% self-sourced, zero inbound leads, zero SDR support.",
      "Closed 41 accounts with average shipping spend of $70K/year per client, delivering average cost savings of 18%+ ($12,600/client/year) through UPS/FedEx/USPS rate optimization",
      "Built and deployed an AI agent to automate sales operations and back-office workflows for the business",
    ],
  },
  {
    company: "The Block",
    location: "Remote",
    role: "Associate Director, Sponsorship Sales",
    period: "2022 – 2023",
    bullets: [
      "Closed 25 new clients in crypto/fintech/Web3 through full-cycle outbound sales of digital advertising and integrated media campaigns",
      "Grew personal revenue 75% quarter-over-quarter; increased lead-to-meeting and qualified pipeline metrics 50% in 3 months through competitive analysis and targeted prospecting",
    ],
  },
  {
    company: "Bisnow",
    location: "NYC and DC",
    roles: [
      {
        title: "Market Manager",
        period: "2019 – 2022",
        bullets: [
          "Closed and managed 150+ multichannel media campaigns generating $2M in revenue, 9% of total company B2B sales; ranked #1 out of 20 reps in deals closed and account growth",
          "Hit 107% of team sales quota in 2021 while leading a 7-person team across sales, campaign management, and account management",
          "Interviewed, hired, and mentored 3 BDRs and AMs; all promoted within 18 months",
        ],
      },
      {
        title: "Business Manager",
        bullets: [
          "Sourced and closed 100+ deals accounting for $1M+ in revenue; #1 out of 6 first-year closers",
        ],
      },
    ],
  },
];

const skills: SkillEntry[] = [
  {
    title: "Sales and Analysis",
    items:
      "Full-cycle B2B sales, cold outbound (phone + door-to-door), pipeline development, account management, contract negotiation, forecasting, logistics/invoice auditing, ROI quantification",
  },
  {
    title: "AI and Tech",
    items:
      "Claude, Claude Code, OpenClaw, Next.js, Supabase, Vercel, Twilio, ElevenLabs, Stripe; agentic AI systems, LLM applications, AI workflow automation",
  },
  {
    title: "Tools",
    items:
      "Salesforce, HubSpot, Sales Navigator, ZoomInfo, Salesloft, Outreach, Gong, Google Suite, Microsoft Office",
  },
];

const contacts: ContactEntry[] = [
  { label: "San Diego, CA" },
  { label: "609-977-1254", href: "tel:6099771254" },
  { label: "stevenchranowski3@gmail.com", href: "mailto:stevenchranowski3@gmail.com" },
  { label: "linkedin.com/in/stevenchranowski", href: "https://www.linkedin.com/in/stevenchranowski/" },
  { label: "stevechranowski.com", href: "https://stevechranowski.com" },
  { label: "github.com/SteveMichael001", href: "https://github.com/SteveMichael001" },
];

const Resume = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 [--background:222_47%_11%] [--foreground:210_40%_98%] [--card:222_47%_11%] [--card-foreground:210_40%_98%] [--popover:222_47%_11%] [--popover-foreground:210_40%_98%] [--primary:210_40%_98%] [--primary-foreground:222_47%_11%] [--secondary:217_33%_17%] [--secondary-foreground:210_40%_98%] [--muted:217_33%_17%] [--muted-foreground:215_20%_65%] [--accent:179_93%_34%] [--accent-foreground:0_0%_100%] [--border:217_33%_20%] [--input:217_33%_20%] [--ring:179_93%_34%]">
      <Header />

      <main className="px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-6 border-b border-slate-800 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-teal-400">Resume</p>
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Steven Chranowski</h1>
                </div>

                <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-slate-300">
                  {contacts.map((contact) => (
                    contact.href ? (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex min-h-11 items-center rounded-md px-2 py-1 transition-colors hover:text-white"
                      >
                        {contact.label}
                      </a>
                    ) : (
                      <span key={contact.label} className="inline-flex min-h-11 items-center rounded-md px-2 py-1">
                        {contact.label}
                      </span>
                    )
                  ))}
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-11 border-slate-700 bg-transparent px-5 text-slate-100 hover:border-slate-500 hover:bg-slate-800 hover:text-white"
              >
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>

            <div className="grid gap-8 pt-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.9fr)]">
              <div className="space-y-8">
                <section className="space-y-3">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Summary</h2>
                  <p className="max-w-3xl text-base leading-8 text-slate-200">
                    7 years driving new business development across media, crypto, and logistics. $5.5M+ in revenue, always self-sourced, always at or above quota. Aside from sales, I build and operate AI systems for real business workflows: an agent stack running my own sales operations (lead gen, audits, CRM, onboarding) and live products built for other industries. Looking to bring that combination of sales execution and builder mentality to a company in manufacturing, robotics, or AI.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Experience</h2>

                  <div className="space-y-6">
                    {experience.map((entry) => (
                      <article key={entry.company} className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                        <div className="flex flex-col gap-2 border-b border-slate-800 pb-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{entry.company}</h3>
                            <p className="text-sm text-slate-400">{entry.location}</p>
                          </div>
                          {!entry.roles && (
                            <div className="text-left sm:text-right">
                              <p className="text-base font-medium text-slate-200">{entry.role}</p>
                              <p className="text-sm text-slate-400">{entry.period}</p>
                            </div>
                          )}
                        </div>

                        {entry.roles ? (
                          <div className="space-y-5 pt-5">
                            {entry.roles.map((role) => (
                              <div key={role.title} className="space-y-3">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                  <p className="text-base font-medium text-slate-200">{role.title}</p>
                                  {role.period ? <p className="text-sm text-slate-400">{role.period}</p> : null}
                                </div>
                                <ul className="space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                                  {role.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-3">
                                      <span className="mt-2 h-2 w-2 rounded-full bg-teal-400" />
                                      <span>{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-3 pt-5 text-sm leading-7 text-slate-300 sm:text-base">
                            {entry.bullets?.map((bullet) => (
                              <li key={bullet} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-teal-400" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6">
                <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Skills</h2>
                  <div className="mt-4 space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.title} className="space-y-2">
                        <h3 className="text-base font-medium text-white">{skill.title}</h3>
                        <p className="text-sm leading-7 text-slate-300">{skill.items}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Education</h2>
                  <div className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                    <p className="text-base font-medium text-white">Rutgers University</p>
                    <p>New Brunswick, NJ</p>
                    <p>Bachelor of Arts in Economics, Minor in Entrepreneurship · 2019</p>
                  </div>
                </section>

                <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Links</h2>
                  <div className="mt-4 space-y-3">
                    <a
                      href="https://www.linkedin.com/in/stevenchranowski/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-11 items-center justify-between rounded-md border border-slate-800 px-3 text-sm text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
                    >
                      LinkedIn
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com/SteveMichael001"
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-11 items-center justify-between rounded-md border border-slate-800 px-3 text-sm text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
                    >
                      GitHub
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href="https://stevechranowski.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-11 items-center justify-between rounded-md border border-slate-800 px-3 text-sm text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
                    >
                      Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </section>
              </aside>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
