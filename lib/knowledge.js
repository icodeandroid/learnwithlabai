import { SITE } from "./site";
import { COURSES } from "./courses";
import { FAQ_ITEMS } from "./faq";

/**
 * Builds the chatbot's knowledge base from the same data the website uses,
 * so the bot never drifts out of date with the site.
 */
export function buildKnowledge() {
  const { one, many } = SITE.offering;

  const offerings = COURSES.map((c) => {
    const modules = c.modules
      .map((m) => `  - ${m.name}: ${m.points.join("; ")}`)
      .join("\n");
    return [
      `## ${c.num}. ${c.title} (${c.tag})`,
      `Focus: ${c.subtitle}`,
      `Summary: ${c.summary}`,
      `By the end the student can: ${c.outcome}`,
      `Length: ${c.sessions}. Prerequisite: ${c.needs}.`,
      `What it includes:\n${modules}`,
    ].join("\n");
  }).join("\n\n");

  const faq = FAQ_ITEMS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");

  const slots = SITE.availability
    .map((a) => `- ${a.day}: ${a.window} (${SITE.timezone})`)
    .join("\n");

  return `# ${SITE.name}

## What it is
${SITE.name} offers one-to-one, task-based AI and automation mentoring. It is not a class, cohort or recorded course.
The teacher (the founder) assigns each student a real task every session; the student builds it hands-on while the teacher guides on a private call. Something is working by the end of every session.
Students do not pick their tasks — the teacher sets them based on the student's level and goal.
Each student picks ONE weekend slot when they start and keeps it every week for the whole programme.
Sessions are 90 minutes or 2 hours. There are ${COURSES.length} ${many}.
Who it suits: working professionals, fresh graduates, freelancers, founders and small teams, in Pakistan and internationally.
Students keep access to their practice platform for 1 year.

## Weekend availability
${slots}

## Contact
WhatsApp: ${SITE.whatsappDisplay} (${SITE.whatsappIntl}) — the fastest way to book or ask about fees.
Booking link: ${SITE.whatsappLink}
LinkedIn of the teacher: ${SITE.linkedin}
There is also a "Request a slot" form on the website.

## Fees
Fees are NOT published. They are shared only on WhatsApp after understanding the student's background and goal.

## The ${COURSES.length} ${many}
${offerings}

## FAQ
${faq}
`;
}
