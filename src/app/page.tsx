
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Command,
  Container,
  Cpu,
  GitBranch,
  Layers3,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

import ProfessionalExperience from "@/components/sections/ProfessionalExperience";


/* =========================================================
   PORTFOLIO DATA
   ========================================================= */

const portfolio = {
  name: "Md Shahariar Hassan",
  github: "https://github.com/ronok-shahariar",
  role: "Embedded Software Engineer",
  specialization: "Software Engineering & DevOps",
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

const expertise = [
  {
    number: "01",
    icon: Code2,
    title: "Systems Software",
    description:
      "Designing and developing C/Python integration components for Linux-based DPDK data pipelines, shared-memory communication, and remote service APIs.",
    tags: ["C", "Python", "Linux", "DPDK", "POSIX IPC"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "CI/CD & Automation",
    description:
      "Building reproducible test environments and automated code-validation workflows to detect integration issues before software reaches target hardware.",
    tags: ["Docker", "CI/CD", "Bitbucket", "Git"],
  },
  {
    number: "03",
    icon: Container,
    title: "Containerized Infrastructure",
    description:
      "Packaging interconnected C and Python services, managing dependencies, and supporting reliable startup and integration on Linux devices.",
    tags: ["Docker", "Microservices", "gRPC", "Linux"],
  },
  {
    number: "04",
    icon: Activity,
    title: "Monitoring & Observability",
    description:
      "Developing Python metrics exporters that connect gRPC telemetry to Prometheus for remote monitoring and Grafana-based visualization.",
    tags: ["Prometheus", "Grafana", "Python", "gRPC"],
  },
];

const projects = [
  {
    number: "01",
    category: "DEVOPS / CI/CD / TEST AUTOMATION",
    title: "Hardware-Independent DPDK Testing",
    description:
      "Built a Docker-based DPDK validation environment that lets developers test code modifications without waiting for access to expensive, shared networking hardware.",
    contribution:
      "Reproducible environment, virtual packet testing, and automated validation.",
    tags: ["Docker", "DPDK", "testpmd", "CI/CD", "Linux"],
    icon: Workflow,
  },
  {
    number: "02",
    category: "SOFTWARE ARCHITECTURE / SYSTEMS",
    title: "DPDK-to-gRPC Data Pipeline",
    description:
      "Designed and implemented the C/Python data-delivery architecture connecting DPDK shared-memory processing to client-facing gRPC APIs.",
    contribution:
      "Architecture design, C/Python development, and systems integration.",
    tags: ["C", "Python", "DPDK", "POSIX IPC", "gRPC"],
    icon: Network,
  },
  {
    number: "03",
    category: "DEVOPS / OBSERVABILITY",
    title: "Containerized Telemetry Infrastructure",
    description:
      "Developed a containerized Python exporter connecting gRPC telemetry to Prometheus, enabling remote Grafana visualization and automatic startup on Linux devices.",
    contribution:
      "Metrics exporter development, containerization, and monitoring integration.",
    tags: ["Docker", "Python", "Prometheus", "Grafana"],
    icon: Activity,
  },
  {
    number: "04",
    category: "SOFTWARE SECURITY / RELEASE ENGINEERING",
    title: "Secure Software Licensing & Release Management",
    description:
      "Architected a reusable licensing framework connecting protected software builds, administrative approvals, signed offline activation, and device-bound runtime validation.",
    contribution:
      "End-to-end architecture, licensing DevKit, C/Python integration, web administration, and release automation.",
    tags: ["C", "Python", "Docker", "Keygen", "Linux", "CMake"],
    icon: ShieldCheck,
  },
];

/* =========================================================
   NAVIGATION
   ========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a
          href="#home"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-icon">
            <Terminal size={19} strokeWidth={2.4} />
          </span>

          <span>
            SH<span className="brand-dot">.</span>DEVOPS
          </span>
        </a>

        <nav
          className={open ? "nav-links nav-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            className="nav-github"
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch size={17} />
            GitHub
            <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={
            open ? "Close navigation" : "Open navigation"
          }
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}

/* =========================================================
   ACTUAL SYSTEM ARCHITECTURE PREVIEW

   Simplified telemetry path:
   DPDK Secondary -> gRPC -> Python Exporter -> Prometheus

   Remote Grafana visualization is represented below.
   ========================================================= */

function Infrastructure() {
  const nodes = [
    {
      label: "DATA SOURCE",
      name: "DPDK / C",
      icon: Cpu,
    },
    {
      label: "API SERVICE",
      name: "gRPC",
      icon: Server,
    },
    {
      label: "METRICS",
      name: "Exporter",
      icon: Code2,
    },
    {
      label: "MONITORING",
      name: "Prometheus",
      icon: Activity,
    },
  ];

  return (
    <div className="architecture-card">
      <div className="architecture-top">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>

        <span>telemetry.architecture</span>

        <span className="architecture-status">
          <span className="status-light" />
          SYSTEM DESIGN
        </span>
      </div>

      <div className="architecture-content">
        <div className="architecture-heading">
          <Layers3 size={17} />
          <span>DPDK Telemetry Architecture</span>
        </div>

        <div className="pipeline">
          {nodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <div
                className="pipeline-step"
                key={node.name}
              >
                <motion.div
                  className="pipeline-node"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.12,
                  }}
                >
                  <div className="pipeline-icon">
                    <Icon size={23} />
                  </div>

                  <span className="pipeline-label">
                    {node.label}
                  </span>

                  <strong>{node.name}</strong>
                </motion.div>

                {index < nodes.length - 1 && (
                  <div
                    className="pipeline-link"
                    aria-hidden="true"
                  >
                    <ChevronRight size={17} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="architecture-footer">
          <span>
            <ShieldCheck size={16} />
            Remote visualization via Grafana
          </span>

          <span className="mono">
            C / PYTHON / DOCKER
          </span>
        </div>
      </div>
    </div>
  );
}

{/* ===============================================
    PROFESSIONAL EXPERIENCE
    =============================================== */}




/* =========================================================
   INTERACTIVE TERMINAL
   ========================================================= */

type TerminalLine = {
  command?: string;
  output?: string;
};

const terminalResponses: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about       Professional background",
    "  skills      Engineering stack",
    "  projects    Featured engineering work",
    "  devops      DevOps responsibilities",
    "  contact     Contact details",
    "  clear       Clear terminal",
  ],

  about: [
    "Md Shahariar Hassan",
    "Embedded Software Engineer",
    "",
    "Focus areas:",
    "Software Architecture",
    "Linux Systems",
    "DevOps Automation",
    "High-Performance Networking",
  ],

  skills: [
    "Languages:       C, Python, TypeScript",
    "Systems:         Linux, DPDK, POSIX IPC",
    "Infrastructure:  Docker, Git, CI/CD",
    "Integration:     gRPC, Microservices",
    "Observability:   Prometheus, Grafana",
    "Web:             Next.js, React",
  ],

  projects: [
    "[01] Hardware-Independent DPDK Testing",
    "[02] DPDK-to-gRPC Data Pipeline",
    "[03] Containerized Telemetry Infrastructure",
    "",
    "Explore the project cards for summaries.",
  ],

  devops: [
    "Engineering contributions:",
    "",
    "- Dockerized DPDK test environments",
    "- Automated code validation",
    "- Containerized runtime services",
    "- Dependency compatibility",
    "- Python metrics exporters",
    "- Prometheus / Grafana integration",
    "- Service startup automation",
  ],

  contact: [
    "GitHub:",
    "github.com/ronok-shahariar",
    "",
    "Open the Contact section to connect.",
  ],
};

function InteractiveTerminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      output:
        "Welcome to Shahariar's engineering terminal.",
    },
    {
      output:
        "Type 'help' to explore the portfolio.",
    },
  ]);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const input = command.trim().toLowerCase();

    if (!input) return;

    if (input === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const response = terminalResponses[input] ?? [
      `Command not found: ${input}`,
      "Type 'help' for available commands.",
    ];

    setHistory((previous) => [
      ...previous,
      { command: input },
      ...response.map((output) => ({ output })),
    ]);

    setCommand("");
  }

  return (
    <div className="terminal-window">
      <div className="terminal-top">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>

        <span>visitor@shahariar — bash</span>

        <Command size={15} />
      </div>

      <div
        className="terminal-body"
        aria-label="Interactive engineering terminal"
      >
        {history.map((line, index) => (
          <div
            key={index}
            className={
              line.command
                ? "terminal-command"
                : "terminal-output"
            }
          >
            {line.command && (
              <span className="terminal-prompt">
                ➜ ~{" "}
              </span>
            )}

            {line.command ?? line.output}
          </div>
        ))}

        <form
          className="terminal-form"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="terminal-input"
            className="terminal-prompt"
          >
            ➜ ~
          </label>

          <input
            id="terminal-input"
            type="text"
            autoComplete="off"
            spellCheck={false}
            value={command}
            onChange={(event) =>
              setCommand(event.target.value)
            }
            placeholder="type a command..."
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}

