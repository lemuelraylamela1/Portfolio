import { Navigation } from "../components/navigation";
import { Footer } from "./../components/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Lemuel Ray Lamela",
  description:
    "Learn about Lemuel Ray Lamela, a software engineer focused on building dependable, accessible web products.",
};

const experience = [
  {
    period: "2026 — Present",
    role: "Software Engineer",
    company: "Freelance",
    description:
      "Collaborate with developers, designers, and testers to build and maintain client websites. Work under project direction to implement features, fix issues, and improve existing applications based on client requirements.",
    tech: [
      "React",
      "Nest.js",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
      "React Native",
      "Prisma",
    ],
  },

  {
    period: "2024 — 2026",
    role: "Analyst Programmer",
    company: "Sun Life Global Solutions",
    description:
      "Designed and maintained software and database solutions supporting Chinese-language data workflows. Transitioned from contractor to direct employee based on performance and specialized expertise.",
    tech: ["Oracle SQL", "Shell scripting", "Informatica PowerCenter", "IDMC"],
  },
  {
    period: "2022 — 2024",
    role: "Analyst Programmer",
    company: "Vertere Global Solutions Inc.",
    description:
      "Developed software and database solutions for Chinese-language data workflows while assigned to Sun Life Global Solutions.",
    tech: ["Oracle SQL", "Shell scripting", "Informatica PowerCenter", "IDMC"],
  },
  {
    period: "2022 — 2022",
    role: "Associate Software Engineer",
    company: "Integratr Corp",
    description:
      "Built internal and government-facing websites using Vue.js and Laravel.",
    tech: [
      "Vue JS",
      "React JS",
      "Laravel",
      "Postman",
      "WordPress(Elementor)",
      "Bootstrap",
    ],
  },
  {
    period: "2021 — 2021",
    role: "Website Builder",
    company: "Philippine Bible Worldwide Institute",
    description: "Built and maintained their website using WordPress.",
    tech: ["HTML", "CSS", "WordPress", "Bootstrap"],
  },
  {
    period: "2019 — 2020",
    role: "IT Admin Staff",
    company: "Honda Cars Cavite",
    description:
      "Provided full-time hardware, software, network, and day-to-day IT support.",
    tech: ["Software", "Hardware", "Network", "Social Media Admin"],
  },
];

const education = [
  {
    period: "2014 — 2019",
    degree: "B.S. Computer Science",
    institution: "Cavite State University Main Campus",
    description: "Specialized in software engineering and web technologies.",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    description: "Interfaces that are responsive, accessible, and maintainable.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Data",
    description: "Application services, databases, and cloud-backed products.",
    items: [
      "Node.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "Oracle SQL",
      "Supabase",
      "Firebase",
    ],
  },
  {
    category: "Tools & Platforms",
    description: "Tools used to plan, ship, and maintain production work.",
    items: ["Git", "GitHub", "Jira", "Vercel"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-20">
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <span className="h-px w-10 bg-primary" aria-hidden />
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em]">
                    About
                  </p>
                </div>
                <h1 className="max-w-3xl text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.02] text-foreground text-balance">
                  Building useful software with clarity and care.
              </h1>
                <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>
                    I&apos;m Lemuel, a software engineer based in Cavite,
                    Philippines. I build dependable web applications that make
                    complex tasks feel simple and intuitive.
                  </p>
                  <p>
                    My experience spans frontend and backend development,
                    database systems, ETL workflows, and production support. I
                    approach every project with an emphasis on accessibility,
                    maintainable code, and real user needs.
                  </p>
                </div>
              </div>

              <aside className="self-end border-l border-border pl-6">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Based in
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-foreground">
                      Cavite, Philippines
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Current role
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-foreground">
                      Freelance Software Engineer
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Focus
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-foreground">
                      Full-stack web development
                    </dd>
                  </div>
                </dl>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Start a conversation
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden>
                    →
                  </span>
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-20 border-t border-border/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-10 lg:gap-20">
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em]">
                  Career
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  Experience
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Professional experience across web engineering, enterprise
                  data, and IT operations.
                </p>
              </div>

              <div className="border-t border-border">
                {experience.map((job) => (
                  <article
                    key={`${job.company}-${job.role}`}
                    className="grid sm:grid-cols-[8rem_1fr] gap-3 sm:gap-6 py-8 border-b border-border">
                    <p className="text-xs font-medium tabular-nums text-muted-foreground">
                      {job.period}
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {job.company}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {job.description}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        {job.tech.map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center gap-2 text-xs text-foreground/80">
                            <span
                              className="h-1 w-1 rounded-full bg-primary"
                              aria-hidden
                            />
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 md:py-20 border-t border-border/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-10 lg:gap-20">
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em]">
                  Foundation
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  Education
                </h2>
              </div>

              <div className="border-t border-border">
                {education.map((edu) => (
                  <article
                    key={edu.institution}
                    className="grid sm:grid-cols-[8rem_1fr] gap-3 sm:gap-6 py-8 border-b border-border">
                    <p className="text-xs font-medium tabular-nums text-muted-foreground">
                      {edu.period}
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {edu.institution}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Detail Section */}
        <section className="py-16 md:py-20 border-t border-border/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em]">
                Capabilities
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                Technical skills
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A practical full-stack toolkit for taking web products from
                interface to deployment.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 border-y border-border md:divide-x divide-border">
              {skillGroups.map((group, index) => (
                <article
                  key={group.category}
                  className="py-7 md:px-7 first:pl-0 last:pr-0 border-b last:border-b-0 md:border-b-0 border-border">
                  <p className="text-xs text-primary tabular-nums">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {group.category}
                  </h3>
                  <p className="mt-2 min-h-12 text-xs leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-foreground/90">
                        <span
                          className="h-1 w-1 rounded-full bg-primary"
                          aria-hidden
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
              <p className="text-sm text-muted-foreground">
                Have a project that fits this stack?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-primary">
                Get in touch
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
