import { serve } from "@hono/node-server";
import { createRoutes } from "./routes.js";

export function startServer(port: number = 8000) {
  const app = createRoutes();

  serve({
    fetch: app.fetch,
    port,
  });

  console.log(`Classifier listening on ${port}`);
}

