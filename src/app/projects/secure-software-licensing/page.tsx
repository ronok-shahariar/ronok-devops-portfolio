import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Code2,
  GitBranch,
  KeyRound,
  Fingerprint,
  Server,
  PackageCheck,
  LockKeyhole,
  CheckCircle2,
  Workflow,
  Layers3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Secure Software Licensing | Engineering Case Study",
  description:
    "Architecture and implementation of a reusable software licensing DevKit, build approval workflow, and device-bound offline activation system.",
};

const technologies = [
  "C",
  "Python",
  "Linux",
  "Docker",
  "Keygen",
  "CMake",
  "gRPC",
  "Cryptographic Signatures",
  "Build Automation",
];

const architecture = [
  {
    number: "01",
    title: "Developer Application",
    description: "Original C-based application and product source.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Licensing DevKit",
    description: "Wrapper integration, licensed builds, and packaging.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Build Approval",
    description: "Version tracking, build IDs, and binary hashes.",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Administration",
    description: "Customer, entitlement, feature, and license management.",
    icon: Server,
  },
  {
    number: "05",
    title: "Signed Activation",
    description: "Device- and build-specific offline license issuance.",
    icon: KeyRound,
  },
  {
    number: "06",
    title: "Runtime Enforcement",
    description: "Validate the license before launching the application.",
    icon: ShieldCheck,
  },
];

const contributions = [
  {
    icon: Workflow,
    title: "End-to-End Architecture",
    description:
      "Architected the licensing lifecycle connecting developer builds, administrative approval, license issuance, and client-side validation.",
  },
  {
    icon: Code2,
    title: "Reusable Developer DevKit",
    description:
      "Developed licensing integration tooling with wrapper-based protection, CMake integration, build modes, fingerprint generation, and release packaging.",
  },
  {
    icon: Server,
    title: "Administrative Platform",
    description:
      "Developed the web administration interface and integrated licensing services for build tracking, customer licensing, and authorization management.",
  },
  {
    icon: Fingerprint,
    title: "Device-Bound Licensing",
    description:
      "Implemented validation concepts linking licenses to device identity, machine fingerprints, approved builds, licensed features, and expiry.",
  },
  {
    icon: KeyRound,
    title: "Offline Activation",
    description:
      "Integrated signed license files and public-key verification to support local activation without continuous server connectivity.",
  },
  {
    icon: PackageCheck,
    title: "Release & Deployment Tooling",
    description:
      "Built developer workflows for license-enabled binaries, approval metadata, validation reports, and Debian package preparation.",
  },
];

const validation = [
  "Missing or invalid license",
  "Expired license",
  "Incorrect licensed feature",
  "Device identity mismatch",
  "Build identity mismatch",
  "Offline license integrity",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7db2ff]">
      <span className="h-px w-7 bg-[#6096df]" />
      {children}
    </div>
  );
}