/* =========================================================
   REUSABLE SECTION HEADING
   ========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

/* =========================================================
   HOMEPAGE
   ========================================================= */

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* ===============================================
          HERO SECTION
          =============================================== */}

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-grid" />

        <div className="shell hero-content">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="availability">
              <span className="status-light" />
              SOFTWARE ENGINEERING & DEVOPS
            </div>

            <div className="hero-label">
              <span className="mono">
                01 / ENGINEERING PORTFOLIO
              </span>
            </div>

            <h1>
              I build the
              <br />
              <span className="gradient-text">
                software.
              </span>
              <br />
              And engineer
              <br />
              <span className="outline-text">
                how it runs.
              </span>
            </h1>

            <p className="hero-description">
              I&apos;m{" "}
              <strong>{portfolio.name}</strong>, an{" "}
              {portfolio.role} specializing in
              C/Python systems integration, Linux,
              DPDK, containerized infrastructure,
              and automated software validation.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="button-primary"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <GitBranch size={18} />
                View GitHub
              </a>
            </div>

            <div className="hero-bottom">
              <span>
                <Check size={15} />
                Architecture & Development
              </span>

              <span>
                <Check size={15} />
                CI/CD & Reliability
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <Infrastructure />
          </motion.div>
        </div>

        <a href="#projects" className="scroll-cue">
          <ArrowDown size={16} />
          EXPLORE ENGINEERING WORK
        </a>
      </section>

      {/* ===============================================
          TECHNOLOGY STRIP
          =============================================== */}

      <section
        className="tech-strip"
        aria-label="Core engineering technologies"
      >
        <div className="shell tech-strip-inner">
          <span className="tech-strip-label">
            CORE STACK
          </span>

          <div>
            <span>LINUX</span>
            <span>DOCKER</span>
            <span>DPDK</span>
            <span>C / PYTHON</span>
            <span>CI/CD</span>
            <span>gRPC</span>
          </div>
        </div>
      </section>

      {/* ===============================================
          EXPERTISE
          =============================================== */}

      <section
        className="section expertise-section"
        id="expertise"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="01 / ENGINEERING EXPERTISE"
            title="From code to infrastructure."
            description="I work across software development, systems integration, automated validation, and the infrastructure that supports reliable application delivery."
          />

          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  className="expertise-card"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <div className="card-top">
                    <div className="card-icon">
                      <Icon size={25} />
                    </div>

                    <span className="card-number">
                      {item.number}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===============================================
          FEATURED PROJECTS
          =============================================== */}

      <section
        className="section projects-section"
        id="projects"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="02 / SELECTED ENGINEERING WORK"
            title="Real problems. Engineered solutions."
            description="Selected professional work spanning hardware-independent CI/CD testing, cross-language data pipeline architecture, and containerized monitoring infrastructure."
          />

          <div className="project-list">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  className="project-card"
                  key={project.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <div className="project-graphic">
                    <span className="project-graphic-grid" />

                    <Icon
                      size={48}
                      strokeWidth={1.25}
                    />

                    <span className="project-graphic-label">
                      SYSTEM / {project.number}
                    </span>
                  </div>

                  <div className="project-info">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <p>
                      <strong
                        style={{
                          color: "#bcd5ff",
                        }}
                      >
                        My contribution:
                      </strong>{" "}
                      {project.contribution}
                    </p>

                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.number === "01" && (
                      <div className="project-action">
                        <a
                          href="/projects/hardware-independent-dpdk-testing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="case-study-btn"
                          aria-label={`View case study: ${project.title} (opens in new tab)`}
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    )}

                    {project.number === "02" && (
                      <div className="project-action">
                        <a
                          href="/projects/dpdk-grpc-data-pipeline"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="case-study-btn"
                          aria-label={`Explore ${project.title} case study (opens in new tab)`}
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    )}

                    {project.number === "03" && (
                      <div className="project-action">
                        <a
                          href="/projects/containerized-observability"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="case-study-btn"
                          aria-label={`Explore ${project.title} case study (opens in new tab)`}
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    )}

                    {project.number === "04" && (
                      <div className="project-action">
                        <a
                          href="/projects/secure-software-licensing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="case-study-btn"
                          aria-label={`Explore ${project.title} case study (opens in new tab)`}
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    )}

                  </div>

                  <span className="project-index">
                    {project.number}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===============================================
          INTERACTIVE TERMINAL
          =============================================== */}

      {/* PROFESSIONAL EXPERIENCE */}
      
      <ProfessionalExperience />

      {/* PREVIOUS PART-TIME PROJECTS */}
      <div className="shell">
        <div className="web-portfolio-card">
          <div className="web-portfolio-content">
            <div className="web-portfolio-icon">
              <Code2 size={20} />
            </div>

            <div>
              <span className="web-portfolio-label">
                PREVIOUS PART-TIME WORK
              </span>

              <h4>Selected Web Projects</h4>

              <p>
                A small collection of websites and interactive
                applications developed for part-time client work
                and independent projects.
              </p>
            </div>
          </div>

          <a
            href="https://porfolio-ronok.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="web-portfolio-button"
            aria-label="View previous web projects (opens in new tab)"
          >
            View Web Projects
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* INTERACTIVE TERMINAL */}
      <section
        className="section terminal-section"
        id="terminal"
      >
        <div className="shell terminal-layout">
          <div className="terminal-intro">
            <span className="eyebrow">
              <span className="eyebrow-line" />
              03 / INTERACTIVE
            </span>

            <h2>
              Explore my
              <br />

              <span className="gradient-text">
                engineering work.
              </span>
            </h2>

            <p>
              Prefer the command line? Explore
              my technical background,
              engineering projects, and
              DevOps experience directly
              through the terminal.
            </p>

            <div className="terminal-suggestions">
              {[
                "help",
                "about",
                "skills",
                "projects",
                "devops",
              ].map((item) => (
                <span key={item}>
                  <ChevronRight size={13} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <InteractiveTerminal />
        </div>
      </section>

      {/* ===============================================
          CONTACT
          =============================================== */}

      <section
        className="contact-section"
        id="contact"
      >
        <div className="shell contact-inner">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            04 / CONNECT
          </span>

          <h2>
            Let&apos;s build reliable
            engineering systems.
          </h2>

          <p>
            Interested in systems software,
            Linux infrastructure, CI/CD
            automation, high-performance
            networking, or containerized
            applications?
          </p>

          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Connect on GitHub
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ===============================================
          FOOTER
          =============================================== */}

      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>
            © {new Date().getFullYear()}{" "}
            {portfolio.name}
          </span>

          <span>
            {portfolio.specialization}
          </span>

          <a href="#home">
            BACK TO TOP
            <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}
