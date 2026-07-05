import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/strategy/")({
  component: StrategyPage,
  head: () => ({
    meta: [
      { title: "The Viva Strategy Playbook — Health & Wellness Site Blueprint" },
      { name: "description", content: "A full execution plan for building and monetizing a health & wellness website through Google AdSense." },
    ],
  }),
});

const sections = [
  {
    n: "01",
    t: "Website Strategy & Identity",
    b: [
      { h: "Three name ideas", p: "Viva Wellness (chosen — Latin for 'live'), Kindly Health, Mendly. Check .com availability at Namecheap, Porkbun, or Cloudflare Registrar. Secure matching handles on Instagram, Pinterest, TikTok before publishing." },
      { h: "Mission statement", p: "To translate the best available research on movement, nutrition, mental health, and sleep into plain-spoken, actionable guides so anyone can build a healthier daily life — regardless of budget or background." },
      { h: "Target audience", p: "Adults 25–55, income $40k+, primarily US/UK/CA/AU. Pain points: stress, poor sleep, low energy, inconsistent habits, information overload. Search intent: 'how to sleep better', '30-day meal plan', 'anxiety techniques'." },
      { h: "UVP", p: "Plant-forward, evidence-based, gentle — no bro-culture, no fear-marketing, no purple prose. Every article cites sources and includes a real practice you can try in under 10 minutes." },
    ],
  },
  {
    n: "02",
    t: "Technical Structure",
    b: [
      { h: "Platform", p: "WordPress + a fast theme (GeneratePress or Kadence). Full ownership, AdSense-friendly, huge plugin ecosystem. If non-technical: Squarespace works but caps ad revenue potential." },
      { h: "Hosting & domain", p: "SiteGround GrowBig or Cloudways Vultr HF ($15–30/mo). Domain via Cloudflare Registrar (at-cost pricing). Enable Cloudflare CDN and full-page cache from day one." },
      { h: "Essential plugins", p: "Rank Math (SEO), WP Rocket (speed), Wordfence (security), ShortPixel (image compression), Site Kit by Google (Analytics + Search Console + AdSense), Complianz (GDPR/CCPA)." },
      { h: "UX principles", p: "Fast (LCP < 2.5s), readable (18px body, 65ch line-length), scannable (H2 every 300 words, TOC on long posts), trustworthy (author bio + review date + citations on every post), safe (visible medical disclaimer)." },
    ],
  },
  {
    n: "03",
    t: "Content Plan",
    b: [
      { h: "6 categories", p: "Fitness · Nutrition · Mental Health · Sleep · Mindfulness · Healthy Habits." },
      { h: "6-month calendar (2 posts/week = 52 total)", p: "Month 1 — foundations: 30-day starter guide, no-equipment workouts, clean-eating meal plan, anxiety techniques, deep-sleep guide, hydration guide, walking benefits, morning routine. Month 2 — nutrition deep dive: protein for beginners, gut health, plant-based swaps, sugar-free week, meal prep 101. Month 3 — fitness ladder: bodyweight → resistance bands → dumbbells, mobility, cardio zones. Month 4 — mental health: burnout recovery, digital detox, CBT basics, journaling. Month 5 — sleep science: circadian rhythm, shift-work sleep, nap strategy, sleep tech reviews. Month 6 — synthesis: seasonal reset, habit stacking, annual health review." },
      { h: "Full articles", p: "Five complete, 1,000–1,500-word articles are live in the Articles section — each with intro, H2/H3 subheads, lists, actionable tips, CTA, and FAQ." },
      { h: "Interactive tools", p: "BMI Calculator, Water Intake, Sleep-Cycle Timer, Calorie Needs, Stress Check — all built and live in Tools. Each keeps users on-page 3–5× longer, boosting AdSense impressions." },
      { h: "30 FAQ + internal linking", p: "30 answered FAQs are seeded across pages. Internal-link rule: every article links to 3 related posts + 1 pillar page. Silo structure by category." },
      { h: "Schema markup", p: "Every article emits Article + FAQPage JSON-LD (already implemented). Add HowTo schema for step-based posts using Rank Math." },
    ],
  },
  {
    n: "04",
    t: "Monetization (AdSense)",
    b: [
      { h: "CPC & RPM", p: "Health CPC: $1.20–$3.50. RPM: $8–$25 (US traffic), $2–$5 (tier-2). Fitness-supplement and mental-health keywords lean highest." },
      { h: "Geo strategy", p: "Prioritize US/UK/CA/AU by writing in American English, using imperial + metric units, and building backlinks from those regions." },
      { h: "Ad placements", p: "1 above-the-fold (below H1, before intro), 1 after 3rd paragraph, 1 mid-article (after H2), 1 end-of-content, 1 sidebar sticky. Never break sentences with ads." },
      { h: "Auto Ads", p: "Enable Auto Ads for anchor, vignette, and in-page. Combine with manual placements for best RPM." },
      { h: "Highest-earning formats", p: "In-article native ads > multiplex > display > link. Video (Auto Ads matched content) pays best when available." },
    ],
  },
  {
    n: "05",
    t: "AdSense Approval",
    b: [
      { h: "Pre-approval checklist", p: "20+ original 1,500-word articles · About, Contact, Privacy, Medical Disclaimer pages · custom domain · SSL · clean design · no copied images · sitemap.xml + robots.txt · GA + Search Console verified · site indexed in Google." },
      { h: "YMYL rules", p: "Health is Your Money or Your Life — Google demands strong E-E-A-T. Add author bios with credentials, medical reviewer attribution, publish/updated dates, and source citations." },
      { h: "Medical disclaimer", p: "A full disclaimer is live at /disclaimer — link it in the footer of every page." },
      { h: "E-E-A-T proof", p: "Author bios with photos + credentials, LinkedIn links, published works, real bylines. Get 2–3 professionals (RD, MD, therapist) to review your content quarterly." },
      { h: "Core pages", p: "About: mission + team + methodology. Contact: form + email + response time. Privacy: cookies, ads, third parties, user rights." },
    ],
  },
  {
    n: "06",
    t: "Traffic & Marketing (90-day plan)",
    b: [
      { h: "SEO on-page", p: "Titles 55–60 chars with primary keyword first. Meta description 150–158 chars. One H1, multiple H2/H3. Descriptive alt on every image. Keyword density 0.5–1.5%." },
      { h: "SEO off-page", p: "Month 1 HARO responses (3/week). Month 2 guest posts on Well+Good, Healthline contributor network. Month 3 podcast interviews + Reddit expert AMAs. Target 20 high-quality backlinks in 90 days." },
      { h: "Long-tail keywords", p: "Fitness: 'no-equipment full-body workout for beginners at home'. Nutrition: 'high-protein plant-based breakfast under 300 calories'. Sleep: 'how to fall asleep in 5 minutes military method'. Use Semrush or free Google Keyword Planner." },
      { h: "Social", p: "Pinterest (health thrives here — 3 pins per article, 15/day via Tailwind). Instagram (carousel + reels 5/week). TikTok (short-form science explainers 4/week). YouTube Shorts (repurpose TikToks). Skip X, LinkedIn." },
      { h: "Email", p: "Lead magnet: '7-Day Clean Eating Meal Plan PDF' (repurposed from the article). ConvertKit free plan up to 1k subs. Welcome sequence: Day 0 magnet delivery, Day 2 top 3 articles, Day 4 tools intro, Day 7 story + soft ask (share with a friend)." },
      { h: "Content repurposing", p: "Each blog post → 1 Pinterest pin set + 1 Instagram carousel + 3 TikToks + 1 YouTube Short + 1 email + 1 tweet thread. 1 article = 8 assets = 3 weeks of social content." },
    ],
  },
  {
    n: "07",
    t: "Personal notes & constraints",
    b: [
      { h: "Preferences noted", p: "Plant-based nutrition emphasized · limited budget (self-hosted WordPress + free Cloudflare + free ConvertKit plan) · goal 10k monthly visitors in 6 months (requires ~50 indexed posts + 20 backlinks + consistent Pinterest presence)." },
    ],
  },
];

function StrategyPage() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="glass rounded-full px-4 py-1.5 text-xs font-medium">The playbook</span>
          <h1 className="text-display text-5xl md:text-6xl mt-4 mb-4">The Viva Strategy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A complete, actionable blueprint for building a health & wellness website that ranks, retains, and monetizes through Google AdSense.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8">
          {sections.map((s, i) => (
            <motion.section
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.03 }}
              className="glass-strong rounded-3xl p-8"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-display text-4xl text-muted-foreground/60">{s.n}</span>
                <h2 className="text-display text-3xl md:text-4xl">{s.t}</h2>
              </div>
              <div className="space-y-5">
                {s.b.map((item) => (
                  <div key={item.h}>
                    <h3 className="font-semibold text-base mb-1">{item.h}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.p}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </section>
    </Layout>
  );
}
