
import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  Container,
  Cpu,
  Database,
  Layers3,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Containerized Telemetry & Observability | Md Shahariar Hassan",
  description:
    "Python exporter development, Dockerized monitoring services, Prometheus integration, and remote Grafana observability for DPDK-based systems.",
};

const technologies = [
  "Python",
  "Docker",
  "gRPC",
  "Prometheus",
  "Grafana",
  "Linux",
  "DPDK",
  "Metrics Exporter",
];

const architecture = [
  {
    number: "01",
    title: "DPDK Primary & Secondary",
    subtitle: "C / DPDK Runtime Container",
    description:
      "The primary and secondary processes operate within the same Docker runtime, exchanging data through shared memory.",
    icon: Cpu,
    responsibility: "Upstream data-processing system",
  },
  {
    number: "02",
    title: "Python gRPC Server",
    subtitle: "Separate API Service Container",
    description:
      "Exposes the system data through APIs, making it accessible to client applications and the monitoring integration.",
    icon: Server,
    responsibility: "API integration",
  },
  {
    number: "03",
    title: "Python Metrics Exporter",
    subtitle: "Custom Python / Docker",
    description:
      "Retrieves telemetry through the gRPC service and exposes Prometheus-compatible metrics for collection.",
    icon: Code2,
    responsibility: "My Python implementation & containerization",
    featured: true,
  },
  {
    number: "04",
    title: "Prometheus",
    subtitle: "Independent Monitoring Container",
    description:
      "Collects exposed metrics through its scraping mechanism while running in an isolated, dependency-managed Docker environment.",
    icon: Database,
    responsibility: "Monitoring configuration & containerization",
  },
  {
    number: "05",
    title: "Remote Grafana",
    subtitle: "Visualization Layer",
    description:
      "Provides remote users with dashboards for exploring the system's collected telemetry.",
    icon: ChartNoAxesCombined,
    responsibility: "Remote monitoring integration",
  },
];

const contributions = [
  {
    title: "Python Metrics Exporter",
    description:
      "Developed and configured Python integration code to retrieve telemetry from the gRPC service and expose it to Prometheus.",
  },
  {
    title: "Docker Containerization",
    description:
      "Containerized the exporter and maintained an independent Prometheus environment to isolate dependencies.",
  },
  {
    title: "Automatic Service Startup",
    description:
      "Configured the exporter to start automatically with the Linux server, supporting telemetry availability following device startup.",
  },
  {
    title: "Monitoring Integration",
    description:
      "Connected the exporter, Prometheus collection, and Grafana visualization workflow.",
  },
  {
    title: "Runtime Dependency Management",
    description:
      "Maintained compatible runtime environments for the Python integration and monitoring components.",
  },
];

const outcomes = [
  {
    title: "Remote Visibility",
    description:
      "Users could visualize system telemetry remotely through Grafana.",
    icon: Activity,
  },
  {
    title: "Dependency Isolation",
    description:
      "Monitoring-related services used separate, containerized runtime environments.",
    icon: Container,
  },
  {
    title: "Startup Automation",
    description:
      "The exporter was configured to start when the server powered on.",
    icon: Workflow,
  },
];

