import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/privacy/")({
  component: PrivacyPage,
  head: () => ({ meta: [{ title: "Privacy Policy — Viva" }, { name: "description", content: "How Viva collects, uses, and protects your information." }] }),
});

function PrivacyPage() {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-6 pb-16 prose-viva space-y-4">
        <h1 className="text-display text-5xl mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <h2 className="text-display text-3xl mt-8">Information we collect</h2>
        <p>Viva collects only what we need: your email if you subscribe to our newsletter, comments you leave, and standard analytics data (page views, device type, country) via Google Analytics.</p>

        <h2 className="text-display text-3xl mt-8">Cookies & advertising</h2>
        <p>We use cookies to remember your preferences and to serve relevant ads through Google AdSense. Google may use your data to serve personalized ads based on your visits to this and other sites. You can opt out at <a className="underline" href="https://adssettings.google.com/">Google Ads Settings</a>.</p>

        <h2 className="text-display text-3xl mt-8">Third-party services</h2>
        <p>We use Google Analytics, Google AdSense, and an email service provider. Each has its own privacy policy governing their handling of your data.</p>

        <h2 className="text-display text-3xl mt-8">Your rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data at any time by emailing hello@viva.wellness.</p>

        <h2 className="text-display text-3xl mt-8">Children's privacy</h2>
        <p>Viva is not intended for children under 13, and we do not knowingly collect information from them.</p>

        <h2 className="text-display text-3xl mt-8">Contact</h2>
        <p>Questions about this policy? Email hello@viva.wellness.</p>
      </article>
    </Layout>
  );
}
