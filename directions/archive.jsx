// Direction 1 — ARCHIVE
// Warm cream paper, deep ink serif, index-card metadata, stamp accents.
// Vibe: a rare-books reading room that happens to live on the web.

const ArchiveDirection = () => {
  const P = window.PROJECT;
  const [playing, setPlaying] = React.useState(null);

  const ink = "#1c1612";
  const paper = "#f1e9d6";
  const paperDark = "#e6dcc4";
  const stamp = "#8b2c1a";
  const rule = "rgba(28,22,18,0.22)";

  const serif = '"Source Serif 4", "Times New Roman", serif';
  const mono = '"IBM Plex Mono", "Courier New", monospace';

  return (
    <div style={{
      width: 1280,
      background: paper,
      color: ink,
      fontFamily: serif,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Paper grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(139,44,26,0.04) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(28,22,18,0.05) 0, transparent 40%)`,
        pointerEvents: "none",
      }} />

      {/* Header: Catalog card style */}
      <div style={{ padding: "32px 56px 0", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: ink }}>
          <div>Fonds · SCH-2023 / 042</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span>About</span><span>Interviews</span><span>Timeline</span><span>Team</span><span>Contact</span>
          </div>
          <div>EN · 中文</div>
        </div>
        <div style={{ borderTop: `1px solid ${ink}`, marginTop: 16 }} />
      </div>

      {/* Hero */}
      <div style={{ padding: "72px 56px 48px", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: stamp, marginBottom: 24 }}>
          An Oral History Project · 口述历史项目
        </div>
        <h1 style={{
          fontFamily: serif,
          fontSize: 116,
          lineHeight: 0.98,
          fontWeight: 400,
          letterSpacing: "-0.02em",
          margin: 0,
          fontStyle: "italic",
        }}>
          Voices from<br />
          <span style={{ fontStyle: "normal" }}>the Nickel City.</span>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 48, alignItems: "end" }}>
          <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 520, fontFamily: serif }}>
            {P.aboutEn}
          </p>
          <div style={{ fontFamily: serif, fontSize: 17, lineHeight: 1.8, color: "rgba(28,22,18,0.75)", maxWidth: 440 }}>
            {P.aboutZh}
          </div>
        </div>
      </div>

      {/* Stats strip: like a library card */}
      <div style={{ margin: "0 56px", border: `1px solid ${ink}`, background: paperDark, display: "grid", gridTemplateColumns: "repeat(4,1fr)", position: "relative", zIndex: 1 }}>
        {P.stats.map((s, i) => (
          <div key={i} style={{ padding: "28px 24px", borderRight: i < 3 ? `1px solid ${rule}` : "none" }}>
            <div style={{ fontFamily: serif, fontSize: 56, lineHeight: 1, fontWeight: 400 }}>{s.n}</div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 12, color: "rgba(28,22,18,0.7)" }}>
              {s.labelEn}<br /><span style={{ color: stamp }}>{s.labelZh}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Status stamp */}
      <div style={{
        position: "absolute", right: 64, top: 260,
        border: `2.5px solid ${stamp}`,
        color: stamp,
        padding: "10px 18px",
        fontFamily: mono,
        fontSize: 12,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        transform: "rotate(-6deg)",
        opacity: 0.85,
        background: "rgba(241,233,214,0.5)",
        zIndex: 2,
      }}>
        <div>In Processing</div>
        <div style={{ fontSize: 9, marginTop: 2, opacity: 0.8 }}>Last updated · Apr 2026</div>
      </div>

      {/* Interviewee catalog */}
      <div style={{ padding: "88px 56px 48px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
          <h2 style={{ fontFamily: serif, fontSize: 44, fontStyle: "italic", fontWeight: 400, margin: 0 }}>
            The Narrators <span style={{ fontStyle: "normal", color: "rgba(28,22,18,0.45)" }}>· 口述者</span>
          </h2>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", color: "rgba(28,22,18,0.55)" }}>
            042 INTERVIEWS · 6 SHOWN
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${ink}` }} />
        {P.interviewees.map((v, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "60px 220px 1fr 110px 80px",
            gap: 24,
            padding: "24px 0",
            borderBottom: `1px solid ${rule}`,
            alignItems: "center",
          }}>
            <div style={{ fontFamily: mono, fontSize: 12, color: "rgba(28,22,18,0.5)" }}>№ {String(i + 1).padStart(3, "0")}</div>
            <div>
              <div style={{ fontFamily: serif, fontSize: 22, lineHeight: 1.1 }}>{v.name}</div>
              <div style={{ fontFamily: serif, fontSize: 17, color: stamp, marginTop: 2 }}>{v.zh}</div>
              <div style={{ fontFamily: mono, fontSize: 10, color: "rgba(28,22,18,0.55)", marginTop: 6, letterSpacing: "0.08em" }}>{v.born.toUpperCase()}</div>
            </div>
            <div style={{ fontFamily: serif, fontSize: 18, fontStyle: "italic", lineHeight: 1.4, color: "rgba(28,22,18,0.85)" }}>
              "{v.excerptEn}"
              <div style={{ fontSize: 14, fontStyle: "normal", color: "rgba(28,22,18,0.55)", marginTop: 6 }}>{v.excerptZh}</div>
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, color: "rgba(28,22,18,0.6)" }}>{v.role}</div>
            <button
              onClick={() => setPlaying(playing === i ? null : i)}
              style={{
                fontFamily: mono, fontSize: 11, letterSpacing: "0.1em",
                background: playing === i ? ink : "transparent",
                color: playing === i ? paper : ink,
                border: `1px solid ${ink}`,
                padding: "10px 12px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}>
              {playing === i ? "◼ " + v.duration : "▶ " + v.duration}
            </button>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ padding: "48px 56px 64px", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: serif, fontSize: 44, fontStyle: "italic", fontWeight: 400, margin: "0 0 40px" }}>
          A Community Chronology <span style={{ fontStyle: "normal", color: "rgba(28,22,18,0.45)" }}>· 社区编年</span>
        </h2>
        <div style={{ position: "relative", paddingLeft: 120 }}>
          <div style={{ position: "absolute", left: 96, top: 6, bottom: 6, width: 1, background: ink }} />
          {P.timeline.map((t, i) => (
            <div key={i} style={{ position: "relative", padding: "14px 0", display: "flex", gap: 32 }}>
              <div style={{ position: "absolute", left: -24, fontFamily: mono, fontSize: 14, color: stamp, width: 56, textAlign: "right" }}>{t.year}</div>
              <div style={{ position: "absolute", left: 91, top: 22, width: 11, height: 11, background: paper, border: `1.5px solid ${ink}`, borderRadius: "50%" }} />
              <div>
                <div style={{ fontFamily: serif, fontSize: 19, lineHeight: 1.3 }}>{t.en}</div>
                <div style={{ fontFamily: serif, fontSize: 15, color: "rgba(28,22,18,0.6)", marginTop: 2 }}>{t.zh}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team + News + Footer */}
      <div style={{ padding: "48px 56px", borderTop: `1px solid ${ink}`, display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 48, position: "relative", zIndex: 1 }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(28,22,18,0.6)", marginBottom: 16 }}>Project Team · 团队</div>
          {P.team.map((t, i) => (
            <div key={i} style={{ padding: "10px 0", borderBottom: `1px solid ${rule}` }}>
              <div style={{ fontFamily: serif, fontSize: 17 }}>{t.name}</div>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.08em", color: "rgba(28,22,18,0.6)", marginTop: 2 }}>
                {t.role.toUpperCase()} · {t.affiliation}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(28,22,18,0.6)", marginBottom: 16 }}>News · 动态</div>
          {P.news.map((n, i) => (
            <div key={i} style={{ padding: "10px 0", borderBottom: `1px solid ${rule}` }}>
              <div style={{ fontFamily: mono, fontSize: 10, color: stamp, letterSpacing: "0.1em" }}>{n.date.toUpperCase()}</div>
              <div style={{ fontFamily: serif, fontSize: 16, marginTop: 4 }}>{n.en}</div>
              <div style={{ fontFamily: serif, fontSize: 13, color: "rgba(28,22,18,0.55)", marginTop: 2 }}>{n.zh}</div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(28,22,18,0.6)", marginBottom: 16 }}>Supported By · 支持机构</div>
          <div style={{ fontFamily: serif, fontSize: 16, lineHeight: 1.9 }}>
            {P.funders.map((f, i) => <div key={i}>{f}</div>)}
          </div>
          <div style={{ marginTop: 28, fontFamily: mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(28,22,18,0.6)", marginBottom: 10 }}>Get In Touch</div>
          <div style={{ fontFamily: serif, fontSize: 16 }}>{P.contact.email}</div>
          <div style={{ fontFamily: serif, fontSize: 13, color: "rgba(28,22,18,0.6)", marginTop: 4, lineHeight: 1.4 }}>{P.contact.address}</div>
        </div>
      </div>

      <div style={{ padding: "24px 56px", borderTop: `1px solid ${ink}`, display: "flex", justifyContent: "space-between", fontFamily: mono, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(28,22,18,0.55)" }}>
        <div>Sudbury Chinese Oral History Project · Est. 2023</div>
        <div>Deposited at Laurentian University Archives</div>
      </div>
    </div>
  );
};

window.ArchiveDirection = ArchiveDirection;
