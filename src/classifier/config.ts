export const QUESTION_WORDS = [
  "who", "what", "when", "where", "why", "how",
  "does", "do", "did", "can", "could", "should", "shall",
  "is", "are", "am", "was", "were", "will", "would", "may", "might", "must",
  "which", "whose", "whom", "whether", "if",
  "tell me", "explain", "describe", "define", "show me",
  "help me", "i need", "i want to know", "i wonder",
];

export const DND_KEYWORDS = [
  // Game system
  "dnd", "d&d", "dungeons and dragons", "5e", "fifth edition", "3.5e", "pathfinder",
  "tabletop rpg", "ttrpg", "rpg", "d20", "dice roll", "roll for",
  
  // Core mechanics
  "spell slot", "spell slots", "spell level", "spell save", "spell attack",
  "initiative", "initiative order", "turn order", "action", "bonus action", "reaction",
  "short rest", "long rest", "rest", "hit dice", "hit points", "hp", "max hp",
  " ac ", "armor class", "saving throw", "save dc", "ability check", "skill check",
  "advantage", "disadvantage", "proficiency", "proficiency bonus",
  "death save", "death saving throw", "stabilize", "unconscious",
  "concentration", "concentration check", "spell concentration",
  
  // Classes
  "barbarian", "bard", "cleric", "druid", "fighter", "monk",
  "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard",
  "artificer", "blood hunter",
  
  // Races
  "dwarf", "elf", "halfling", "human", "dragonborn", "gnome", "half-elf", "half-orc",
  "tiefling", "aasimar", "genasi", "goliath", "tabaxi", "tortle", "yuan-ti",
  "warforged", "kenku", "lizardfolk", "triton", "firbolg", "goblin", "bugbear",
  
  // Spells & magic
  "eldritch blast", "fireball", "magic missile", "cure wounds", "healing word",
  "shield", "mage armor", "counterspell", "dispel magic", "detect magic",
  "identify", "find familiar", "polymorph", "wish", "true polymorph",
  "spellcasting", "cantrip", "ritual", "material component", "somatic component",
  "verbal component", "spell focus", "arcane focus", "holy symbol",
  
  // Combat
  "attack roll", "damage roll", "critical hit", "crit", "nat 20", "natural 20",
  "nat 1", "natural 1", "melee attack", "ranged attack", "weapon attack",
  "spell attack", "multiattack", "extra attack", "opportunity attack",
  "grapple", "shove", "prone", "restrained", "stunned", "paralyzed",
  "frightened", "charmed", "poisoned", "exhaustion",
  
  // Equipment
  "armor", "weapon", "shield", "sword", "bow", "staff", "wand", "rod",
  "magic item", "magic weapon", "magic armor", "attunement", "attuned",
  "potion", "scroll", "consumable", "adventuring gear",
  
  // Monsters & creatures
  "dragon", "beholder", "lich", "vampire", "werewolf", "goblin", "orc",
  "kobold", "gnoll", "troll", "giant", "demon", "devil", "celestial",
  "undead", "construct", "elemental", "fey", "aberration",
  
  // Campaign & gameplay
  "campaign", "session", "one-shot", "adventure", "quest", "dungeon",
  "dm ", "gm ", "dungeon master", "game master", "player character", "pc",
  "npc ", "non-player character", "bbeg", "boss fight", "encounter",
  "xp", "experience points", "level up", "leveling", "milestone",
  "character sheet", "character creation", "backstory", "alignment",
  "background", "feat", "ability score", "ability score improvement",
  "inspiration", "exhaustion", "madness",
  
  // Settings & lore
  "forgotten realms", "faerun", "ebberon", "ravenloft", "dragonlance",
  "greyhawk", "planescape", "spelljammer", "theros", "ravnica",
];

