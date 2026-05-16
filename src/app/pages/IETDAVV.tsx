import { ExternalLink } from "lucide-react";

const screenshots = [
  "/images/iet/1.png",
  "/images/iet/2.png",
  "/images/iet/3.png",
  "/images/iet/4.png",
  "/images/iet/5.png",
  "/images/iet/6.png",
];

export default function IETDAVV() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-32 left-24 w-[400px] h-[400px] bg-cyan-500/30 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-400/30 blur-[80px] rounded-full scale-125" />

          <img
            src="/images/iet/mockup.png"
            alt="IET DAVV Website"
            className="relative w-[360px] rounded-[32px] border-4 border-zinc-900 shadow-2xl"
          />

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            ✦ Institutional Design System
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-2xl">
          <p className="text-cyan-400 uppercase tracking-[0.2em] font-semibold mb-4">
            University Website
          </p>

          <h1 className="text-6xl md:text-7xl font-light leading-tight">
            IET <span className="text-cyan-400">DAVV</span>
          </h1>

          <p className="mt-6 text-2xl text-zinc-300 leading-relaxed">
            Redesigning academic experiences with{" "}
            <span className="text-cyan-400 font-semibold">
              clarity and structure
            </span>
          </p>

          <p className="mt-8 text-zinc-500 text-lg leading-9">
            A modern university website experience focused on accessibility,
            streamlined navigation, responsive layouts, and structured
            information architecture for students, faculty, and visitors.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href="#screenshots"
              className="bg-cyan-400 hover:bg-cyan-300 transition-all text-black px-8 py-4 rounded-full text-lg font-semibold"
            >
              View Designs →
            </a>

            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-700 hover:border-cyan-400 transition-all px-8 py-4 rounded-full text-lg flex items-center gap-3"
            >
              <ExternalLink size={20} />
              Visit Website
            </a>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section
        id="screenshots"
        className="relative max-w-7xl mx-auto px-8 py-24"
      >
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.2em] font-semibold mb-4">
            Design Showcase
          </p>

          <h2 className="text-5xl font-light">
            Website <span className="text-cyan-400">Screens</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {screenshots.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950"
            >
              <img
                src={image}
                alt={`IET DAVV Screen ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}