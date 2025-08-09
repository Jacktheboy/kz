
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Shield, CreditCard, PlayCircle, BookOpen, Rocket, Flame, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/test_00000000000000"; // TODO: your Stripe payment link
const COURSE_NAME = "AutoStackz PDF Course: Viral Faceless Funnel";
const PRICE = "$49";

export default function CourseLanding() {
  const [email, setEmail] = useState("");
  const [showMiniCheckout, setShowMiniCheckout] = useState(false);
  const [miniPaying, setMiniPaying] = useState(false);
  const [miniPaid, setMiniPaid] = useState(false);

  const features = [
    "Step-by-step faceless content system",
    "Blueprint for PDF course funnel",
    "Traffic playbook (TikTok + Shorts)",
    "Scripts, hooks, and content prompts",
    "Pricing, upsells, and retention",
    "Automation stack + templates",
  ];

  const curriculum = [
    { title: "Mindset & Offer Craft", items: ["Picking a tight niche", "Crafting irresistible promise", "Ethical persuasion"] },
    { title: "Content Engine", items: ["3x daily framework", "Voiceover templates", "B-roll sourcing"] },
    { title: "Funnel & Tech", items: ["Landing + checkout", "Email capture", "Delivery automation"] },
    { title: "Launch & Scale", items: ["Launch week plan", "UGC + affiliates", "Analytics + iteration"] },
  ];

  const testimonials = [
    { name: "Maya P.", text: "Ran the script for 7 days → first $680 online. The hooks slap.", stars: 5 },
    { name: "Leo K.", text: "Copy/paste content system. Posting is finally brain-dead simple.", stars: 5 },
    { name: "Andre S.", text: "Sold my first 23 PDFs in 2 weeks. Clean funnel + clear steps.", stars: 5 },
  ];

  const faqs = [
    { q: "Who is this for?", a: "Beginners to intermediates who want a simple digital product and a content system that actually converts." },
    { q: "Do I need followers?", a: "Nope. This shows you how to build distribution with short-form from zero." },
    { q: "Refund policy?", a: "14-day no-questions-asked if you do the work and don’t see value." },
    { q: "How do I get the files?", a: "Instant download after checkout + email receipt with a backup link." },
  ];

  function handleMiniCheckout() {
    setMiniPaying(true);
    setTimeout(() => {
      setMiniPaid(true);
      setMiniPaying(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-zinc-200/70 bg-white/70">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <Rocket className="w-6 h-6" /> AutoStackz
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#curriculum" className="hover:underline">Curriculum</a>
            <a href="#testimonials" className="hover:underline">Results</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
          <Button onClick={() => window.location.href = STRIPE_CHECKOUT_URL} className="rounded-2xl">Buy Now</Button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-zinc-200">
            <Flame className="w-4 h-4" /> New: {COURSE_NAME}
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Build a <span className="underline decoration-4">faceless funnel</span> that prints while you sleep.
          </h1>
          <p className="mt-4 text-zinc-600 text-lg md:text-xl">
            A gumroad-style, no-fluff system to create, market, and sell a high-converting PDF course with short-form content.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Button size="lg" className="rounded-2xl" onClick={() => window.location.href = STRIPE_CHECKOUT_URL}>
              <CreditCard className="w-5 h-5 mr-2" /> Get the Course – {PRICE}
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl" onClick={() => setShowMiniCheckout(true)}>
              <PlayCircle className="w-5 h-5 mr-2" /> Preview Checkout
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm text-zinc-600">
            <Shield className="w-4 h-4" /> Secure checkout • Instant download • Lifetime updates
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <div className="aspect-video w-full rounded-xl bg-zinc-100 flex items-center justify-center">
                <div className="text-center">
                  <PlayCircle className="w-12 h-12 mx-auto" />
                  <p className="mt-2 text-sm text-zinc-600">Course intro preview</p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5" /> <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section id="testimonials" className="bg-white border-y border-zinc-200/70">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4" />
                    ))}
                  </div>
                  <p className="mt-3">“{t.text}”</p>
                  <p className="mt-4 text-sm text-zinc-600">— {t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-2xl md:text-3xl font-bold">What you’ll learn</h2>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {curriculum.map((sec, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{sec.title}</h3>
                <ul className="mt-3 space-y-2">
                  {sec.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-zinc-700">
                      <Check className="w-4 h-4" /> {it}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-zinc-200/70">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Grab it today for {PRICE}</h2>
            <p className="mt-2 text-zinc-600">Instant lifetime access. Free updates forever.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
            <Card className="rounded-2xl md:col-span-2">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-zinc-800">
                        <Check className="w-5 h-5 mt-0.5" /> <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-zinc-200 p-6 h-full flex flex-col">
                    <div className="text-5xl font-extrabold tracking-tight">{PRICE}</div>
                    <p className="mt-2 text-sm text-zinc-600">One-time payment • No upsells at checkout</p>
                    <Button size="lg" className="rounded-2xl mt-4" onClick={() => window.location.href = STRIPE_CHECKOUT_URL}>
                      <CreditCard className="w-5 h-5 mr-2" /> Checkout Securely
                    </Button>
                    <div className="mt-4 flex items-center gap-2 text-sm text-zinc-600">
                      <Shield className="w-4 h-4" /> 14-day refund guarantee
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-lg font-semibold">Want a launch discount?</h3>
                <p className="mt-2 text-sm text-zinc-600">Drop your email for a one-time code + early access updates.</p>
                <div className="mt-4 flex gap-2">
                  <div className="flex-1 relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full rounded-xl border border-zinc-200 pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300" />
                  </div>
                  <Button className="rounded-xl" onClick={() => alert(`Thanks! We'll email ${email} a code.`)}>Notify me</Button>
                </div>
                <div className="mt-6 text-xs text-zinc-500">No spam. Unsubscribe anytime.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((f, i) => (
            <div key={i}>
              <h4 className="text-lg font-semibold">{f.q}</h4>
              <p className="mt-2 text-zinc-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to launch your first digital product?</h2>
          <p className="mt-3 text-zinc-300">Click below. You’ll get instant access + a private download link in your email.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-2xl" onClick={() => window.location.href = STRIPE_CHECKOUT_URL}>
              <CreditCard className="w-5 h-5 mr-2" /> Buy Now — {PRICE}
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl border-zinc-700 text-white" onClick={() => setShowMiniCheckout(true)}>
              <PlayCircle className="w-5 h-5 mr-2" /> See Checkout
            </Button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-400">
            <Download className="w-4 h-4" /> Instant download after payment
          </div>
        </div>
      </section>

      {showMiniCheckout && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={() => setShowMiniCheckout(false)}>
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
              <div className="font-semibold">Checkout — {COURSE_NAME}</div>
              <div className="text-sm text-zinc-500">Demo</div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm text-zinc-600">Email</label>
                <input className="mt-1 w-full rounded-xl border border-zinc-200 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300" placeholder="you@domain.com" />
              </div>
              <div>
                <label className="text-sm text-zinc-600">Card details</label>
                <div className="mt-1 grid grid-cols-3 gap-2">
                  <input className="col-span-2 rounded-xl border border-zinc-200 px-3 py-2" placeholder="4242 4242 4242 4242" />
                  <input className="rounded-xl border border-zinc-200 px-3 py-2" placeholder="MM/YY" />
                </div>
              </div>
              <Button className="w-full rounded-2xl" onClick={handleMiniCheckout} disabled={miniPaying}>
                {miniPaying ? "Processing…" : `Pay ${PRICE}`}
              </Button>
              {miniPaid && (
                <div className="text-center text-sm text-green-600">
                  Payment successful (demo). Your download link would be emailed automatically.
                </div>
              )}
              <div className="text-xs text-zinc-500 text-center">This is a visual demo. Real payments happen on Stripe Checkout.</div>
            </div>
          </div>
        </div>
      )}

      <footer className="text-center text-sm text-zinc-500 py-8">
        © {new Date().getFullYear()} AutoStackz. All rights reserved. • <a className="underline" href="#">Terms</a> • <a className="underline" href="#">Privacy</a>
      </footer>
    </div>
  );
}
