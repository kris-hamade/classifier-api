# Classifier API

A fast, deterministic message classification microservice for Discord bots. This service analyzes incoming messages using heuristic-based pattern matching to determine if a bot should respond, categorize the topic, and assess sensitivity levels.

## Overview

The classifier is a lightweight HTTP microservice built with **TypeScript** and **Hono** that uses pure string matching and keyword detection (no ML/LLM). It processes every Discord message before the bot decides whether to invoke an LLM, helping reduce unnecessary API calls and costs.

### Key Features

- ⚡ **Ultra-fast**: Pure string operations, no network calls or heavy processing
- 🎯 **Deterministic**: Same input always produces same output
- 🧠 **Heuristic-based**: Keyword matching, pattern detection, and rule-based logic
- 📊 **Rich classification**: Detects questions, topics, sensitivity, and response triggers
- 🔒 **Safety-focused**: Identifies high-sensitivity content for appropriate handling

## Architecture

```
src/
├── index.ts                 # Entry point
├── classifier/
│   ├── server.ts           # Hono server setup
│   ├── routes.ts           # HTTP route handlers
│   ├── heuristics.ts       # Classification logic
│   ├── types.ts            # TypeScript interfaces
│   └── config.ts           # Keyword lists & configuration
```

## Setup

### Prerequisites

- Node.js 18+ or Node.js 20+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

Or run in development mode with hot-reload:
```bash
npm run dev
```

The server will start on port 8000 (or the port specified in the `PORT` environment variable).

## Docker Deployment

### Building the Docker Image

```bash
docker build -t classifier-api:latest .
```

### Running with Docker

```bash
docker run -p 8000:8000 -e PORT=8000 classifier-api:latest
```

### Using Docker Compose

```bash
docker-compose up -d
```

The service will be available at `http://localhost:8000`.

### GitHub Container Registry

The Docker image is automatically built and published to GitHub Container Registry (GHCR) on pushes to the `main` branch.

**Pull the image:**
```bash
docker pull ghcr.io/YOUR_USERNAME/classifier-api:latest
```

**Run the image:**
```bash
docker run -p 8000:8000 ghcr.io/YOUR_USERNAME/classifier-api:latest
```

Replace `YOUR_USERNAME` with your GitHub username or organization name.

## API Endpoints

### POST `/classify`

Classifies a message and determines if the bot should respond.

**Request Body:**
```json
{
  "message": "What is a spell slot?",
  "recentMessages": ["Previous message 1", "Previous message 2"],
  "channelName": "dnd-general"
}
```

**Request Fields:**
- `message` (string, required): The message text to classify
- `recentMessages` (string[], optional): Array of recent messages in the channel for context
- `channelName` (string, optional): Name of the Discord channel (used for topic hints)

**Response:**
```json
{
  "shouldRespond": true,
  "confidence": 0.9,
  "isQuestion": true,
  "topic": "dnd",
  "sensitivity": "low",
  "reason": "User asked a DND question."
}
```

**Response Fields:**
- `shouldRespond` (boolean): Whether the bot should respond to this message
- `confidence` (number, 0-1): Confidence level in the classification
- `isQuestion` (boolean): Whether the message is a question
- `topic` ("dnd" | "tech" | "gaming" | "other"): Detected topic category
- `sensitivity` ("low" | "medium" | "high"): Content sensitivity level
- `reason` (string): Human-readable explanation of the classification

**Example Requests:**

```bash
# D&D question
curl -X POST http://localhost:8000/classify \
  -H "Content-Type: application/json" \
  -d '{"message": "How do spell slots work in 5e?", "channelName": "dnd-general"}'

# Tech question
curl -X POST http://localhost:8000/classify \
  -H "Content-Type: application/json" \
  -d '{"message": "What is the difference between Docker and Kubernetes?", "channelName": "tech-help"}'

# Direct bot mention
curl -X POST http://localhost:8000/classify \
  -H "Content-Type: application/json" \
  -d '{"message": "Hey bot, can you help me?"}'
```

### GET `/healthz`

Health check endpoint for monitoring and load balancers.

**Response:**
```json
{
  "status": "ok"
}
```

## Classification Logic

### Question Detection

A message is considered a question if:
- Ends with `?`
- Starts with a question word (who, what, when, where, why, how, etc.)
- Contains `?` anywhere in the text
- Starts with phrases like "tell me", "explain", "help me", etc.

### Topic Classification

Topics are detected in this order:
1. **Channel name hints**: Checks channel name for keywords (e.g., "dnd", "tech", "gaming")
2. **Keyword matching**: Searches message content against comprehensive keyword lists:
   - **DND**: Classes, races, spells, mechanics, equipment, monsters, settings
   - **Tech**: Programming languages, frameworks, tools, infrastructure, databases
   - **Gaming**: Games, genres, platforms, gaming terminology

If no match is found, returns `"other"`.

### Sensitivity Detection

- **High**: Self-harm, suicide references, overdose mentions
- **Medium**: Depression, anxiety, mental health struggles, relationship issues, abuse, trauma
- **Low**: Everything else

### Response Decision Logic

The bot should respond when:
1. **Direct triggers**: Message contains bot mentions ("b-r0", "bot", "@bot", "hey bot")
2. **High sensitivity**: Always respond to high-sensitivity content
3. **Questions**: Clear questions, especially in DND/Tech/Gaming topics
4. **Ongoing Q&A**: Recent messages contain questions (contextual conversation)

The bot should NOT respond when:
- Short greetings with no question ("hi", "hey", "hello")
- Casual chat with no clear intent to ask anything

## Environment Variables

- `PORT` - Server port (default: 8000)

## Development

### Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled server
- `npm run dev` - Run in development mode with hot-reload (tsx watch)
- `npm run type-check` - Type check without building

### Project Structure

- **Pure functions**: All classification logic is in pure, testable functions
- **No side effects**: No I/O, network calls, or external dependencies in classification
- **Deterministic**: Same input always produces same output
- **Fast**: All operations are string matching and simple logic

## Integration with Discord Bot

The Discord bot should:

1. Call `/classify` for every incoming user message
2. Use `shouldRespond` + `confidence` to decide whether to invoke the LLM
3. Use `topic` and `sensitivity` to:
   - Adjust the bot's persona/prompt
   - Select appropriate response tone
   - Handle high-sensitivity content with care

Example integration:
```typescript
const response = await classifyMessage({
  message: discordMessage.content,
  recentMessages: getRecentMessages(channel),
  channelName: channel.name
});

if (response.shouldRespond && response.confidence > 0.7) {
  // Call LLM with topic-aware prompt
  const llmResponse = await callLLM({
    message: discordMessage.content,
    topic: response.topic,
    sensitivity: response.sensitivity
  });
  await channel.send(llmResponse);
}
```

## Performance

- **Latency**: < 5ms per classification (typical)
- **Throughput**: Can handle thousands of requests per second
- **Resource usage**: Minimal CPU and memory footprint
- **No external dependencies**: No network calls during classification

## License

ISC
