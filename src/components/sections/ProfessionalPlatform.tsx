export default function ProfessionalPlatform() {
  return (
    <section
      id="professional-platform"
      aria-labelledby="professional-platform-title"
      className="mx-auto w-full max-w-6xl px-5 pt-16 pb-8 sm:px-8"
    >
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Professional Engineering Experience
        </p>

        <h2
          id="professional-platform-title"
          className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl"
        >
          Engineering behind real-world systems.
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
          A look at the broader telecommunications platform context
          surrounding my professional software engineering work.
        </p>
      </div>

      <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 p-5 sm:p-7 lg:grid-cols-2 lg:gap-10">
        <div className="min-w-0">
          <a
            href="https://xrcomm.com/trusystems-platform-for-research-and-prototyping/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore XRComm TruSystems Platform in a new tab"
            className="block overflow-hidden rounded-xl border border-slate-700/50 bg-slate-950"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="block h-auto w-full object-contain"
              aria-label="XRComm TruSystems platform demonstration"
            >
              <source
                src="https://xrcomm.com/wp-content/uploads/2025/11/TruSystems-Prototyping-multi-module-3.webm"
                type="video/webm"
              />
              Your browser does not support HTML5 video.
            </video>
          </a>

          <p className="mt-3 text-xs leading-6 text-slate-500">
            Platform demonstration courtesy of{" "}
            <a
              href="https://xrcomm.com/trusystems-platform-for-research-and-prototyping/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline-offset-4 hover:underline"
            >
              XRComm — TruSystems Platform
            </a>
            . Product and platform credit belongs to XRComm.
          </p>
        </div>

        <div className="min-w-0">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
            Siliconova Ltd. · U.S. Team Collaboration
          </span>

          <h3 className="mt-4 text-2xl font-semibold leading-snug text-slate-100">
            From software architecture to system integration.
          </h3>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            At Siliconova, I work on Linux-based software and system
            integration for high-performance telecommunications platforms,
            collaborating with U.S.-based engineering teams.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            My contributions include Docker-based testing environments,
            automated CI/CD validation, C/Python data integration,
            containerized gRPC services, and remote monitoring using
            Prometheus and Grafana.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Linux",
              "Docker",
              "CI/CD",
              "C / Python",
              "gRPC",
              "Prometheus",
              "Grafana",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700/70 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href="https://xrcomm.com/trusystems-platform-for-research-and-prototyping/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex text-sm font-semibold text-sky-400 underline-offset-4 hover:text-sky-300 hover:underline"
          >
            Explore the XRComm platform ↗
          </a>
        </div>
      </div>

      <p className="mt-4 text-xs leading-6 text-slate-500">
        This public demonstration illustrates the broader platform context.
        It does not disclose proprietary source code or internal system
        configurations, and it should not be interpreted as a demonstration
        of every contribution described above.
      </p>
    </section>
  );
}
