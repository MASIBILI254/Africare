import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Heart,
  HeartHandshake,
  Leaf,
  Mail,
  Menu,
  MessageCircleHeart,
  Mountain,
  Phone,
  Sparkles,
  Target,
  Users,
  X,
  HandHeart,
  Landmark,
  Accessibility,
  Music,
  Cross,
  BookOpen,
  Send,
  Quote,
} from "lucide-react";
import "./styles.css";
import image1 from "./images/DSC_2779.jpg";
import image2 from "./images/DSC_2419.jpg";
import image3 from "./images/DSC_2750.jpg";
import image4 from "./images/DSC_2692.jpg";
import image5 from "./images/DSC_2688.jpg";
import image6 from "./images/DSC_2654.jpg";

const impactAreas = [
  {
    icon: Users,
    color: "bg-emerald-100 text-emerald-700",
    title: "Community Outreach",
    text: "Support for orphans, street families, the elderly, the sick, people with disabilities, teen mothers and more.",
  },
  {
    icon: Brain,
    color: "bg-rose-100 text-rose-600",
    title: "Mental Health Advocacy",
    text: "Awareness, support groups and professional partnerships to reduce stigma and promote healing.",
  },
  {
    icon: GraduationCap,
    color: "bg-amber-100 text-amber-700",
    title: "Youth Mentorship",
    text: "Life skills, character building and positive role models for a brighter future.",
  },
  {
    icon: MessageCircleHeart,
    color: "bg-sky-100 text-sky-700",
    title: "Guidance & Counseling",
    text: "Spiritual, emotional and psychological support for life’s challenges.",
  },
  {
    icon: Music,
    color: "bg-purple-100 text-purple-700",
    title: "Talent Development",
    text: "Creative arts, music, sports and vocational skills to unlock potential.",
  },
  {
    icon: BookOpen,
    color: "bg-teal-100 text-teal-700",
    title: "Education Empowerment",
    text: "Scholarships, school supplies, mentorship and learning opportunities.",
  },
];

const leaders = [
  [
    "Nahashion Kirwa",
    "Executive Director / Founder",
    "Leadership & Governance",
    image5
  ],
  ["Maxine Mwanda", "Programme Coordinator", "Program Development", image6],
  ["Javier Muhonja", "Organizing Secretary", "Administration & Documentation", image4],
  ["Caleb Sitieney", "Treasurer", "Financial Management", image3],
  ["Pastor Silas Koech", "Advisory Board Director", "Strategic Guidance", image2],
];

const stats = [
  ["300+", "Lives impacted"],
  ["100+", "Youth mentored"],
  ["10+", "Awareness sessions"],
  ["20+", "Institutional partnerships"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream text-ink selection:bg-lime selection:text-forest">
      <Header
        onNavigate={go}
        onDonate={() => setDonateOpen(true)}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <Hero
          onLearn={() => go("about")}
          onDonate={() => setDonateOpen(true)}
        />
        <ImpactSection />
        <AboutSection onStory={() => go("our-work")} />
        <ImpactStats />
        <WorkSection />
        <LeadershipSection />
        <JoinSection onDonate={() => setDonateOpen(true)} onNavigate={go} />
      </main>
      <Footer onNavigate={go} />
      {donateOpen && <DonationModal onClose={() => setDonateOpen(false)} />}
    </div>
  );
}

function Header({ onNavigate, onDonate, menuOpen, setMenuOpen }) {
  const links = [
    ["about", "About Us"],
    ["our-work", "Our Work"],
    ["team", "Our Team"],
    ["join", "Get Involved"],
    ["contact", "Contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 text-left"
        >
          <Logo />
          <div className="hidden sm:block">
            <div className="font-display text-2xl font-bold leading-none text-forest">
              Africare
            </div>
            <div className="font-display text-xl font-bold leading-none text-forest">
              Foundation
            </div>
            <div className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-sunrise">
              BECAUSE WE CARE
            </div>
          </div>
        </button>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className="nav-link"
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          onClick={onDonate}
          className="hidden rounded-full bg-sunrise px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:inline-flex items-center gap-2"
        >
          <Heart size={16} fill="currentColor" /> Donate Now
        </button>
        <button
          className="rounded-xl p-2 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t bg-white px-5 pb-6 pt-3 lg:hidden">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className="block w-full border-b border-slate-100 py-4 text-left font-semibold"
            >
              {label}
            </button>
          ))}
          <button
            onClick={onDonate}
            className="mt-5 w-full rounded-full bg-sunrise py-3 font-bold text-white"
          >
            Donate Now
          </button>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <div className="relative grid h-12 w-12 place-items-center rounded-[18px] bg-forest text-white shadow-lg shadow-emerald-900/20">
      <HeartHandshake size={27} strokeWidth={2.2} />
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-sunrise ring-2 ring-white" />
    </div>
  );
}

