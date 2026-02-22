import Link from "next/link";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import Image from "next/image";

const skills = [
  "Oracle SQL",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Informatica Powercenter",
  "MongoDB",
  "Tailwind CSS",
];

const featuredProjects = [
  {
    title: "Job Application Tracker",
    description:
      "A Job Application Tracker Kanban Board that helps users organize applications across stages like Applied, Interview, and Offer using an intuitive drag-and-drop interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
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
    title: "AI Dashboard",
    description:
      "Analytics dashboard powered by machine learning for business intelligence insights.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    link: "/projects",
  },
  {
    title: "Collaboration Tool",
    description:
      "Real-time collaboration platform for teams with video conferencing and document sharing.",
    tech: ["Next.js", "WebRTC", "Socket.io", "Redis"],
    link: "/projects",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <main className="pt-24">
        <section className="relative min-h-[90vh] flex items-center">
          {/* Gradient Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-[var(--gradient-end)]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-[var(--gradient-end)]/20 to-primary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-primary font-medium">Hi, my name is</p>
                  <h1 className="text-5xl md:text-7xl font-bold text-balance">
                    <span className="text-foreground">Lemuel Ray Lamela.</span>
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground text-balance">
                    I build things for the web.
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  I&apos;m a Web developer specializing in building exceptional
                  digital experiences. Currently focused on creating accessible,
                  human-centered products.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-[var(--gradient-end)] text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                    View My Work
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
                    Get In Touch
                  </Link>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="hidden lg:flex justify-center">
                <div className="relative w-96 h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-[var(--gradient-end)] rounded-full opacity-20 blur-2xl animate-pulse" />
                  <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-[var(--gradient-end)]/30 rounded-full border border-primary/20" />
                  <div className="absolute inset-8 bg-card rounded-full border border-border flex items-center justify-center">
                    <Image
                      src="/assets/my-profile.png"
                      alt="Profile"
                      width={320}
                      height={320}
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                  Skills
                </h3>
                <h2 className="text-3xl font-bold text-foreground">
                  Technologies I work with
                </h2>
              </div>
              <div className="md:w-2/3">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 hover:border-primary/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
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
