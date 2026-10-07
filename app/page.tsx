import Image from "next/image";
import {
  ArrowUpRight, BriefcaseBusiness, CheckCircle2, ChevronRight, Database,
  ExternalLink, GraduationCap, Linkedin, Mail, MapPin, PlayCircle,
  Quote, Sparkles, Users, Youtube
} from "lucide-react";

const skills = [
  "SQL", "Oracle Database", "PL/SQL", "Data Analysis", "Data Modeling",
  "ETL & Data Pipelines", "Database Performance", "Data Integration",
  "Data Governance", "Technical Training", "Business Intelligence", "Agile"
];

const roles = [
  {
    period: "Apr 2024 · Present",
    title: "Managing Director",
    company: "Dataprofry® Quantum Tech",
    location: "Dadri, Uttar Pradesh · Hybrid",
    icon: "DQ",
    current: true,
    points: [
      "Lead the strategic direction of a data-focused technology and consulting company.",
      "Design scalable data pipelines and data solutions that improve how businesses use information.",
      "Deliver SQL, Oracle database and data analytics training for organizations and professionals.",
      "Lead data integration and governance initiatives focused on accuracy, consistency and usability.",
      "Work with clients to gather business-critical data and turn it into actionable insights."
    ],
    achievement: "Delivered custom data analytics training programs to multiple organizations and established ETL and data pipeline solutions for startups and enterprises."
  },
  {
    period: "Jun 2019 · Present",
    title: "Remote Database Consultant",
    company: "Networker UK Ltd",
    location: "Remote",
    icon: "NU",
    current: true,
    points: [
      "Provide remote database consulting and technical support for client environments.",
      "Apply hands-on database expertise to architecture, performance and reliability challenges."
    ]
  },
  {
    period: "Sep 2017 · Present",
    title: "Oracle ACE Pro · Senior Data & Database Consultant",
    company: "Independent / Freelance",
    location: "Noida, Uttar Pradesh · Hybrid",
    icon: "OP",
    current: true,
    points: [
      "Serve clients worldwide across data analysis, data modeling and database architecture.",
      "Design, implement and optimize robust database solutions with a strong focus on performance.",
      "Advise teams on practical data-driven approaches and problem solving."
    ]
  },
  {
    period: "Jan 2014 · Present",
    title: "Founder & Oracle Database Consultant / Trainer",
    company: "RebellionRider.com",
    location: "Greater Delhi Area",
    icon: "RR",
    current: true,
    points: [
      "Built an educational platform focused on Oracle Database, SQL and PL/SQL learning.",
      "Conduct workshops, seminars and corporate training in Oracle Database technologies.",
      "Create educational content and tutorials designed to make complex database concepts easier to understand.",
      "Provide online and offline personal training for Oracle DBA and Developer courses."
    ],
    achievement: "The platform has reached 200,000+ views and has become a long-running resource for Oracle Database learners."
  },
  {
    period: "Jan 2014 · Oct 2024",
    title: "YouTube Partner & Video Producer",
    company: "YouTube",
    location: "Greater Delhi Area",
    icon: "YT",
    current: false,
    points: [
      "Produced free tutorial content around SQL, Oracle Database and PL/SQL.",
      "Built a technology education channel around practical explanations and learner questions.",
      "Published tutorial and technology videos for a broad online audience."
    ]
  },
  {
    period: "Jan 2017 · Jun 2019",
    title: "Database Administrator",
    company: "Arbot Analytics India Pvt Ltd",
    location: "On-site",
    icon: "AA",
    current: false,
    points: [
      "Configured and maintained high-availability database environments.",
      "Worked on clustering, mirroring, log shipping, recovery, maintenance and performance tuning.",
      "Implemented automation and managed containerized database environments."
    ]
  },
  {
    period: "Jan 2013 · May 2014",
    title: "Software Developer for NGN Core",
    company: "C-DOT, Centre for Development of Telematics",
    location: "Mehrauli, New Delhi",
    icon: "CD",
    current: false,
    points: [
      "Developed an application using the Google WebRTC framework for automated call-processing features.",
      "Worked on testing automation and standardization for Next Generation Network call processing.",
      "Participated in testing activities for the HP Atalla project."
    ]
  }
];

