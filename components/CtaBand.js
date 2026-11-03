import Reveal from "./Reveal";
import Icon from "./Icons";
import { SITE, waLink } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative py-14">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-gold/25 bg-gradient-to-br from-surface via-base to-deep px-7 py-16 text-center sm:px-14">
            <span className="mesh-blob animate-blob" style={{ width: 340, height: 340, top: -120, left: -70, background: "radial-gradient(circle,#C6A664,#C6A66400 70%)" }} />
            <span className="mesh-blob animate-blob" style={{ width: 300, height: 300, bottom: -120, right: -60, background: "radial-gradient(circle,#B98CD8,#B98CD800 70%)", animationDelay: "5s" }} />

            <div className="relative">
              <span className="pill">
                <Icon name="spark" className="h-3.5 w-3.5" />
Fixed weekend slots
              </span>

              <h2 className="mx-auto mt-7 max-w-2xl font-display text-[2.1rem] font-medium leading-[1.14] text-ink sm:text-[2.9rem]">
                Your slot. Your task. <span className="grad-text italic">Something that runs.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-muted">
                Tell me where you are now and what you want to be able to do. I&apos;ll tell you
                which track you start on and which slots are free.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={waLink("Hi, I'd like to start sessions with LearnWithLabAI.\n\nMy background: \nWhat I want to be able to do: \nSlot I'd prefer: ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <Icon name="chat" className="h-[18px] w-[18px]" />
                  WhatsApp {SITE.whatsappDisplay}
                </a>
                <a href="#connect" className="btn-ghost w-full sm:w-auto">
                  Send details instead
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
