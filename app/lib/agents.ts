export type AgentAccent = 'pink' | 'blue' | 'emerald' | 'amber' | 'violet' | 'orange';

export type Agent = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  accent: AgentAccent;
  iconPath: string;
  metric: { value: string; label: string };
  problem: string;
  howItWorks: { title: string; body: string }[];
  deliverables: string[];
  signalsYouNeedIt: string[];
  industryContext: string[];
  useCases: { headline: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudy: string;
};

export const agents: Agent[] = [
  {
    slug: 'cultural',
    name: 'Cultural Agent',
    shortName: 'Cultural',
    tagline: 'Make your messaging resonate with the values your customers actually hold.',
    summary:
      'The Cultural Agent maps your brand against deep cultural frameworks — including the Cultural Onion model — to ensure your positioning, language, and creative resonate with regional values, generational shifts, and unspoken consumer beliefs rather than surface-level trends.',
    accent: 'pink',
    iconPath:
      'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm0-14a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z',
    metric: { value: '98%', label: 'cultural match score' },
    problem:
      'Most brands ship messaging that tests well in a slide deck and dies on contact with real audiences. Cultural mismatch — the gap between what a brand says and what the audience values — is the single largest predictor of campaign failure across the markets we work in.',
    howItWorks: [
      {
        title: 'Cultural Onion mapping',
        body: 'We deconstruct your audience across four cultural layers — symbols, heroes, rituals, and values — to find which layer your brand currently competes on and which one it needs to.',
      },
      {
        title: 'Regional value audit',
        body: 'We benchmark your brand against the dominant value clusters in each market you operate in (collectivist vs individualist, status vs craft, scarcity vs aspiration).',
      },
      {
        title: 'Resonance scoring',
        body: 'Every message, claim, and creative concept gets scored against the value map. Anything below a 70 gets rewritten or killed.',
      },
      {
        title: 'Creative briefing',
        body: 'We translate the cultural map into a brief your creative team — or ours — can build campaigns from with high resonance and low rework.',
      },
    ],
    deliverables: [
      'Cultural Onion map for each target market',
      'Brand-to-value resonance scorecard',
      'Tonal and lexical guidelines (words to use, words to avoid)',
      'Creative brief inputs ready for in-house or agency teams',
      'Quarterly drift report tracking cultural shifts in your category',
    ],
    signalsYouNeedIt: [
      'Campaigns that perform well in one region and flop in another',
      'Translated creative that feels stiff or off-brand',
      'A new market entry where you do not yet know what the audience values',
      'Repositioning to a younger or more diverse segment',
    ],
    industryContext: [
      'Cultural strategy used to belong to a handful of legacy agencies. The combination of LLM-driven semantic analysis and structured anthropological frameworks now lets a small team produce the same depth of insight that previously required a 12-week ethnographic study.',
      'The brands winning in 2026 are not the ones with the biggest media budgets — they are the ones whose creative output passes the "this was made for me" test. Cultural fit is the new performance metric.',
    ],
    useCases: [
      {
        headline: 'Pre-launch positioning for a new SKU',
        body: 'Before you commit a media budget, validate that the proposition lands with the values your buyer holds — not the ones your founder assumes they hold.',
      },
      {
        headline: 'Cross-border expansion',
        body: 'Avoid the classic mistake of translating creative and expecting it to perform. We rebuild the message at the value layer for each market.',
      },
      {
        headline: 'Generational repositioning',
        body: 'Gen-Z buys differently than millennials. We map the value shift and rebuild your messaging architecture to match.',
      },
    ],
    faqs: [
      {
        question: 'How is this different from a normal brand strategy engagement?',
        answer:
          'Traditional brand strategy stops at archetypes and positioning statements. Cultural strategy goes a layer deeper — to the values and rituals that drive purchase. The output is creative-ready, not slide-ready.',
      },
      {
        question: 'Do you do qualitative research, or is this all desk?',
        answer:
          'Both. We combine large-scale semantic analysis of social and review data with targeted qualitative interviews when the signal is ambiguous. Most engagements use 15 to 30 interviews per market.',
      },
      {
        question: 'How long does an engagement take?',
        answer:
          'A single-market cultural audit takes three to four weeks. Multi-market engagements add roughly two weeks per additional market.',
      },
      {
        question: 'What is the Cultural Onion?',
        answer:
          'The Cultural Onion is Geert Hofstede\'s model that separates culture into four layers: symbols (what people wear and show), heroes (who they admire), rituals (what they do habitually), and values (what they believe is right). We use it as a diagnostic to find which layer your brand competes on.',
      },
    ],
    relatedCaseStudy: 'regional-fnb-launch',
  },
  {
    slug: 'geo-optimizer',
    name: 'GEO Optimizer Agent',
    shortName: 'GEO Optimizer',
    tagline: 'Be the answer when ChatGPT, Gemini, and Perplexity get asked about your category.',
    summary:
      'The GEO (Generative Engine Optimization) Agent makes your brand the cited authority across large language models. While SEO targets ten blue links, GEO targets the one paragraph an LLM returns as the answer — and that is where buying decisions are being made in 2026.',
    accent: 'blue',
    iconPath:
      'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
    metric: { value: '+40%', label: 'LLM brand visibility' },
    problem:
      'Search is fragmenting. A growing share of high-intent product research happens inside ChatGPT, Perplexity, Gemini, and Claude — not Google. If your brand is not in the training and retrieval surface those models pull from, you are invisible to a segment of buyers that grows every month.',
    howItWorks: [
      {
        title: 'Citation surface audit',
        body: 'We map every source LLMs cite in your category — Reddit threads, niche blogs, comparison sites, structured directories — and rank them by retrieval weight.',
      },
      {
        title: 'Answer-engine content production',
        body: 'We produce assets engineered for retrieval: answer-first paragraphs, structured comparisons, schema-marked FAQs, and citation-ready data tables.',
      },
      {
        title: 'Authority distribution',
        body: 'We place your content on the high-weight sources LLMs actually retrieve from, not the ones legacy SEO tools tell you to chase.',
      },
      {
        title: 'Continuous ranking measurement',
        body: 'We query the same models your buyers query, score where you appear, and iterate weekly. You see your rank inside each LLM, not just on Google.',
      },
    ],
    deliverables: [
      'Citation map of your category across four major LLMs',
      'Monthly LLM ranking report (ChatGPT, Gemini, Perplexity, Claude)',
      'Twelve to twenty answer-engine-optimized assets per quarter',
      'Schema and structured data implementation across your owned properties',
      'Competitive share-of-voice tracking inside generative search',
    ],
    signalsYouNeedIt: [
      'Your category is being researched inside LLMs and you do not know if you appear',
      'A competitor keeps showing up in ChatGPT answers and you do not',
      'Your traditional SEO traffic is declining but search demand is steady or growing',
      'You sell to a technical or research-heavy buyer (B2B SaaS, healthtech, fintech)',
    ],
    industryContext: [
      'Generative Engine Optimization is the discipline that replaces SEO for the LLM era. Where SEO optimized for keyword match and backlink count, GEO optimizes for retrieval probability and citation weight inside large language models. The mechanics are different, the success metric is different, and most agencies have not retooled yet.',
      'A 2025 study found that 27% of high-intent commercial queries now begin inside an LLM rather than a search engine. That share is projected to cross 50% by 2027. Brands without a GEO strategy are quietly losing market share to brands that the AI has decided to recommend.',
    ],
    useCases: [
      {
        headline: 'B2B SaaS comparison queries',
        body: 'When a buyer asks ChatGPT "what is the best CRM for a 50-person sales team", the answer is being generated from a handful of sources. We make sure yours is one of them.',
      },
      {
        headline: 'Category education for a new product',
        body: 'You are creating a category. LLMs are how buyers will learn it. We seed the citation surface before competitors catch up.',
      },
      {
        headline: 'Defending against AI-cited misinformation',
        body: 'If an LLM is confidently citing wrong information about your brand, we identify the source and replace it with authoritative content.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between GEO and SEO?',
        answer:
          'SEO optimizes for Google\'s ranking algorithm and targets the ten blue links. GEO (Generative Engine Optimization) optimizes for retrieval inside large language models like ChatGPT, Gemini, and Perplexity, and targets the one answer paragraph the model generates. The signals are different — GEO weights citation authority, semantic clarity, and structured data more heavily than backlinks.',
      },
      {
        question: 'How do you measure GEO performance?',
        answer:
          'We run a panel of buyer-intent queries against each major LLM weekly and score where your brand appears, in what context, and with what sentiment. You get a brand-mention rate, citation rate, and competitive share-of-voice inside each LLM.',
      },
      {
        question: 'Will this replace our SEO program?',
        answer:
          'No, but it should sit alongside it. SEO traffic from Google is still significant for most categories. GEO addresses the search demand that is migrating to LLMs — a share that grows every quarter.',
      },
      {
        question: 'How quickly do results show up?',
        answer:
          'Initial ranking lifts inside Perplexity and ChatGPT typically appear within four to eight weeks. Gemini and Claude take longer due to slower retrieval refresh cycles.',
      },
    ],
    relatedCaseStudy: 'd2c-skincare-glow',
  },
  {
    slug: 'market-research',
    name: 'Market Research Agent',
    shortName: 'Market Research',
    tagline: 'Compress a six-week research cycle into nine days — without losing depth.',
    summary:
      'The Market Research Agent automates competitive analysis, category sizing, and buyer-signal discovery. It ingests millions of data points — reviews, earnings transcripts, hiring signals, app store data, ad libraries — and outputs the same insight density your strategy team would need a month to produce.',
    accent: 'emerald',
    iconPath: 'M3 3v18h18v-2H5V3H3zm4 14h2v-7H7v7zm4 0h2V8h-2v9zm4 0h2v-4h-2v4zm4 0h2V6h-2v11z',
    metric: { value: '-60%', label: 'planning-cycle time' },
    problem:
      'Most marketing decisions get made on stale data. By the time a traditional research deck lands, the category has moved and the recommendation is already out of date. The cost is not just slow decisions — it is wrong decisions made confidently from old signals.',
    howItWorks: [
      {
        title: 'Signal ingestion',
        body: 'We pull from twenty-plus data sources continuously: review platforms, social, app stores, ad libraries, hiring data, podcast transcripts, earnings calls, and SEC filings.',
      },
      {
        title: 'Pattern extraction',
        body: 'LLM-driven analysis surfaces the patterns a human analyst would find — but in hours, not weeks. Every claim is grounded in a citable source.',
      },
      {
        title: 'Strategic synthesis',
        body: 'A senior strategist reviews, prunes, and synthesizes the machine output into a board-ready point of view. We do not ship raw AI output.',
      },
      {
        title: 'Continuous monitoring',
        body: 'After the initial deep-dive, the agent stays on. You get a monthly delta report flagging new entrants, pricing shifts, and emerging buyer signals.',
      },
    ],
    deliverables: [
      'Category sizing with bottom-up TAM model',
      'Competitive landscape map (positioning, pricing, claims, share of voice)',
      'Buyer-signal index showing where demand is forming next',
      'Pricing and packaging benchmark vs. top ten competitors',
      'Monthly delta report on category shifts',
    ],
    signalsYouNeedIt: [
      'You are entering a new category or geography and need a fast, defensible point of view',
      'A competitor moved and you need to respond without flying blind',
      'Your board or investors are asking for a market sizing you have not refreshed in 12+ months',
      'You suspect your pricing or packaging is misaligned but have no benchmark',
    ],
    industryContext: [
      'Market research has always been the slow step in marketing. The combination of LLM-based extraction and structured analytical frameworks now lets a small team deliver insight at the speed of decisions. Compressing the planning cycle from six weeks to nine days is not just faster — it changes which decisions get made.',
      'The brands that are growing fastest in 2026 are the ones with the shortest sense-to-act loop. Research that lands after the moment has passed is research that did not happen.',
    ],
    useCases: [
      {
        headline: 'Pre-launch category mapping',
        body: 'Before you commit to a category, get a defensible read on size, growth rate, white space, and incumbent vulnerability.',
      },
      {
        headline: 'Competitive response',
        body: 'A competitor just raised, repriced, or rebranded. You need an informed response in days, not weeks.',
      },
      {
        headline: 'Investor-grade market sizing',
        body: 'Board meeting in three weeks. We deliver a bottom-up TAM, SAM, SOM with cited sources you can defend in a diligence call.',
      },
    ],
    faqs: [
      {
        question: 'Is this AI-generated research I can trust in a board meeting?',
        answer:
          'Every finding is sourced and reviewed by a human strategist before delivery. We treat AI as a research assistant that compresses the desk-research phase — not as a replacement for judgment.',
      },
      {
        question: 'What data sources do you use?',
        answer:
          'Twenty-plus structured and unstructured sources including G2, Capterra, Trustpilot, App Store, Play Store, Meta and Google ad libraries, LinkedIn hiring data, podcast transcripts, earnings call transcripts, SEC filings, and category-specific review sites.',
      },
      {
        question: 'How is this different from a traditional research firm?',
        answer:
          'Speed and depth at a fraction of the cost. A traditional firm takes six to twelve weeks and seventy to two hundred thousand dollars for a category deep-dive. We deliver comparable insight density in nine to fourteen days, with continuous monitoring built in.',
      },
      {
        question: 'Do you do primary research?',
        answer:
          'When the secondary signal is ambiguous or the category is too niche for desk research alone, yes — we run targeted buyer interviews and surveys. Most engagements blend both.',
      },
    ],
    relatedCaseStudy: 'b2b-saas-pipeline',
  },
  {
    slug: 'social-listening',
    name: 'Social Listening Agent',
    shortName: 'Social Listening',
    tagline: 'Hear what your market is saying before your competitors do.',
    summary:
      'The Social Listening Agent monitors mentions, sentiment shifts, emerging conversations, and crisis signals across social platforms, review sites, communities, and the open web — so you can move on opportunity and threat in hours, not weeks.',
    accent: 'amber',
    iconPath:
      'M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3',
    metric: { value: '< 1hr', label: 'crisis detection lead time' },
    problem:
      'Most brands find out about a crisis when it is already trending. Most opportunities — a niche community catching fire, a competitor stumble, a creator about to take off — get noticed two weeks too late. The cost is reactive marketing in a category where the brands that move first take disproportionate share.',
    howItWorks: [
      {
        title: 'Multi-surface monitoring',
        body: 'We track conversations across X, Reddit, TikTok, YouTube, Instagram, niche forums, review sites, and the open web — with category-tuned keyword and entity models.',
      },
      {
        title: 'Sentiment and intent scoring',
        body: 'Every relevant mention gets scored for sentiment, intent (complaint, recommendation, question, comparison), and reach so you can prioritize what actually matters.',
      },
      {
        title: 'Trend and crisis detection',
        body: 'We detect anomalous volume spikes, sentiment swings, and emerging narrative clusters early enough that you can shape the story.',
      },
      {
        title: 'Action briefings',
        body: 'You do not get a dashboard of noise. You get short briefings: "here is what to respond to, here is what to ignore, here is what to lean into."',
      },
    ],
    deliverables: [
      'Real-time monitoring dashboard tuned to your brand and category',
      'Weekly conversation intelligence report',
      'Same-hour crisis alerting with response recommendations',
      'Competitive sentiment benchmarking',
      'Emerging-creator and emerging-community discovery',
    ],
    signalsYouNeedIt: [
      'A previous crisis caught you flat-footed and you cannot afford a repeat',
      'You are in a category where reputation moves fast (DTC, hospitality, healthtech)',
      'You want to find creators and communities before they become expensive',
      'You suspect your competitors are doing this and you are not',
    ],
    industryContext: [
      'Social listening as a category used to mean buying an expensive enterprise tool and hiring an analyst to make sense of it. Most brands ended up with dashboards no one read. The shift to LLM-driven listening means the output is not a dashboard — it is a curated, decision-ready briefing produced for one human reader.',
      'The brands handling reputation best in 2026 treat listening as an always-on intelligence function, not a quarterly report. The faster your sense-to-act loop, the smaller the cost of every crisis and the bigger the upside of every opportunity.',
    ],
    useCases: [
      {
        headline: 'Crisis early warning',
        body: 'A complaint thread is gaining traction on Reddit. We catch it at 800 upvotes, not 80,000, and brief you on whether and how to respond.',
      },
      {
        headline: 'Creator discovery',
        body: 'Find the niche creators in your category before they are on every brand\'s shortlist. The economics of partnership are very different at 50k followers than at 500k.',
      },
      {
        headline: 'Competitive intelligence',
        body: 'Track what real customers are saying about competitors — the praise, the complaints, the unmet needs. That is the brief for your next campaign.',
      },
    ],
    faqs: [
      {
        question: 'How is this different from Brandwatch or Sprout Social?',
        answer:
          'Enterprise social listening tools give you a dashboard. We give you a curated briefing. The dashboard is the means — the decision-ready intelligence is the output. Most teams using enterprise tools end up needing an analyst to translate the dashboard anyway.',
      },
      {
        question: 'What is the response time on crisis alerts?',
        answer:
          'High-severity alerts are surfaced within one hour of the signal threshold being crossed, with a recommended response posture attached.',
      },
      {
        question: 'Can you cover non-English markets?',
        answer:
          'Yes. We currently cover English, Hindi, Spanish, French, Portuguese, German, and Japanese with native-quality sentiment scoring. Other languages on request.',
      },
      {
        question: 'Do you also handle the response, or just the listening?',
        answer:
          'Listening is what this agent does. If you want execution — community management, creator outreach, crisis comms — we pair it with the Social Media Agent and the Growth Strategy Agent.',
      },
    ],
    relatedCaseStudy: 'regional-fnb-launch',
  },
  {
    slug: 'social-media',
    name: 'Social Media Agent',
    shortName: 'Social Media',
    tagline: 'Turn deep research into a content engine that actually ships every week.',
    summary:
      'The Social Media Agent translates your strategy, cultural map, and category research into a living content calendar — and executes against it. It is the difference between a brand that posts when there is bandwidth and one that has a coherent voice every day of the year.',
    accent: 'violet',
    iconPath:
      'M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
    metric: { value: '3x', label: 'organic engagement lift' },
    problem:
      'Most brands have a content calendar that lives in a Notion doc and dies in week three. The work that ships is reactive, off-brand, and inconsistent — because there is no system. The cost is months of effort with nothing compounding.',
    howItWorks: [
      {
        title: 'Pillar architecture',
        body: 'We build four to six content pillars rooted in your category authority and cultural map. Every post belongs to a pillar — no orphan content.',
      },
      {
        title: 'Calendar and brief generation',
        body: 'A rolling 30-day calendar with platform-specific briefs. Every brief contains the hook, the structure, the visual direction, and the call to action.',
      },
      {
        title: 'Production and shipping',
        body: 'We produce or coordinate production of copy, static, short-form video, and carousels. Approval, scheduling, and publishing are all handled.',
      },
      {
        title: 'Performance learning loop',
        body: 'Weekly performance review. What worked moves into the next month\'s calendar. What did not gets cut. The system gets sharper every cycle.',
      },
    ],
    deliverables: [
      'Content pillar architecture rooted in your strategy',
      'Rolling 30-day content calendar with platform-specific briefs',
      'Production-ready creative briefs for copy, static, and video',
      'Scheduling, publishing, and community moderation',
      'Weekly performance digest with what to double down on',
    ],
    signalsYouNeedIt: [
      'Your social presence is inconsistent and you can feel the brand drift',
      'You are paying for content but cannot tell what is working',
      'You have a clear strategy on paper but cannot translate it into weekly output',
      'You are missing a coherent voice across LinkedIn, X, Instagram, and YouTube',
    ],
    industryContext: [
      'Social media is the most public surface of your brand and the one most likely to be run on bandwidth rather than strategy. The brands compounding fastest are the ones treating organic social as a long-horizon distribution channel, not a short-term campaign push.',
      'A well-run social media program is a flywheel: research feeds strategy, strategy feeds calendar, calendar feeds production, production feeds learning, learning feeds research. The agent runs the flywheel; your team stays focused on the product.',
    ],
    useCases: [
      {
        headline: 'Founder-led brand on LinkedIn',
        body: 'You want your founder to build category authority on LinkedIn but they do not have time to write. We build the pillar architecture and ghostwrite to their voice.',
      },
      {
        headline: 'D2C brand short-form video',
        body: 'You need 60 pieces of short-form video per month. We brief, produce, and ship — with performance review baked in.',
      },
      {
        headline: 'B2B thought leadership engine',
        body: 'A consistent point of view across LinkedIn, X, and YouTube — synced to your sales motion and category creation effort.',
      },
    ],
    faqs: [
      {
        question: 'Do you actually produce the creative or just brief it?',
        answer:
          'Both options are available. The standard engagement includes production. If you have an in-house creative team or a preferred agency, we hand off production-ready briefs and stay close to the performance review loop.',
      },
      {
        question: 'How many platforms can you run in parallel?',
        answer:
          'A typical engagement runs three to four platforms in parallel. We strongly recommend against trying to run every platform — focus drives compounding.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'We track three layers: reach (impressions, follower growth), engagement (depth of interaction per post), and conversion (qualified leads, demo requests, click-throughs to product). The mix depends on your business model.',
      },
      {
        question: 'Can you ghostwrite for our founder?',
        answer:
          'Yes. We invest the first two to three weeks deeply learning the founder\'s voice, then produce drafts they review and ship. After a quarter, the voice match is generally indistinguishable.',
      },
    ],
    relatedCaseStudy: 'd2c-skincare-glow',
  },
  {
    slug: 'growth-strategy',
    name: 'Growth Strategy Agent',
    shortName: 'Growth Strategy',
    tagline: 'The architect that turns every other agent\'s output into a single, sequenced growth plan.',
    summary:
      'The Growth Strategy Agent synthesizes inputs from all the specialist agents — cultural, GEO, research, listening, social — into a quarter-by-quarter growth roadmap with clear bets, sequencing, and success metrics. It is the meta-agent that keeps the system pointed at the goal.',
    accent: 'orange',
    iconPath:
      'M3 17l6-6 4 4 8-8M14 7h7v7',
    metric: { value: '4x', label: 'qualified-lead growth' },
    problem:
      'Most growth efforts fail not because the tactics are bad, but because the tactics are not sequenced. Six initiatives shipped in parallel without a clear bet hierarchy is the most common pattern we see — and the most expensive. The cost is a year of motion and very little compounding.',
    howItWorks: [
      {
        title: 'Diagnose',
        body: 'We start with a growth diagnostic — where is the bottleneck right now? Awareness, conversion, retention, expansion? Most teams misidentify their bottleneck and over-invest in the wrong layer.',
      },
      {
        title: 'Bet architecture',
        body: 'We define two to three big bets per quarter with clear hypotheses, success criteria, and kill conditions. The rest of the tactical work gets sequenced behind those bets.',
      },
      {
        title: 'Sequenced roadmap',
        body: 'A 90-day roadmap tied to quarterly outcomes, with weekly milestones and dependencies. Every other agent\'s work plugs into this plan, not around it.',
      },
      {
        title: 'Weekly operating rhythm',
        body: 'We run a 30-minute weekly review with you — what shipped, what moved, what to change. Strategy that does not get re-examined weekly drifts.',
      },
    ],
    deliverables: [
      'Quarterly growth diagnostic and bet architecture',
      '90-day sequenced roadmap with milestones',
      'Weekly operating cadence and decision log',
      'Cross-agent coordination so initiatives compound rather than collide',
      'Monthly executive readout for board or investors',
    ],
    signalsYouNeedIt: [
      'You are running multiple growth initiatives but cannot tell which is working',
      'Your team is busy but the numbers are flat',
      'You need an investor-ready growth narrative for the next round',
      'You have specialist talent (or specialist agencies) but no one running point on the system',
    ],
    industryContext: [
      'Growth as a discipline matured around tactic libraries — landing-page tests, paid-channel experiments, lifecycle email. The next maturation is sequencing. The brands compounding now have stopped asking "what tactic should we run?" and started asking "what is the right order to run them in?"',
      'The Growth Strategy Agent is intentionally the smallest output of any of the agents — a single doc and a weekly meeting. Its job is not to add work; its job is to make every other piece of work compound.',
    ],
    useCases: [
      {
        headline: 'Founder-led startup, first growth hire pending',
        body: 'You do not yet have a head of growth but you cannot keep flying by the seat of your pants. We give you a system the next hire can step into.',
      },
      {
        headline: 'Scale-up with too many initiatives',
        body: 'You have five workstreams and three agencies. We rebuild the sequencing so the work compounds rather than competes.',
      },
      {
        headline: 'Pre-fundraise narrative tightening',
        body: 'You need a growth story tight enough to defend in diligence. We build the bet architecture and the metrics that support it.',
      },
    ],
    faqs: [
      {
        question: 'Is this a fractional CMO engagement?',
        answer:
          'It is closer to a fractional Head of Growth than a fractional CMO. The focus is on sequencing, prioritization, and the operating cadence — not on brand or comms leadership.',
      },
      {
        question: 'How does this work alongside the other agents?',
        answer:
          'The Growth Strategy Agent runs the plan. The other agents execute against it. You can engage the strategy layer alone, but it works best when paired with at least one execution agent (Social Media, GEO, or Research).',
      },
      {
        question: 'What does the weekly cadence look like?',
        answer:
          'One 30-minute review weekly, one 60-minute strategic check-in monthly, one quarterly reset. The doc lives in your workspace, not ours.',
      },
      {
        question: 'How quickly does the plan adapt to new signal?',
        answer:
          'The 90-day plan stays steady; the weekly tactical layer adapts to new signal continuously. Strategy that flips every week is not strategy.',
      },
    ],
    relatedCaseStudy: 'b2b-saas-pipeline',
  },
];

