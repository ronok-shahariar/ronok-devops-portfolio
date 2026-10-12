
import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Box,
    CheckCircle2,
    GitBranch,
    Server,
    Terminal,
    Workflow,
    Cpu,
    ShieldCheck,
    AlertCircle,
    ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Hardware-Independent DPDK Testing | Shahariar Hassan",
    description:
        "A Docker-based DPDK testing environment enabling automated software validation without dedicated physical NIC hardware.",
};

const stack = [
    "Docker",
    "DPDK",
    "C",
    "Linux",
    "testpmd",
    "CI/CD",
    "Git",
    "Virtual Packet Testing",
];

const pipeline = [
    {
        icon: GitBranch,
        name: "Code Push",
        description: "Developer submits code changes",
    },
    {
        icon: Workflow,
        name: "CI Pipeline",
        description: "Automated validation begins",
    },
    {
        icon: Box,
        name: "Docker Environment",
        description: "Preconfigured DPDK dependencies",
    },
    {
        icon: Cpu,
        name: "Virtual Packet Testing",
        description: "Exercise DPDK processing without a physical NIC",
    },
    {
        icon: CheckCircle2,
        name: "Validation Results",
        description: "Report success or detected failures",
    },
];

const contributions = [
    "Developed a reproducible Docker environment containing DPDK build and runtime dependencies.",
    "Configured virtual packet testing to exercise DPDK-based C application functionality.",
    "Enabled developers to perform preliminary validation without waiting for shared physical hardware.",
    "Integrated the environment into a Git-based CI/CD workflow to validate code changes automatically.",
    "Supported earlier identification of software integration and functional issues.",
];

export default function DpdkTestingPage() {
    return (
        <main className="min-h-screen bg-[#070b14] text-slate-100">
            {/* Navigation */}
            <header className="border-b border-white/10">
                <div className="mx-auto flex min-h-20 w-[min(100%-40px,1100px)] items-center justify-between">
                    <Link
                        href="/"
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
                {/* Hero */}
                <section className="py-16 md:py-24">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-300">
                        <Workflow size={14} />
                        DEVOPS / CI/CD / TEST AUTOMATION
                    </div>

                    <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                        Hardware-Independent
                        <span className="block text-blue-400">
                            DPDK Testing Infrastructure
                        </span>
                    </h1>

                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
                        Engineered a reproducible Docker-based testing environment
                        to validate DPDK-powered C applications without requiring
                        access to expensive, shared physical networking hardware.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {stack.map((item) => (
                            <span
                                key={item}
                                className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-blue-200"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Problem and Solution */}
                <section className="grid gap-5 pb-20 md:grid-cols-2">
                    <article className="rounded-2xl border border-red-400/20 bg-[#101724] p-7">
                        <div className="mb-5 flex items-center gap-3 text-red-300">
                            <AlertCircle size={21} />
                            <h2 className="font-bold">The Challenge</h2>
                        </div>

                        <h3 className="mb-4 text-xl font-semibold">
                            Hardware availability was a testing bottleneck.
                        </h3>

                        <p className="leading-7 text-slate-400">
                            Specialized networking hardware was expensive and
                            limited. Developers often had to wait for access
                            before they could verify code modifications, delaying
                            software-level validation and handoff to operations.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-emerald-400/20 bg-[#101724] p-7">
                        <div className="mb-5 flex items-center gap-3 text-emerald-300">
                            <ShieldCheck size={21} />
                            <h2 className="font-bold">The Solution</h2>
                        </div>

                        <h3 className="mb-4 text-xl font-semibold">
                            Reproducible, hardware-independent validation.
                        </h3>

                        <p className="leading-7 text-slate-400">
                            Built a Dockerized DPDK environment with the required
                            dependencies and virtual packet-testing components.
                            Developers could validate application functionality
                            before using shared physical hardware.
                        </p>
                    </article>
                </section>

                {/* Architecture */}
                <section className="pb-20">
                    <div className="mb-9">
                        <span className="text-xs font-semibold tracking-widest text-blue-400">
                            SYSTEM ARCHITECTURE
                        </span>
                        <h2 className="mt-3 text-3xl font-bold">
                            Automated Validation Workflow
                        </h2>
                        <p className="mt-3 max-w-2xl text-slate-400">
                            A simplified view of the developer validation
                            workflow.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-700 bg-[#0d1626] p-5 md:p-10">
                        <div className="mx-auto flex max-w-xl flex-col items-center">
                            {pipeline.map((stage, index) => {
                                const Icon = stage.icon;

                                return (
                                    <div
                                        key={stage.name}
                                        className="flex w-full flex-col items-center"
                                    >
                                        <div className="flex w-full items-center gap-4 rounded-xl border border-blue-400/25 bg-[#14243b] p-5">
                                            <div className="rounded-lg bg-blue-500/15 p-3 text-blue-300">
                                                <Icon size={24} />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold">
                                                    {stage.name}
                                                </h3>
                                                <p className="mt-1 text-sm text-slate-400">
                                                    {stage.description}
                                                </p>
                                            </div>
                                        </div>

                                        {index < pipeline.length - 1 && (
                                            <div className="flex h-11 items-center justify-center">
                                                <ArrowRight
                                                    size={19}
                                                    className="rotate-90 text-blue-400"
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
                            MY CONTRIBUTION
                        </span>
                        <h2 className="mt-3 text-3xl font-bold">
                            What I engineered.
                        </h2>
                        <p className="mt-4 leading-7 text-slate-400">
                            Focused on removing a practical development
                            bottleneck through environment engineering,
                            containerization, and automated testing.
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

                {/* Outcomes */}
                <section className="pb-20">
                    <div className="rounded-2xl border border-blue-400/20 bg-[#101b2d] p-7 md:p-10">
                        <span className="text-xs font-semibold tracking-widest text-blue-400">
                            ENGINEERING OUTCOME
                        </span>

                        <h2 className="mt-3 text-3xl font-bold">
                            Faster feedback. Less hardware dependency.
                        </h2>

                        <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                            The environment enabled developers to perform
                            preliminary functional and integration testing
                            independently of hardware availability. Automated
                            validation provided earlier feedback on code changes
                            before downstream hardware testing and deployment.
                        </p>

                        <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
                            <Server className="mt-1 shrink-0 text-blue-300" size={19} />
                            <p>
                                <strong className="text-slate-200">
                                    Validation boundary:
                                </strong>{" "}
                                Virtual packet testing verifies software behavior
                                within the simulated environment. Physical NIC
                                performance, hardware timing, and line-rate
                                zero-packet-loss testing require separate
                                hardware-based validation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Navigation */}
                <section className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 py-10">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                    >
                        <ArrowLeft size={17} />
                        Back to Projects
                    </Link>

                    <a
                        href="https://github.com/ronok-shahariar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 px-5 py-3 text-sm text-blue-200 hover:bg-blue-500/10"
                    >
                        GitHub Profile
                        <ExternalLink size={16} />
                    </a>
                </section>
            </div>
        </main>
    );
}
