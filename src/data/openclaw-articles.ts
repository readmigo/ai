export interface CuratedArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  tag: string;
  publishedAt: string;
}

export const openclawTags = [
  { slug: 'all', label: 'All' },
  { slug: 'overview', label: 'Overview' },
  { slug: 'tutorial', label: 'Tutorials' },
  { slug: 'security', label: 'Security' },
  { slug: 'review', label: 'Reviews' },
  { slug: 'use-cases', label: 'Use Cases' },
];

export const openclawArticles: CuratedArticle[] = [
  {
    id: 'oc-1',
    title: 'What is OpenClaw? Your Open-Source AI Assistant for 2026',
    summary:
      'A comprehensive introduction to OpenClaw — the open-source personal AI agent that runs locally, remembers context across conversations, and automates tasks on your machine.',
    source: 'DigitalOcean',
    sourceUrl:
      'https://www.digitalocean.com/resources/articles/what-is-openclaw',
    tag: 'overview',
    publishedAt: '2026-01-30',
  },
  {
    id: 'oc-2',
    title:
      'From Clawdbot to Moltbot to OpenClaw: Meet the AI Agent Generating Buzz and Fear Globally',
    summary:
      'The journey of OpenClaw — from Peter Steinberger\'s personal assistant "Clawd" to one of the fastest-growing open-source projects on GitHub with 145,000+ stars.',
    source: 'CNBC',
    sourceUrl:
      'https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html',
    tag: 'overview',
    publishedAt: '2026-02-02',
  },
  {
    id: 'oc-3',
    title: 'How OpenClaw Is Changing the Way We Use AI',
    summary:
      'An in-depth look at how OpenClaw is redefining personal AI by connecting to messaging platforms like WhatsApp, Telegram, and Discord for seamless task automation.',
    source: 'NZ Herald',
    sourceUrl:
      'https://www.nzherald.co.nz/nz/how-openclaw-is-changing-the-way-we-use-ai/3GV4CUVLDC46IYKUA7UWIVVMGA/',
    tag: 'overview',
    publishedAt: '2026-02-05',
  },
  {
    id: 'oc-4',
    title:
      'OpenClaw Tutorial: Installation to First Chat Setup',
    summary:
      'Step-by-step guide to installing OpenClaw on any OS, configuring your AI provider, connecting to Telegram, and running your first conversation — no coding required.',
    source: 'Codecademy',
    sourceUrl:
      'https://www.codecademy.com/article/open-claw-tutorial-installation-to-first-chat-setup',
    tag: 'tutorial',
    publishedAt: '2026-02-01',
  },
  {
    id: 'oc-5',
    title: 'Master OpenClaw in 30 Minutes: Safe Setup + 5 Real Use Cases',
    summary:
      'A practical tutorial covering secure configuration, sandboxed execution via Docker, persistent memory setup, and five real-world automation workflows.',
    source: 'Creator Economy',
    sourceUrl:
      'https://creatoreconomy.so/p/master-openclaw-in-30-minutes-full-tutorial',
    tag: 'tutorial',
    publishedAt: '2026-02-03',
  },
  {
    id: 'oc-6',
    title: 'How to Set Up and Run OpenClaw on Mac',
    summary:
      'A macOS-focused guide covering Homebrew installation, system permissions, and turning your Mac into an action-based AI agent with OpenClaw.',
    source: 'Cult of Mac',
    sourceUrl:
      'https://www.cultofmac.com/how-to/set-up-and-run-openclaw-on-mac',
    tag: 'tutorial',
    publishedAt: '2026-02-04',
  },
  {
    id: 'oc-7',
    title: 'Researchers Find 40,000+ Exposed OpenClaw Instances',
    summary:
      'SecurityScorecard identifies over 40,000 OpenClaw deployments exposed online, with nearly a thousand running without any authentication — raising alarms about default security.',
    source: 'Infosecurity Magazine',
    sourceUrl:
      'https://www.infosecurity-magazine.com/news/researchers-40000-exposed-openclaw/',
    tag: 'security',
    publishedAt: '2026-02-06',
  },
  {
    id: 'oc-8',
    title: 'Personal AI Agents like OpenClaw Are a Security Nightmare',
    summary:
      'Cisco\'s security team breaks down the "lethal trifecta" of risk: full system access, external API reliance, and extensible skills that can silently exfiltrate data.',
    source: 'Cisco Blogs',
    sourceUrl:
      'https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare',
    tag: 'security',
    publishedAt: '2026-02-07',
  },
  {
    id: 'oc-9',
    title:
      'Viral AI, Invisible Risks: What OpenClaw Reveals About Agentic Assistants',
    summary:
      'Trend Micro research examines the broader implications of agentic AI assistants — from malicious skill injection to prompt exfiltration vulnerabilities.',
    source: 'Trend Micro',
    sourceUrl:
      'https://www.trendmicro.com/en_us/research/26/b/what-openclaw-reveals-about-agentic-assistants.html',
    tag: 'security',
    publishedAt: '2026-02-08',
  },
  {
    id: 'oc-10',
    title: 'New OpenClaw AI Agent Found Unsafe for Use',
    summary:
      'Kaspersky\'s analysis reveals 341 malicious skills on ClawHub, including keyloggers disguised as cryptocurrency tools and the Atomic macOS Stealer malware.',
    source: 'Kaspersky',
    sourceUrl:
      'https://www.kaspersky.com/blog/openclaw-vulnerabilities-exposed/55263/',
    tag: 'security',
    publishedAt: '2026-02-09',
  },
  {
    id: 'oc-11',
    title: 'Why the OpenClaw AI Assistant Is a "Privacy Nightmare"',
    summary:
      'Northeastern University researchers warn about OpenClaw\'s broad permissions — accessing email, calendars, and messaging platforms with potential for data breaches.',
    source: 'Northeastern University',
    sourceUrl:
      'https://news.northeastern.edu/2026/02/10/open-claw-ai-assistant/',
    tag: 'security',
    publishedAt: '2026-02-10',
  },
  {
    id: 'oc-12',
    title:
      'OpenClaw Review 2026: We Tested the Local AI Assistant',
    summary:
      'A hands-on review covering setup experience, integration quality, real-world performance, and honest assessment of where OpenClaw shines and falls short.',
    source: 'Hackceleration',
    sourceUrl: 'https://hackceleration.com/openclaw-review/',
    tag: 'review',
    publishedAt: '2026-02-05',
  },
  {
    id: 'oc-13',
    title:
      'OpenClaw Showed Me What the Future of Personal AI Assistants Looks Like',
    summary:
      'A deep-dive into daily life with OpenClaw — from inbox management and calendar scheduling to browser automation and smart home control, all running locally.',
    source: 'MacStories',
    sourceUrl:
      'https://www.macstories.net/stories/clawdbot-showed-me-what-the-future-of-personal-ai-assistants-looks-like/',
    tag: 'review',
    publishedAt: '2026-02-03',
  },
  {
    id: 'oc-14',
    title:
      'Clawd, Moltbot, OpenClaw AI: Full Review and Breakdown',
    summary:
      'Tracing the evolution from Clawdbot to Moltbot to OpenClaw, with a detailed breakdown of architecture, skills ecosystem, and competitive positioning.',
    source: 'Deeper Insights',
    sourceUrl:
      'https://deeperinsights.com/ai-review/clawd-moltbot-openclaw-ai-review/',
    tag: 'review',
    publishedAt: '2026-02-01',
  },
  {
    id: 'oc-15',
    title:
      '6 OpenClaw Competitors That Are Gaining Ground in 2026',
    summary:
      'Comparing OpenClaw with alternatives like Agent S3, Emergent, Adept, and Devin — evaluating security, capabilities, and ease of use across platforms.',
    source: 'Emergent',
    sourceUrl:
      'https://emergent.sh/learn/best-openclaw-alternatives-and-competitors',
    tag: 'review',
    publishedAt: '2026-02-08',
  },
  {
    id: 'oc-16',
    title: 'OpenClaw Use Cases and Security 2026',
    summary:
      'Detailed exploration of use cases: developer workflows with GitHub integration, personal productivity via Apple Notes and Notion, web automation, and smart home control.',
    source: 'AIMultiple',
    sourceUrl: 'https://research.aimultiple.com/moltbot/',
    tag: 'use-cases',
    publishedAt: '2026-02-04',
  },
  {
    id: 'oc-17',
    title:
      'OpenClaw, Moltbook and the Future of AI Agents',
    summary:
      'IBM examines how OpenClaw is testing the limits of vertical integration — from fitness coaching with Garmin data to medical lab analysis and travel planning.',
    source: 'IBM',
    sourceUrl:
      'https://www.ibm.com/think/news/clawdbot-ai-agent-testing-limits-vertical-integration',
    tag: 'use-cases',
    publishedAt: '2026-02-06',
  },
  {
    id: 'oc-18',
    title: 'Why OpenClaw AI Agents Are Replacing Chatbots in 2026',
    summary:
      'Analysis of the paradigm shift from passive chatbots to active AI agents — with OpenClaw\'s 5,700+ community-built skills on ClawHub leading the charge.',
    source: 'Markaicode',
    sourceUrl:
      'https://markaicode.com/openclaw-ai-agent-replacing-chatbots-2026/',
    tag: 'use-cases',
    publishedAt: '2026-02-07',
  },
];
