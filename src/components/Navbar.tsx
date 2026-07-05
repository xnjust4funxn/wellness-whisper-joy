import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X, Sparkle } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/articles", label: "Articles" },
  { to: "/tools", label: "Tools" },
  { to: "/strategy", label: "Strategy" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="glass-strong rounded-full pl-5 pr-2 py-2 flex items-center gap-1 shadow-lg">
        <Link to="/" className="flex items-center gap-2 pr-3 mr-1 border-r border-white/40">
          <motion.div
            whileHover={{ rotate: 20, scale: 1.1 }}
            className="w-8 h-8 rounded-full grid place-items-center"
            style={{ background: "var(--gradient-aurora)" }}
          >
            <Sparkle className="w-4 h-4 text-foreground/70" strokeWidth={1.5} />
          </motion.div>
          <span className="text-display text-xl">Viva</span>
        </Link>

        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => {
            const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
            return (
              <li key={l.to} className="relative">
                <Link
                  to={l.to}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors hover:text-foreground text-muted-foreground data-[active=true]:text-foreground"
                  data-active={active}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ background: "color-mix(in oklab, var(--primary) 25%, white)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/articles"
          className="hidden md:inline-flex ml-2 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground bg-foreground hover:opacity-90 transition"
        >
          Start reading
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-1 p-2 rounded-full hover:bg-white/40"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-4 right-4 glass-strong rounded-3xl p-4 flex flex-col gap-1"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-2xl text-sm font-medium hover:bg-white/50"
            >
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
