
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Box,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Command,
  Cpu,
  GitBranch,
  Layers3,
  Menu,
  Network,
  ShieldCheck,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Terminal", href: "#terminal" },
];

const expertise = [
  {
    icon: Terminal,
    number: "01",
    title: "Linux & Systems",
    description:
      "Linux environments, system-level programming, process management, memory optimization, and performance analysis.",
    tags: ["Linux", "C", "Bash", "Performance"],
  },
  {
    icon: Network,
    number: "02",
    title: "High-Speed Networking",
    description:
      "High-throughput packet-processing pipelines, kernel bypass, network interfaces, and low-latency data transport.",
    tags: ["DPDK", "Networking", "Zero-copy"],
  },
  {
    icon: Workflow,
    number: "03",
    title: "Automation & CI/CD",
    description:
      "Building reproducible development workflows, automated verification, and reliable software delivery pipelines.",
    tags: ["Git", "GitHub Actions", "CI/CD"],
  },
  {
    icon: Cloud,
    number: "04",
    title: "Cloud & Infrastructure",
    description:
      "Exploring deployment automation, containerized services, infrastructure provisioning, and operational reliability.",
    tags: ["Docker", "Cloud", "IaC"],
  },
];

const projects = [
  {
    number: "01",
    category: "NETWORKING / LINUX",
    title: "High-Performance Packet Processing",
    description:
      "Systems engineering work involving high-throughput network processing, DPDK, Linux resource optimization, and performance validation.",
    tags: ["DPDK", "Linux", "C", "Networking"],
    icon: Network,
  },
  {
    number: "02",
    category: "SYSTEMS / INTEGRATION",
    title: "FPGA-to-Host Data Pipeline",
    description:
      "Hardware-software integration for high-speed data streaming, communication interfaces, and system-level validation.",
    tags: ["FPGA", "Linux", "Data Pipeline"],
    icon: Cpu,
  },
  {
    number: "03",
    category: "DEVOPS / PORTFOLIO",
    title: "Portfolio Delivery Pipeline",
    description:
      "This Next.js portfolio is the foundation for an automated quality-check and deployment workflow using GitHub and Vercel.",
    tags: ["Next.js", "GitHub", "Vercel", "CI/CD"],
    icon: Workflow,
  },
];

const terminalResponses: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about      — Professional background",
    "  skills     — Engineering technologies",
    "  projects   — Featured engineering work",
    "  contact    — Contact information",
    "  clear      — Clear terminal history",
  ],
  about: [
    "Md Shahariar Hassan",
    "Embedded Software Engineer",
    "Focus: Linux, high-performance networking,",
    "systems engineering, and DevOps.",
  ],
  skills: [
    "Linux  •  C  •  DPDK  •  Networking",
    "Git  •  Docker  •  Automation",
    "Next.js  •  TypeScript",
  ],
  projects: [
    "[01] High-Performance Packet Processing",
    "[02] FPGA-to-Host Data Pipeline",
    "[03] Portfolio Delivery Pipeline",
    "Scroll down to explore the projects.",
  ],
  contact: [
    "GitHub: github.com/ronok-shahariar",
    "Connect through the GitHub profile.",
  ],
};

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon">
            <Terminal size={19} strokeWidth={2.4} />
          </span>
          <span>
            SH<span className="brand-dot">.</span>DEVOPS
          </span>
        </a>

        <nav className={open ? "nav-links nav-open" : "nav-links"}>
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
href="https://github.com/ronok-shahariar"
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
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}