export default function SecureSoftwareLicensingPage() {
  return (
    <main className="min-h-screen bg-[#080d18] text-[#edf3ff]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[650px] bg-[radial-gradient(ellipse_at_78%_20%,rgba(37,99,235,0.12),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8 lg:px-10">
        <nav className="mb-20 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#9bb5d9] transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
            <ArrowUpRight size={13} />
          </Link>

          <span className="rounded-full border border-[#2d476b] bg-[#112039]/70 px-4 py-2 font-mono text-xs text-[#9dbef0]">
            SYSTEM / 04
          </span>
        </nav>

        {/* HERO */}
        <header className="mb-16">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#285486] bg-[#102441]/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#83baff]">
            <ShieldCheck size={15} />
            Software Security / Release Engineering
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Secure Software Licensing
            <span className="mt-2 block bg-gradient-to-r from-[#448eff] to-[#9ec7ff] bg-clip-text text-transparent">
              & Release Management
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#a5bbd8] sm:text-lg">
            Architected and developed a reusable licensing framework
            connecting C-based software integration, controlled build
            approvals, customer authorization, and device-bound offline
            activation.
          </p>

          <div className="mt-9 flex flex-wrap gap-2">
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-md border border-[#2b405e] bg-[#111d30] px-3 py-2 font-mono text-xs text-[#a6c8fb]"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        {/* CHALLENGE AND SOLUTION */}
        <section className="mb-24 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#443441] bg-[#151722]/90 p-7 sm:p-8">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#ffa1a1]">
              The Challenge
            </div>
            <h2 className="mb-4 text-xl font-semibold">
              Protect software without disrupting development.
            </h2>
            <p className="text-sm leading-8 text-[#a9b8cf]">
              Multiple software builds needed controlled distribution,
              customer-specific authorization, device identity validation,
              and license management without requiring developers to
              redesign their original applications.
            </p>
          </article>

          <article className="rounded-2xl border border-[#245348] bg-[#101d25]/90 p-7 sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#56dfba]">
              <ShieldCheck size={17} />
              The Solution
            </div>
            <h2 className="mb-4 text-xl font-semibold">
              Reusable, build-aware licensing infrastructure.
            </h2>
            <p className="text-sm leading-8 text-[#a9b8cf]">
              Created a licensing DevKit and administration workflow
              connecting build identities, signed license files, device
              binding, feature authorization, and runtime verification.
            </p>
          </article>
        </section>

        {/* ARCHITECTURE */}
        <section className="mb-24">
          <SectionLabel>01 / System Architecture</SectionLabel>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            From developer build to authorized execution.
          </h2>

          <p className="mb-10 max-w-3xl text-sm leading-8 text-[#9bb1d0]">
            The system connects development, approval, license generation,
            and client activation while keeping the original application
            separate from the licensing enforcement layer.
          </p>

          <div className="rounded-2xl border border-[#2d4363] bg-[#0e182a] p-5 sm:p-8">
            <div className="mb-8 flex items-center justify-between gap-3 border-b border-[#263952] pb-5">
              <span className="font-mono text-xs text-[#84abdf]">
                licensing.architecture
              </span>
              <span className="text-xs text-[#55d5aa]">
                SYSTEM DESIGN
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {architecture.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="rounded-xl border border-[#294263] bg-[#14243d]/70 p-5 transition-colors hover:border-[#588bd0]"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#37619a] bg-[#1a3558] text-[#8bbaff]">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-xs text-[#6189bb]">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mb-2 text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-6 text-[#9aafd0]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-xs leading-6 text-[#819fc5]">
              Conceptual flow. Build approval and license issuance are
              administrative stages; runtime validation occurs on the
              client device.
            </p>
          </div>
        </section>

        {/* OWNERSHIP */}
        <section className="mb-24">
          <SectionLabel>02 / Engineering Ownership</SectionLabel>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            What I designed and developed.
          </h2>

          <p className="mb-10 max-w-3xl text-sm leading-8 text-[#9bb1d0]">
            My contribution covered the architecture and implementation
            of licensing integration, developer tooling, administrative
            workflows, and validation infrastructure.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {contributions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#293d59] bg-[#111c2e] p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a3151] text-[#86b8ff]">
                    <Icon size={21} />
                  </div>
                  <h3 className="mb-3 text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#9eafc8]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* DEVKIT */}
        <section className="mb-24">
          <SectionLabel>03 / Developer Experience</SectionLabel>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            License integration without rewriting the application.
          </h2>

          <p className="mb-8 max-w-3xl text-sm leading-8 text-[#9bb1d0]">
            The reusable DevKit prepares the application, integrates
            the licensing wrapper, generates build metadata, supports
            administrative approval, and prepares release packages.
          </p>

          <div className="overflow-hidden rounded-xl border border-[#2d4260] bg-[#0d1727]">
            <div className="flex items-center gap-2 border-b border-[#273950] bg-[#152238] px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#fa6870]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f4c15d]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4cc99b]" />
              <span className="ml-3 font-mono text-xs text-[#819fcb]">
                developer-workflow.txt
              </span>
            </div>

            <div className="space-y-4 p-6 font-mono text-xs leading-7 sm:text-sm">
              {[
                "01  Initialize developer workspace",
                "02  Integrate licensing wrapper",
                "03  Build and validate licensed application",
                "04  Generate build ID and SHA256 metadata",
                "05  Submit build approval request",
                "06  Validate signed license and package release",
              ].map((step) => (
                <div
                  key={step}
                  className="flex gap-3 border-b border-[#20314a] pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-[#54d7af]">$</span>
                  <span className="text-[#adc6e8]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALIDATION */}
        <section className="mb-24">
          <SectionLabel>04 / Runtime Security</SectionLabel>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            Verify before execution.
          </h2>

          <p className="mb-9 max-w-3xl text-sm leading-8 text-[#9bb1d0]">
            The licensing wrapper checks authorization before launching
            the original application. Invalid or mismatched licensing
            conditions prevent normal startup.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {validation.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#2c405d] bg-[#111d2e] p-5"
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#66d4b0]"
                />
                <span className="text-sm text-[#c4d4eb]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4 rounded-xl border border-[#365075] bg-[#12223a] p-5">
            <LockKeyhole
              size={23}
              className="shrink-0 text-[#8ab7ff]"
            />
            <p className="text-sm leading-7 text-[#adc1df]">
              Offline authorization uses a signed license file and
              public-key verification. The runtime verifies the
              authorized device, approved build, feature entitlements,
              and license validity before allowing execution.
            </p>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="mb-20 rounded-2xl border border-[#34547b] bg-gradient-to-br from-[#142943] to-[#0d192a] p-7 sm:p-10">
          <SectionLabel>05 / Engineering Outcome</SectionLabel>

          <h2 className="mb-5 text-2xl font-bold sm:text-3xl">
            One framework. Reusable licensing workflows.
          </h2>

          <p className="max-w-4xl text-sm leading-8 text-[#adbfdb]">
            The resulting architecture separates licensing from the
            original software implementation, supports build-specific
            authorization and device-bound offline activation, and
            provides developers and administrators with structured
            workflows for preparing, approving, and validating
            licensed software releases.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Reusable DevKit",
              "Build-aware validation",
              "Offline activation",
              "Release packaging",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#3a5d88] bg-[#192f4c] px-4 py-2 text-xs text-[#b9d5f9]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-[#26364d] pt-8">
          <p className="max-w-xl text-xs leading-6 text-[#8195b3]">
            Public architecture case study. Proprietary implementation
            details, signing keys, customer data, and internal source
            code are intentionally excluded.
          </p>

          <Link
            href="/#projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#3a5e8c] bg-[#182e4b]/80 px-5 py-3 text-sm font-medium text-[#c6ddff] transition hover:border-[#6c9ce0] hover:bg-[#213d62]"
          >
            Explore Other Projects
            <ArrowUpRight size={17} />
          </Link>
        </footer>
      </div>
    </main>
  );
}
