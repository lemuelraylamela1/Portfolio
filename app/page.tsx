import Link from "next/link";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import Image from "next/image";

const skillGroups = [
  {
    category: "Frontend",
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
    items: ["Git", "GitHub", "Jira", "Vercel"],
  },
];

const featuredProjects = [
  {
    title: "PlanMyDay",
    description:
      "A Day Planner that helps users organize their day-to-day activities and tasks using an intuitive drag-and-drop interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    link: "/projects",
  },
  //  {
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-stack e-commerce solution with real-time inventory management and payment processing.",
  //   tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  //   link: "/projects",
  // },
  {
    title: "Wedding Planner App",
    description:
      "A comprehensive tool designed to help couples plan and manage every detail of their wedding day. Organize timelines, track tasks, manage vendors and guests, monitor budgets, and ensure nothing is forgotten — all in one intuitive app. Perfect for keeping your wedding organized, stress-free, and on schedule.",
    tech: ["Next JS", "Tailwind CSS", "Typescript", "MongoDB"],
    link: "/projects",
  },
  {
    title: "Appointment Booking System",
    description:
      "A modern appointment booking system for health clinics that lets patients easily find doctors, view available time slots, and schedule visits in just a few clicks.",
    tech: ["Next JS", "Tailwind CSS", "Typescript", "MongoDB"],
    link: "/projects",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <main className="pt-20">
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px w-10 bg-primary" aria-hidden />
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em]">
                    Software Engineer
                  </p>
                </div>

                <h1 className="max-w-3xl text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] text-foreground">
                  Lemuel Ray
                  <span className="block text-muted-foreground">Lamela.</span>
                </h1>

                <p className="mt-7 max-w-xl text-xl md:text-2xl leading-snug text-foreground/90 text-balance">
                  I turn complex problems into clear, dependable web products.
                </p>

                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                  I build accessible, human-centered applications with thoughtful
                  interfaces and maintainable code.
                </p>

                <div className="flex flex-wrap items-center gap-5 mt-8">
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-3 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    Selected work
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden>
                      <path
                        d="M4 10h12m-4-4 4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center border-b border-border pb-1 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Let&apos;s work together
                  </Link>
                </div>
              </div>

              <figure className="relative mx-auto w-full max-w-xs lg:mx-0 lg:justify-self-end">
                <div
                  className="absolute -right-3 -top-3 h-full w-full border border-primary/40"
                  aria-hidden
                />
                <div className="relative aspect-4/5 overflow-hidden bg-card">
                  <Image
                    src="/assets/lem-dp.png"
                    alt="Portrait of Lemuel Ray Lamela"
                    fill
                    sizes="(min-width: 1024px) 320px, 80vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <span>Cavite, Philippines</span>
                  <span>Portfolio · 2026</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 lg:gap-16">
              <div className="max-w-sm">
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                  Skills
                </h3>
                <h2 className="text-3xl font-bold text-foreground text-balance">
                  Technologies I work with
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A focused stack for building reliable, accessible web products
                  — from interface to infrastructure.
                </p>
              </div>

              <div className="space-y-8">
                {skillGroups.map((group) => (
                  <div
                    key={group.category}
                    className="grid sm:grid-cols-[8.5rem_1fr] gap-3 sm:gap-6 border-t border-border/60 pt-6 first:border-t-0 first:pt-0">
                    <h4 className="text-sm font-medium text-muted-foreground tracking-wide">
                      {group.category}
                    </h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-sm text-foreground/90">
                          <span
                            className="h-1 w-1 shrink-0 rounded-full bg-primary"
                            aria-hidden
                          />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                Featured Work
              </h3>
              <h2 className="text-3xl font-bold text-foreground">
                Selected Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <Link
                  key={project.title}
                  href={project.link}
                  className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[var(--gradient-end)]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        0{index + 1}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-secondary text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                View All Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-[var(--gradient-end)] text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              Say Hello
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
