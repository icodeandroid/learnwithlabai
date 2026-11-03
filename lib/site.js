// Single place to edit contact details, availability and WhatsApp links.
export const SITE = {
  name: "LearnWithLabAI",
  whatsappDisplay: "0330 2623748",
  whatsappIntl: "+92 330 2623748",
  whatsappNumber: "923302623748", // international format, no + or spaces
  whatsappLink: "https://wa.me/923302623748",
  linkedin: "https://www.linkedin.com/in/fatima-ali-159382131",
  email: "", // add an email address here if you want one shown
  timezone: "PKT (UTC+5)",
  sessionLengths: "90 minutes, or 2 hours",
  // TODO: set the real number of sessions in the programme
  totalSessions: null,
  availability: [
    { day: "Saturday", window: "9:00 AM – 1:00 PM", slots: "Choose one fixed slot, 90 min or 2 hrs" },
    { day: "Sunday", window: "8:00 AM – 1:00 PM", slots: "Choose one fixed slot, 90 min or 2 hrs" },
  ],
};

/**
 * Builds a WhatsApp link that opens the chat with the message already typed,
 * so the student only presses send — and it reaches you as a normal WhatsApp
 * message from their own number.
 */
export function waLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