export default function ContainerizedObservabilityPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex min-h-20 w-[min(100%-40px,1100px)] items-center justify-between gap-4">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold tracking-tight"
          >
            <Terminal size={20} className="text-blue-400" />
            SH.DEVOPS
          </Link>

          <Link
            href="/#projects"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>
        </div>
      </header>

      <div className="mx-auto w-[min(100%-40px,1100px)]">
        {/* Project Hero */}
        <section className="py-16 md:py-24">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-300">
            <Activity size={15} />
            DEVOPS / OBSERVABILITY / PYTHON
          </div>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Containerized Telemetry
            <span className="block text-blue-400">
              & Remote Observability
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Developed and containerized a Python metrics exporter
            connecting a DPDK-based gRPC system with Prometheus,
            enabling automated telemetry collection and remote
            Grafana visualization.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-blue-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Challenge and Solution */}
        <section className="grid gap-5 pb-20 md:grid-cols-2">
          <article className="rounded-2xl border border-orange-400/20 bg-[#101724] p-7">
            <div className="mb-5 flex items-center gap-3 text-orange-300">
              <Layers3 size={21} />
              <h2 className="font-bold">
                The Engineering Challenge
              </h2>
            </div>

            <h3 className="mb-4 text-xl font-semibold">
              Making specialized system data observable.
            </h3>

            <p className="leading-7 text-slate-400">
              Data from the DPDK processing environment was
              accessible through gRPC, but Prometheus required
              a compatible metrics interface.
              The monitoring services also needed consistent
              dependencies and reliable startup on the
              target Linux server.
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-400/20 bg-[#101724] p-7">
            <div className="mb-5 flex items-center gap-3 text-emerald-300">
              <ShieldCheck size={21} />
              <h2 className="font-bold">
                My Engineering Solution
              </h2>
            </div>

            <h3 className="mb-4 text-xl font-semibold">
              A containerized telemetry integration layer.
            </h3>

            <p className="leading-7 text-slate-400">
              Developed a Python exporter that retrieves data
              through gRPC and exposes it for Prometheus
              scraping. Containerized the exporter, maintained
              an isolated Prometheus service, and configured
              automatic startup to support remote visualization.
            </p>
          </article>
        </section>

        {/* Architecture */}
        <section className="pb-20">
          <div className="mb-9">
            <span className="text-xs font-semibold tracking-widest text-blue-400">
              01 / SYSTEM ARCHITECTURE
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              From Packet Processing to Visualization
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-400">
              A logical view of the telemetry pipeline and
              its containerized service boundaries.
              The Python exporter provides the connection
              between gRPC and Prometheus.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#0d1626] p-5 md:p-10">
            <div className="mx-auto max-w-2xl">
              {architecture.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div key={stage.number}>
                    <div
                      className={`rounded-xl border p-5 transition-colors ${
                        stage.featured
                          ? "border-blue-400/60 bg-[#193050]"
                          : "border-blue-400/20 bg-[#14243b]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 rounded-lg bg-blue-500/15 p-3 text-blue-300">
                          <Icon size={23} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs text-blue-300">
                              {stage.subtitle}
                            </span>

                            <span className="font-mono text-xs text-slate-500">
                              {stage.number}
                            </span>
                          </div>

                          <h3 className="mt-2 text-lg font-semibold">
                            {stage.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-slate-400">
                            {stage.description}
                          </p>

                          <div className="mt-4 text-xs text-emerald-300">
                            {stage.responsibility}
                          </div>
                        </div>
                      </div>
                    </div>

                    {index < architecture.length - 1 && (
                      <div className="flex h-12 items-center justify-center">
                        <ArrowDown
                          size={19}
                          className="text-blue-400/70"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contributions */}
        <section className="grid gap-10 pb-20 md:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="text-xs font-semibold tracking-widest text-blue-400">
              02 / MY CONTRIBUTION
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              I built the bridge between data and observability.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              My responsibilities combined Python software
              development, containerization, dependency
              management, and monitoring integration.
            </p>
          </div>

          <div className="space-y-4">
            {contributions.map((item) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-xl border border-slate-800 bg-[#101827] p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-emerald-400"
                />

                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="pb-20">
          <span className="text-xs font-semibold tracking-widest text-blue-400">
            03 / ENGINEERING OUTCOME
          </span>

          <h2 className="mb-8 mt-3 text-3xl font-bold">
            Monitoring built for operational use.
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-700 bg-[#101b2d] p-6"
                >
                  <div className="mb-5 inline-flex rounded-lg bg-blue-500/15 p-3 text-blue-300">
                    <Icon size={23} />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Operational Design */}
        <section className="pb-20">
          <div className="rounded-2xl border border-blue-400/20 bg-[#101b2d] p-7 md:p-10">
            <div className="mb-5 flex items-center gap-3 text-blue-300">
              <Container size={22} />
              <span className="text-xs font-semibold tracking-widest">
                CONTAINERIZED OPERATIONS
              </span>
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              Reproducible monitoring environments.
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              The exporter and Prometheus were deployed in
              separate Docker environments, helping keep
              their application dependencies isolated.
              The exporter was configured to start automatically
              when the target server powered on.
            </p>

            <p className="mt-4 max-w-3xl leading-8 text-slate-400">
              This approach connected the underlying DPDK
              application to a remote visualization workflow,
              without requiring visualization clients to
              interact directly with the low-level C data plane.
            </p>
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 py-10">
          <Link
            href="/#projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <a
            href="https://github.com/ronok-shahariar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-400/30 bg-[#1a3252]/60 px-5 py-3 text-sm text-blue-200 transition hover:bg-[#243e61]"
          >
            GitHub Profile
            <ArrowUpRight size={17} />
          </a>
        </section>
      </div>
    </main>
  );
}
