import { ListChecks, Upload, PhoneCall, CheckCircle2, CalendarClock } from 'lucide-react';

const steps = [
  {
    title: 'Upload lead list',
    desc: 'CSV or CRM sync. Map fields like name, company, phone, and custom notes.',
    icon: Upload,
  },
  {
    title: 'AI calls your leads',
    desc: 'Conversational agent dials, handles objections, and captures key signals.',
    icon: PhoneCall,
  },
  {
    title: 'Qualify and score',
    desc: 'Instant lead scores with transcripts and reason codes for transparency.',
    icon: CheckCircle2,
  },
  {
    title: 'Book the follow-up',
    desc: 'Auto-schedules next steps to your calendar and updates your CRM.',
    icon: CalendarClock,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-slate-50 py-20" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-slate-600">
            From list to booked meetings in four simple steps.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <li key={title} className="relative">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-indigo-600">Step {idx + 1}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
