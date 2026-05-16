import { ExternalLink } from "lucide-react";

const screenshots = [
  "/images/recruiters/1.png",
  "/images/recruiters/2.png",
  "/images/recruiters/3.png",
  "/images/recruiters/4.png",
  "/images/recruiters/5.png",
  "/images/recruiters/6.png",
];

export default function RecruitersConnect() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* GLOW */}
      <div className="absolute top-32 left-24 w-[400px] h-[400px] bg-violet-500/30 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 bg-violet-400/30 blur-[80px] rounded-full scale-125" />

          <img
            src="/images/recruiters/mockup.png"
            alt="Recruiter's Connect"
            className="relative w-[360px] rounded-[32px] border-4 border-zinc-900 shadow-2xl"
          />

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-violet-400 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            ✦ Hiring Platform Experience
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-2xl">
          <p className="text-violet-400 uppercase tracking-[0.2em] font-semibold mb-4">
            Recruitment Platform
          </p>

          <h1 className="text-6xl md:text-7xl font-light leading-tight">
            Recruiter's{" "}
            <span className="text-violet-400">Connect</span>
          </h1>

          <p className="mt-6 text-2xl text-zinc-300 leading-relaxed">
            Creating smoother workflows for{" "}
            <span className="text-violet-400 font-semibold">
              recruiters and candidates
            </span>
          </p>

          <p className="mt-8 text-zinc-500 text-lg leading-9">
            Recruiter's Connect is a modern recruitment platform designed to
            simplify hiring pipelines, candidate tracking, and recruiter
            communication through intuitive dashboards and clean interaction
            systems.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href="#screenshots"
              className="bg-violet-400 hover:bg-violet-300 transition-all text-black px-8 py-4 rounded-full text-lg font-semibold"
            >
              View Designs →
            </a>

            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-700 hover:border-violet-400 transition-all px-8 py-4 rounded-full text-lg flex items-center gap-3"
            >
              <ExternalLink size={20} />
              Live Platform
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
          <p className="text-violet-400 uppercase tracking-[0.2em] font-semibold mb-4">
            Product Showcase
          </p>

          <h2 className="text-5xl font-light">
            Platform <span className="text-violet-400">Screens</span>
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
                alt={`Recruiter's Connect ${index + 1}`}
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