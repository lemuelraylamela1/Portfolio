import { Navigation } from "../components/navigation";
import { Footer } from "./../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lemuel Ray Lamela",
  description:
    "Learn more about Lemuel Ray Lamela - Full Stack Developer with a passion for creating exceptional digital experiences.",
};

const experience = [
  {
    period: "2024 — Present",
    role: "Analyst Programmer",
    company: "Sun Life Global Solutions",
    description:
      "Design and code software and databases technically worked in Chinese data. Absorbed by the company because of good performance and indemand skill",
    tech: ["Oracle SQL", "Shell scripting", "Informatica PowerCenter", "IDMC"],
  },
  {
    period: "2022 — 2024",
    role: "Analyst Programmer",
    company: "Vertere Global Solutions Inc.",
    description:
      "Design and code software and databases technically worked in Chinese data. Contractual and designate in Sun Life Global Solutions",
    tech: ["Oracle SQL", "Shell scripting", "Informatica PowerCenter", "IDMC"],
  },
  {
    period: "2022 — 2022",
    role: "Associate Software Engineer",
    company: "Integratr Corp",
    description:
      "Built inhouse Website and goverment website using VueJS and Laravel",
    tech: ["Vue JS", "Laravel", "Postman", "WordPress", "Bootstrap"],
  },
  {
    period: "2021 — 2022",
    role: "Website Builder",
    company: "Philippine Bible Worldwide Institute",
    description: "Built and maintained their website using WordPress.",
    tech: ["HTML", "CSS", "WordPress", "Bootstrap"],
  },
  {
    period: "2019 — 2020",
    role: "IT Admin Staff",
    company: "Honda Cars Cavite",
    description: "Full time Hardware, Software and Network support.",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-[var(--gradient-end)]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                About Me
              </h3>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
                Crafting digital experiences with code and creativity.
              </h1>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a passionate full-stack developer based in San
                  Francisco with over 6 years of experience in building web
                  applications. My journey in tech started with a curiosity
                  about how things work on the internet, and it has evolved into
                  a career dedicated to creating meaningful digital experiences.
                </p>
                <p>
                  I specialize in building accessible, performant, and scalable
                  web applications. My approach combines technical excellence
                  with a deep understanding of user needs, ensuring that every
                  project I work on delivers real value.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community through blog posts and
                  talks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">
              Experience
            </h2>

            <div className="space-y-12">
              {experience.map((job) => (
                <div
                  key={`${job.company}-${job.role}`}
                  className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div className="text-sm text-muted-foreground">
                    {job.period}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.role}
                      </h3>
                      <p className="text-primary">{job.company}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-secondary text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">
              Education
            </h2>

            <div className="space-y-12">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div className="text-sm text-muted-foreground">
                    {edu.period}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-primary">{edu.institution}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Detail Section */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-[var(--gradient-end)]" />
                  Frontend
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>React / Next.js</li>
                  <li>TypeScript / JavaScript</li>
                  <li>Tailwind CSS / CSS3</li>
                  <li>Redux / Zustand</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-[var(--gradient-end)]" />
                  Backend
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Node.js / Express</li>
                  <li>Python / Django</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>REST APIs / GraphQL</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-[var(--gradient-end)]" />
                  Tools & Others
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Git / GitHub</li>
                  <li>Docker / Kubernetes</li>
                  <li>AWS / Vercel</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
