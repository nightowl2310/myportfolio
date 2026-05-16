import { Link } from "react-router-dom";



const screenshots = [
  "/images/kavyansh_saxena.png",
  "/images/kavyansh_saxena.png",
  "/images/LearnSphere/3.png",
  "/images/LearnSphere/4.png",
  "/images/LearnSphere/5.png",
  "/images/LearnSphere/6.png",
];

export default function LearnSphere() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-32 left-24 w-[400px] h-[400px] bg-emerald-500/30 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400/30 blur-[80px] rounded-full scale-125" />

          <img
            src="/images/kavyansh_saxena.png"
            alt="LearnSphere Preview"
            className="relative w-[360px] rounded-[32px] border-4 border-zinc-900 shadow-2xl"
          />

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-emerald-400 text-black px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            ✦ Modern Learning Experience
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-2xl">
          <p className="text-emerald-400 uppercase tracking-[0.2em] font-semibold mb-4">
            Case Study
          </p>

          <h1 className="text-6xl md:text-7xl font-light leading-tight">
            Learn<span className="text-emerald-400">Sphere</span>
          </h1>

          <p className="mt-6 text-2xl text-zinc-300 leading-relaxed">
            Designing a learning platform that makes{" "}
            <span className="text-emerald-400 font-semibold">
              education feel intuitive
            </span>
          </p>

          <p className="mt-8 text-zinc-500 text-lg leading-9">
            LearnSphere is a modern educational platform focused on seamless
            navigation, engaging learning experiences, and clean user flows.
            The design system emphasizes clarity, accessibility, and structured
            interactions for students and educators.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href="#screenshots"
              className="bg-emerald-400 hover:bg-emerald-300 transition-all text-black px-8 py-4 rounded-full text-lg font-semibold"
            >
              View Designs →
            </a>

            <Link
              to="/iet-davv"
              className="border border-zinc-700 hover:border-emerald-400 transition-all px-8 py-4 rounded-full text-lg flex items-center gap-3"
            >
              
              Go To Home
            </Link>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS SECTION */}
      <section
        id="screenshots"
        className="relative max-w-7xl mx-auto px-8 py-24"
      >
        <div className="mb-16">
          <p className="text-emerald-400 uppercase tracking-[0.2em] font-semibold mb-4">
            UI Showcase
          </p>

          <h2 className="text-5xl font-light">
            Product <span className="text-emerald-400">Screens</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {screenshots.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950"
            >
              <img
                src={image}
                alt={`LearnSphere Screen ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative max-w-5xl mx-auto px-8 pb-32">
        <div className="border border-zinc-800 bg-zinc-950 rounded-[36px] p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-emerald-500/20 blur-[120px]" />

          <h2 className="text-5xl font-light leading-tight">
            Want to explore the
            <span className="text-emerald-400"> full platform?</span>
          </h2>

          <p className="text-zinc-500 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Explore the live experience and see how the platform combines
            modern UI design with intuitive educational workflows.
          </p>

<Link
  to="/iet-davv"
  className="inline-flex items-center gap-3 bg-emerald-400 hover:bg-emerald-300 transition-all text-black px-8 py-4 rounded-full text-lg font-semibold mt-10"
>
  Visit IET DAVV →
</Link>

        </div>
      </section>
    </div>
  );
}