export const TECH_KEYWORDS = [
  // Programming languages
  "typescript", "javascript", "js", "ts", "python", "py", "rust", "go", "golang",
  "java", "c++", "cpp", "c#", "csharp", "php", "ruby", "swift", "kotlin",
  "scala", "haskell", "elixir", "erlang", "clojure", "lua", "perl", "r",
  "dart", "zig", "nim", "crystal", "ocaml", "f#", "fsharp",
  
  // Web frameworks & libraries
  "react", "vue", "angular", "svelte", "next.js", "nextjs", "nuxt", "remix",
  "express", "fastify", "koa", "hono", "nest.js", "nestjs", "fastapi",
  "django", "flask", "rails", "laravel", "spring boot", "asp.net",
  "graphql", "apollo", "relay", "redux", "zustand", "mobx",
  
  // Infrastructure & DevOps
  "docker", "dockerfile", "docker compose", "compose", "container", "kubernetes", "k8s",
  "pod ", "deployment", "service", "ingress", "helm", "helm chart",
  "terraform", "ansible", "pulumi", "cloudformation", "infrastructure as code", "iac",
  "ci/cd", "ci cd", "continuous integration", "continuous deployment",
  "github actions", "gitlab ci", "jenkins", "circleci", "travis ci", "azure devops",
  "pipeline", "workflow", "yaml", "github workflow",
  
  // Cloud & services
  "aws", "amazon web services", "ec2", "s3", "lambda", "rds", "dynamodb",
  "azure", "gcp", "google cloud", "cloudflare", "vercel", "netlify",
  "heroku", "digitalocean", "linode", "vultr", "render", "fly.io",
  "serverless", "edge function", "cdn", "load balancer",
  
  // Databases
  "database", "db", "sql", "nosql", "postgres", "postgresql", "mysql", "mariadb",
  "sqlite", "mongodb", "redis", "cassandra", "elasticsearch", "influxdb",
  "couchdb", "neo4j", "dynamodb", "firestore", "supabase", "planetscale",
  "prisma", "typeorm", "sequelize", "mongoose", "drizzle", "sqlalchemy",
  
  // APIs & protocols
  "api", "rest api", "restful", "graphql", "grpc", "websocket", "webhook",
  "http", "https", "tls", "ssl", "certificate", "jwt", "oauth", "oauth2",
  "openid", "saml", "jwt token", "bearer token", "api key", "api gateway",
  
  // Tools & utilities
  "git", "github", "gitlab", "bitbucket", "gitops", "version control",
  "npm", "yarn", "pnpm", "bun", "package.json", "package manager",
  "webpack", "vite", "rollup", "esbuild", "swc", "turbo", "turborepo",
  "eslint", "prettier", "typescript compiler", "tsc", "babel",
  
  // Testing & quality
  "test", "testing", "unit test", "integration test", "e2e", "end to end",
  "jest", "vitest", "mocha", "cypress", "playwright", "pytest", "junit",
  "coverage", "code coverage", "ci", "tdd", "bdd",
  
  // Architecture & patterns
  "microservices", "monolith", "monorepo", "architecture", "design pattern",
  "mvc", "mvp", "mvvm", "clean architecture", "hexagonal architecture",
  "event driven", "message queue", "rabbitmq", "kafka", "pub/sub",
  
  // Security
  "security", "authentication", "authorization", "encryption", "hashing",
  "bcrypt", "argon2", "csrf", "xss", "sql injection", "vulnerability",
  "penetration testing", "pentest", "security audit",
  
  // Monitoring & observability
  "monitoring", "logging", "metrics", "observability", "apm",
  "prometheus", "grafana", "datadog", "new relic", "sentry", "splunk",
  "elk stack", "elastic", "logstash", "kibana",
  
  // Networking
  "server", "client", "http server", "tcp", "udp", "dns", "ip address",
  "port", "socket", "proxy", "reverse proxy", "nginx", "apache",
  "cluster", "replication", "sharding", "partitioning",
  
  // General tech terms
  "nodejs", "node.js", "runtime", "compiler", "interpreter", "transpiler",
  "framework", "library", "dependency", "package", "module", "bundle",
  "build", "deploy", "deployment", "production", "staging", "development",
  "environment", "env", "config", "configuration", "env variable",
];

