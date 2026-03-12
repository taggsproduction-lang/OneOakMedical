"use client";

import Image from "next/image";
import { useEffect } from "react";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#content", label: "Content" },
  { href: "#opportunity", label: "Opportunity" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#kpis", label: "KPIs" },
  { href: "#next-steps", label: "Next Steps" },
];

export default function PitchDeck() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="One Oak Medical" width={40} height={40} />
          <span className="font-[var(--font-playfair)] text-xl font-bold text-primary">
            One Oak Medical
          </span>
        </div>
        <ul className="hidden md:flex gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-[#0074b7] relative text-center text-white pt-20">
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <Image
            src="/logo.png"
            alt="One Oak Medical"
            width={100}
            height={100}
            className="mx-auto mb-6 rounded-full bg-white p-1"
          />
          <div className="inline-block bg-white/15 border border-white/25 rounded-full px-5 py-1.5 text-xs font-medium tracking-widest uppercase mb-8">
            Social Media &amp; Content Growth Proposal
          </div>
          <h1 className="font-[var(--font-playfair)] text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6">
            Build One Oak&apos;s <span className="text-accent-light">Digital Presence</span>
          </h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-10 leading-relaxed">
            A strategic content system designed to turn One Oak Medical&apos;s clinical expertise into a
            powerful social media presence that attracts and converts patients across NJ &amp; NY.
          </p>
          <a
            href="#problem"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors"
          >
            See the Vision &darr;
          </a>
          <p className="text-sm opacity-60 mt-12">Prepared for One Oak Medical</p>
        </div>
        {/* Wave bottom */}
        <div className="absolute bottom-[-1px] left-0 right-0 h-20">
          <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              d="M0,48L80,42.7C160,37,320,27,480,32C640,37,800,59,960,58.7C1120,59,1280,37,1360,26.7L1440,16L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            />
          </svg>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="py-24 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <SlideHeader num={1} label="The Problem" title="One Oak Has the Expertise — But Not the Audience" />
            <p className="text-base text-gray-600 max-w-2xl mb-12 leading-relaxed">
              With 22 physicians, 12 locations, and 10+ specialties, One Oak Medical is a powerhouse
              — but the digital presence doesn&apos;t reflect it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemCards.map((card, i) => (
              <div
                key={i}
                className="fade-up bg-white rounded-xl p-8 shadow-md border-l-4 border-red-500 hover:-translate-y-0.5 transition-transform"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="text-base font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <SlideHeader num={2} label="The Solution" title="A Content Machine Built Around Your Practice" />
            <p className="text-base text-gray-600 max-w-2xl mb-12 leading-relaxed">
              We build a full content system — not just random posts — designed to educate, build trust, and drive patient bookings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCards.map((card, i) => (
              <div
                key={i}
                className="fade-up bg-white rounded-2xl p-8 shadow-md border-t-4 border-accent hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT EXAMPLES */}
      <section id="content" className="py-24 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <SlideHeader num={3} label="Content Strategy" title="What Your Feed Will Look Like" />
            <p className="text-base text-gray-600 max-w-2xl mb-12 leading-relaxed">
              Six content pillars that keep the feed diverse, educational, and growth-oriented — tailored to healthcare audiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentExamples.map((ex, i) => (
              <div
                key={i}
                className="fade-up bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div
                  className="px-6 py-5 flex items-center gap-3 text-white"
                  style={{ background: ex.gradient }}
                >
                  <span className="text-2xl">{ex.icon}</span>
                  <h3 className="text-base font-bold">{ex.title}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {ex.items.map((item, j) => (
                    <li key={j} className="flex items-baseline gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITY / STATS */}
      <section id="opportunity" className="py-24 px-8 bg-gradient-to-br from-primary-dark to-primary text-white text-center">
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white text-sm font-bold mb-4">
              4
            </div>
            <div className="uppercase text-xs font-semibold tracking-widest text-accent-light mb-2">
              The Opportunity
            </div>
            <h2 className="font-[var(--font-playfair)] text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-4 leading-tight">
              The Numbers That Matter
            </h2>
            <p className="text-base opacity-80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Healthcare social media is booming — and One Oak is perfectly positioned to capitalize
              with 10+ specialties and 12 locations of content to draw from.
            </p>
          </div>
          <div className="fade-up flex flex-wrap justify-center gap-8 mt-8">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 flex-[0_1_180px] text-center">
                <div className="text-4xl font-extrabold text-accent-light leading-none">
                  {stat.value}
                </div>
                <div className="text-sm opacity-80 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <SlideHeader num={5} label="The Roadmap" title="A Phased Approach to Social Growth" />
            <p className="text-base text-gray-600 max-w-2xl mb-12 leading-relaxed">
              We start with quick wins and build toward a full content ecosystem that runs like a machine.
            </p>
          </div>
          <div className="relative max-w-2xl mx-auto before:content-[''] before:absolute before:left-[18px] before:top-0 before:bottom-0 before:w-[3px] before:bg-gray-200">
            {roadmapItems.map((item, i) => (
              <div key={i} className="fade-up flex gap-6 mb-10 relative">
                <div
                  className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs text-white z-10 ${
                    i === 0 ? "bg-accent" : "bg-primary"
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded mt-2 bg-primary/10 text-primary">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <SlideHeader num={6} label="Why Us" title="What Sets This Apart" />
            <p className="text-base text-gray-600 max-w-2xl mb-12 leading-relaxed">
              We don&apos;t just post — we build a content system designed specifically for healthcare growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsCards.map((card, i) => (
              <div
                key={i}
                className="fade-up bg-white rounded-2xl p-8 shadow-md border-t-4 border-primary hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYTICS / KPI FRAMEWORK */}
      <section id="kpis" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="fade-up">
            <SlideHeader num={7} label="Measuring Success" title="Analytics & KPI Framework" />
            <p className="text-base text-gray-600 max-w-2xl mb-12 leading-relaxed">
              Transparent, data-driven reporting so you always know what&apos;s working — and what we&apos;re optimizing next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {kpiCategories.map((cat, i) => (
              <div
                key={i}
                className="fade-up bg-white rounded-2xl p-8 shadow-md border-t-4 hover:-translate-y-1 hover:shadow-lg transition-all"
                style={{ borderTopColor: cat.color }}
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <h3 className="text-lg font-bold text-primary-dark mb-4">{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-baseline gap-2 text-sm text-gray-600">
                      <span className="text-accent font-bold">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Reporting Cadence */}
          <div className="fade-up bg-gray-100 rounded-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-2">📅</div>
              <h4 className="font-bold mb-1">Weekly</h4>
              <p className="text-sm text-gray-600">Content performance snapshots, engagement highlights, trending posts</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-bold mb-1">Monthly</h4>
              <p className="text-sm text-gray-600">Full analytics report with growth trends, audience insights, and recommendations</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-bold mb-1">Quarterly</h4>
              <p className="text-sm text-gray-600">Strategic review, ROI analysis, competitive benchmarking, and roadmap updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="next-steps" className="py-24 px-8 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto fade-up">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white text-sm font-bold mb-4">
            8
          </div>
          <div className="uppercase text-xs font-semibold tracking-widest text-accent mb-2">
            Next Steps
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary-dark mb-8 leading-tight max-w-xl mx-auto">
            Ready to Build One Oak&apos;s Social Presence?
          </h2>
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-xl mx-auto">
            <p className="text-gray-600 mb-6 leading-relaxed">
              We&apos;d love to walk you through our sample content, discuss your goals, and build a
              custom plan for One Oak Medical&apos;s social media growth. Let&apos;s set up a time to talk.
            </p>
            <a
              href="tel:+19738700777"
              className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-semibold text-base hover:bg-primary-dark transition-colors"
            >
              Let&apos;s Talk
            </a>
            <p className="mt-6 text-sm text-gray-600">
              Flexible on scope and timeline — let&apos;s find the right fit for One Oak.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 flex flex-col items-center gap-3 text-sm text-gray-600 border-t border-gray-200">
        <Image
          src="/logo.png"
          alt="One Oak Medical"
          width={36}
          height={36}
          className="opacity-50"
        />
        <span>One Oak Medical &middot; oneoakmedical.com</span>
      </footer>

      <style jsx global>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}

/* ─── Slide Header Component ─── */
function SlideHeader({ num, label, title }: { num: number; label: string; title: string }) {
  return (
    <>
      <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white text-sm font-bold mb-4">
        {num}
      </div>
      <div className="uppercase text-xs font-semibold tracking-widest text-accent mb-2">
        {label}
      </div>
      <h2 className="font-[var(--font-playfair)] text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary-dark mb-4 leading-tight">
        {title}
      </h2>
    </>
  );
}

/* ─── Data ─── */

const problemCards = [
  {
    icon: "📱",
    title: "Minimal Social Presence",
    desc: "1,547 Instagram followers with inconsistent posting. No content strategy, no brand voice, no growth trajectory.",
  },
  {
    icon: "⭐",
    title: "700+ Reviews Sitting Idle",
    desc: "Hundreds of internal patient reviews that aren't being leveraged on Google, social, or marketing — a huge untapped asset.",
  },
  {
    icon: "🔍",
    title: "Zero Content Marketing",
    desc: "No blog, no educational content, no SEO strategy. Patients searching for conditions find competitors — not One Oak.",
  },
  {
    icon: "📍",
    title: "12 Locations, No Local Strategy",
    desc: "Each location is a missed opportunity for hyperlocal social content, Google Business optimization, and community engagement.",
  },
  {
    icon: "💰",
    title: "No Paid Acquisition",
    desc: "Zero ad spend means zero measurable patient acquisition from digital channels — leaving growth entirely to referrals and walk-ins.",
  },
  {
    icon: "🏥",
    title: "Competitors Are Moving Fast",
    desc: "Healthcare practices in North Jersey are ramping up social media, content, and paid ads. Standing still means falling behind.",
  },
];

const solutionCards = [
  {
    icon: "📅",
    title: "Content Calendar System",
    desc: "A structured weekly content calendar covering all specialties, locations, and content types — so the feed is always active and on-brand.",
  },
  {
    icon: "🎨",
    title: "Branded Visual Identity",
    desc: "Custom templates for carousels, Reels covers, story highlights, and graphics — instantly recognizable as One Oak.",
  },
  {
    icon: "📊",
    title: "Growth-Driven Strategy",
    desc: "Every post ties back to a goal: follower growth, engagement, website traffic, or patient bookings. No vanity metrics.",
  },
  {
    icon: "🎬",
    title: "Video & Reels Production",
    desc: "Short-form video content featuring physicians, patient education, myth-busting, and behind-the-scenes — the #1 growth format.",
  },
  {
    icon: "✍️",
    title: "SEO Blog & Articles",
    desc: "Search-optimized health articles that rank for conditions One Oak treats — driving organic traffic and positioning doctors as experts.",
  },
  {
    icon: "📈",
    title: "Paid Social Campaigns",
    desc: "Targeted Meta and Google ads to accelerate growth, retarget website visitors, and drive appointment bookings at measurable CPAs.",
  },
];

const contentExamples = [
  {
    icon: "📸",
    title: "Instagram Carousels",
    gradient: "linear-gradient(135deg, #00527F, #0074b7)",
    items: [
      '"5 Signs Your Body Needs a Specialist"',
      '"What Your Doctor Wishes You Knew"',
      '"The Truth About Ozempic"',
      '"Everyone Over 40 Should Know This"',
      "Condition explainers by specialty",
    ],
  },
  {
    icon: "🎬",
    title: "Reels & Short-Form Video",
    gradient: "linear-gradient(135deg, #833AB4, #E1306C)",
    items: [
      '"Myth vs. Fact" quick-hit clips',
      "Dr. Mahmood's 60-second health tips",
      "Behind-the-scenes at One Oak",
      '"When to see a specialist" decision guides',
      "Patient journey stories (HIPAA-compliant)",
    ],
  },
  {
    icon: "📊",
    title: "Educational & Authority",
    gradient: "linear-gradient(135deg, #1877F2, #42b5f5)",
    items: [
      "Infographics on conditions & treatments",
      '"Ask Dr. Mahmood" Q&A series',
      "Seasonal health awareness posts",
      "Research-backed health stat graphics",
      "Specialty spotlight weeks",
    ],
  },
  {
    icon: "⭐",
    title: "Trust & Social Proof",
    gradient: "linear-gradient(135deg, #619B01, #7bc402)",
    items: [
      "Patient testimonial graphics",
      "Review highlight reels",
      "Team & physician spotlights",
      "Community involvement posts",
      "Google Review collection campaigns",
    ],
  },
  {
    icon: "📍",
    title: "Local & Location Content",
    gradient: "linear-gradient(135deg, #2E383E, #555)",
    items: [
      '"Did you know we\'re in [city]?" location reveals',
      "Office tour videos for each location",
      "Local event partnerships & health fairs",
      "Neighborhood health tip series",
      "New patient welcome content",
    ],
  },
  {
    icon: "🔥",
    title: "Trending & Timely",
    gradient: "linear-gradient(135deg, #FF6B35, #f5a623)",
    items: [
      "Trending health news reactions",
      "Seasonal content (flu season, heart month)",
      '"What social media gets wrong about..."',
      "Viral health myth debunking",
      "Awareness month campaigns",
    ],
  },
];

const stats = [
  { value: "1,547", label: "Current Instagram followers — we'll 5x this in 12 months" },
  { value: "700+", label: "Internal reviews to turn into social proof content" },
  { value: "12", label: "Locations across NJ & NY = hyperlocal content opportunities" },
  { value: "10+", label: "Specialties = endless content streams to keep the feed diverse" },
  { value: "77%", label: "of patients research healthcare providers online before booking" },
];

const roadmapItems = [
  {
    title: "Month 1: Brand Foundation & Content System",
    desc: "Audit current social presence, establish brand templates, create content calendar framework, design first carousel series, and set up analytics tracking. First batch of content goes live.",
    tag: "Launch",
  },
  {
    title: "Months 2–3: Content Engine at Full Speed",
    desc: 'Constant social media presence across carousels, Reels, stories, and static posts. Launch "Ask the Doctor" series. Begin physician branding content. Start converting internal reviews to Google reviews and social graphics.',
    tag: "Build",
  },
  {
    title: "Months 4–6: Paid Amplification & Video",
    desc: "Launch targeted paid social campaigns for patient acquisition. Ramp up Reels and short-form video production. A/B test ad creative. Begin tracking social-to-appointment conversion pipeline.",
    tag: "Scale",
  },
  {
    title: "Months 7–12: Optimize, Expand & Dominate",
    desc: "Expand to TikTok and YouTube Shorts. Launch specialty-specific campaigns. Develop patient ambassador program. Monthly performance reports with ROI analysis. Target: 7,500+ followers and measurable patient growth.",
    tag: "Dominate",
  },
];

const whyUsCards = [
  {
    icon: "🏗️",
    title: "Already in Motion",
    desc: "We've already created sample carousel content for One Oak — branded, compliant, and ready to post. We're not pitching ideas, we're showing finished work.",
  },
  {
    icon: "🏥",
    title: "Healthcare-Native",
    desc: "We understand HIPAA, healthcare advertising compliance, and the nuances of marketing medical practices. No learning curve — we hit the ground running.",
  },
  {
    icon: "⚡",
    title: "Full-Stack Content",
    desc: "From strategy to design to copywriting to analytics — we handle the entire content pipeline so your team can focus on patient care.",
  },
];

const kpiCategories = [
  {
    icon: "📊",
    title: "Growth Metrics",
    color: "#00527F",
    items: [
      "Follower growth rate (monthly & cumulative)",
      "Audience demographics & geo breakdown",
      "Website traffic from social channels",
      "Blog page views & time on page",
    ],
  },
  {
    icon: "💬",
    title: "Engagement Metrics",
    color: "#619B01",
    items: [
      "Engagement rate per post (likes, comments, shares)",
      "Reach & impressions per content type",
      "Save & share rate (high-intent signals)",
      "Top-performing content analysis",
    ],
  },
  {
    icon: "🎯",
    title: "Conversion Metrics",
    color: "#0074b7",
    items: [
      "Link clicks → website visits",
      '"Book Appointment" button clicks',
      "Phone call conversions from ads",
      "Cost per lead (paid campaigns)",
    ],
  },
];
