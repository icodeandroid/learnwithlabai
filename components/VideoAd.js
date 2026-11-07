import Reveal from "./Reveal";
import { SITE, waLink } from "@/lib/site";

export default function VideoAd() {
  return (
    <section id="why-ai" className="section relative overflow-hidden">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_420px]">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="label-eyebrow">Why AI skills</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section">
              AI won&apos;t take your job. <span className="grad-text italic">Someone using it might.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-muted lg:mx-0">
              Thirty seconds on why AI tools now matter for every career, and how {SITE.offering.many} get
              you there, one-to-one, on your weekends.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={waLink("Hi, I watched the video on your website and want to know which track fits me.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              Ask which track fits you
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-gold/25 bg-surface shadow-soft">
            <p className="flex items-center justify-center gap-2 border-b border-gold/15 py-2 text-[12px] font-semibold text-muted">
              Tap the speaker icon to hear it
            </p>
            <video
              className="block aspect-[4/5] w-full"
              src="/video/ai-careers.mp4"
              poster="/video/ai-careers-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="LearnWithLabAI video: why AI skills matter for your career"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
