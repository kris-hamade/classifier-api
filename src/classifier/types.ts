export type Topic = "dnd" | "tech" | "gaming" | "other";

export type Sensitivity = "low" | "medium" | "high";

export interface ClassifyRequest {
  message: string;
  recentMessages?: string[];
  channelName?: string;
}

export interface ClassifyResponse {
  shouldRespond: boolean;
  confidence: number;
  isQuestion: boolean;
  topic: Topic;
  sensitivity: Sensitivity;
  reason: string;
}

