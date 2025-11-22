import { startServer } from "./classifier/server.js";

const port = Number(process.env.PORT) || 8000;
startServer(port);
