
"use client";

import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Container,
  GitBranch,
  Activity,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const responsibilities = [
  {
    icon: Code2,
    title: "Software Architecture & Development",
    description:
      "Designed and implemented C/Python data pipelines connecting DPDK shared-memory processing with client-facing gRPC APIs.",
  },
  {
    icon: GitBranch,
    title: "CI/CD & Test Automation",
    description:
      "Built Dockerized, hardware-independent DPDK test environments and integrated automated code validation into development workflows.",
  },
  {
    icon: Container,
    title: "Containerized Systems",
    description:
      "Maintained dependency-managed Docker environments for DPDK applications, Python services, and monitoring components.",
  },
  {
    icon: Activity,
    title: "Observability Engineering",
    description:
      "Developed containerized Python metrics exporters connecting gRPC data to Prometheus and remote Grafana dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Software Licensing & Release Engineering",
    description:
      "Architected and developed a reusable licensing DevKit with build approvals, signed offline activation, device-bound validation, and containerized administration.",
  },
];

export default function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="shell">
        <div className="section-heading">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            03 / PROFESSIONAL EXPERIENCE
          </span>

          <h2 id="experience-heading">
            Engineering beyond the code.
          </h2>

          <p>
            Designing systems, developing software, and
            building the infrastructure that supports
            reliable integration and delivery.
          </p>
        </div>

        <motion.article
          className="experience-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="experience-header">
            <div className="experience-role">
              <div className="experience-icon">
                <BriefcaseBusiness size={25} />
              </div>

              <div>
                <span className="experience-label">
                  PROFESSIONAL EXPERIENCE
                </span>

                <h3>Embedded Software Engineer I</h3>

                <p className="experience-company">
                  Siliconova Ltd.
                </p>
              </div>
            </div>

            <div className="experience-date">
              <CalendarDays size={16} />
              <span>15 July 2024 — Present</span>
            </div>
          </div>

          <p className="experience-overview">
            Working across high-performance networking,
            Linux systems, C/Python software development,
            containerized infrastructure, automated
            validation, and remote observability.
          </p>

          <div className="experience-grid">
            {responsibilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="experience-item"
                  key={item.title}
                >
                  <div className="experience-item-icon">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="experience-footer">
            <div className="experience-tags">
              {[
                "C / Python",
                "Linux",
                "DPDK",
                "Docker",
                "gRPC",
                "CI/CD",
                "Prometheus",
                "Grafana",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a
              href="#projects"
              className="experience-link"
            >
              Explore Related Projects
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
