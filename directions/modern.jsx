// Direction 4 — MODERN MINIMAL
// Near-white page, generous whitespace, one ink-blue accent, disciplined grid.
// Vibe: an academic publication's digital home. Quiet confidence.

const ModernDirection = () => {
  const P = window.PROJECT;
  const [active, setActive] = React.useState(0);

  const page = "#fcfcfa";
  const ink = "#131518";
  const blue = "#1e3a8a";
  const mute = "rgba(19,21,24,0.55)";
  const rule = "rgba(19,21,24,0.12)";

  const sans = '"Inter Tight", "Inter", -apple-system, system-ui, sans-serif';
  const serif = '"Source Serif 4", "Times New Roman", serif';
  const mono = '"JetBrains Mono", "IBM Plex Mono", monospace';

  return (
    <div style={{ width: 1280, background: page, color: ink, fontFamily: sans }}>
      {/* Nav */}
      <div style={{ padding: "28px 80px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${rule}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 10, height: 10, background: blue }} />
          <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>Sudbury Chinese Oral History</div>
          <div style={{ fontFamily: serif, fontSize: 14, fontStyle: "italic", color: mute, marginLeft: 6 }}>萨德伯里华人口述历史</div>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: "rgba(19,21,24,0.75)" }}>
          <span>About</span><span>Interviews</span><span>Timeline</span><span>Team</span><span>Contact</span>
          <span style={{ color: mute }}>|</span>
          <span style={{ color: blue, fontWeight: 500 }}>EN</span><span>中文</span>
        </div>
      </div>

      {/* Hero — large left-aligned, tight grid */}
      <div style={{ padding: "120px 80px 100px", display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 40 }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", color: mute, textTransform: "uppercase" }}>
          <div>2023—</div>
          <div style={{ marginTop: 6 }}>2026</div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: blue, marginBottom: 28 }}>
            §01 · Research Project
          </div>
          <h1 style={{ fontFamily: sans, fontSize: 84, lineHeight: 0.98, fontWeight: 500, letterSpacing: "-0.035em", margin: 0 }}>
            A century of Chinese life in Sudbury, in the words of the people who lived it.
          </h1>
        </div>
        <div style={{ paddingTop: 140 }}>
          <p style={{ fontFamily: serif, fontSize: 20, lineHeight: 1.5, margin: 0, color: "rgba(19,21,24,0.82)" }}>
            {P.aboutEn}
          </p>
          <p style={{ fontFamily: serif, fontSize: 16, lineHeight: 1.6, marginTop: 20, color: mute }}>
            {P.aboutZh}
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
            <button style={{ background: ink, color: page, border: "none", padding: "14px 20px", fontSize: 13, fontFamily: sans, fontWeight: 500, cursor: "pointer", letterSpacing: "-0.005em" }}>
              Browse interviews →
            </button>
            <button style={{ background: "transparent", color: ink, border: `1px solid ${rule}`, padding: "14px 20px", fontSize: 13, fontFamily: sans, fontWeight: 500, cursor: "pointer" }}>
              Read about the project
            </button>
          </div>
        </div>
      </div>

      {/* Stats — a quiet data strip */}
      <div style={{ margin: "0 80px", padding: "36px 0", borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${rule}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {P.stats.map((s, i) => (
          <div key={i}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.1em", color: mute, textTransform: "uppercase" }}>— 0{i + 1}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 16 }}>
              <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</div>
            </div>
            <div style={{ fontSize: 14, marginTop: 10 }}>{s.labelEn}</div>
            <div style={{ fontFamily: serif, fontSize: 13, fontStyle: "italic", color: mute, marginTop: 2 }}>{s.labelZh}</div>
          </div>
        ))}
      </div>

      {/* Status — current phase callout */}
      <div style={{ margin: "80px 80px 100px", display: "grid", gridTemplateColumns: "280px 1fr", gap: 40, alignItems: "start" }}>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.15em", color: blue, textTransform: "uppercase" }}>
          § Current phase
        </div>
        <div>
          <div style={{ display: "flex", gap: 0, marginBottom: 32, border: `1px solid ${rule}` }}>
            {[
              { label: "Recruitment", done: true },
              { label: "Field recording", done: true },
              { label: "Transcription & translation", active: true },
              { label: "Publication", done: false },
            ].map((p, i, arr) => (
              <div key={i} style={{
                flex: 1,
                padding: "16px 18px",
                borderRight: i < arr.length - 1 ? `1px solid ${rule}` : "none",
                background: p.active ? blue : "transparent",
                color: p.active ? page : p.done ? ink : mute,
              }}>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.1em", opacity: 0.7 }}>
                  {String(i + 1).padStart(2, "0")} / {p.done ? "COMPLETE" : p.active ? "IN PROGRESS" : "PLANNED"}
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, marginTop: 6 }}>{p.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: serif, fontSize: 22, lineHeight: 1.45, maxWidth: 680 }}>
            All 42 field interviews are complete. We are now transcribing, translating, and preparing the archive for public release in <span style={{ color: blue }}>autumn 2026</span>.
          </div>
        </div>
      </div>

      {/* Audio — selected narrators with a waveform list */}
      <div style={{ padding: "80px 80px", background: ink, color: page }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 40, marginBottom: 48 }}>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.15em", color: "#8ca4ff", textTransform: "uppercase" }}>
            § Selected interviews
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <h2 style={{ fontSize: 48, fontWeight: 500, letterSpacing: "-0.025em", margin: 0, maxWidth: 720, lineHeight: 1.1 }}>
              Six voices, chosen as<br />entry points into the collection.
            </h2>
            <div style={{ fontFamily: mono, fontSize: 12, color: "rgba(252,252,250,0.5)" }}>06 / 42</div>
          </div>
        </div>

        <div style={{ border: "1px solid rgba(252,252,250,0.15)" }}>
          {P.interviewees.map((v, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 260px 1fr 220px 100px",
                gap: 20,
                padding: "22px 24px",
                borderTop: i > 0 ? "1px solid rgba(252,252,250,0.1)" : "none",
                alignItems: "center",
                cursor: "pointer",
                background: active === i ? "rgba(30,58,138,0.35)" : "transparent",
                transition: "background .15s",
              }}>
              <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(252,252,250,0.5)" }}>0{i + 1}</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 500 }}>{v.name}</div>
                <div style={{ fontFamily: serif, fontSize: 15, fontStyle: "italic", color: "rgba(252,252,250,0.6)", marginTop: 2 }}>{v.zh} · {v.born}</div>
              </div>
              <div style={{ fontFamily: serif, fontSize: 16, fontStyle: "italic", lineHeight: 1.4, color: "rgba(252,252,250,0.9)" }}>
                "{v.excerptEn}"
              </div>
              <Waveform active={active === i} />
              <div style={{ fontFamily: mono, fontSize: 12, color: "rgba(252,252,250,0.7)", textAlign: "right" }}>
                {active === i ? "▶ playing" : v.duration}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28, fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", color: "rgba(252,252,250,0.5)", textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
          <span>Click a row to preview · transcripts available on release</span>
          <span style={{ color: "#8ca4ff" }}>See full archive →</span>
        </div>
      </div>

      {/* Timeline — compact horizontal */}
      <div style={{ padding: "100px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 40, marginBottom: 48 }}>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.15em", color: blue, textTransform: "uppercase" }}>
            § Chronology
          </div>
          <h2 style={{ fontSize: 48, fontWeight: 500, letterSpacing: "-0.025em", margin: 0, maxWidth: 720, lineHeight: 1.1 }}>
            A hundred years of arrivals.
          </h2>
        </div>

        <div style={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${P.timeline.length}, 1fr)`, gap: 8, paddingTop: 40 }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 48, height: 1, background: ink }} />
          {P.timeline.map((t, i) => (
            <div key={i} style={{ position: "relative", paddingTop: 68 }}>
              <div style={{ position: "absolute", top: 42, left: 0, width: 13, height: 13, background: page, border: `1.5px solid ${ink}`, borderRadius: "50%" }} />
              <div style={{ position: "absolute", top: 0, left: 0, fontFamily: mono, fontSize: 20, fontWeight: 500, letterSpacing: "-0.01em", color: blue }}>{t.year}</div>
              <div style={{ fontSize: 14, lineHeight: 1.4 }}>{t.en}</div>
              <div style={{ fontFamily: serif, fontSize: 12, fontStyle: "italic", color: mute, marginTop: 4 }}>{t.zh}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team + News + Get involved */}
      <div style={{ padding: "80px 80px", borderTop: `1px solid ${rule}`, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 56 }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.15em", color: blue, textTransform: "uppercase", marginBottom: 20 }}>§ Team</div>
          {P.team.map((t, i) => (
            <div key={i} style={{ padding: "14px 0", borderTop: `1px solid ${rule}` }}>
              <div style={{ fontSize: 16, fontWeight: 500 }}>{t.name}</div>
              <div style={{ fontSize: 13, color: mute, marginTop: 2 }}>{t.role} · {t.affiliation}</div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.15em", color: blue, textTransform: "uppercase", marginBottom: 20 }}>§ Recent news</div>
          {P.news.map((n, i) => (
            <div key={i} style={{ padding: "14px 0", borderTop: `1px solid ${rule}` }}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.08em", color: blue }}>{n.date}</div>
              <div style={{ fontSize: 15, marginTop: 4, lineHeight: 1.35 }}>{n.en}</div>
              <div style={{ fontFamily: serif, fontSize: 12, fontStyle: "italic", color: mute, marginTop: 2 }}>{n.zh}</div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.15em", color: blue, textTransform: "uppercase", marginBottom: 20 }}>§ Participate</div>
          <div style={{ padding: "14px 0", borderTop: `1px solid ${rule}` }}>
            <div style={{ fontSize: 16, fontWeight: 500 }}>Share your story</div>
            <div style={{ fontSize: 13, color: mute, marginTop: 4, lineHeight: 1.5 }}>
              We are always listening for more voices. If you or a family member would like to be interviewed, please get in touch.
            </div>
          </div>
          <div style={{ padding: "14px 0", borderTop: `1px solid ${rule}` }}>
            <div style={{ fontSize: 16, fontWeight: 500 }}>Support the project</div>
            <div style={{ fontSize: 13, color: mute, marginTop: 4, lineHeight: 1.5 }}>
              Help fund transcription, translation, and public archiving.
            </div>
          </div>
          <div style={{ marginTop: 24, padding: 20, background: blue, color: page }}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.15em", opacity: 0.8 }}>WRITE TO US</div>
            <div style={{ fontSize: 18, fontWeight: 500, marginTop: 8 }}>{P.contact.email}</div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 8, lineHeight: 1.5 }}>{P.contact.address}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "28px 80px", borderTop: `1px solid ${ink}`, display: "flex", justifyContent: "space-between", fontFamily: mono, fontSize: 11, letterSpacing: "0.08em", color: mute }}>
        <div>© 2026 Sudbury Chinese Oral History Project</div>
        <div style={{ display: "flex", gap: 20 }}>
          <span>Funded by: {P.funders.slice(0, 3).join(" · ")}</span>
        </div>
      </div>
    </div>
  );
};

const Waveform = ({ active }) => {
  const bars = React.useMemo(() => Array.from({ length: 40 }, () => 3 + Math.random() * 22), []);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2, height: 28 }}>
      {bars.map((h, i) => (
        <div key={i} style={{
          width: 2,
          height: h,
          background: active ? "#8ca4ff" : "rgba(252,252,250,0.4)",
          transition: "background .2s",
        }} />
      ))}
    </div>
  );
};

window.ModernDirection = ModernDirection;
