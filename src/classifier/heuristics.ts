import type { Topic, Sensitivity } from "./types.js";
import {
  QUESTION_WORDS,
  DND_KEYWORDS,
  TECH_KEYWORDS,
  GAMING_KEYWORDS,
  HIGH_SENSITIVITY_TERMS,
  MEDIUM_SENSITIVITY_TERMS,
} from "./config.js";

export function normalize(text: string): string {
  return text.toLowerCase().trim();
}

export function isQuestion(text: string): boolean {
  const t = text.trim();
  if (t.endsWith("?")) return true;
  const lower = t.toLowerCase();
  for (const w of QUESTION_WORDS) {
    if (lower.startsWith(w + " ")) return true;
  }
  return lower.includes("?");
}

export function detectTopic(text: string, channelName?: string): Topic {
  const t = normalize(text);
  const cn = channelName ? normalize(channelName) : "";

  if (["dnd", "d&d", "tabletop", "aeterna"].some(k => cn.includes(k))) return "dnd";
  if (["tech", "dev", "code", "infra", "server"].some(k => cn.includes(k))) return "tech";
  if (["gaming", "games"].some(k => cn.includes(k))) return "gaming";

  if (DND_KEYWORDS.some(k => t.includes(k))) return "dnd";
  if (TECH_KEYWORDS.some(k => t.includes(k))) return "tech";
  if (GAMING_KEYWORDS.some(k => t.includes(k))) return "gaming";

  return "other";
}

export function detectSensitivity(text: string): Sensitivity {
  const t = normalize(text);
  if (HIGH_SENSITIVITY_TERMS.some(term => t.includes(term))) return "high";
  if (MEDIUM_SENSITIVITY_TERMS.some(term => t.includes(term))) return "medium";
  return "low";
}

export function decideShouldRespond(
  message: string,
  recentMessages: string[] | undefined,
  isQ: boolean,
  topic: Topic,
  sensitivity: Sensitivity
): { shouldRespond: boolean; confidence: number; reason: string } {
  const text = normalize(message);
  const recent = recentMessages ?? [];

  const directTriggers = ["b-r0", "b-r0 3.0", "bot", "@bot", "hey bot"];
  if (directTriggers.some(t => text.includes(t))) {
    return {
      shouldRespond: true,
      confidence: 0.95,
      reason: "Message directly addresses the bot.",
    };
  }

  if (sensitivity === "high") {
    if (isQ) {
      return {
        shouldRespond: true,
        confidence: 0.9,
        reason: "High-sensitivity question; responding for safety/context.",
      };
    }
    return {
      shouldRespond: true,
      confidence: 0.8,
      reason: "High-sensitivity content; responding to provide support/context.",
    };
  }

  if (!isQ && text.length < 10 && ["hi", "hey", "hello", "yo", "sup"].includes(text)) {
    return {
      shouldRespond: false,
      confidence: 0.7,
      reason: "Short greeting; ignoring to reduce noise.",
    };
  }

  if (isQ) {
    if (["dnd", "tech", "gaming"].includes(topic)) {
      return {
        shouldRespond: true,
        confidence: 0.9,
        reason: `User asked a ${topic.toUpperCase()} question.`,
      };
    }
    return {
      shouldRespond: true,
      confidence: 0.85,
      reason: "User asked a general question.",
    };
  }

  const recentJoined = recent.join(" ").toLowerCase();
  if (recentJoined.includes("?")) {
    return {
      shouldRespond: true,
      confidence: 0.75,
      reason: "Ongoing conversation that includes questions; responding.",
    };
  }

  return {
    shouldRespond: false,
    confidence: 0.8,
    reason: "No strong signal to respond (not a question, no direct trigger).",
  };
}

