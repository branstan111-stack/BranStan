export type CaseStudy = {
  slug: string;
  title: string;
  question: string;
  summary: string;
  industry: string;
  service: string;
  date: string;
  readMinutes: number;
  heroMetric: { value: string; label: string };
  metrics: { value: string; label: string }[];
  agentsUsed: string[];
  challenge: string[];
  approach: { step: string; title: string; body: string }[];
  outcome: string[];
  lessons: string[];
  testimonial: { quote: string; author: string; role: string };
  faqs: { question: string; answer: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'd2c-skincare-glow',
    title: 'Lifting a D2C skincare brand\'s LLM visibility by 47% in 90 days',
    question: 'How do you make a D2C brand the answer when ChatGPT is asked about its category?',
    summary:
      'A 3-year-old D2C skincare brand was losing share to AI-cited competitors. We rebuilt their citation surface and content architecture for generative engines. In 90 days, brand mentions inside ChatGPT and Perplexity rose 47%, organic-attributed revenue grew 31%, and qualified-lead cost dropped by half.',
    industry: 'Direct-to-Consumer Skincare',
    service: 'GEO Optimization + Social Media',
    date: '2026-04-18',
    readMinutes: 7,
    heroMetric: { value: '+47%', label: 'LLM brand mention rate (ChatGPT + Perplexity)' },
    metrics: [
      { value: '+31%', label: 'organic-attributed revenue' },
      { value: '-52%', label: 'qualified lead cost' },
      { value: '4.1x', label: 'share-of-voice vs top competitor inside Perplexity' },
    ],
    agentsUsed: ['geo-optimizer', 'social-media'],
    challenge: [
      'The brand was profitable, well-reviewed on its own site, and ranked respectably on Google. But buyers in the 25-to-34 segment had quietly moved their product research into ChatGPT and Perplexity — and the brand was almost never cited there. A competitor with weaker product but stronger citation surface was getting recommended on roughly 6 in 10 generative queries in the category.',
      'The founder had spent the previous quarter doubling down on traditional SEO, with diminishing returns. The diagnosis was wrong — the search demand had not disappeared; it had migrated to surfaces the SEO program could not reach.',
    ],
    approach: [
      {
        step: '01',
        title: 'Citation surface audit',
        body: 'We ran 240 buyer-intent queries against ChatGPT, Gemini, Perplexity, and Claude — across product, comparison, and "best of" categories. We mapped every source the models cited and ranked them by retrieval weight. Three Reddit communities, two niche review blogs, and one comparison site accounted for 71% of the brand mentions in the category.',
      },
      {
        step: '02',
        title: 'Answer-engine asset production',
        body: 'We produced 18 assets engineered for LLM retrieval — answer-first paragraphs, structured comparison tables, schema-marked FAQs. The angle was not "best skincare brand" (a saturated query) but the long-tail, problem-led queries that buyers actually run through LLMs ("what helps with hormonal breakouts in your thirties").',
      },
      {
        step: '03',
        title: 'Authority distribution',
        body: 'We placed the assets on the high-weight sources our audit had surfaced — not the high-DA-but-low-LLM-weight sites a traditional SEO program would target. Three of the placements went live within two weeks; the others rolled out over the quarter.',
      },
      {
        step: '04',
        title: 'Founder voice on social',
        body: 'Parallel to the GEO work, we built a LinkedIn and short-form video presence for the founder around the same long-tail problem-led content. The social work seeded the conversations the LLMs would later retrieve from — a slow-build flywheel that compounded with the direct GEO work.',
      },
      {
        step: '05',
        title: 'Weekly LLM ranking measurement',
        body: 'We ran the same 240 queries weekly and tracked where the brand appeared, in what context, and against which competitors. The data fed back into the next round of asset production.',
      },
    ],
    outcome: [
      'In 90 days the brand mention rate inside ChatGPT and Perplexity rose by 47%, and share-of-voice against the lead competitor inside Perplexity reached 4.1x. Organic-attributed revenue — measured through last-touch attribution and post-purchase surveys — grew 31% over the same window.',
      'Qualified lead cost fell by 52%, driven primarily by the founder-led social engine becoming a top-of-funnel source. Most of those leads cited "I saw this in ChatGPT" or a founder post as the reason they bought, in the post-purchase survey.',
    ],
    lessons: [
      'A weak citation surface is invisible to traditional SEO tools but devastating in the LLM era. Audit it explicitly.',
      'Long-tail, problem-led content outperforms broad category content inside LLMs — the model rewards specificity.',
      'GEO and organic social compound. The social content seeds the conversations LLMs later retrieve from.',
    ],
    testimonial: {
      quote:
        'We thought we had an SEO problem. We had a citation problem. Ninety days in, the change in how often we get mentioned is the single biggest unlock our marketing function has had this year.',
      author: 'Founder',
      role: 'D2C Skincare Brand',
    },
    faqs: [
      {
        question: 'How long until GEO lifts started showing up?',
        answer:
          'Initial ranking lifts inside Perplexity appeared within three weeks. ChatGPT lifts began at week six and accelerated through the quarter as the asset library grew.',
      },
      {
        question: 'Did the brand stop doing traditional SEO?',
        answer:
          'No. SEO traffic remained meaningful and we kept the existing program running. GEO sat alongside it, not on top of it.',
      },
      {
        question: 'What was the team size on the engagement?',
        answer:
          'Two senior strategists on our side, the founder and one in-house marketing manager on theirs. The agents did the work that would otherwise have required a six-person team.',
      },
    ],
  },
  {
    slug: 'b2b-saas-pipeline',
    title: 'Cutting a B2B SaaS company\'s media planning cycle from six weeks to nine days',
    question: 'How do you compress a marketing planning cycle without losing strategic depth?',
    summary:
      'A Series-B B2B SaaS company was losing competitive ground because every campaign took six weeks to plan and ship. We rebuilt the research and strategy layer with the Market Research and Growth Strategy agents. The planning cycle compressed to nine days, qualified pipeline grew 4x in two quarters, and the team shipped four campaigns in the time it used to ship one.',
    industry: 'B2B SaaS (Sales Tech)',
    service: 'Market Research + Growth Strategy',
    date: '2026-03-02',
    readMinutes: 8,
    heroMetric: { value: '6wk to 9d', label: 'campaign planning cycle compression' },
    metrics: [
      { value: '4x', label: 'qualified pipeline growth (2 quarters)' },
      { value: '-71%', label: 'time from insight to live campaign' },
      { value: '$0', label: 'incremental research-vendor spend' },
    ],
    agentsUsed: ['market-research', 'growth-strategy'],
    challenge: [
      'The company had a strong product and a strong sales team, but marketing had become the bottleneck. Every campaign required a research phase — competitive analysis, segment validation, message testing — that took roughly six weeks. By the time a campaign shipped, the competitive landscape had moved and at least one piece of the brief was already stale.',
      'The natural fix would have been to hire two more strategists. The CMO knew that would only shift the bottleneck — the underlying process was the problem, not the headcount.',
    ],
    approach: [
      {
        step: '01',
        title: 'Operating diagnostic',
        body: 'We started with a Growth Strategy diagnostic to identify the real bottleneck. The team had assumed it was creative throughput; the data said it was the research phase consuming 70% of every cycle.',
      },
      {
        step: '02',
        title: 'Continuous research substrate',
        body: 'We stood up the Market Research Agent as an always-on substrate. Instead of each campaign triggering a fresh research sprint, we built a continuously updated category intelligence layer that every campaign could draw from.',
      },
      {
        step: '03',
        title: 'Quarterly bet architecture',
        body: 'We rebuilt the planning cadence around quarterly bets, not campaign-by-campaign briefs. Two big bets per quarter, each with explicit success criteria and kill conditions. Campaign-level work sequenced behind those bets.',
      },
      {
        step: '04',
        title: 'Weekly operating rhythm',
        body: 'A 30-minute weekly review replaced the ad-hoc planning meetings. The Growth Strategy Agent held the doc; the team executed against it. Decisions that used to take a week of back-and-forth got made in 30 minutes.',
      },
    ],
    outcome: [
      'Within ten weeks, the planning cycle compressed from six weeks to nine days. The team shipped four major campaigns in Q1 against a historical baseline of one per quarter. Qualified pipeline — measured at the SQL stage — grew 4x over two quarters.',
      'The unlock was not speed for its own sake. Faster planning meant the team could test more hypotheses, kill weak bets earlier, and double down on what worked. The 4x pipeline growth was not from more spend; it was from a higher hit rate.',
    ],
    lessons: [
      'When the bottleneck is the research phase, no amount of creative or media work makes the system faster.',
      'A continuously updated research substrate is structurally cheaper than a per-campaign research sprint.',
      'Compressing the planning cycle does not mean cutting depth — it means cutting the time between insight and action.',
    ],
    testimonial: {
      quote:
        'Four campaigns shipped in the time it used to take us to ship one. And they were better campaigns — because the research was fresh, not six weeks old.',
      author: 'VP Marketing',
      role: 'B2B SaaS, Series B',
    },
    faqs: [
      {
        question: 'Did you replace the in-house research team?',
        answer:
          'No. The in-house team shifted from desk research to interpretation and decision-making. The agent handled the work that was bottlenecking them; they did the work the agent cannot do.',
      },
      {
        question: 'How do you measure pipeline lift attribution?',
        answer:
          'We attribute conservatively — last-touch on the campaigns that shipped during the engagement, validated against the team\'s baseline run-rate. The 4x figure is net of seasonality and a small product-led tailwind.',
      },
      {
        question: 'What happens after the engagement ends?',
        answer:
          'The operating rhythm and the research substrate stay with the team. We typically transition to a lighter monthly cadence once the new system is internalized.',
      },
    ],
  },
  {
    slug: 'regional-fnb-launch',
    title: 'Launching a regional F&B brand into three new markets without a single creative misfire',
    question: 'How do you take a regional brand into new markets without flattening what made it work?',
    summary:
      'A successful regional F&B brand was preparing to expand from its home market into three new ones. Previous expansions in the category had failed by translating creative rather than rebuilding it at the cultural layer. We used the Cultural Agent and Social Listening Agent to map each market\'s value structure, then rebuilt the brand expression for each. All three launches hit their first-quarter revenue targets; one exceeded by 38%.',
    industry: 'Regional F&B (Beverages)',
    service: 'Cultural Strategy + Social Listening',
    date: '2026-02-11',
    readMinutes: 9,
    heroMetric: { value: '3/3', label: 'market launches hit first-quarter targets' },
    metrics: [
      { value: '+38%', label: 'over-plan in highest-performing market' },
      { value: '0', label: 'creative misfires requiring re-shoot' },
      { value: '4 weeks', label: 'cultural mapping time per market' },
    ],
    agentsUsed: ['cultural', 'social-listening'],
    challenge: [
      'The brand had a sharp, founder-led voice that worked beautifully in its home market. Two competitors had recently tried the same expansion and both had stumbled — one badly enough that they pulled back within a year. Both had translated their existing creative rather than rebuilding it. The founder did not want to repeat that mistake but did not have an internal team capable of doing the cultural work for three markets in parallel.',
    ],
    approach: [
      {
        step: '01',
        title: 'Cultural Onion mapping per market',
        body: 'We ran the Cultural Onion framework against each of the three target markets — symbols, heroes, rituals, values. For each market we identified the layer the dominant local incumbents competed on and the layer the brand should target to avoid head-on collision.',
      },
      {
        step: '02',
        title: 'Resonance scoring of existing assets',
        body: 'We scored the brand\'s existing assets against each market\'s value map. Roughly 40% of the existing creative scored above the threshold and could be reused with light adaptation. The remaining 60% was rebuilt from the brief up.',
      },
      {
        step: '03',
        title: 'Always-on listening before launch',
        body: 'We stood up the Social Listening Agent in each market eight weeks before launch. The early signal caught two narrative risks (one tied to a competitor stumble, one tied to a category-level health concern) early enough to shape positioning around them rather than into them.',
      },
      {
        step: '04',
        title: 'Sequenced launch with weekly listening review',
        body: 'Markets launched two weeks apart. The listening data from market one fed into the messaging refinements for market two and three — a deliberate sequenced rollout rather than a simultaneous launch.',
      },
    ],
    outcome: [
      'All three markets hit their first-quarter revenue targets. The highest-performing market — where the cultural layer was furthest from the home market and the rebuild was most extensive — exceeded plan by 38%. Zero creative had to be re-shot post-launch, in a category where re-shoots are the norm for cross-border expansion.',
      'The longer-term unlock was that the cultural maps became reusable. Year-two expansions used the same framework, the same playbook, and a lighter touch on cultural mapping (two weeks rather than four).',
    ],
    lessons: [
      'Translating creative is the most common — and most expensive — failure mode in cross-border expansion.',
      'Sequenced rollouts compound: listening data from market one is the most valuable input into market two.',
      'The cost of the cultural mapping was a small fraction of the cost of a single re-shoot. The math is unambiguous.',
    ],
    testimonial: {
      quote:
        'Two competitors had tried this expansion before us and both stumbled. We did not. The cultural work was the single biggest reason — and we now have a playbook for every future market.',
      author: 'Co-founder',
      role: 'Regional F&B Brand',
    },
    faqs: [
      {
        question: 'How long did each market take to map?',
        answer:
          'Four weeks per market for the first three markets. Year-two markets compressed to two weeks because the framework and the data pipeline were already in place.',
      },
      {
        question: 'Did you use local research partners?',
        answer:
          'Yes — for the qualitative layer (15 interviews per market) we partnered with local research firms. The desk research and synthesis was handled by the agent. The blend kept cost down without sacrificing depth.',
      },
      {
        question: 'How is this different from a traditional brand-localization engagement?',
        answer:
          'Localization typically operates at the symbols and language layer — fonts, colors, translations. Cultural strategy operates at the values layer — what the audience believes is right. The difference shows up in whether the creative feels native or imported.',
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
