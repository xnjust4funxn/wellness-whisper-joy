import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Layout } from "@/components/Layout";
import { ARTICLES } from "@/data/articles";

export const Route = createFileRoute("/articles/")({
  component: ArticlesIndex,
  head: () => ({
    meta: [
      { title: "Articles — Viva Wellness" },
      { name: "description", content: "Evidence-based articles on fitness, nutrition, mental health, and sleep." },
    ],
  }),
});

function ArticlesIndex() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-display text-5xl md:text-6xl mb-3">Articles</h1>
          <p className="text-muted-foreground max-w-lg">Full guides — thoroughly researched, gently written.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {ARTICLES.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to="/articles/$slug" params={{ slug: a.slug }} className="block group">
                <article className="glass rounded-3xl p-3">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={a.cover}
                      alt={a.title}
                      loading="lazy"
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="rounded-full bg-white/60 px-2 py-0.5">{a.category}</span>
                      <span>{a.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-semibold leading-snug">{a.title}</h2>
                    <p className="text-sm text-muted-foreground mt-2">{a.excerpt}</p>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
