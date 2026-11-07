import { SITE } from "./site";

// FAQ shown on the site and used by the chatbot.
export const FAQ_ITEMS = [
  {
    q: "Is this a course or a class?",
    a: "Neither. It is one-to-one mentoring built around tasks I set you. Every session you work on a real build with me beside you. There is no group, no syllabus you sit through, and no recorded lectures.",
  },
  {
    q: "How does the slot work?",
    a: `You choose one window when you start, inside Saturday 9:00 AM to 1:00 PM or Sunday 8:00 AM to 1:00 PM (${SITE.timezone}), and it stays yours every week for the whole programme. Sessions are ninety minutes, or two hours if you want the longer slot.`,
  },
  {
    q: "Do I need coding experience?",
    a: "No. The automation, prompt and AI-tools tracks are no-code friendly. Some JavaScript helps for advanced n8n and API work, and we cover exactly what your task needs as it comes up.",
  },
  {
    q: "What happens in a session?",
    a: "Your task is ready when you arrive. You share your screen and do the work; I guide, explain the reasoning, catch mistakes early and step in when you are properly stuck. The task is finished and running before we stop.",
  },
  {
    q: "Who decides what I work on?",
    a: "I do. I set each task based on your level and what you have already finished, so the difficulty moves at the right pace and nothing important gets skipped. Tell me your goal and it shapes which track you go down.",
  },
  {
    q: "How many sessions is the programme?",
    a: "A fixed number, agreed before you start, so you know exactly what you are committing to. Message me and I'll confirm the current programme length and what it covers.",
  },
  {
    q: "What if I get stuck during the week?",
    a: "Message me on WhatsApp. Homework between slots is part of how this works, and so is getting unstuck when something refuses to run.",
  },
  {
    q: "How do I book?",
    a: `Message ${SITE.whatsappDisplay} on WhatsApp, or send the form on this page. Tell me your background, your goal and which weekend window suits you, and I'll confirm whether that slot is free.`,
  },
];
