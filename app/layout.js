import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://learnwithlabai.com"),
  title: "LearnWithLabAI | One-to-One AI & Automation Mentoring on Weekends",
  description:
    "One-to-one, task-based mentoring in n8n, Make, Zapier, agentic AI, RAG, prompt engineering and AI integrations. Weekend slots of 90 minutes or 2 hours.",
  keywords: [
    "n8n mentoring",
    "Make automation training",
    "Zapier training",
    "agentic AI training",
    "RAG AI training",
    "prompt engineering mentoring",
    "weekend AI sessions Karachi",
    "one on one AI mentoring",
  ],
  openGraph: {
    title: "LearnWithLabAI | Build It Yourself, One Session at a Time",
    description:
      "One-to-one weekend sessions in AI automation, agentic systems, RAG and prompt engineering. You build, I guide.",
    type: "website",
    siteName: "LearnWithLabAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnWithLabAI",
    description:
      "One-to-one, task-based AI and automation mentoring on weekends.",
  },
};

export const viewport = {
  themeColor: "#1E1324",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-base text-ink antialiased">{children}</body>
    </html>
  );
}
