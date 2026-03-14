import { Download, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

const summary =
  "7 years driving new business development across media, crypto, and logistics. $5.5M+ in revenue, always self-sourced, always at or above quota. Aside from sales, I build and operate AI systems for real business workflows: an agent stack running my own sales operations (lead gen, audits, CRM, onboarding) and live products built for other industries. Looking to bring that combination of sales execution and builder mentality to a company in manufacturing, robotics, or AI.";

const sectionLabelClassName =
  "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="px-4 pb-20 pt-28 sm:px-6">
        <div className="mx-auto w-full max-w-[780px] space-y-8">
          <Card className="border-border shadow-sm">
            <CardContent className="space-y-8 p-6 sm:p-8">
              <div className="flex flex-col gap-6 border-b border-border pb-8">
                <div className="space-y-3">
                  <p className={sectionLabelClassName}>Resume</p>
                  <div className="space-y-2">
                    <h1 className="font-normal tracking-tight text-4xl sm:text-5xl">
                      Steven Chranowski
                    </h1>
                    <p className="prose-reading max-w-none text-base text-muted-foreground sm:text-lg">
                      Sales leader and operator building practical AI systems for business workflows.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-wrap gap-x-4 gap-y-3 text-sm text-muted-foreground">
                    {contacts.map((contact) =>
                      contact.href ? (
                        <a
                          key={contact.label}
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                          className="inline-flex min-h-11 items-center underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                        >
                          {contact.label}
                        </a>
                      ) : (
                        <span key={contact.label} className="inline-flex min-h-11 items-center">
                          {contact.label}
                        </span>
                      ),
                    )}
                  </div>

                  <Button
                    size="lg"
                    className="min-h-11 shrink-0"
                    onClick={() => window.print()}
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>

              <section className="space-y-4 border-b border-border pb-8">
                <p className={sectionLabelClassName}>Summary</p>
                <div className="prose-reading max-w-none">
                  <p>{summary}</p>
                </div>
              </section>

              <section className="space-y-6 border-b border-border pb-8">
                <p className={sectionLabelClassName}>Experience</p>

                <div className="space-y-8">
                  {experience.map((entry) => (
                    <article key={entry.company} className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h2 className="text-2xl font-normal tracking-tight">
                              {entry.company}
                            </h2>
                            <p className="text-sm text-muted-foreground">{entry.location}</p>
                          </div>

                          {!entry.roles ? (
                            <div className="space-y-1 text-sm text-muted-foreground sm:text-right">
                              <p className="text-base text-foreground">{entry.role}</p>
                              <p>{entry.period}</p>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {entry.roles ? (
                        <div className="space-y-6">
                          {entry.roles.map((role) => (
                            <div key={role.title} className="space-y-3 border-l border-border pl-4">
                              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                <p className="text-base text-foreground">{role.title}</p>
                                {role.period ? (
                                  <p className="text-sm text-muted-foreground">{role.period}</p>
                                ) : null}
                              </div>
                              <ul className="space-y-3 pl-5 text-sm leading-7 text-muted-foreground marker:text-foreground sm:text-base">
                                {role.bullets.map((bullet) => (
                                  <li key={bullet} className="list-disc">
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-3 pl-5 text-sm leading-7 text-muted-foreground marker:text-foreground sm:text-base">
                          {entry.bullets.map((bullet) => (
                            <li key={bullet} className="list-disc">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              </section>

              <section className="space-y-6 border-b border-border pb-8">
                <p className={sectionLabelClassName}>Skills</p>
                <div className="space-y-5">
                  {skills.map((skill) => (
                    <div key={skill.title} className="space-y-2">
                      <h2 className="text-lg font-normal tracking-tight">{skill.title}</h2>
                      <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                        {skill.items}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6 border-b border-border pb-8">
                <p className={sectionLabelClassName}>Education</p>
                <div className="space-y-2">
                  <h2 className="text-lg font-normal tracking-tight">Rutgers University</h2>
                  <p className="text-sm text-muted-foreground sm:text-base">New Brunswick, NJ</p>
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    Bachelor of Arts in Economics, Minor in Entrepreneurship · 2019
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <p className={sectionLabelClassName}>Links</p>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/stevenchranowski/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-11 items-center justify-between border-b border-border py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                  >
                    LinkedIn
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/SteveMichael001"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-11 items-center justify-between border-b border-border py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                  >
                    GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://stevechranowski.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-11 items-center justify-between border-b border-border py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                  >
                    Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