export const GAMING_KEYWORDS = [
  // Gaming terminology
  "gg", "good game", "wp", "well played", "glhf", "good luck have fun",
  "nerf", "buff", "patch", "update", "balance", "meta", "metagame",
  "ranked", "competitive", "rank", "mmr", "elo", "sr", "skill rating",
  "fps", "frames per second", "frame rate", "lag", "ping", "latency",
  "cooldown", "cd", "ultimate", "ult", "ability", "skill", "spell",
  "queue", "matchmaking", "match", "game", "round", "matchmaking",
  "raid", "dungeon", "boss", "boss fight", "loot", "drops", "drop",
  "grind", "farming", "xp", "exp", "level up", "leveling",
  "pvp", "player vs player", "pve", "player vs environment",
  "guild", "clan", "party", "squad", "team", "teammate",
  
  // Genres
  "mmo", "mmorpg", "rpg", "fps", "first person shooter", "tps", "third person shooter",
  "battle royale", "br", "moba", "multiplayer online battle arena",
  "roguelike", "roguelite", "soulslike", "souls", "soulsborne",
  "platformer", "puzzle", "strategy", "rts", "real time strategy",
  "turn based", "tactical", "simulation", "sim", "racing", "sports",
  
  // Popular games - MMO/RPG
  "wow", "world of warcraft", "final fantasy xiv", "ffxiv", "ff14",
  "guild wars 2", "gw2", "elder scrolls online", "eso", "black desert",
  "lost ark", "new world", "destiny 2", "warframe", "path of exile", "poe",
  
  // Popular games - FPS/Shooters
  "valorant", "cs2", "csgo", "counter-strike", "overwatch", "ow", "overwatch 2",
  "apex legends", "apex", "call of duty", "cod", "warzone", "fortnite",
  "rainbow six", "r6", "siege", "pubg", "playerunknown's battlegrounds",
  "halo", "doom", "quake", "team fortress", "tf2",
  
  // Popular games - MOBA
  "league of legends", "lol", "dota 2", "dota", "heroes of the storm", "hots",
  "smite", "wild rift",
  
  // Popular games - Battle Royale
  "fortnite", "apex legends", "warzone", "pubg", "fall guys",
  
  // Popular games - Racing
  "f1", "formula 1", "forza", "gran turismo", "gt", "need for speed", "nfs",
  "dirt", "assetto corsa", "iracing", "f1 23", "f1 24",
  
  // Popular games - Sports
  "fifa", "madden", "nba 2k", "nhl", "mlb the show", "rocket league",
  
  // Popular games - Action/Adventure
  "elden ring", "dark souls", "bloodborne", "sekiro", "zelda", "breath of the wild",
  "botw", "tears of the kingdom", "totk", "god of war", "horizon", "spider-man",
  "ghost of tsushima", "assassin's creed", "witcher", "cyberpunk 2077",
  "baldur's gate 3", "bg3", "diablo", "diablo 4", "d4",
  
  // Popular games - Strategy
  "civilization", "civ", "crusader kings", "ck3", "hearts of iron", "hoi4",
  "stellaris", "total war", "age of empires", "aoe", "xcom",
  
  // Popular games - Indie/Popular
  "minecraft", "terraria", "stardew valley", "hades", "dead cells",
  "hollow knight", "celeste", "cuphead", "among us", "phasmophobia",
  "valheim", "vampire survivors", "palworld",
  
  // Platforms
  "playstation", "ps5", "ps4", "xbox", "xbox series x", "xbox series s",
  "switch", "nintendo switch", "pc", "steam", "epic games", "epic store",
  "gog", "origin", "uplay", "ubisoft connect", "battle.net", "battlenet",
  "xbox game pass", "game pass", "playstation plus", "ps plus",
  
  // Gaming hardware
  "controller", "keyboard", "mouse", "headset", "gaming chair",
  "gpu", "graphics card", "cpu", "processor", "ram", "ssd", "hdd",
  "nvidia", "amd", "intel", "rtx", "gtx", "rx", "ray tracing",
  
  // Gaming communities & terms
  "twitch", "stream", "streamer", "youtube gaming", "speedrun", "speedrunner",
  "esports", "esport", "tournament", "championship", "pro player", "pro",
  "clutch", "ace", "penta kill", "quadra kill", "triple kill", "double kill",
  "noob", "newbie", "veteran", "tryhard", "sweat", "toxic", "tilt", "tilted",
];

