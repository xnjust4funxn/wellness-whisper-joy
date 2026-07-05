import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact — Viva Wellness" }, { name: "description", content: "Get in touch with the Viva team." }] }),
});

function ContactPage() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-display text-5xl md:text-6xl mb-6">
          Say hello
        </motion.h1>
        <p className="text-muted-foreground max-w-lg mb-10">Questions, feedback, or a story to share? We read every message.</p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { i: Mail, t: "Email", v: "hello@viva.wellness" },
            { i: MessageCircle, t: "Response time", v: "Within 2 business days" },
            { i: MapPin, t: "Based in", v: "Remote — worldwide" },
          ].map((x) => (
            <div key={x.t} className="glass rounded-2xl p-5">
              <x.i className="w-5 h-5 mb-3" strokeWidth={1.6} />
              <div className="text-xs text-muted-foreground">{x.t}</div>
              <div className="font-medium mt-1">{x.v}</div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — we'll be in touch soon.");
          }}
          className="glass-strong rounded-3xl p-6 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Name" className="rounded-2xl px-4 py-3 glass text-sm outline-none focus:ring-2 focus:ring-primary" />
            <input required type="email" placeholder="Email" className="rounded-2xl px-4 py-3 glass text-sm outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <input placeholder="Subject" className="w-full rounded-2xl px-4 py-3 glass text-sm outline-none focus:ring-2 focus:ring-primary" />
          <textarea required rows={6} placeholder="Your message..." className="w-full rounded-2xl px-4 py-3 glass text-sm outline-none focus:ring-2 focus:ring-primary" />
          <button className="rounded-full px-6 py-3 bg-foreground text-primary-foreground text-sm font-medium">Send message</button>
        </form>
      </section>
    </Layout>
  );
}