function Hero({ onLearn, onDonate }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-forest pt-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(155,211,79,.28),transparent_28%),radial-gradient(circle_at_10%_100%,rgba(247,148,29,.16),transparent_30%)]" />
      <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="relative z-10 max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-lime backdrop-blur">
            <Sparkles size={15} /> Because We Care
          </div>
          <p className="mb-3 font-display text-xl italic text-white/80">
            Service to Humanity Is Service to God
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Hope.
            <br />
            <span className="text-lime">Love.</span>
            <br />
            Empowerment.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
            Africare Foundation is a Christ-centered nonprofit committed to
            transforming lives by extending love and support to marginalized
            communities.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={onLearn}
              className="rounded-full bg-sunrise px-7 py-4 font-bold shadow-xl shadow-orange-950/20 transition hover:-translate-y-1"
            >
              Learn More <ArrowRight className="ml-2 inline" size={18} />
            </button>
            <button
              onClick={onDonate}
              className="rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/15"
            >
              Support Our Mission
            </button>
          </div>
        </div>
        <div className="relative z-10">
          <div className="hero-photo overflow-hidden rounded-[42px] border-8 border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
            <div
              className="flex min-h-[500px] items-end bg-cover bg-center p-7 sm:min-h-[560px]"
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="max-w-xs rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                  Our promise
                </div>
                <div className="mt-2 font-display text-3xl font-bold">
                  Every life matters.
                </div>
                <p className="mt-2 text-sm text-white/80">
                  Changing lives, building communities and creating a hopeful
                  tomorrow.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-5 hidden rounded-3xl bg-white p-5 text-ink shadow-soft sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-lime/20 text-forest">
                <HandHeart />
              </div>
              <div>
                <div className="text-2xl font-black">2019</div>
                <div className="text-xs font-semibold text-slate-500">
                  Founded in Eldoret
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 right-0 h-12 rounded-[50%_50%_0_0/100%_100%_0_0] bg-cream" />
    </section>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-sunrise">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tight text-forest sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 leading-7 text-slate-600">{text}</p>}
    </div>
  );
}

