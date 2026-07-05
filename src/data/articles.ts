import heroImg from "@/assets/hero.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import fitnessImg from "@/assets/fitness.jpg";
import mindImg from "@/assets/mind.jpg";
import sleepImg from "@/assets/sleep.jpg";

export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  cover: string;
  excerpt: string;
  intro: string;
  sections: { heading: string; body: string; list?: string[] }[];
  cta: string;
  faq: { q: string; a: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "30-day-wellness-starter-guide",
    title: "The Ultimate 30-Day Health & Wellness Starter Guide for Beginners",
    category: "Wellness",
    readTime: "12 min read",
    cover: heroImg,
    excerpt: "A gentle, day-by-day roadmap to build sustainable wellness habits — without burning out.",
    intro:
      "Most wellness journeys fail on day 8. Not because people lack willpower, but because they try to overhaul every habit at once. This 30-day guide is different: it stacks small, forgiving changes that compound into a lifestyle. By day 30 you'll move more, eat brighter, sleep deeper, and feel a quiet, steady calm you can actually keep.",
    sections: [
      {
        heading: "Why 30 Days Works",
        body: "Behavioral research (Lally et al., 2010) shows habits form on average in 66 days, but the first 30 days lay the neurological groundwork. Instead of chasing perfection, we're chasing repetition. Miss a day? Start again tomorrow. Consistency beats intensity every single time.",
      },
      {
        heading: "Week 1: Foundations (Days 1–7)",
        body: "This week is about noticing, not fixing. You'll build awareness before pushing change.",
        list: [
          "Day 1: Drink a full glass of water before your first coffee.",
          "Day 2: Walk 10 minutes outside — sunlight sets your circadian rhythm.",
          "Day 3: Add one fist-sized serving of vegetables to lunch.",
          "Day 4: Screens off 30 minutes before bed.",
          "Day 5: Two minutes of box breathing (4-4-4-4).",
          "Day 6: Journal three things you're grateful for.",
          "Day 7: Rest fully. Reflect on what felt easy.",
        ],
      },
      {
        heading: "Week 2: Movement (Days 8–14)",
        body: "You don't need a gym. You need a doorway, a mat, and 15 minutes. Alternate two 20-minute walks with two beginner bodyweight circuits (squats, wall push-ups, glute bridges). Add one gentle mobility session on the weekend.",
      },
      {
        heading: "Week 3: Nutrition Reset (Days 15–21)",
        body: "Focus on addition, not restriction. Add protein at breakfast, add a vegetable to dinner, add water between meals. When the plate gets crowded with good things, the rest gently drifts out.",
        list: [
          "Aim for 25–30g protein at breakfast (eggs, Greek yogurt, tofu).",
          "Half your plate is vegetables at lunch and dinner.",
          "Choose whole fruit over juice.",
          "Prep one 'safety meal' you can reheat on hard days.",
        ],
      },
      {
        heading: "Week 4: Sleep & Nervous System (Days 22–30)",
        body: "This is where the real transformation locks in. Fix your sleep and every other habit gets easier. Same bedtime, same wake time — including weekends. Dim overhead lights after 9pm. End the day with 5 minutes of slow nasal breathing.",
      },
      {
        heading: "Your 30-Day Metrics",
        body: "Track four simple markers: hours of sleep, glasses of water, minutes of movement, and mood (1–10). Not to obsess — just to see the pattern that emerges. Most readers report visibly better skin, more stable energy, and calmer mornings by week 3.",
      },
    ],
    cta: "Ready to start? Bookmark this page, pick your Day 1, and share your progress with #VivaStart.",
    faq: [
      { q: "What if I miss a day?", a: "Miss one, never miss two. Restart the next day at the same step — don't try to make up for it." },
      { q: "Do I need supplements?", a: "No supplement replaces sleep, food, or movement. Talk to your doctor before adding anything." },
      { q: "Can I do this while working full-time?", a: "Yes — the plan requires 20–30 minutes a day. Stack habits onto existing routines (walk during a call, stretch during coffee)." },
      { q: "When will I see results?", a: "Energy shifts by day 7. Sleep improves by day 14. Visible changes typically appear by day 21–30." },
    ],
  },
  {
    slug: "10-home-workouts-no-equipment",
    title: "Top 10 Home Workouts to Tone Your Body Without Any Equipment",
    category: "Fitness",
    readTime: "10 min read",
    cover: fitnessImg,
    excerpt: "Ten trainer-tested bodyweight moves that build strength, mobility, and tone — no gym required.",
    intro:
      "I've coached beginners in cramped apartments and 5-star gyms alike, and the honest truth is this: bodyweight training, done consistently, will get you 80% of the results of a fully equipped gym. What follows are the ten moves I return to every single week — biomechanically safe, progressively scalable, and effective for every body type.",
    sections: [
      {
        heading: "How to Use This Guide",
        body: "Choose 5 moves. Perform 3 rounds of 10–15 reps each with 30 seconds of rest between exercises. Twenty minutes, three times a week. That's the whole prescription.",
      },
      {
        heading: "The 10 Moves",
        body: "Every move below can be regressed (easier) or progressed (harder). Start where you are, not where you wish you were.",
        list: [
          "Bodyweight Squat — feet hip-width, chest tall, knees track over toes.",
          "Incline Push-Up — hands on a counter, lower with control, drive up.",
          "Glute Bridge — heels close to hips, squeeze glutes at the top for 2 seconds.",
          "Reverse Lunge — step back, drop the back knee gently, drive through the front heel.",
          "Bird Dog — opposite arm and leg, hold 3 seconds, keep hips level.",
          "Dead Bug — lower opposite arm/leg without arching your lower back.",
          "Plank — stack shoulders over wrists, ribs down, glutes squeezed. 20–45 seconds.",
          "Side-Lying Leg Raises — 12 per side, slow tempo, no hip rock.",
          "Wall Sit — 30–60 seconds, back flat against wall.",
          "Step-Ups — use a sturdy chair or stair, drive through the working leg.",
        ],
      },
      {
        heading: "A 20-Minute Sample Circuit",
        body: "Warm-up: 2 minutes of marching in place and arm circles. Rounds: Squat × 12, Incline Push-Up × 10, Reverse Lunge × 10 per side, Glute Bridge × 15, Plank × 30s. Repeat 3 times. Cool down with 2 minutes of gentle stretching.",
      },
      {
        heading: "Progressing Safely (E-E-A-T in Practice)",
        body: "Add difficulty by tempo (3 seconds down, 1 second up), by pause (hold the bottom position for 2 seconds), or by volume (extra round). Pain in a joint is a stop sign; muscular fatigue is a green light. This distinction, drilled into every certified trainer, is the single most important safety principle in strength training.",
      },
      {
        heading: "Common Mistakes",
        body: "Rushing reps, holding the breath, and skipping the warm-up cause more injuries than any exercise ever will. Slow down. Breathe out on the effort. Warm up like you mean it.",
      },
    ],
    cta: "Save this routine to your phone. Do it three times this week and message us how it felt.",
    faq: [
      { q: "How long until I see toning?", a: "Visible tone typically appears in 6–8 weeks with 3 sessions per week plus adequate protein (0.8–1g per lb bodyweight)." },
      { q: "Is bodyweight enough to build muscle?", a: "Yes, especially for beginners and intermediates. Progression through tempo and range of motion drives adaptation." },
      { q: "Should I do cardio too?", a: "A daily 20-minute walk covers your cardio needs and improves recovery from strength work." },
    ],
  },
  {
    slug: "7-day-clean-eating-meal-plan",
    title: "7-Day Clean Eating Meal Plan for Beginners — Simple and Delicious",
    category: "Nutrition",
    readTime: "11 min read",
    cover: nutritionImg,
    excerpt: "A full week of realistic, plant-forward meals — grocery list included.",
    intro:
      "Clean eating doesn't mean bland eating. This 7-day plan is built around whole foods, generous portions, and flavors that make you actually look forward to lunch. Each day averages 1,800–2,000 calories, is high in fiber and protein, and takes under 30 minutes to prep.",
    sections: [
      {
        heading: "The Grocery List",
        body: "Buy once, cook for the week.",
        list: [
          "Produce: spinach, kale, mixed berries, bananas, avocados, sweet potatoes, broccoli, bell peppers, cucumbers, tomatoes, lemons, garlic, onion.",
          "Protein: eggs, Greek yogurt, chickpeas, lentils, salmon fillets, chicken breast, extra-firm tofu.",
          "Whole grains: rolled oats, quinoa, brown rice, whole-grain bread.",
          "Fats: extra virgin olive oil, almonds, walnuts, tahini.",
          "Pantry: cinnamon, cumin, paprika, sea salt, black pepper, apple cider vinegar.",
        ],
      },
      {
        heading: "Day 1 (Monday)",
        body: "Breakfast: Greek yogurt with berries, walnuts, and cinnamon. Lunch: Quinoa bowl with roasted sweet potato, chickpeas, spinach, tahini drizzle. Dinner: Baked salmon, brown rice, steamed broccoli. Snack: Apple with almond butter.",
      },
      {
        heading: "Day 2 (Tuesday)",
        body: "Breakfast: Overnight oats with banana and chia. Lunch: Leftover salmon on a big green salad. Dinner: Lentil and vegetable soup with whole-grain bread. Snack: Handful of almonds.",
      },
      {
        heading: "Day 3 (Wednesday)",
        body: "Breakfast: Two eggs, sautéed spinach, avocado toast. Lunch: Chickpea and cucumber salad with lemon-tahini dressing. Dinner: Stir-fried tofu with peppers and brown rice. Snack: Greek yogurt with a drizzle of honey.",
      },
      {
        heading: "Day 4 (Thursday)",
        body: "Breakfast: Smoothie (banana, spinach, berries, Greek yogurt, oats). Lunch: Grain bowl leftovers. Dinner: Sheet-pan chicken with sweet potatoes and broccoli. Snack: Carrot sticks and hummus.",
      },
      {
        heading: "Day 5 (Friday)",
        body: "Breakfast: Oatmeal with peanut butter and banana. Lunch: Chicken and quinoa salad. Dinner: Homemade veggie burrito bowls. Snack: Berries with yogurt.",
      },
      {
        heading: "Weekend (Days 6 & 7)",
        body: "Repeat favorite meals from the week or use leftovers creatively. Sunday: prep two proteins and two grains for the week ahead. This one habit — Sunday prep — is what separates people who stick to clean eating from those who don't.",
      },
      {
        heading: "Simple Rules That Make It Work",
        body: "Half your plate is vegetables. Add protein to every meal. Choose water over drinks with calories. Enjoy one 'joyful meal' each week without guilt — restriction breeds rebellion.",
      },
    ],
    cta: "Print this plan, take it grocery shopping this weekend, and start Monday.",
    faq: [
      { q: "Is this plan vegetarian-friendly?", a: "Yes — swap salmon and chicken for extra tofu, tempeh, or lentils. All meals scale to plant-based." },
      { q: "How many calories is this?", a: "Roughly 1,800–2,000 per day. Add a scoop of nuts or an extra grain serving to increase; halve grain portions to decrease." },
      { q: "Can kids eat this?", a: "Most meals are family-friendly. Milder seasoning and smaller portions work well for children." },
    ],
  },
  {
    slug: "overcome-anxiety-stress-5-minutes",
    title: "How to Overcome Anxiety and Stress in 5 Minutes — Simple Techniques That Work",
    category: "Mental Health",
    readTime: "9 min read",
    cover: mindImg,
    excerpt: "Six therapist-approved techniques you can use anywhere — at your desk, in traffic, or in bed at 2am.",
    intro:
      "Anxiety isn't a character flaw. It's your nervous system doing its job a little too enthusiastically. The good news: you can talk to your nervous system in a language it understands — breath, temperature, movement, and attention. Here are six five-minute techniques, drawn from cognitive-behavioral therapy and polyvagal research, that actually work.",
    sections: [
      {
        heading: "Technique 1: Physiological Sigh (60 seconds)",
        body: "Popularized by Dr. Andrew Huberman, this is the fastest known way to lower stress in real time. Take a normal inhale through the nose, then a second short inhale on top, then a long slow exhale through the mouth. Repeat 3–5 times.",
      },
      {
        heading: "Technique 2: 5-4-3-2-1 Grounding (2 minutes)",
        body: "Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. This pulls the brain out of anxious future-thinking and into the present sensory world.",
      },
      {
        heading: "Technique 3: Cold Water Reset (30 seconds)",
        body: "Splash cold water on your face or hold an ice cube. This triggers the mammalian dive reflex, instantly slowing your heart rate.",
      },
      {
        heading: "Technique 4: Box Breathing (3 minutes)",
        body: "Inhale 4, hold 4, exhale 4, hold 4. Used by Navy SEALs before high-stress operations. It works because deliberate breath-holding signals safety to the vagus nerve.",
      },
      {
        heading: "Technique 5: The Worry Postponement (2 minutes)",
        body: "Write down the exact worry on paper. Add: 'I will think about this at 6pm today.' Close the notebook. This CBT technique breaks the loop by promising the brain that the worry will be heard, later.",
      },
      {
        heading: "Technique 6: Shake It Off — Literally (2 minutes)",
        body: "Stand up. Shake your hands, arms, legs, whole body for 60–90 seconds. Animals do this after threats; it discharges the stress hormones your body queued up. It looks silly. It works.",
      },
      {
        heading: "When to Get Help",
        body: "These techniques manage acute stress, not clinical anxiety disorders. If anxiety is disrupting sleep, work, or relationships for more than two weeks, please reach out to a licensed mental health professional. Therapy works.",
        list: [
          "US: Call or text 988 for the Suicide & Crisis Lifeline.",
          "UK: Samaritans 116 123.",
          "International: findahelpline.com",
        ],
      },
    ],
    cta: "Screenshot this list. The next time your chest tightens, pick one technique and try it.",
    faq: [
      { q: "Which technique should I try first?", a: "Start with the Physiological Sigh — it's the fastest and easiest, and works in under a minute." },
      { q: "Do breathing techniques really work?", a: "Yes. Slow, extended exhales activate the parasympathetic nervous system, which measurably lowers heart rate and cortisol." },
      { q: "Can I use these during a panic attack?", a: "Box breathing and cold water are especially effective. If panic attacks are frequent, please consult a professional." },
    ],
  },
  {
    slug: "deep-sleep-guide-7-steps",
    title: "The Deep Sleep Guide: 7 Science-Backed Steps to Improve Your Sleep Quality",
    category: "Sleep",
    readTime: "10 min read",
    cover: sleepImg,
    excerpt: "The seven habits sleep researchers agree on — and how to build them into your night starting tonight.",
    intro:
      "Sleep is not lost time. It's when your brain launders memories, your body repairs tissue, and your immune system does its most important work. Yet a third of adults get fewer than seven hours a night. These seven steps, drawn from Walker's Why We Sleep and the American Academy of Sleep Medicine, are the highest-leverage changes you can make.",
    sections: [
      {
        heading: "Step 1: Anchor Your Wake Time",
        body: "Same wake time every day, including weekends. This one habit stabilizes your circadian rhythm faster than anything else. Yes, even after a bad night.",
      },
      {
        heading: "Step 2: Get Morning Sunlight",
        body: "Within 30 minutes of waking, get 5–10 minutes of natural light in your eyes (no sunglasses). This tells your brain to produce melatonin roughly 14–16 hours later, right when you want to fall asleep.",
      },
      {
        heading: "Step 3: Cool the Room",
        body: "Core body temperature must drop 1–2°F to initiate sleep. The sweet spot is 65–68°F (18–20°C). A warm shower 90 minutes before bed helps by dilating blood vessels afterward.",
      },
      {
        heading: "Step 4: Cut Caffeine After 2pm",
        body: "Caffeine has a half-life of 5–6 hours. That 4pm coffee is still 25% active in your system at midnight. Try switching to herbal tea or decaf after lunch.",
      },
      {
        heading: "Step 5: Dim the Evening",
        body: "Bright overhead light after 9pm suppresses melatonin. Use warm, low lamps. Consider blue-light blocking glasses if you must use screens.",
      },
      {
        heading: "Step 6: Build a 30-Minute Wind Down",
        body: "The same sequence every night trains your brain to expect sleep.",
        list: [
          "Dim the lights.",
          "Read a physical book (not a screen) for 15 minutes.",
          "Two minutes of slow nasal breathing.",
          "Bedroom cool, dark, quiet, phone across the room.",
        ],
      },
      {
        heading: "Step 7: If You Can't Sleep, Get Out of Bed",
        body: "After 20 minutes of wakefulness, get up. Sit in dim light. Read something calm. Return to bed only when sleepy. This preserves the mental association: bed = sleep.",
      },
      {
        heading: "Track What Matters",
        body: "Rather than obsessing over a smartwatch score, notice three things each morning: How quickly did I fall asleep? How many times did I wake up? Do I feel restored? These three answers, tracked for two weeks, will teach you more than any wearable.",
      },
    ],
    cta: "Pick one step, not all seven. Do it every night for two weeks and watch what happens.",
    faq: [
      { q: "How many hours should I sleep?", a: "Most adults need 7–9 hours. Quality matters as much as quantity — waking rested is the real signal." },
      { q: "Is melatonin safe?", a: "Short-term use of low doses (0.3–1mg) can help with jet lag. It's not a long-term solution and doesn't treat insomnia's root causes. Ask your doctor." },
      { q: "What about naps?", a: "20-minute naps before 3pm are restorative. Longer or later naps can disrupt night sleep." },
    ],
  },
];
