import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkle, Leaf, Moon, Brain, Dumbbell, Apple, Heart } from "lucide-react";
import { Layout } from "@/components/Layout";
import { HeroMotion } from "@/components/HeroMotion";
import { ARTICLES } from "@/data/articles";
import { CATEGORIES } from "@/data/site";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const catIcons: Record<string, typeof Leaf> = {
  fitness: Dumbbell,
  nutrition: Apple,
  "mental-health": Brain,
  sleep: Moon,
  mindfulness: Sparkle,
  "healthy-habits": Heart,
};

function Home() {
  const featured = ARTICLES.slice(0, 3);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
              <Leaf className="w-3.5 h-3.5" /> Evidence-based, plant-forward wellness
            </span>
            <h1 className="text-display text-6xl md:text-7xl leading-[0.95] mb-6">
              Move gently.<br />
              <span className="italic" style={{ color: "oklch(0.55 0.14 175)" }}>Eat kindly.</span><br />
              Rest deeply.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Viva is a quiet corner of the internet for people who want to feel better without another fad, another diet, or another 5am routine to burn out on.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/articles"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-foreground text-primary-foreground text-sm font-medium hover:opacity-90 transition"
              >
                Start the 30-day guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 glass text-sm font-medium hover:bg-white/70 transition"
              >
                Try free tools
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-strong rounded-[2.5rem] p-3 rotate-2">
              <div className="relative rounded-[2rem] w-full h-[520px] overflow-hidden">
                <img
                  src={heroImg}
                  alt="Woman practicing yoga at sunrise overlooking the ocean"
                  width={1600}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <HeroMotion />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-8 glass-strong rounded-2xl p-4 max-w-[200px]"
            >
              <div className="text-xs text-muted-foreground">Today's intention</div>
              <div className="text-sm font-medium mt-1">Two mindful breaths before every meal.</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-2 top-8 glass-strong rounded-2xl p-4"
            >
              <div className="text-2xl text-display">7.5h</div>
              <div className="text-xs text-muted-foreground">last night's sleep</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-display text-4xl md:text-5xl">Explore by pillar</h2>
            <p className="text-muted-foreground mt-2">Six gentle doorways into a better week.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((c, i) => {
            const Icon = catIcons[c.slug] ?? Leaf;
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-6 group cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-2xl grid place-items-center mb-4"
                  style={{ background: `oklch(0.9 0.09 ${c.tint} / 0.5)` }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-semibold mb-1">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-display text-4xl md:text-5xl">Read this week</h2>
            <p className="text-muted-foreground mt-2">Five full guides, ready when you are.</p>
          </div>
          <Link to="/articles" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium hover:underline">
            All articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to="/articles/$slug" params={{ slug: a.slug }} className="block group">
                <div className="glass rounded-3xl p-3 h-full">
                  <div className="overflow-hidden rounded-2xl mb-4">
                    <img
                      src={a.cover}
                      alt={a.title}
                      loading="lazy"
                      className="w-full h-52 object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>
                  <div className="px-3 pb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="rounded-full bg-white/60 px-2 py-0.5">{a.category}</span>
                      <span>{a.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold leading-snug group-hover:text-primary transition">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{a.excerpt}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER STRIP */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-display text-4xl md:text-5xl mb-4">A weekly note. Nothing more.</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            One evidence-based idea, one practice, one recipe. Sent Sunday morning.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full px-5 py-3 glass text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="rounded-full px-6 py-3 bg-foreground text-primary-foreground text-sm font-medium">
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </Layout>
  );
}
