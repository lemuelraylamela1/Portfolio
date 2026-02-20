import { Navigation } from "../components/navigation";
import { Footer } from "./../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lemuel Ray Lamela",
  description:
    "Explore my portfolio of web development projects showcasing expertise in React, Next.js, and full-stack development.",
};

const projects = [
  // {
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-stack e-commerce solution with real-time inventory management, payment processing via Stripe, and an admin dashboard for order management.",
  //   tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   featured: true,
  // },
  {
    title: "Job Application Tracker",
    description:
      "A Job Application Tracker Kanban Board that helps users organize applications across stages like Applied, Interview, and Offer using an intuitive drag-and-drop interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/lemuelraylamela1/Job-Application-Tracker",
    live: "https://job-application-tracker-lem.vercel.app/",
    featured: true,
  },
  {
    title: "AI-Powered Dashboard",
    description:
      "Analytics dashboard powered by machine learning for business intelligence insights. Features real-time data visualization and predictive analytics.",
    tech: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "A collaboration platform for teams with video conferencing, document sharing, and real-time editing capabilities using WebRTC and Socket.io.",
    tech: ["Next.js", "WebRTC", "Socket.io", "Redis", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, and deadline tracking.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application featuring location-based forecasts, interactive maps, and severe weather alerts.",
    tech: ["Next.js", "OpenWeather API", "Mapbox", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with MDX support, syntax highlighting, and a custom CMS for content management.",
    tech: ["Next.js", "MDX", "Contentlayer", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Fitness Tracker",
    description:
      "A comprehensive fitness tracking app with workout logging, progress visualization, and social features for sharing achievements.",
    tech: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Recipe Finder",
    description:
      "A recipe discovery app with ingredient-based search, meal planning, and nutritional information powered by external APIs.",
    tech: ["React", "Spoonacular API", "Redux", "SCSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-[var(--gradient-end)]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Projects
              </h3>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
                Things I&apos;ve built.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A collection of projects that showcase my skills in full-stack
                development. Each project represents a unique challenge and
                learning opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">
              Featured Projects
            </h2>

            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  {/* Project Image Placeholder */}
                  <div
                    className={`relative aspect-video rounded-xl overflow-hidden bg-card border border-border/50 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[var(--gradient-end)]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-muted-foreground/50">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div
                    className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Featured Project
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-2">
                        {project.title}
                      </h3>
                    </div>

                    <div className="p-6 rounded-lg bg-card border border-border/50">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-primary font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View on GitHub">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View live site">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">
              Other Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>

                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View on GitHub">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View live site">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
