import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Phone, Wrench, Droplets, PaintRoller, Leaf, Hammer, ShieldCheck,
  Star, MapPin, Clock, Mail, Menu, X, ArrowRight, CheckCircle2,
  Youtube, Facebook,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const PHONE_DISPLAY = "(703) 594-9991";
const PHONE_TEL = "tel:+17035949991";
const YELP = "https://www.yelp.com/biz/interior-work-charlottesville-2";
const FB = "https://www.facebook.com/profile.php?id=61582147498410";
const YT = "https://www.youtube.com/@IWVidz";
const FORMSPREE = "[FORMSPREE_ENDPOINT]"; // Replace with https://formspree.io/f/YOUR_ID

const plumbing = [
  "Toilet installs & repairs",
  "Faucet installs & replacements",
  "Garbage disposal installation",
  "Electric water heater install & replace",
  "Sink repairs",
  "Shower head & tub spout replacement",
  "Hose bib / spigot repairs",
  "Leak repair & investigations",
  "Water pressure assessments",
  "Stopped-up bathtubs",
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#tips", label: "Tips" },
    { href: "#gallery", label: "Work" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-foreground border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Interior Work LLC" className="h-10 md:h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href={PHONE_TEL} className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-5 py-2.5 rounded-md hover:brightness-110 transition">
          <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink">
          <div className="px-4 py-4 flex flex-col gap-3 text-sm font-semibold uppercase">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">{l.label}</a>
            ))}
            <a href={PHONE_TEL} className="mt-2 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-5 py-3 rounded-md">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-ink text-ink-foreground overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Now booking in Charlottesville, VA
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-black uppercase leading-[0.95]">
            Clean Work.<br />
            Fair Prices.<br />
            <span className="text-accent">Insured.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Reliable residential repair &amp; maintenance serving Charlottesville, VA.
            Plumbing, handyman, paint, and more — done right the first time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-7 py-4 rounded-md hover:brightness-110 transition">
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-7 py-4 rounded-md hover:bg-white/15 transition">
              Request a Quote <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Trust bar */}
      <div className="relative border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2"><Star className="h-4 w-4 text-accent fill-accent" /> 5-Star Rated on Yelp</div>
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Licensed &amp; Insured</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Charlottesville, VA</div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> 7:30 AM – 4:00 PM</div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, blurb, items }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string; blurb: string; items: string[];
}) {
  return (
    <div className="group bg-white border-2 border-border rounded-xl p-7 flex flex-col hover:border-primary transition shadow-sm hover:shadow-lg">
      <div className="h-14 w-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-extrabold uppercase tracking-tight">{title}</h3>
      <p className="mt-2 text-muted-foreground">{blurb}</p>
      <ul className="mt-5 space-y-2 text-sm flex-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent shrink-0" /> <span>{it}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="mt-6 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-5 py-3 rounded-md hover:brightness-110 transition">
        Book This Service <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-widest text-primary">What We Do</div>
          <h2 className="mt-2 text-4xl md:text-5xl font-black uppercase">Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From a leaky faucet to a full water heater swap — we show up on time, do the job clean, and leave no mess behind.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={Droplets}
            title="Plumbing & Water"
            blurb="Our flagship work. Faucets, toilets, water heaters, leaks, and more."
            items={plumbing}
          />
          <ServiceCard
            icon={PaintRoller}
            title="Painting & Interior"
            blurb="Small interior paint projects done neat and on schedule."
            items={[
              "Small interior paint projects",
              "Touch-ups & accent walls",
              "Trim and door painting",
              "Cabinet floor replacement",
              "General interior repairs",
            ]}
          />
          <ServiceCard
            icon={Leaf}
            title="Landscaping & Handyman"
            blurb="Light yard work and the odd-job list every homeowner has."
            items={[
              "Light landscaping",
              "General in-home repair",
              "Maintenance punch-lists",
              "Fixture install & swap",
              "And more — just ask",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-primary">About</div>
          <h2 className="mt-2 text-4xl md:text-5xl font-black uppercase">Local. Insured. Honest.</h2>
          <p className="mt-6 text-lg text-foreground/80">
            Interior Work LLC is a Charlottesville-based home repair and maintenance company built on three things:
            clean work, fair prices, and honest service. We're insured, reliable, and focused on getting the job done
            right the first time — no surprises, no mess left behind.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-primary">5.0★</div>
              <div className="text-xs uppercase font-semibold mt-1">Yelp Rated</div>
            </div>
            <div className="border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-primary">Local</div>
              <div className="text-xs uppercase font-semibold mt-1">Charlottesville</div>
            </div>
            <div className="border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-primary">Insured</div>
              <div className="text-xs uppercase font-semibold mt-1">Fully Covered</div>
            </div>
          </div>
          <a href={YT} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:underline">
            <Youtube className="h-5 w-5" /> See Our Work on YouTube
          </a>
        </div>
        <div className="aspect-[4/5] rounded-2xl bg-ink text-ink-foreground/40 border-2 border-dashed border-border flex items-center justify-center text-center p-8">
          <div>
            <Hammer className="h-12 w-12 mx-auto mb-3 text-accent" />
            <div className="font-bold uppercase tracking-wider text-sm text-white">Owner / Team Photo</div>
            <div className="text-xs mt-2 text-white/50">Upload here</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const tips = [
    { title: "How to Shut Off Your Main Water Valve", category: "Plumbing" },
    { title: "Signs Your Water Heater Needs Replacing", category: "Plumbing" },
    { title: "Preventing Frozen Pipes This Winter", category: "Maintenance" },
    { title: "DIY Faucet Maintenance That Saves Money", category: "Maintenance" },
    { title: "What to Do Before Calling a Plumber", category: "Tips" },
    { title: "Understanding Low Water Pressure", category: "Plumbing" },
  ];

  return (
    <section id="tips" className="py-20 md:py-28 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-accent">Learn</div>
            <h2 className="mt-2 text-4xl md:text-5xl font-black uppercase">Tips &amp; Education</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              Short videos that help Charlottesville homeowners understand their plumbing, spot problems early, and save money.
            </p>
          </div>
          <a href={YT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-bold hover:underline">
            Watch all on YouTube <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip, i) => (
            <a
              key={tip.title}
              href={YT}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent transition"
            >
              <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center mb-4 border border-white/5 group-hover:border-accent/30 transition">
                <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Youtube className="h-6 w-6" />
                </div>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{tip.category}</div>
              <h3 className="font-bold text-lg leading-snug">{tip.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
function Gallery() {
  const labels = [
    "Plumbing Install", "Water Heater Replacement", "Faucet Work",
    "Garbage Disposal", "Paint Project", "Before & After",
    "Leak Repair", "Cabinet Repair", "General Handyman",
  ];
  return (
    <section id="gallery" className="py-20 md:py-28 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-accent">The Work</div>
            <h2 className="mt-2 text-4xl md:text-5xl font-black uppercase">Recent Projects</h2>
          </div>
          <a href={YT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-bold hover:underline">
            Watch more on YouTube <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {labels.map((label, i) => (
            <div key={label} className="aspect-square bg-white/5 border border-white/10 rounded-lg flex items-end p-4 hover:border-accent transition">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-accent">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-bold mt-1">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Sarah M.", text: "Showed up on time, replaced our water heater, and cleaned up everything. Fair price, no upsell. Will absolutely call again." },
    { name: "James T.", text: "Fixed two leaky faucets and a running toilet in one visit. Honest pricing and great communication start to finish." },
    { name: "Linda R.", text: "Professional, quick, and clean. You can tell he takes pride in the work. Highly recommend for any home repair." },
  ];
  return (
    <section id="reviews" className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-primary">Reviews</div>
          <h2 className="mt-2 text-4xl md:text-5xl font-black uppercase">5.0 on Yelp</h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 text-accent fill-accent" />
            ))}
          </div>
          <p className="mt-3 text-muted-foreground">Verified 5-star rating from real Charlottesville homeowners.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-border rounded-xl p-7 shadow-sm">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground/80 italic">"{r.text}"</p>
              <div className="mt-5 font-bold uppercase text-sm">{r.name}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={YELP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-ink text-ink-foreground font-bold px-6 py-3 rounded-md hover:brightness-125 transition">
            See our reviews on Yelp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (FORMSPREE.startsWith("[")) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) { setStatus("sent"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-primary">Contact</div>
          <h2 className="mt-2 text-4xl md:text-5xl font-black uppercase">Ready to Book?<br />Let's Talk.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Call us directly or send a quote request — we typically respond same day during business hours.
          </p>
          <a href={PHONE_TEL} className="mt-8 inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-black text-2xl md:text-3xl px-8 py-6 rounded-xl hover:brightness-110 transition w-full lg:w-auto">
            <Phone className="h-7 w-7" /> {PHONE_DISPLAY}
          </a>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> 7:30 AM – 4:00 PM (confirm days with owner)</div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Charlottesville, VA</div>
          </div>
          <div className="mt-6 aspect-video rounded-lg overflow-hidden border border-border">
            <iframe
              title="Charlottesville, VA"
              src="https://www.google.com/maps?q=Charlottesville%2C+VA&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-ink text-ink-foreground rounded-2xl p-7 md:p-10">
          <h3 className="text-2xl font-black uppercase">Request a Quote</h3>
          <p className="text-white/60 text-sm mt-1">All fields required.</p>
          <div className="mt-6 space-y-4">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">Type of Service</label>
              <select name="service" required className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent">
                <option value="">Select a service…</option>
                <option>Plumbing & Water</option>
                <option>Painting & Interior</option>
                <option>Landscaping & Handyman</option>
                <option>Other / Not sure</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">Message</label>
              <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent" />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-black uppercase px-6 py-4 rounded-md hover:brightness-110 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Request"} <ArrowRight className="h-5 w-5" />
            </button>
            {status === "sent" && <p className="text-accent text-sm font-semibold">Thanks — we'll be in touch shortly.</p>}
            {status === "error" && (
              <p className="text-red-400 text-sm font-semibold">
                Form endpoint not configured. Replace [FORMSPREE_ENDPOINT] in src/routes/index.tsx with your Formspree URL, or call {PHONE_DISPLAY}.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">{label}</label>
      <input
        type={type} name={name} required={required}
        className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Interior Work LLC" className="h-12 w-auto" />
          <p className="mt-4 text-sm text-white/60 max-w-xs">Clean work. Fair prices. Insured. Charlottesville, VA's reliable home repair team.</p>
        </div>
        <div className="text-sm">
          <div className="font-bold uppercase tracking-wider text-accent mb-3">Contact</div>
          <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
          <div className="flex items-center gap-2 mt-2"><MapPin className="h-4 w-4" /> Charlottesville, VA</div>
          <div className="flex items-center gap-2 mt-2"><Clock className="h-4 w-4" /> 7:30 AM – 4:00 PM</div>
        </div>
        <div className="text-sm">
          <div className="font-bold uppercase tracking-wider text-accent mb-3">Find Us</div>
          <div className="flex gap-3">
            <a href={YELP} target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="h-10 w-10 rounded-md bg-white/5 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition"><Star className="h-5 w-5" /></a>
            <a href={FB} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-md bg-white/5 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition"><Facebook className="h-5 w-5" /></a>
            <a href={YT} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="h-10 w-10 rounded-md bg-white/5 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Interior Work LLC. All rights reserved.
      </div>
    </footer>
  );
}

function MobileCallBar() {
  return (
    <a
      href={PHONE_TEL}
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-accent text-accent-foreground font-black uppercase text-lg px-6 py-4 rounded-xl shadow-2xl flex items-center justify-center gap-3 border-2 border-black/10"
    >
      <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
    </a>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Education />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
