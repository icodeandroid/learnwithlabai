const TOOLS = [
  "n8n", "Make.com", "Zapier", "OpenAI", "Claude", "LangChain", "LangGraph",
  "Pinecone", "Supabase", "Ollama", "Hugging Face", "Groq", "Qdrant",
  "Airtable", "Gemini", "CrewAI", "Mistral", "Weaviate", "Pipedream", "Twilio",
];

export default function LogoMarquee() {
  const row = [...TOOLS, ...TOOLS];

  return (
    <section className="relative border-y border-gold/12 bg-deep py-9">
      <p className="container-x mb-6 text-center font-sans text-[11.5px] font-bold uppercase tracking-[0.26em] text-muted/70">
        Tools your tasks are built with
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-3">
          {row.map((t, idx) => (
            <span
              key={`${t}-${idx}`}
              className="whitespace-nowrap rounded-xl border border-gold/15 bg-surface/60 px-5 py-2.5 font-sans text-[14.5px] font-semibold text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