function ImpactSection() {
  return (
    <section className="px-5 py-20 sm:px-8" id="our-work">
      <SectionHeading
        eyebrow="Our Impact Areas"
        title="What We Do"
        text="Practical, compassionate programs designed around the needs of children, youth, families and vulnerable communities."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {impactAreas.map(({ icon: Icon, color, title, text }) => (
          <article
            key={title}
            className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-soft"
          >
            <div
              className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${color} transition group-hover:scale-110`}
            >
              <Icon size={26} />
            </div>
            <h3 className="font-bold text-forest">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection({ onStory }) {
  return (
    <section id="about" className="bg-mist px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[40px] shadow-soft">
            <div
              className="min-h-[520px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image2})` }}
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-3xl bg-sunrise px-6 py-5 font-display text-xl font-bold text-white shadow-xl sm:right-5">
            Better futures,
            <br />
            together.
          </div>
        </div>
        <div>
          <div className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-sunrise">
            Our Story
          </div>
          <h2 className="font-display text-4xl font-bold text-forest sm:text-5xl">
            Love in action.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Africare Foundation is a Christ-centered nonprofit established on
            June 24, 2019, in Eldoret, Kenya. Founded on faith, compassion and
            service, we are committed to transforming lives by extending love
            and support to marginalized communities.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <InfoCard
              icon={Target}
              title="Our Mission"
              text="To transform lives by empowering communities through education, healthcare, economic development, humanitarian assistance, and extending love, mentorship and care to the most vulnerable."
            />
            <InfoCard
              icon={Mountain}
              title="Our Vision"
              text="To build a society where everyone, regardless of their circumstances, experiences love, support and the opportunity to thrive."
            />
          </div>
          <div className="mt-4 rounded-3xl border border-forest/10 bg-white p-6">
            <div className="flex gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lime/20 text-forest">
                <Leaf />
              </div>
              <div>
                <h3 className="font-bold text-forest">Our Philosophy</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Every life matters, and acts of love and compassion can
                  transform lives and communities. We seek to uplift the broken,
                  mentor youth and empower the disadvantaged.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={onStory}
            className="mt-7 rounded-full bg-forest px-6 py-3 font-bold text-white transition hover:bg-forestDark"
          >
            Explore Our Work <ArrowRight className="ml-2 inline" size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-sunrise">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-bold text-forest">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ImpactStats() {
  return (
    <section className="bg-forest px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map(([num, label]) => (
          <div key={label} className="text-center">
            <div className="font-display text-4xl font-bold text-lime sm:text-5xl">
              {num}
            </div>
            <div className="mt-2 text-sm font-medium text-white/70">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkSection() {
  const values = [
    ["Love & Compassion", Heart],
    ["Faith & Integrity", Cross],
    ["Empowerment", Sparkles],
    ["Community & Inclusion", Accessibility],
    ["Servant Leadership", HandHeart],
    ["Hope & Restoration", Leaf],
  ];
  return (
    <section className="px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="What Guides Us"
        title="Values that become action"
        text="Our grassroots approach works with local leaders, churches, volunteers and families to make programs relevant, impactful and sustainable."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map(([title, Icon]) => (
          <div
            key={title}
            className="flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest text-white">
              <Icon size={22} />
            </div>
            <div>
              <div className="font-bold text-forest">{title}</div>
              <div className="mt-1 text-xs text-slate-500">
                A principle we live through service.
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section id="team" className="bg-slate-50 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Leadership"
          title="Meet the people behind the mission"
          text="A collaborative leadership structure spanning strategy, programs, finance, administration, governance and community engagement."
        />
        
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
  {leaders.map(([name, role, focus, image], index) => (
    <article
      key={name}
      className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="h-48 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-forest">{name}</h3>

        <p className="mt-1 text-sm font-medium text-slate-500">
          {role}
        </p>

        <div className="mt-4 inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-forest">
          {focus}
        </div>
      </div>
    </article>
  ))}
</div>

      </div>
    </section>
  );
}

function JoinSection({ onDonate, onNavigate }) {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-forest px-5 py-20 text-white sm:px-8"
    >
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-lime/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-sunrise/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-lime">
          <Heart size={28} fill="currentColor" />
        </div>
        <h2 className="font-display text-4xl font-bold sm:text-6xl">
          Together, we can make a difference.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
          Volunteer your time. Donate resources. Partner on a project. Advocate
          for people who need to be seen, heard and supported.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onNavigate("contact")}
            className="rounded-full bg-white px-7 py-4 font-bold text-forest transition hover:bg-lime"
          >
            Get Involved <ArrowRight className="ml-2 inline" size={18} />
          </button>
          <button
            onClick={onDonate}
            className="rounded-full bg-sunrise px-7 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Donate Now{" "}
            <Heart className="ml-2 inline" size={18} fill="currentColor" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer id="contact" className="bg-[#032C1E] px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="font-display text-2xl font-bold">
                Africare Foundation
              </div>
              <div className="text-xs text-lime">Because We Care</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
            Changing lives, building communities and creating a hopeful tomorrow
            — one act of love at a time.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Explore</h3>
          <div className="mt-4 space-y-3 text-sm text-white/60">
            {[
              ["about", "About Us"],
              ["our-work", "Our Work"],
              ["team", "Our Team"],
              ["join", "Get Involved"],
            ].map(([id, label]) => (
              <button
                className="block transition hover:text-lime"
                key={id}
                onClick={() => onNavigate(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Our Locations</h3>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Headquarters: Nairobi, Kenya
            <br />
            Branches: Nakuru & Eldoret
          </p>
        </div>
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <div className="mt-4 space-y-3 text-sm text-white/60">
            <div className="flex gap-3">
              <Phone size={17} className="text-lime" /> +254 719 174 913
              <br />
            </div>
            <div className="flex gap-3">
              <Mail size={17} className="text-lime" />{" "}
              africarefoundationintl@gmail.com
            </div>
            <div className="flex gap-3">
              <Landmark size={17} className="text-lime" />{" "}
              www.africarefoundation.org
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} Africare Foundation. Service to Humanity Is
        Service to God.
      </div>
    </footer>
  );
}

function DonationModal({ onClose }) {
  const [amount, setAmount] = useState("1000");
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-forest/70 p-4 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-lg rounded-[32px] bg-white p-7 shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-2 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-sunrise">
              MAKE AN IMPACT
            </div>
            <h2 className="font-display text-3xl font-bold text-forest">
              Support the mission
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Your contribution helps turn compassion into practical community
              support.
            </p>
          </div>
          <button onClick={onClose} className="rounded-full bg-slate-100 p-2">
            <X size={18} />
          </button>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-3">
          {["500", "1000", "2500"].map((v) => (
            <button
              key={v}
              onClick={() => setAmount(v)}
              className={`rounded-2xl border py-3 font-bold ${amount === v ? "border-forest bg-forest text-white" : "border-slate-200 text-forest"}`}
            >
              KES {v}
            </button>
          ))}
        </div>
        <label className="mt-4 block text-sm font-semibold text-forest">
          Other amount
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-forest"
          />
        </label>
        <button
          onClick={onClose}
          className="mt-5 w-full rounded-full bg-sunrise py-4 font-bold text-white"
        >
          Continue to Donation <ArrowRight className="ml-2 inline" size={18} />
        </button>
        <p className="mt-3 text-center text-xs text-slate-400">
          Payment integration can be connected to your preferred provider.
        </p>
      </div>
    </div>
  );
}

export default App;
createRoot(document.getElementById("root")).render(<App />);
