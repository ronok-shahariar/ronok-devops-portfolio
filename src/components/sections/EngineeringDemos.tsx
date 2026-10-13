const videos = [
  {
    id: "fOWDjR1hT3E",
    title: "Satellite RF Data Pipeline",
    description:
      "A demonstration of RF data acquisition, DPDK processing, telemetry, and system monitoring.",
    tag: "Data Pipeline",
  },
  {
    id: "WH8EGgZChq0",
    title: "RF Control & gRPC Integration",
    description:
      "LabVIEW, VISA/SCPI, Python, and gRPC integration for remote system control and testing.",
    tag: "Software Integration",
  },
  {
    id: "TXhniCgoTKw",
    title: "DPDK DSP Initialization",
    description:
      "DSP parameter loading, input preparation, shared-memory communication, and processing workflow.",
    tag: "System Workflow",
  },
  {
    id: "1APuJzLHWRc",
    title: "DSP Configuration Workflow",
    description:
      "Configuration-driven parameter initialization and input datasets for repeatable testing.",
    tag: "Configuration",
  },
];

export default function EngineeringDemos() {
  return (
    <section
      id="engineering-demos"
      aria-labelledby="engineering-demos-title"
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8"
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Selected Demonstrations
        </p>

        <h2
          id="engineering-demos-title"
          className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl"
        >
          Engineering in practice.
        </h2>

        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
          Due to company NDA restrictions, I cannot share proprietary source
          code, internal configurations, or confidential implementation
          details. These selected demonstrations provide additional context
          about the technologies, integration work, and engineering workflows
          involved.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {videos.map((video, index) => (
          <article
            key={video.id}
            className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 transition-colors hover:border-sky-500/40"
          >
            <div className="relative aspect-video overflow-hidden bg-slate-950">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={`${video.title} — video demonstration`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-sky-400">
                  {video.tag}
                </span>

                <span className="text-xs tabular-nums text-slate-500">
                  {String(index + 1).padStart(2, "0")} / 04
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-100">
                {video.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {video.description}
              </p>

              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-medium text-sky-400 underline-offset-4 hover:text-sky-300 hover:underline"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-7 text-xs leading-6 text-slate-500">
        Demonstrations are provided for technical context. Proprietary
        products, platforms, and related intellectual property belong to
        their respective owners.
      </p>
    </section>
  );
}
