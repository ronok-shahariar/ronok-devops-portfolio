
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Container,
  Cpu,
  Database,
  Network,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DPDK-to-gRPC Data Pipeline | Md Shahariar Hassan",
  description:
    "Architecture and C/Python implementation of a DPDK shared-memory to gRPC data-delivery pipeline.",
};

const technologies = [
  "C",
  "Python",
  "Linux",
  "DPDK",
  "POSIX Shared Memory",
  "Sockets",
  "gRPC",
  "Docker",
];

const stages = [
  {
    title: "DPDK Primary",
    subtitle: "C / Data Plane",
    description: "Receives and processes data from the NIC.",
    icon: Cpu,
    ownership: "Existing system component",
  },
  {
    title: "POSIX Shared Memory",
    subtitle: "Inter-process data exchange",
    description: "Makes the relevant data available to the secondary process.",
    icon: Database,
    ownership: "Integration interface",
  },
  {
    title: "DPDK Secondary",
    subtitle: "C / Integration Layer",
    description:
      "Reads shared-memory data and communicates with the Python service.",
    icon: Code2,
    ownership: "My C implementation",
  },
  {
    title: "Python gRPC Server",
    subtitle: "API Service",
    description:
      "Provides client-facing APIs for accessing the system data.",
    icon: Server,
    ownership: "My Python implementation",
  },
  {
    title: "Remote Clients",
    subtitle: "Data Consumers",
    description:
      "Python gRPC clients and other compatible client applications consume the data.",
    icon: Network,
    ownership: "Client-facing integration",
  },
];

const contributions = [
  "Designed the secondary-to-client data-delivery architecture.",
  "Implemented C components to retrieve and exchange DPDK shared-memory data.",
  "Developed Python service integration and gRPC APIs for client access.",
  "Integrated the DPDK secondary process with the Python service through socket communication.",
  "Supported containerized execution, runtime dependency management, and service compatibility.",
];

export default function DpdkGrpcPipelinePage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100">
      <header className="border-b border-white/10">
        <div className="mx-auto flex min-h-20 w-[min(100%-40px,1100px)] items-center justify-between">
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
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>
        </div>
      </header>

      <div className="mx-auto w-[min(100%-40px,1100px)]">
        <section className="py-16 md:py-24">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-300">
            <Network size={14} />
            SOFTWARE ARCHITECTURE / SYSTEMS ENGINEERING
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            DPDK-to-gRPC
            <span className="block text-blue-400">
              Data Pipeline Architecture
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Designed and implemented a cross-language data-delivery
            architecture that connects DPDK shared-memory processing
            to remote client applications through a Python gRPC service.
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

        <section className="grid gap-5 pb-20 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-400/20 bg-[#101724] p-7">
            <h2 className="mb-4 text-xl font-semibold text-blue-300">
              The Engineering Challenge
            </h2>
            <p className="leading-7 text-slate-400">
              Data produced by the DPDK processing system needed
              to be accessible to external applications without
              tightly coupling remote clients to the underlying
              C-based processing environment.
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-400/20 bg-[#101724] p-7">
            <h2 className="mb-4 text-xl font-semibold text-emerald-300">
              My Solution
            </h2>
            <p className="leading-7 text-slate-400">
              Designed the integration architecture and developed
              C and Python components connecting DPDK shared-memory
              data to a client-facing gRPC API.
            </p>
          </article>
        </section>

        <section className="pb-20">
          <div className="mb-9">
            <span className="text-xs font-semibold tracking-widest text-blue-400">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="mt-3 text-3xl font-bold">
              From DPDK to Remote Clients
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              The logical data path, showing the communication
              boundaries across C, shared memory, sockets,
              and Python gRPC.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#0d1626] p-5 md:p-10">
            <div className="mx-auto max-w-2xl">
              {stages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div key={stage.title}>
                    <div className="flex items-start gap-4 rounded-xl border border-blue-400/25 bg-[#14243b] p-5">
                      <div className="shrink-0 rounded-lg bg-blue-500/15 p-3 text-blue-300">
                        <Icon size={24} />
                      </div>

                      <div className="flex-1">
                        <span className="text-xs text-blue-300">
                          {stage.subtitle}
                        </span>
                        <h3 className="mt-1 font-semibold">
                          {stage.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {stage.description}
                        </p>
                        <span className="mt-3 inline-block text-xs text-emerald-300">
                          {stage.ownership}
                        </span>
                      </div>
                    </div>

                    {index < stages.length - 1 && (
                      <div className="flex h-10 justify-center">
                        <div className="h-full w-px bg-blue-400/50" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid gap-10 pb-20 md:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="text-xs font-semibold tracking-widest text-blue-400">
              MY ENGINEERING CONTRIBUTION
            </span>
            <h2 className="mt-3 text-3xl font-bold">
              Designed it. Developed it. Integrated it.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              My responsibility covered the architecture and
              implementation of the secondary-to-client data path,
              as well as the supporting runtime integration.
            </p>
          </div>

          <div className="space-y-4">
            {contributions.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-slate-800 bg-[#101827] p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-emerald-400"
                />
                <p className="leading-7 text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="rounded-2xl border border-blue-400/20 bg-[#101b2d] p-7 md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <Container size={22} className="text-blue-300" />
              <span className="text-xs font-semibold tracking-widest text-blue-400">
                CONTAINERIZED RUNTIME
              </span>
            </div>

            <h2 className="text-3xl font-bold">
              From architecture to deployment.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              The DPDK primary and secondary processes operate
              together in a shared Docker runtime. The Python
              gRPC server runs in a separate container, with
              dependency compatibility maintained across the
              service boundary.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              The gRPC service is integrated into the target
              device&apos;s startup environment so client-facing
              APIs become available when the server powers on.
            </p>

            <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
              <Workflow size={20} className="shrink-0 text-blue-300" />
              Containerization, dependency management, system
              integration, and operational reliability.
            </div>
          </div>
        </section>

        <section className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 py-10">
          <Link
            href="/#projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <a
            href="https://github.com/ronok-shahariar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-400/30 bg-[#1a3252]/60 px-5 py-3 text-sm text-blue-200 hover:bg-[#243e61]"
          >
            GitHub Profile
            <ArrowUpRight size={17} />
          </a>
        </section>
      </div>
    </main>
  );
}
