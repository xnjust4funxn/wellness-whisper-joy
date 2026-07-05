import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Droplet, Moon, Scale, Timer, HeartPulse } from "lucide-react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/tools/")({
  component: ToolsPage,
  head: () => ({
    meta: [
      { title: "Free Wellness Tools — Viva" },
      { name: "description", content: "Free interactive calculators: BMI, water intake, sleep timer, calories, stress check." },
    ],
  }),
});

function ToolsPage() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-display text-5xl md:text-6xl mb-3">Wellness tools</h1>
          <p className="text-muted-foreground max-w-lg">Five free interactive calculators to get quiet, useful answers about your body.</p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-2 pb-16">
        <BMICalculator />
        <WaterIntake />
        <SleepTimer />
        <CalorieCalc />
        <StressQuiz />
      </div>
    </Layout>
  );
}

function ToolCard({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-strong rounded-3xl p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-2xl grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
          <Icon className="w-5 h-5" strokeWidth={1.6} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="w-full rounded-2xl px-4 py-3 glass text-sm outline-none focus:ring-2 focus:ring-primary"
  />
);
const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-xs font-medium text-muted-foreground mb-1.5">{children}</label>
);
const Result = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="mt-5 glass rounded-2xl p-4">
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className="text-display text-3xl mt-1">{value}</div>
    {hint && <div className="text-xs text-muted-foreground mt-1">{hint}</div>}
  </div>
);

function BMICalculator() {
  const [h, setH] = useState(170);
  const [w, setW] = useState(70);
  const bmi = useMemo(() => +(w / ((h / 100) ** 2)).toFixed(1), [h, w]);
  const category =
    bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
  return (
    <ToolCard title="BMI Calculator" icon={Scale}>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Height (cm)</Label>
          <Input type="number" value={h} onChange={(e) => setH(+e.target.value || 0)} />
        </div>
        <div>
          <Label>Weight (kg)</Label>
          <Input type="number" value={w} onChange={(e) => setW(+e.target.value || 0)} />
        </div>
      </div>
      <Result label="Your BMI" value={isFinite(bmi) ? String(bmi) : "—"} hint={category} />
    </ToolCard>
  );
}

function WaterIntake() {
  const [w, setW] = useState(70);
  const [active, setActive] = useState(false);
  const liters = useMemo(() => +((w * (active ? 40 : 33)) / 1000).toFixed(2), [w, active]);
  return (
    <ToolCard title="Water Intake" icon={Droplet}>
      <Label>Weight (kg)</Label>
      <Input type="number" value={w} onChange={(e) => setW(+e.target.value || 0)} />
      <label className="flex items-center gap-2 mt-3 text-sm cursor-pointer">
        <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} />
        I exercise most days
      </label>
      <Result label="Daily water" value={`${liters} L`} hint={`~${Math.round(liters * 4)} glasses`} />
    </ToolCard>
  );
}

function SleepTimer() {
  const [wake, setWake] = useState("07:00");
  const cycles = useMemo(() => {
    const [hh, mm] = wake.split(":").map(Number);
    const target = new Date();
    target.setHours(hh, mm, 0, 0);
    return [6, 5, 4].map((c) => {
      const t = new Date(target.getTime() - (c * 90 + 15) * 60000);
      return { c, time: t.toTimeString().slice(0, 5) };
    });
  }, [wake]);
  return (
    <ToolCard title="Sleep Time" icon={Moon}>
      <Label>Wake up at</Label>
      <Input type="time" value={wake} onChange={(e) => setWake(e.target.value)} />
      <div className="mt-4 space-y-2">
        {cycles.map((c) => (
          <div key={c.c} className="glass rounded-2xl p-3 flex justify-between">
            <span className="text-sm">Sleep by</span>
            <span className="font-semibold">{c.time}</span>
            <span className="text-xs text-muted-foreground">{c.c} cycles</span>
          </div>
        ))}
      </div>
    </ToolCard>
  );
}

function CalorieCalc() {
  const [age, setAge] = useState(30);
  const [w, setW] = useState(70);
  const [h, setH] = useState(170);
  const [sex, setSex] = useState<"m" | "f">("f");
  const [activity, setActivity] = useState(1.375);
  const bmr = sex === "m"
    ? 10 * w + 6.25 * h - 5 * age + 5
    : 10 * w + 6.25 * h - 5 * age - 161;
  const tdee = Math.round(bmr * activity);
  return (
    <ToolCard title="Calorie Needs" icon={Timer}>
      <div className="grid grid-cols-3 gap-3">
        <div><Label>Age</Label><Input type="number" value={age} onChange={(e) => setAge(+e.target.value)} /></div>
        <div><Label>Weight (kg)</Label><Input type="number" value={w} onChange={(e) => setW(+e.target.value)} /></div>
        <div><Label>Height (cm)</Label><Input type="number" value={h} onChange={(e) => setH(+e.target.value)} /></div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div>
          <Label>Sex</Label>
          <select value={sex} onChange={(e) => setSex(e.target.value as "m" | "f")} className="w-full rounded-2xl px-4 py-3 glass text-sm">
            <option value="f">Female</option>
            <option value="m">Male</option>
          </select>
        </div>
        <div>
          <Label>Activity</Label>
          <select value={activity} onChange={(e) => setActivity(+e.target.value)} className="w-full rounded-2xl px-4 py-3 glass text-sm">
            <option value={1.2}>Sedentary</option>
            <option value={1.375}>Light</option>
            <option value={1.55}>Moderate</option>
            <option value={1.725}>Active</option>
          </select>
        </div>
      </div>
      <Result label="Daily calories" value={`${tdee} kcal`} hint="Maintenance estimate" />
    </ToolCard>
  );
}

function StressQuiz() {
  const questions = [
    "How often did you feel overwhelmed this week?",
    "How often did you have trouble sleeping?",
    "How often did you feel irritable?",
    "How often did you skip meals or overeat?",
  ];
  const [answers, setAnswers] = useState<number[]>([0, 0, 0, 0]);
  const total = answers.reduce((a, b) => a + b, 0);
  const level = total <= 4 ? "Low" : total <= 8 ? "Moderate" : "High";
  return (
    <ToolCard title="Stress Check" icon={HeartPulse}>
      <div className="space-y-3">
        {questions.map((q, i) => (
          <div key={i} className="glass rounded-2xl p-3">
            <p className="text-sm mb-2">{q}</p>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((v) => (
                <button
                  key={v}
                  onClick={() => setAnswers((a) => a.map((x, j) => (j === i ? v : x)))}
                  className={`flex-1 py-1.5 rounded-lg text-xs transition ${
                    answers[i] === v ? "bg-foreground text-primary-foreground" : "bg-white/50 hover:bg-white/70"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Result label="Stress level" value={level} hint={`Score ${total}/16 — never never | 4 always`} />
    </ToolCard>
  );
}
