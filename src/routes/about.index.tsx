import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Layout } from "@/components/Layout";
import { FAQ } from "@/data/site";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Viva — Our Mission & Team" },
      { name: "description", content: "Viva is a plant-forward, evidence-based wellness publication for people who want to feel better, gently." },
    ],
  }),
});

function AboutPage() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-display text-5xl md:text-6xl mb-6"
        >
          About Viva
        </motion.h1>

        <div className="prose-viva space-y-5 text-[17px] leading-relaxed">
          <p className="text-lg text-muted-foreground">
            Viva is a small, independent wellness publication built on a simple belief: feeling better shouldn't require another crash diet, another 5am routine, or another expensive supplement. Just gentle, consistent, evidence-based choices.
          </p>

          <h2 className="text-display text-3xl mt-10">Our mission</h2>
          <p>
            To translate the best available research on movement, nutrition, mental health, and sleep into plain-spoken, actionable guides — so anyone, regardless of background or budget, can build a healthier daily life.
          </p>

          <h2 className="text-display text-3xl mt-10">Who we write for</h2>
          <p>
            Adults between 25 and 55 who want to prioritize wellbeing but don't have hours a day to spend on it. Working parents, remote professionals, students returning to health after burnout. People who value evidence over hype, plants over pills, and progress over perfection.
          </p>

          <h2 className="text-display text-3xl mt-10">How we work (E-E-A-T)</h2>
          <ul className="list-disc list-inside space-y-2 marker:text-primary">
            <li><strong>Experience:</strong> Every guide is written by someone who has lived the practice.</li>
            <li><strong>Expertise:</strong> Nutrition and fitness content is reviewed by certified nutritionists and NASM-certified trainers.</li>
            <li><strong>Authoritativeness:</strong> We cite peer-reviewed research from PubMed, the WHO, and clinical guidelines.</li>
            <li><strong>Trustworthiness:</strong> We disclose all affiliate relationships and never recommend anything we haven't tried.</li>
          </ul>

          <h2 className="text-display text-3xl mt-10">Frequently asked</h2>
          <div className="space-y-3 mt-4">
            {FAQ.slice(0, 8).map((f, i) => (
              <details key={i} className="glass rounded-2xl p-5">
                <summary className="cursor-pointer font-semibold list-none">{f.q}</summary>
                <p className="text-muted-foreground mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
