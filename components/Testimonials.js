import Reveal from "./Reveal";
import Icon from "./Icons";

const BUILDS = [
  {
    icon: "flow",
    title: "Lead capture that runs itself",
    desc: "Form or webinar signup lands in a sheet, gets scored by a model, and the right follow-up email goes out — without anyone touching it.",
    stack: "n8n · OpenAI · Google Sheets",
  },
  {
    icon: "database",
    title: "A chatbot over your own documents",
    desc: "Company policies, product docs or legal material indexed properly, answering with citations instead of inventing things.",
    stack: "LangChain · Pinecone · Claude",
  },
  {
    icon: "prompt",
    title: "A content engine in your voice",
    desc: "One brief in, a week of posts out — structured, on-brand and reviewable before anything gets published.",
    stack: "Make.com · GPT · Airtable",
  },
  {
    icon: "agent",
    title: "An agent that handles the inbox",
    desc: "Reads incoming queries, classifies them, drafts a reply and escalates the ones a human really needs to see.",
    stack: "LangGraph · Gmail API · Claude",
  },
];

export default function Testimonials() {
  return (
    <section className="section relative overflow-hidden">
      <span className="mesh-blob animate-blob" style={{ width: 400, height: 400, bottom: 0, right: -150, background: "radial-gradient(circle,#B98CD8,#B98CD800 70%)" }} />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="label-eyebrow">What you&apos;ll walk away with</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section">
              Things that <span className="grad-text italic">actually run.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 text-[16px] leading-relaxed text-muted">
              A few of the builds these tasks produce. Which ones you work through depends on
              the track I put you on.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {BUILDS.map((b, idx) => (
            <Reveal key={b.title} delay={idx * 90}>
              <article className="card h-full">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-gold to-lilac text-[#231527]">
                  <Icon name={b.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-[20px] font-medium text-ink">{b.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{b.desc}</p>
                <p className="mt-5 border-t border-gold/15 pt-4 text-[12px] font-bold uppercase tracking-[0.14em] text-gold">
                  {b.stack}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
