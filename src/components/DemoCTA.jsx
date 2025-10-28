import { Calendar, PlayCircle } from 'lucide-react';

export default function DemoCTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-orange-500 py-20 text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-xl shadow-xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                See it in action — book a live demo
              </h3>
              <p className="mt-2 text-white/80">
                We’ll call a sample lead, score the call in real time, and auto-create a follow-up event.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3">
              <a
                href="https://calendly.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition hover:translate-y-[-1px]"
              >
                <Calendar className="h-5 w-5" />
                Book a demo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <PlayCircle className="h-5 w-5" />
                Watch a quick demo
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-white/80">
          Works with your stack: HubSpot, Salesforce, Pipedrive, Google Calendar, and more.
        </p>
      </div>
    </section>
  );
}
