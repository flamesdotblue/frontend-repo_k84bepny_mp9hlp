import { CheckCircle2, BarChart3, Calendar, Shield } from 'lucide-react';

const features = [
  {
    title: 'Smart lead conversations',
    desc: 'Natural, human-like voice calls that adapt to tone, objections, and intent.',
    icon: CheckCircle2,
  },
  {
    title: 'Real-time scoring',
    desc: 'Score leads by fit and intent so reps prioritize the best opportunities.',
    icon: BarChart3,
  },
  {
    title: 'Calendar integration',
    desc: 'Auto-schedule qualified follow-ups directly onto your team’s calendars.',
    icon: Calendar,
  },
  {
    title: 'Enterprise-grade security',
    desc: 'SOC2-ready practices with encrypted storage and role-based access.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="relative bg-white py-20" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to qualify at scale
          </h2>
          <p className="mt-3 text-slate-600">
            Voice AI that actually books meetings—and tells you which leads to call first.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
