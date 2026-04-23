// Direction 3 — NOSTALGIC
// Deep forest-green + oxidized copper + faded sepia. Old-photograph borders,
// typewriter metadata, handwritten notes. Vibe: a family scrapbook from 1978.

const NostalgicDirection = () => {
  const P = window.PROJECT;

  const green = "#1f3a2e";
  const copper = "#b86b3c";
  const sepia = "#e8d9b8";
  const cream = "#efe6d0";
  const faded = "rgba(31,58,46,0.6)";

  const serif = '"EB Garamond", "Hoefler Text", "Times New Roman", serif';
  const typewriter = '"Special Elite", "Courier Prime", "Courier New", monospace';
  const hand = '"Caveat", "Kalam", cursive';
  const display = '"Cormorant Garamond", "EB Garamond", serif';

  return (
    <div style={{
      width: 1280,
      background: cream,
      color: green,
      fontFamily: serif,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Paper texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(184,107,60,0.08) 0, transparent 35%),
          radial-gradient(circle at 85% 80%, rgba(31,58,46,0.06) 0, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(139,104,64,0.04) 0, transparent 60%)`,
      }} />
      {/* Edge vignette */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", boxShadow: "inset 0 0 120px rgba(80,50,20,0.15)" }} />

      {/* Nav */}
      <div style={{ padding: "24px 60px", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: typewriter, fontSize: 12, letterSpacing: "0.08em", position: "relative", zIndex: 2 }}>
        <div style={{ color: copper }}>EST. 2023 · SUDBURY · ONT.</div>
        <div style={{ display: "flex", gap: 28, color: green }}>
          <span>About</span><span>Stories</span><span>Album</span><span>Listen</span><span>Contact</span>
        </div>
        <div style={{ color: faded }}>EN / 中文</div>
      </div>

      <div style={{ height: 1, background: copper, margin: "0 60px", opacity: 0.4, position: "relative", zIndex: 2 }} />

      {/* Hero */}
      <div style={{ padding: "64px 60px 40px", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center", position: "relative", zIndex: 2 }}>
        <div>
          <div style={{ fontFamily: typewriter, fontSize: 11, letterSpacing: "0.25em", color: copper, marginBottom: 24 }}>
            AN ORAL HISTORY · 一部口述史
          </div>
          <h1 style={{ fontFamily: display, fontSize: 132, fontWeight: 400, lineHeight: 0.9, margin: 0, color: green, letterSpacing: "-0.015em" }}>
            Things we<br />
            <span style={{ fontStyle: "italic", color: copper }}>remember,</span><br />
            before we<br />
            <span style={{ fontStyle: "italic" }}>forget.</span>
          </h1>
          <div style={{ marginTop: 36, position: "relative", maxWidth: 520 }}>
            <div style={{ position: "absolute", left: -24, top: -4, fontFamily: display, fontSize: 80, color: copper, lineHeight: 1 }}>"</div>
            <p style={{ fontSize: 20, lineHeight: 1.55, fontStyle: "italic", margin: 0, color: "rgba(31,58,46,0.88)" }}>
              Forty-two Sudbury neighbors. One hundred and eighteen hours of recordings. A community that has been here, quietly, for over a hundred winters.
            </p>
            <div style={{ fontSize: 15, marginTop: 10, color: faded, fontStyle: "italic" }}>
              四十二位邻居，一百一十八小时的录音，一个在这里静静生活了一百多个寒冬的社群。
            </div>
          </div>
        </div>

        {/* Photo frame cluster */}
        <div style={{ position: "relative", height: 520 }}>
          <Polaroid rot={-6} top={0} left={40} caption="Regent St., 1971" />
          <Polaroid rot={4} top={180} left={180} caption="Chan family, 1963" tint="green" />
          <Polaroid rot={-3} top={320} left={10} caption="Elm laundry, c. 1928" tint="copper" />
        </div>
      </div>

      {/* Handwritten note overlay */}
      <div style={{
        position: "absolute",
        top: 580, right: 80,
        fontFamily: hand, fontSize: 32, color: copper,
        transform: "rotate(-4deg)",
        zIndex: 3,
        maxWidth: 260,
        lineHeight: 1.15,
      }}>
        grandma says <br />
        the rocks hummed
        <span style={{ display: "block", fontSize: 18, color: faded, marginTop: 4 }}>— from tape 14, side B</span>
      </div>

      {/* Stats ribbon */}
      <div style={{ background: green, color: cream, padding: "32px 60px", margin: "40px 60px 72px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, border: `1px solid ${copper}`, position: "relative", zIndex: 2 }}>
        {P.stats.map((s, i) => (
          <div key={i} style={{ borderLeft: i > 0 ? `1px solid rgba(239,230,208,0.2)` : "none", paddingLeft: i > 0 ? 24 : 0 }}>
            <div style={{ fontFamily: display, fontSize: 60, lineHeight: 1, color: sepia, fontStyle: "italic" }}>{s.n}</div>
            <div style={{ fontFamily: typewriter, fontSize: 10, letterSpacing: "0.2em", marginTop: 10, color: "rgba(239,230,208,0.75)" }}>
              {s.labelEn.toUpperCase()}
            </div>
            <div style={{ fontFamily: serif, fontSize: 14, color: copper, marginTop: 4, fontStyle: "italic" }}>{s.labelZh}</div>
          </div>
        ))}
      </div>

      {/* Scrapbook — narrator cards */}
      <div style={{ padding: "0 60px 64px", position: "relative", zIndex: 2 }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: typewriter, fontSize: 11, letterSpacing: "0.25em", color: copper }}>THE ALBUM · 相册</div>
          <h2 style={{ fontFamily: display, fontSize: 72, fontStyle: "italic", fontWeight: 400, margin: "10px 0 0", color: green, letterSpacing: "-0.015em" }}>
            Those we sat with.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, rowGap: 56 }}>
          {P.interviewees.map((v, i) => {
            const rot = [-2, 1.5, -1, 2, -1.5, 0.8][i % 6];
            return (
              <div key={i} style={{ transform: `rotate(${rot}deg)`, transition: "transform .3s" }}>
                <div style={{
                  background: "#fff",
                  padding: "14px 14px 18px",
                  boxShadow: "0 6px 18px rgba(40,20,10,0.18), 0 1px 2px rgba(40,20,10,0.1)",
                }}>
                  <div style={{
                    aspectRatio: "1 / 1.15",
                    background: `linear-gradient(135deg, #3a4a3a 0%, #1f3a2e 50%, #2a2218 100%)`,
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 30%, rgba(184,107,60,0.25), transparent 60%)" }} />
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0 2px, transparent 2px 4px)" }} />
                    <div style={{ position: "absolute", bottom: 12, left: 12, fontFamily: typewriter, fontSize: 10, letterSpacing: "0.15em", color: "rgba(239,230,208,0.7)" }}>
                      [ PORTRAIT — {String(i + 1).padStart(2, "0")} ]
                    </div>
                  </div>
                  <div style={{ fontFamily: hand, fontSize: 26, marginTop: 12, color: green, lineHeight: 1 }}>{v.name}</div>
                  <div style={{ fontFamily: serif, fontSize: 16, fontStyle: "italic", color: copper, marginTop: 2 }}>{v.zh} · {v.born}</div>
                </div>
                <div style={{ marginTop: 18, paddingLeft: 4 }}>
                  <div style={{ fontFamily: display, fontSize: 19, fontStyle: "italic", lineHeight: 1.4, color: green }}>
                    "{v.excerptEn}"
                  </div>
                  <div style={{ fontFamily: serif, fontSize: 14, color: faded, marginTop: 6, lineHeight: 1.4 }}>
                    {v.excerptZh}
                  </div>
                  <div style={{ fontFamily: typewriter, fontSize: 10, letterSpacing: "0.15em", color: copper, marginTop: 14, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ border: `1px solid ${copper}`, padding: "4px 8px" }}>▶ {v.duration}</span>
                    <span>TAPE {String(i + 1).padStart(2, "0")}-A</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline — almanac style */}
      <div style={{ padding: "64px 60px", borderTop: `1px dashed ${copper}`, borderBottom: `1px dashed ${copper}`, position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 56 }}>
          <div>
            <div style={{ fontFamily: typewriter, fontSize: 11, letterSpacing: "0.25em", color: copper }}>ALMANAC · 编年</div>
            <div style={{ fontFamily: display, fontSize: 56, fontStyle: "italic", lineHeight: 1, color: green, marginTop: 14 }}>
              What happened,<br />and when.
            </div>
            <div style={{ fontFamily: hand, fontSize: 22, color: copper, marginTop: 24, lineHeight: 1.3, transform: "rotate(-2deg)" }}>
              (cross-referenced with tape 03 &<br />the Nickel Belt Gazette)
            </div>
          </div>
          <div>
            {P.timeline.map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 24, padding: "16px 0", borderBottom: i < P.timeline.length - 1 ? `1px dotted ${faded}` : "none", alignItems: "baseline" }}>
                <div style={{ fontFamily: display, fontSize: 30, fontStyle: "italic", color: copper }}>{t.year}</div>
                <div>
                  <div style={{ fontFamily: serif, fontSize: 19, lineHeight: 1.35, color: green }}>{t.en}</div>
                  <div style={{ fontFamily: serif, fontSize: 14, color: faded, fontStyle: "italic", marginTop: 2 }}>{t.zh}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team + funders + contact */}
      <div style={{ padding: "64px 60px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, position: "relative", zIndex: 2 }}>
        <div>
          <div style={{ fontFamily: typewriter, fontSize: 11, letterSpacing: "0.25em", color: copper, marginBottom: 16 }}>WHO WE ARE · 团队</div>
          {P.team.map((t, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div style={{ fontFamily: display, fontSize: 22, fontStyle: "italic", color: green }}>{t.name}</div>
              <div style={{ fontFamily: typewriter, fontSize: 10, letterSpacing: "0.12em", color: faded, marginTop: 2 }}>
                {t.role.toUpperCase()} · {t.affiliation}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: typewriter, fontSize: 11, letterSpacing: "0.25em", color: copper, marginBottom: 16 }}>GRATEFUL TO · 鸣谢</div>
          <div style={{ fontFamily: serif, fontSize: 17, lineHeight: 1.9, color: green, fontStyle: "italic" }}>
            {P.funders.map((f, i) => <div key={i}>{f}</div>)}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: typewriter, fontSize: 11, letterSpacing: "0.25em", color: copper, marginBottom: 16 }}>WRITE TO US · 联系</div>
          <div style={{ fontFamily: hand, fontSize: 30, color: green, lineHeight: 1.2 }}>
            {P.contact.email}
          </div>
          <div style={{ fontFamily: serif, fontSize: 14, fontStyle: "italic", color: faded, marginTop: 14, lineHeight: 1.5 }}>
            {P.contact.address}
          </div>
          <div style={{ marginTop: 28, fontFamily: hand, fontSize: 24, color: copper, transform: "rotate(-1.5deg)", lineHeight: 1.2 }}>
            Have a story?<br />
            <span style={{ color: green }}>We'd love to listen.</span>
          </div>
        </div>
      </div>

      <div style={{ background: green, color: sepia, padding: "22px 60px", fontFamily: typewriter, fontSize: 11, letterSpacing: "0.15em", display: "flex", justifyContent: "space-between" }}>
        <div>SUDBURY CHINESE ORAL HISTORY PROJECT · 萨德伯里华人口述历史</div>
        <div style={{ color: copper }}>PRESSED ON PAPER &amp; PIXELS</div>
      </div>
    </div>
  );
};

const Polaroid = ({ rot = 0, top = 0, left = 0, caption = "", tint = "neutral" }) => {
  const bg = {
    neutral: "linear-gradient(135deg, #b8a37c 0%, #7a6a4a 100%)",
    green: "linear-gradient(135deg, #4a5a44 0%, #1f3a2e 100%)",
    copper: "linear-gradient(135deg, #b86b3c 0%, #5a3620 100%)",
  }[tint];
  return (
    <div style={{
      position: "absolute", top, left,
      width: 240,
      background: "#fff",
      padding: "14px 14px 44px",
      boxShadow: "0 10px 30px rgba(40,20,10,0.25), 0 2px 4px rgba(40,20,10,0.1)",
      transform: `rotate(${rot}deg)`,
    }}>
      <div style={{ aspectRatio: "1/1", background: bg, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 4px)" }} />
        <div style={{ position: "absolute", bottom: 8, left: 10, fontFamily: "monospace", fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.65)" }}>
          [ PHOTO ]
        </div>
      </div>
      <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: "#1f3a2e", marginTop: 10, textAlign: "center" }}>
        {caption}
      </div>
    </div>
  );
};

window.NostalgicDirection = NostalgicDirection;
