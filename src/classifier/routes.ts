import { Hono } from "hono";
import type { ClassifyRequest, ClassifyResponse } from "./types.js";
import { isQuestion, detectTopic, detectSensitivity, decideShouldRespond } from "./heuristics.js";

export function createRoutes() {
  const app = new Hono();

  app.post("/classify", async (c) => {
    const body = await c.req.json<ClassifyRequest>();
    const { message, recentMessages, channelName } = body;

    const isQ = isQuestion(message);
    const topic = detectTopic(message, channelName);
    const sensitivity = detectSensitivity(message);
    const { shouldRespond, confidence, reason } = decideShouldRespond(
      message,
      recentMessages,
      isQ,
      topic,
      sensitivity
    );

    const response: ClassifyResponse = {
      shouldRespond,
      confidence,
      isQuestion: isQ,
      topic,
      sensitivity,
      reason,
    };

    return c.json(response);
  });

  app.get("/healthz", (c) => {
    return c.json({ status: "ok" });
  });

  return app;
}

