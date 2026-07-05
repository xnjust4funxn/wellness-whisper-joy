import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="text-display text-2xl mb-2">Viva</div>
          <p className="text-muted-foreground">
            Evidence-based wellness for real people. Move gently. Eat kindly. Rest deeply.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/articles" className="hover:text-foreground">Articles</Link></li>
            <li><Link to="/tools" className="hover:text-foreground">Tools</Link></li>
            <li><Link to="/strategy" className="hover:text-foreground">Strategy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-foreground">Medical Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-muted-foreground mb-3">Weekly gentle wellness — no spam.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full px-4 py-2 glass text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="rounded-full px-4 py-2 bg-foreground text-primary-foreground text-sm font-medium">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Viva Wellness. Content is for informational purposes only and does not constitute medical advice.
      </div>
    </footer>
  );
}
