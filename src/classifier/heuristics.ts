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
  // Must end with question mark (strong signal)
  if (t.endsWith("?")) {
    // But exclude very short casual messages like "lol?" or "really?"
    if (t.length < 15 && !t.includes(" ")) {
      return false;
    }
    return true;
  }
  
  const lower = t.toLowerCase();
  // Must start with question word followed by space (clear question structure)
  for (const w of QUESTION_WORDS) {
    if (lower.startsWith(w + " ")) {
      return true;
    }
  }
  
  // Question phrases must be at the start
  const questionPhrases = ["tell me", "explain", "describe", "define", "show me", "help me", "i need", "i want to know", "i wonder"];
  for (const phrase of questionPhrases) {
    if (lower.startsWith(phrase)) {
      return true;
    }
  }
  
  // Don't match "?" anywhere - too loose, catches casual usage
  return false;
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

  // Filter out casual messages and short greetings
  if (!isQ) {
    // Short greetings - definitely ignore
    if (text.length < 10 && ["hi", "hey", "hello", "yo", "sup", "hii", "heyy"].includes(text)) {
      return {
        shouldRespond: false,
        confidence: 0.7,
        reason: "Short greeting; ignoring to reduce noise.",
      };
    }
    
    // Very short casual messages
    if (text.length < 20 && ["ok", "okay", "cool", "nice", "lol", "haha", "yeah", "yep", "nope", "thanks", "ty"].includes(text)) {
      return {
        shouldRespond: false,
        confidence: 0.75,
        reason: "Short casual message; ignoring to reduce noise.",
      };
    }
    
    // If not a question and no clear topic, don't respond
    if (topic === "other") {
      return {
        shouldRespond: false,
        confidence: 0.8,
        reason: "Not a question and no clear topic match; ignoring.",
      };
    }
  }

  // Only respond to questions if they meet stricter criteria
  if (isQ) {
    // Strong signal: Question in a specific topic
    if (["dnd", "tech", "gaming"].includes(topic)) {
      // Require minimum length to avoid responding to "what?" or "how?"
      if (text.length >= 15) {
        return {
          shouldRespond: true,
          confidence: 0.9,
          reason: `User asked a ${topic.toUpperCase()} question.`,
        };
      } else {
        // Very short questions need topic match AND channel hint
        return {
          shouldRespond: false,
          confidence: 0.6,
          reason: "Question too short; requires more context.",
        };
      }
    }
    
    // General questions - only respond if they're substantial
    if (text.length >= 25) {
      return {
        shouldRespond: true,
        confidence: 0.8,
        reason: "User asked a substantial general question.",
      };
    } else {
      // Short general questions - don't respond
      return {
        shouldRespond: false,
        confidence: 0.65,
        reason: "General question too short; requires more specificity.",
      };
    }
  }

  // Ongoing conversation - require stronger signals
  const recentJoined = recent.join(" ").toLowerCase();
  const recentHasQuestions = recentJoined.includes("?");
  
  // Only respond to ongoing conversation if:
  // 1. Recent messages have questions AND
  // 2. Current message is relevant (has topic match or is substantial)
  if (recentHasQuestions) {
    if (["dnd", "tech", "gaming"].includes(topic) && text.length >= 15) {
      return {
        shouldRespond: true,
        confidence: 0.8,
        reason: "Ongoing conversation with topic match; responding.",
      };
    }
    // Don't respond to ongoing conversation if message is too short or no topic
    return {
      shouldRespond: false,
      confidence: 0.7,
      reason: "Ongoing conversation detected but message lacks clear intent.",
    };
  }

  return {
    shouldRespond: false,
    confidence: 0.8,
    reason: "No strong signal to respond (not a question, no direct trigger).",
  };
}