export const HIGH_SENSITIVITY_TERMS = [
  // Direct self-harm references
  "kill myself", "kill myself", "killing myself", "want to die", "want to die",
  "end my life", "ending my life", "end it all", "ending it all",
  "not worth living", "life isn't worth", "no point in living",
  
  // Suicide references
  "suicide", "suicidal", "commit suicide", "committing suicide",
  "take my own life", "taking my own life", "off myself", "offing myself",
  "unalive myself", "unaliving", "self delete", "self deletion",
  
  // Self-harm
  "self harm", "self-harm", "self harm", "cut myself", "cutting myself",
  "cutting", "self injury", "self-injury", "hurting myself",
  "burn myself", "burning myself", "harm myself", "harming myself",
  
  // Overdose & substance abuse (self-harm context)
  "overdose", "od", "overdosing", "take too many", "too many pills",
  "swallow pills", "swallowing pills",
  
  // Abbreviations & slang
  "kys", "kms", "sh", "si", "suicidal ideation",
  
  // Methods (when indicating intent)
  "hang myself", "hanging myself", "jump off", "jumping off",
  "jump in front", "jumping in front",
  
  // Hopelessness indicating danger
  "nothing matters anymore", "nothing matters", "no one would care if i",
  "everyone would be better off", "better off without me",
  "no reason to live", "no point anymore",
];

export const MEDIUM_SENSITIVITY_TERMS = [
  // Depression
  "depressed", "depression", "feeling down", "feeling low", "down in the dumps",
  "sad", "really sad", "so sad", "extremely sad", "hopeless", "hopelessness",
  "empty", "feeling empty", "numb", "feeling numb", "worthless", "feeling worthless",
  "no motivation", "lost motivation", "can't get out of bed",
  
  // Anxiety
  "anxious", "anxiety", "panic", "panic attack", "having a panic attack",
  "anxiety attack", "feeling anxious", "worried", "really worried",
  "overwhelmed", "feeling overwhelmed", "stressed", "really stressed",
  "overthinking", "can't stop thinking", "racing thoughts",
  
  // Mental health struggles
  "mental health", "struggling", "really struggling", "having a hard time",
  "going through a lot", "going through it", "not doing well",
  "mental breakdown", "breakdown", "having a breakdown",
  "burnout", "burnt out", "exhausted", "mentally exhausted",
  
  // Loneliness & isolation
  "lonely", "loneliness", "feeling alone", "all alone", "isolated",
  "no friends", "don't have friends", "nobody to talk to",
  "no one understands", "nobody gets it",
  
  // Relationship issues
  "breakup", "broke up", "breaking up", "divorce", "divorcing",
  "relationship problems", "relationship issues", "fighting with",
  "cheated on", "being cheated on", "betrayed", "betrayal",
  
  // Abuse & trauma
  "abuse", "abused", "being abused", "abusive", "domestic violence",
  "trauma", "traumatic", "ptsd", "triggered", "triggering",
  "assaulted", "assault", "harassed", "harassment",
  
  // Grief & loss
  "grieving", "grief", "lost someone", "someone died", "death of",
  "mourning", "can't cope", "coping", "dealing with loss",
  
  // Eating disorders (when indicating distress)
  "eating disorder", "not eating", "not eating enough", "starving myself",
  "binge eating", "purging",
  
  // Sleep issues (when indicating distress)
  "can't sleep", "insomnia", "not sleeping", "sleeping too much",
  "nightmares", "having nightmares",
  
  // Emotional distress
  "crying", "can't stop crying", "been crying", "cry myself to sleep",
  "emotional", "really emotional", "emotional breakdown",
  "feeling broken", "broken", "shattered", "devastated",
  
  // Self-doubt & negative self-talk
  "hate myself", "hating myself", "self hate", "self-hate",
  "disgusted with myself", "disappointed in myself",
  "failure", "i'm a failure", "always fail", "can't do anything right",
  
  // Substance use (when indicating distress)
  "drinking too much", "drinking a lot", "using drugs", "self medicating",
  
  // General distress indicators
  "not okay", "not ok", "not doing okay", "not doing ok",
  "really struggling", "having a rough time", "rough patch",
  "dark place", "in a dark place", "going through hell",
];