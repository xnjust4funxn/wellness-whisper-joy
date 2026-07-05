import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ARTICLES } from "@/data/articles";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Viva` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:image", content: loaderData.article.cover },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: ArticlePage,
  notFoundComponent: () => (
    <Layout>
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl text-display mb-4">Article not found</h1>
        <Link to="/articles" className="underline">Back to articles</Link>
      </div>
    </Layout>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: (typeof ARTICLES)[number] };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.cover,
    author: { "@type": "Organization", name: "Viva Wellness" },
    publisher: { "@type": "Organization", name: "Viva Wellness" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <Link to="/articles" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 text-xs mb-4">
            <span className="glass rounded-full px-3 py-1">{article.category}</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>
          <h1 className="text-display text-4xl md:text-5xl leading-tight mb-6">{article.title}</h1>
          <div className="glass rounded-3xl p-3">
            <img src={article.cover} alt={article.title} className="w-full h-80 object-cover rounded-2xl" />
          </div>
        </motion.header>

        <div className="prose-viva space-y-6 text-[17px] leading-relaxed">
          <p className="text-lg text-muted-foreground">{article.intro}</p>

          {article.sections.map((s, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-display text-3xl mt-10 mb-3">{s.heading}</h2>
              <p>{s.body}</p>
              {s.list && (
                <ul className="mt-4 space-y-2 list-disc list-inside marker:text-primary">
                  {s.list.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}

          <div className="glass-strong rounded-3xl p-8 mt-12 text-center">
            <p className="text-lg font-medium">{article.cta}</p>
          </div>

          <section className="mt-16">
            <h2 className="text-display text-3xl mb-6">Frequently asked questions</h2>
            <div className="space-y-3">
              {article.faq.map((f, i) => (
                <details key={i} className="glass rounded-2xl p-5 group">
                  <summary className="cursor-pointer font-semibold list-none flex justify-between">
                    {f.q}
                    <span className="text-muted-foreground group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
