(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  /* ---------- File checker ---------- */
  const images = ["a", "b", "c", "d", "e", "f", "g"].map((n) => `assets/images/${n}.jpg`);
  const musicPath = "assets/music/music.mp3";
  const statusList = $("status");

  function addRow(label) {
    const li = document.createElement("li");
    li.textContent = "⏳ " + label;
    statusList.appendChild(li);
    return (ok) => {
      li.textContent = (ok ? "✅ " : "❌ ") + label;
      li.className = ok ? "ok" : "bad";
    };
  }

  function checkImage(src, done) {
    const img = new Image();
    img.onload = () => done(true);
    img.onerror = () => done(false);
    img.src = src + "?t=" + Date.now();
  }

  function checkAudio(src, done) {
    const a = new Audio();
    a.preload = "metadata";
    a.onloadedmetadata = () => done(true);
    a.onerror = () => done(false);
    a.src = src + "?t=" + Date.now();
  }

  function runChecks() {
    statusList.textContent = "";
    images.forEach((src) => checkImage(src, addRow(src.split("/").pop())));
    checkAudio(musicPath, addRow("music.mp3"));
  }
  $("recheck").addEventListener("click", runChecks);
  runChecks();

  /* ---------- Reasons helper ---------- */
  const input = $("reasonsInput");
  const countEl = $("rCount");
  const warnEl = $("rWarn");
  const out = $("rOut");

  function getLines() {
    return input.value.split("\n").map((s) => s.trim()).filter(Boolean);
  }

  function updateCount() {
    const lines = getLines();
    const unique = new Set(lines.map((l) => l.toLowerCase()));
    countEl.textContent = lines.length + " / 100";
    const msgs = [];
    if (lines.length !== 100) msgs.push("Exactly 100 chahiye");
    if (unique.size !== lines.length) msgs.push((lines.length - unique.size) + " duplicate mile");
    warnEl.textContent = msgs.length ? "— " + msgs.join(", ") : "";
    warnEl.className = msgs.length ? "bad" : "ok";
    if (!msgs.length) warnEl.textContent = "✅ Sab sahi hai";
  }
  input.addEventListener("input", updateCount);

  function buildCode() {
    const lines = getLines();
    if (!lines.length) {
      out.textContent = "// Pehle upar reasons likho";
      return false;
    }
    const body = lines.map((l) => "  " + JSON.stringify(l)).join(",\n");
    out.textContent = "const reasons = [\n" + body + "\n];";
    return true;
  }
  $("rBuild").addEventListener("click", () => {
    updateCount();
    buildCode();
  });

  $("rCopy").addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    if (!buildCode()) return;
    const original = btn.textContent;
    try {
      await navigator.clipboard.writeText(out.textContent);
      btn.textContent = "Copy ho gaya ✅";
    } catch (err) {
      // Fallback: select the text so the user can copy manually
      const range = document.createRange();
      range.selectNodeContents(out);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      btn.textContent = "Select ho gaya, copy karo";
    }
    setTimeout(() => { btn.textContent = original; }, 2200);
  });

  updateCount();
})();