const teaching = [
  { title: "Guest Lectures", text: "Career-focused sessions on SQL, data analytics, databases and the skills employers actually use." },
  { title: "Corporate Training", text: "Practical SQL, Oracle, PL/SQL and data analytics programs tailored to teams and business needs." },
  { title: "Workshops", text: "Hands-on sessions that move from fundamentals to real-world queries, database design and analysis." }
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fbfbfa]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#top" className="font-semibold tracking-tight">Manish Sharma<span className="text-blue-600">.</span></a>
          <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-950" href="#about">About</a>
            <a className="hover:text-slate-950" href="#experience">Experience</a>
            <a className="hover:text-slate-950" href="#teaching">Guest Lectures</a>
            <a className="hover:text-slate-950" href="#contact">Contact</a>
          </nav>
         <a
  href="https://www.instagram.com/rebellionrider/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
>
  DM on Instagram <ArrowUpRight size={14} />
</a>
        </div>
      </header>

      <section id="top" className="grid-bg hero-glow overflow-hidden border-b border-slate-200">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
              <Sparkles size={13} /> Industry + Education
            </div>
            <p className="eyebrow mb-4">Data & Database Professional</p>
            <h1 className="max-w-3xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              I help people and businesses <span className="text-blue-600">make better use of data.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Oracle database consultant, SQL and data analytics trainer, content creator and Managing Director at Dataprofry® Quantum Tech. I work at the intersection of technology, business and practical learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#teaching" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                Invite me for a guest lecture <ArrowUpRight size={16} />
              </a>
              <a href="#experience" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:border-slate-400">
                Explore experience <ChevronRight size={16} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Uttar Pradesh, India</span>
              <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={15} /> 16+ years in technology</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={15} /> Training & guest lectures</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-600/10 blur-2xl" />
            <div className="card relative overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image src="/manish-profile/manish-sharma.png" alt="Manish Sharma" fill className="object-cover object-center" priority sizes="(max-width: 1024px) 90vw, 440px" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-6 pt-24 text-white">
                  <p className="text-xl font-bold">Manish Sharma</p>
                  <p className="mt-1 text-sm text-white/75">Oracle • SQL • Data Analytics</p>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-200 px-2 py-4 text-center">
                <div><p className="text-lg font-black">16+</p><p className="text-[11px] text-slate-500">Years</p></div>
                <div><p className="text-lg font-black">200K+</p><p className="text-[11px] text-slate-500">Content views</p></div>
                <div><p className="text-lg font-black">Global</p><p className="text-[11px] text-slate-500">Consulting</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Profile</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A practitioner first, trainer second.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              My work spans database engineering, data analysis, consulting, training and technology education. Over the years, I have worked with organizations, professionals and students to solve practical data problems and make technical concepts easier to apply.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              That combination matters in a classroom. I do not teach SQL as a collection of commands. I connect concepts to the kind of problems people face in real projects, interviews and business environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map(skill => <span key={skill} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700">{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-0 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            ["16+", "Years across technology & databases"],
            ["200K+", "Views on educational content"],
            ["7", "Major professional roles shown here"],
            ["Global", "Consulting and training exposure"]
          ].map(([num, label]) => (
            <div key={label} className="border-b border-slate-200 px-5 py-8 last:border-b-0 sm:border-r lg:border-b-0 lg:first:pl-0 lg:last:border-r-0">
              <p className="text-3xl font-black tracking-tight text-slate-950">{num}</p>
              <p className="mt-2 max-w-[210px] text-sm leading-5 text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A career built around data.</h2>
          <p className="mt-4 text-slate-600">From software development and database administration to consulting, education and company leadership.</p>
        </div>
        <div className="relative timeline-line space-y-5">
          {roles.map((role, index) => (
            <article key={`${role.company}-${role.title}`} className="relative pl-8 sm:pl-12">
              <div className={`absolute left-0 top-5 z-10 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#fbfbfa] ${role.current ? "bg-blue-600" : "bg-slate-400"}`} />
              <div className="card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-[10px] font-black text-white">{role.icon}</div>
                    <div>
                      <p className="text-xs font-bold text-blue-600">{role.period}</p>
                      <h3 className="mt-1 text-xl font-bold tracking-tight">{role.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-600">{role.company}</p>
                      <p className="mt-1 text-xs text-slate-400">{role.location}</p>
                    </div>
                  </div>
                  {role.current && <span className="w-fit rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Current</span>}
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
                  {role.points.map(point => <li key={point} className="flex gap-2"><CheckCircle2 size={16} className="mt-1 shrink-0 text-blue-600" />{point}</li>)}
                </ul>
                {role.achievement && (
                  <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm leading-6 text-slate-700">
                    <span className="font-bold text-slate-950">Impact:</span> {role.achievement}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="teaching" className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="eyebrow !text-blue-400">For colleges & organizations</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Bring industry experience into the classroom.</h2>
              <p className="mt-5 leading-7 text-slate-300">I conduct guest lectures, workshops and corporate training focused on practical data skills, database technologies and career readiness.</p>
              <a href="mailto:rebellionrideryt@gmail.com?subject=Guest Lecture Invitation" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-blue-50">Request a session <ArrowUpRight size={16} /></a>
            </div>
            <div className="grid gap-4">
              {teaching.map((item, i) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[.06] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">{i === 0 ? <GraduationCap size={19} /> : i === 1 ? <Users size={19} /> : <Database size={19} />}</div>
                    <div><h3 className="font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="card overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[1.2fr_.8fr]">
            <div className="p-8 sm:p-10">
              <p className="eyebrow">Teaching philosophy</p>
              <div className="mt-5 flex gap-4">
                <Quote className="mt-1 shrink-0 text-blue-600" size={28} />
                <blockquote className="text-2xl font-bold leading-9 tracking-tight text-slate-900">“Technical knowledge becomes valuable when you can apply it to a real problem.”</blockquote>
              </div>
              <p className="mt-5 pl-12 text-sm leading-6 text-slate-500">My sessions focus on understanding the why behind a concept, then using it on practical scenarios.</p>
            </div>
            <div className="border-t border-slate-200 bg-slate-50 p-8 sm:p-10 lg:border-l lg:border-t-0">
              <p className="text-sm font-bold text-slate-900">Topics I can cover</p>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                {['SQL for real-world analysis', 'Oracle Database & PL/SQL', 'Advanced SQL & window functions', 'Data analytics career skills', 'Database design & performance', 'From classroom SQL to industry projects'].map(t => <div key={t} className="flex items-center gap-3"><CheckCircle2 size={16} className="text-blue-600" />{t}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="grid-bg border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-blue-600 px-7 py-10 text-white shadow-2xl shadow-blue-600/20 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[.14em] text-blue-100">Let’s connect</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Planning a guest lecture or training session?</h2>
              <p className="mt-4 text-blue-50/90">Share your audience, topic and preferred format. I can suggest a session structure around it.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
              <a href="mailto:rebellionrideryt@gmail.com?subject=Guest Lecture / Training Enquiry" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50"><Mail size={16} /> Email me</a>
              <a href="https://www.linkedin.com/in/mannbhardwaj/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </div>
          <footer className="flex flex-col gap-3 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Manish Sharma. Data, databases and practical learning.</p>
            <div className="flex gap-5"><a className="hover:text-slate-700" href="https://www.rebellionrider.com/" target="_blank" rel="noreferrer">RebellionRider</a><a className="hover:text-slate-700" href="https://www.youtube.com/@ManishSharmaTutorials" target="_blank" rel="noreferrer"><Youtube size={14} className="inline" /> YouTube</a></div>
          </footer>
        </div>
      </section>
    </main>
  );
}
