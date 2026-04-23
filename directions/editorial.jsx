// Direction 2 — EDITORIAL
// Near-black on white, one emphatic red, big display serif, cover-story layout.
// Vibe: A long-form magazine feature you want to read cover to cover.

const EditorialDirection = () => {
  const P = window.PROJECT;

  const ink = "#0e0e0e";
  const page = "#fafaf7";
  const red = "#c4271a";
  const rule = "rgba(14,14,14,0.15)";

  const display = '"Playfair Display", "Didot", "Bodoni Moda", Georgia, serif';
  const body = '"Source Serif 4", Georgia, serif';
  const sans = '"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif';

  return (
    <div style={{
      width: 1280,
      background: page,
      color: ink,
      fontFamily: body,
    }}>
      {/* Masthead */}
      <div style={{ borderBottom: `1px solid ${ink}`, padding: "18px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: sans }}>
        <div style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase" }}>Issue 01 · Apr 2026</div>
        <div style={{ fontFamily: display, fontSize: 28, letterSpacing: "-0.01em" }}>
          S<span style={{ color: red }}>/</span>CV
        </div>
        <div style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", display: "flex", gap: 20 }}>
          <span>The Project</span><span>Stories</span><span>Listen</span><span>Contact</span>
        </div>
      </div>

      {/* Cover hero */}
      <div style={{ padding: "48px 56px 72px", position: "relative" }}>
        <div style={{ fontFamily: sans, fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: red, marginBottom: 32 }}>
          — Cover Story / 特稿
        </div>
        <h1 style={{
          fontFamily: display,
          fontSize: 168,
          lineHeight: 0.92,
          fontWeight: 400,
          margin: 0,
          letterSpacing: "-0.03em",
          color: ink,
        }}>
          We went<br />
          <span style={{ fontStyle: "italic", color: red }}>where the</span><br />
          work was.
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 48, marginTop: 56, alignItems: "end" }}>
          <p style={{ fontSize: 24, lineHeight: 1.4, margin: 0, fontFamily: body }}>
            Forty-two members of Sudbury's Chinese community on arrival, labour, and making a third place of their own.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.55, margin: 0, fontFamily: body, color: "rgba(14,14,14,0.7)" }}>
            四十二位萨德伯里华人讲述他们如何抵达、如何劳作、如何在异乡的雪与矿石之间，为自己造出一个新的家。
          </p>
          <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", lineHeight: 1.8, color: "rgba(14,14,14,0.65)" }}>
            Reported over 2 years<br />
            118 hours of audio<br />
            6 languages & dialects<br />
            <span style={{ color: red }}>Ongoing · Phase III</span>
          </div>
        </div>
      </div>

      {/* Image band — full-bleed placeholder with caption */}
      <div style={{ position: "relative", height: 440, background: "#1a1a1a", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 14px)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: sans, color: "rgba(255,255,255,0.35)", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase" }}>
          [ Full-bleed archival photograph · replace ]
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 56px", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)", color: page, fontFamily: sans, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
          <span>Mei-Lin Chan at the Golden Dragon, Regent Street, 1974</span>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>Photo · Chan family collection</span>
        </div>
      </div>

      {/* In this issue — big red table of contents */}
      <div style={{ padding: "80px 56px 40px", background: page, borderBottom: `1px solid ${ink}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 64 }}>
          <div>
            <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: red }}>Contents</div>
            <div style={{ fontFamily: display, fontSize: 56, fontStyle: "italic", lineHeight: 1, marginTop: 20 }}>
              In this<br />collection.
            </div>
          </div>
          <div>
            {[
              { n: "01", en: "How we came to the cold", zh: "我们如何抵达寒地" },
              { n: "02", en: "Kitchens, mines, classrooms", zh: "厨房、矿井、教室" },
              { n: "03", en: "The long loneliness of 1970", zh: "一九七零年的漫长孤独" },
              { n: "04", en: "Building a third place", zh: "造一个第三个地方" },
              { n: "05", en: "The children, who stayed", zh: "留下来的孩子" },
            ].map((c, i) => (
              <div key={i} style={{
                padding: "22px 0",
                borderTop: i === 0 ? `1px solid ${ink}` : `1px solid ${rule}`,
                display: "grid",
                gridTemplateColumns: "70px 1fr auto",
                gap: 32,
                alignItems: "baseline",
              }}>
                <div style={{ fontFamily: sans, fontSize: 12, color: red, letterSpacing: "0.1em" }}>Ch. {c.n}</div>
                <div>
                  <div style={{ fontFamily: display, fontSize: 30, lineHeight: 1.1 }}>{c.en}</div>
                  <div style={{ fontFamily: body, fontSize: 16, color: "rgba(14,14,14,0.55)", marginTop: 4, fontStyle: "italic" }}>{c.zh}</div>
                </div>
                <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(14,14,14,0.55)" }}>
                  Read →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div style={{ padding: "96px 160px", textAlign: "center", borderBottom: `1px solid ${ink}` }}>
        <div style={{ fontFamily: display, fontSize: 64, lineHeight: 1.15, fontStyle: "italic", letterSpacing: "-0.02em" }}>
          <span style={{ color: red, fontStyle: "normal" }}>"</span>Forty below. I had never seen snow.<br />
          I cried for a week, then I bought wool.<span style={{ color: red, fontStyle: "normal" }}>"</span>
        </div>
        <div style={{ fontFamily: sans, fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", marginTop: 32, color: "rgba(14,14,14,0.6)" }}>
          — Auntie Fong · 方婆婆 · Arrived 1968
        </div>
      </div>

      {/* Featured narrators grid */}
      <div style={{ padding: "72px 56px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: red }}>The Narrators</div>
            <h2 style={{ fontFamily: display, fontSize: 72, fontStyle: "italic", fontWeight: 400, margin: "8px 0 0", letterSpacing: "-0.02em" }}>
              Six of forty-two.
            </h2>
          </div>
          <button style={{ fontFamily: sans, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", background: ink, color: page, border: "none", padding: "16px 22px", cursor: "pointer" }}>
            See all 42 →
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {P.interviewees.map((v, i) => (
            <div key={i} style={{ paddingBottom: 8 }}>
              <div style={{
                aspectRatio: "4 / 5",
                background: "#2a2622",
                position: "relative",
                overflow: "hidden",
                marginBottom: 16,
              }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 14px)" }} />
                <div style={{ position: "absolute", top: 14, left: 14, fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.6)" }}>№ {String(i + 1).padStart(2, "0")}</div>
                <div style={{ position: "absolute", bottom: 14, right: 14, fontFamily: "monospace", fontSize: 10, letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)" }}>[ portrait ]</div>
              </div>
              <div style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: red, marginBottom: 8 }}>
                ▶ Listen · {v.duration}
              </div>
              <div style={{ fontFamily: display, fontSize: 28, lineHeight: 1.1 }}>{v.name}</div>
              <div style={{ fontFamily: display, fontStyle: "italic", fontSize: 20, color: "rgba(14,14,14,0.5)", marginTop: 2 }}>{v.zh}</div>
              <div style={{ fontFamily: body, fontSize: 16, fontStyle: "italic", lineHeight: 1.4, marginTop: 14, color: "rgba(14,14,14,0.85)" }}>
                "{v.excerptEn}"
              </div>
              <div style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(14,14,14,0.55)", marginTop: 12 }}>
                {v.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline as editorial sidebar */}
      <div style={{ padding: "56px 56px 72px", background: ink, color: page }}>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 56 }}>
          <div>
            <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: red }}>Timeline</div>
            <div style={{ fontFamily: display, fontSize: 48, fontStyle: "italic", lineHeight: 1, marginTop: 16 }}>
              A century,<br />abbreviated.
            </div>
            <p style={{ fontFamily: body, fontSize: 15, lineHeight: 1.6, color: "rgba(250,250,247,0.65)", marginTop: 20 }}>
              Milestones drawn from oral testimonies and cross-checked against the Greater Sudbury Historical Society.
            </p>
          </div>
          <div>
            {P.timeline.map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 24, padding: "14px 0", borderTop: `1px solid rgba(250,250,247,0.15)` }}>
                <div style={{ fontFamily: display, fontSize: 30, color: red }}>{t.year}</div>
                <div>
                  <div style={{ fontFamily: body, fontSize: 18, lineHeight: 1.35 }}>{t.en}</div>
                  <div style={{ fontFamily: body, fontSize: 13, color: "rgba(250,250,247,0.5)", fontStyle: "italic", marginTop: 2 }}>{t.zh}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / masthead */}
      <div style={{ padding: "48px 56px", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <div style={{ fontFamily: display, fontSize: 36, letterSpacing: "-0.01em" }}>
            Voices from<br />the Nickel City
          </div>
          <div style={{ fontFamily: body, fontStyle: "italic", fontSize: 18, color: "rgba(14,14,14,0.6)", marginTop: 4 }}>镍城回声</div>
          <div style={{ fontFamily: sans, fontSize: 12, letterSpacing: "0.15em", color: red, marginTop: 20 }}>
            {P.contact.email}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(14,14,14,0.55)", marginBottom: 12 }}>Masthead</div>
          {P.team.map((t, i) => (
            <div key={i} style={{ fontFamily: body, fontSize: 13, lineHeight: 1.5 }}>
              <b style={{ fontWeight: 600 }}>{t.name}</b> · <span style={{ color: "rgba(14,14,14,0.6)" }}>{t.role}</span>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(14,14,14,0.55)", marginBottom: 12 }}>Funded By</div>
          <div style={{ fontFamily: body, fontSize: 13, lineHeight: 1.8 }}>
            {P.funders.map((f, i) => <div key={i}>{f}</div>)}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: sans, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(14,14,14,0.55)", marginBottom: 12 }}>Subscribe</div>
          <div style={{ fontFamily: body, fontSize: 13, lineHeight: 1.55, color: "rgba(14,14,14,0.75)" }}>
            Quarterly dispatch · new interviews, events, publications.
          </div>
          <div style={{ marginTop: 14, border: `1px solid ${ink}`, padding: "10px 12px", fontFamily: sans, fontSize: 12, display: "flex", justifyContent: "space-between", color: "rgba(14,14,14,0.5)" }}>
            <span>your@email.com</span><span style={{ color: red }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

window.EditorialDirection = EditorialDirection;
