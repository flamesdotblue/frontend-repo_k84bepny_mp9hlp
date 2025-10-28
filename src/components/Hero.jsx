import Spline from '@splinetool/react-spline';
import { Rocket, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur">
          <PhoneCall className="h-4 w-4" /> AI Lead Qualification Voice Agents
        </span>
        <h1 className="mt-6 bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Qualify leads while you sleep
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Upload your lead list and our AI will call, converse, score, and schedule follow-ups—so your team talks only to the most qualified prospects.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0f0c29] shadow-lg shadow-white/10 transition hover:translate-y-[-1px] hover:shadow-white/20"
          >
            <Rocket className="h-5 w-5" />
            Book a live demo
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            See how it works
          </a>
        </div>
        <div className="mt-8 flex items-center gap-4 text-xs text-white/70">
          <span>24/7 outbound calling</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span>Real-time lead scoring</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span>Calendar integration</span>
        </div>
      </div>
    </section>
  );
}