export const accentMap: Record<
  AgentAccent,
  { text: string; bg: string; border: string; ring: string; glow: string; chip: string }
> = {
  pink: {
    text: 'text-pink-300',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    ring: 'ring-pink-500/40',
    glow: 'shadow-[0_0_60px_-15px_rgba(236,72,153,0.5)]',
    chip: 'bg-pink-500/15 text-pink-200 border-pink-500/30',
  },
  blue: {
    text: 'text-blue-300',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    ring: 'ring-blue-500/40',
    glow: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)]',
    chip: 'bg-blue-500/15 text-blue-200 border-blue-500/30',
  },
  emerald: {
    text: 'text-emerald-300',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    ring: 'ring-emerald-500/40',
    glow: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.5)]',
    chip: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/30',
  },
  amber: {
    text: 'text-amber-300',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    ring: 'ring-amber-500/40',
    glow: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.5)]',
    chip: 'bg-amber-500/15 text-amber-200 border-amber-500/30',
  },
  violet: {
    text: 'text-violet-300',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    ring: 'ring-violet-500/40',
    glow: 'shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)]',
    chip: 'bg-violet-500/15 text-violet-200 border-violet-500/30',
  },
  orange: {
    text: 'text-orange-300',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    ring: 'ring-orange-500/40',
    glow: 'shadow-[0_0_60px_-15px_rgba(249,115,22,0.5)]',
    chip: 'bg-orange-500/15 text-orange-200 border-orange-500/30',
  },
};

export function getAgent(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}
