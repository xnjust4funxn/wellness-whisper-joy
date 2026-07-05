import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/disclaimer/")({
  component: DisclaimerPage,
  head: () => ({ meta: [{ title: "Medical Disclaimer — Viva" }, { name: "description", content: "Viva's content is for informational purposes and is not medical advice." }] }),
});

function DisclaimerPage() {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-6 pb-16 prose-viva space-y-4">
        <h1 className="text-display text-5xl mb-6">Medical Disclaimer</h1>

        <div className="glass-strong rounded-3xl p-6 flex gap-4 items-start">
          <AlertTriangle className="w-6 h-6 shrink-0" />
          <p className="m-0">
            The content on Viva is for <strong>informational and educational purposes only</strong>. It is not intended as, and should not be interpreted as, medical advice, diagnosis, or treatment.
          </p>
        </div>

        <h2 className="text-display text-3xl mt-10">Not a substitute for professional care</h2>
        <p>Always seek the guidance of a qualified healthcare provider with any questions you may have regarding a medical condition, symptoms, medication, or health regimen. Never disregard professional medical advice or delay seeking it because of something you have read on this website.</p>

        <h2 className="text-display text-3xl mt-8">No doctor-patient relationship</h2>
        <p>Reading Viva does not create a doctor-patient relationship between you and the authors. Our writers, though qualified in their respective fields, are not acting as your personal physician, dietitian, or therapist.</p>

        <h2 className="text-display text-3xl mt-8">Individual results vary</h2>
        <p>Fitness, nutrition, and mental health outcomes depend on many personal factors. What works for one person may not work for another. Use your judgment and consult a professional before making significant lifestyle changes.</p>

        <h2 className="text-display text-3xl mt-8">Emergency situations</h2>
        <p>If you are experiencing a medical emergency, call your local emergency number or go to the nearest emergency room immediately. If you are in mental health crisis, please contact the appropriate hotline in your country.</p>

        <h2 className="text-display text-3xl mt-8">External links</h2>
        <p>Viva may link to third-party websites. We do not endorse or take responsibility for the content of external sites.</p>

        <h2 className="text-display text-3xl mt-8">Affiliate & advertising disclosure</h2>
        <p>Some links may be affiliate links, meaning we may earn a small commission at no additional cost to you. We also display advertisements via Google AdSense. Our editorial decisions are never influenced by advertisers.</p>
      </article>
    </Layout>
  );
}