function Infrastructure() {
  const nodes = [
    { label: "SOURCE", name: "Git", icon: Code2 },
    { label: "AUTOMATION", name: "CI/CD", icon: Workflow },
    { label: "RUNTIME", name: "Containers", icon: Box },
    { label: "DELIVERY", name: "Cloud", icon: Cloud },
  ];

  return (
    <div className="architecture-card">
      <div className="architecture-top">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <span>infrastructure.pipeline</span>
        <span className="architecture-status">
          <span className="status-light" />
          DESIGN VIEW
        </span>
      </div>

      <div className="architecture-content">
        <div className="architecture-heading">
          <Layers3 size={17} />
          <span>Delivery Architecture</span>
        </div>

        <div className="pipeline">
          {nodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <div className="pipeline-step" key={node.name}>
                <motion.div
                  className="pipeline-node"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="pipeline-icon">
                    <Icon size={23} />
                  </div>
                  <span className="pipeline-label">{node.label}</span>
                  <strong>{node.name}</strong>
                </motion.div>
                {index < nodes.length - 1 && (
                  <div className="pipeline-link">
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
            Automated delivery concept
          </span>
          <span className="mono">v1.0 / PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
}

type TerminalLine = {
  command?: string;
  output?: string;
};

function InteractiveTerminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { output: "Welcome to Shahariar's engineering terminal." },
    { output: "Type 'help' to see available commands." },
  ]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const input = command.trim().toLowerCase();
    if (!input) return;

    if (input === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const result = terminalResponses[input] ?? [
      `Command not found: ${input}`,
      "Type 'help' to see available commands.",
    ];

    setHistory((previous) => [
      ...previous,
      { command: input },
      ...result.map((output) => ({ output })),
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

      <div className="terminal-body" aria-label="Interactive terminal">
        {history.map((line, index) => (
          <div
            key={index}
            className={line.command ? "terminal-command" : "terminal-output"}
          >
            {line.command && <span className="terminal-prompt">➜ ~ </span>}
            {line.command ?? line.output}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="terminal-form">
          <label htmlFor="terminal-input" className="terminal-prompt">
            ➜ ~
          </label>
          <input
            id="terminal-input"
            type="text"
            autoComplete="off"
            spellCheck={false}
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder="type a command..."
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}

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

export default function Home() {
  return (
    <main>
      <Navbar />

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
              DEVOPS & SYSTEMS ENGINEERING
            </div>

            <div className="hero-label">
              <span className="mono">01 / ENGINEERING PORTFOLIO</span>
            </div>

            <h1>
              Building systems
              <br />
              that <span className="gradient-text">scale.</span>
              <br />
              Engineering for
              <br />
              <span className="outline-text">reliability.</span>
            </h1>

            <p className="hero-description">
              I&apos;m <strong>Md Shahariar Hassan</strong>, an Embedded
              Software Engineer working across Linux, high-performance
              networking, and systems integration, with a growing focus on
              DevOps and infrastructure automation.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                Explore My Work
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://github.com/ronok-shahariar"
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
                Linux & Networking
              </span>
              <span>
                <Check size={15} />
                Systems Engineering
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Infrastructure />
          </motion.div>
        </div>

        <a href="#expertise" className="scroll-cue">
          <ArrowDown size={16} />
          SCROLL TO EXPLORE
        </a>
      </section>

      <section className="tech-strip" aria-label="Engineering technologies">
        <div className="shell tech-strip-inner">
          <span className="tech-strip-label">ENGINEERING STACK</span>
          <div>
            <span>LINUX</span>
            <span>DPDK</span>
            <span>GIT</span>
            <span>DOCKER</span>
            <span>TYPESCRIPT</span>
          </div>
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="shell">
          <SectionHeading
            eyebrow="01 / CAPABILITIES"
            title="Engineering across the stack."
            description="From performance-sensitive systems software to automated delivery workflows, my focus is on building technology that is efficient, maintainable, and reliable."
          />

          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="expertise-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="card-top">
                    <div className="card-icon">
                      <Icon size={25} />
                    </div>
                    <span className="card-number">{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="shell">
          <SectionHeading
            eyebrow="02 / SELECTED WORK"
            title="Built to solve real problems."
            description="A selection of systems engineering work alongside the DevOps delivery practices being developed for this portfolio."
          />

          <div className="project-list">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  className="project-card"
                  key={project.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="project-graphic">
                    <span className="project-graphic-grid" />
                    <Icon size={48} strokeWidth={1.25} />
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
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="project-index">{project.number}</span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section terminal-section" id="terminal">
        <div className="shell terminal-layout">
          <div className="terminal-intro">
            <span className="eyebrow">
              <span className="eyebrow-line" />
              03 / INTERACTIVE
            </span>
            <h2>
              Curious?
              <br />
              <span className="gradient-text">Open a terminal.</span>
            </h2>
            <p>
              Get to know my background and engineering work through an
              interactive command-line interface.
            </p>
            <div className="terminal-suggestions">
              {["help", "about", "skills", "projects"].map((item) => (
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

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            04 / CONNECT
          </span>
          <h2>Let&apos;s engineer something meaningful.</h2>
          <p>
            Interested in systems engineering, DevOps, infrastructure,
            or performance-oriented software?
          </p>
          <a
            href="https://github.com/ronok-shahariar"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Connect on GitHub
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Md Shahariar Hassan</span>
          <span>ENGINEERED WITH NEXT.JS</span>
          <a href="#home">
            BACK TO TOP <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
}
