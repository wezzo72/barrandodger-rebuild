(function(){
  if (window.__bdEnemyLink) return;
  window.__bdEnemyLink = true;
  var path = location.pathname || "";
  var onEnemy = /the-enemy-within-16-october-2026\.html$/i.test(path);
  var onWitness = /the-witness-remains-gospels-prophetic-narratives\.html$/i.test(path);

  var WITNESS_ID = "witness-remains-gospels-october-2026";
  var WITNESS_HREF = "https://wezzo72.github.io/barrandodger-rebuild/the-witness-remains-gospels-prophetic-narratives.html";

  function witness(){
    if (onWitness) return null;
    var el = document.getElementById(WITNESS_ID);
    if (!el) {
      el = document.createElement("section");
      el.id = WITNESS_ID;
      el.setAttribute("role", "note");
    }
    el.style.cssText = "margin:0;padding:22px 16px 18px;background:#070809;color:#f3eee4;border-bottom:8px solid #e6c36a;font-family:Georgia,'Times New Roman',serif;text-align:center;";
    el.innerHTML = '<p style="letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#e6c36a;margin:0 0 8px;font-family:system-ui,sans-serif;">OCTOBER 2026 · FULL TEXT · NOT A FINDING</p>'
      + '<p style="margin:0 auto;max-width:44rem;font-size:clamp(1.25rem,3.6vw,1.7rem);line-height:1.25;font-weight:700;"><a href="' + WITNESS_HREF + '" style="color:#f3eee4;text-decoration:underline;text-underline-offset:3px;">THE WITNESS REMAINS</a></p>'
      + '<p style="margin:10px auto 0;max-width:42rem;font-size:.98rem;line-height:1.45;color:#e4d5bc;">Documentary record, the ten foundational Gospel works, the ten prophetic narratives, and the impartial examination. Word for word, on its own page, with the links kept. Faith is not a finding.</p>'
      + '<p style="margin:12px auto 0;"><a href="' + WITNESS_HREF + '" style="color:#e6c36a;font-family:Georgia,serif;font-size:1.05rem;font-weight:700;text-decoration:underline;text-underline-offset:3px;">Open the full text</a></p>';
    return el;
  }

  if (onEnemy) {
    function placeWitnessOnly(){
      if (!document.body) return;
      var w = witness();
      if (w && document.body.firstChild !== w) document.body.insertBefore(w, document.body.firstChild);
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", placeWitnessOnly);
    else placeWitnessOnly();
    return;
  }

  var ID = "enemy-within-16-october-2026";
  var HREF = "https://wezzo72.github.io/barrandodger-rebuild/the-enemy-within-16-october-2026.html";
  var PDF = "https://github.com/wezzo72/Barrandodger/blob/main/THE-ENEMY-WITHIN-FAMILY-BETRAYAL-COMMUNITY-POWER-INSTITUTIONAL-EXILE-AND-THE-PRICE-OF-INTEGRITY-16-OCTOBER-2026.pdf";
  var HASH = "e74e2b8743bff27e04069cd11b38250675ec72841cd788d71f5d6f18a9fe95f6";
  var MARK = "20261017b";
  function ensure(){
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("section");
      el.id = ID;
      el.setAttribute("role", "note");
    }
    if (el.getAttribute("data-enemy-full") !== MARK && !el.getAttribute("data-enemy-full")) {
      el.setAttribute("data-enemy-full", MARK);
      el.style.cssText = "margin:0;padding:22px 16px 18px;background:#1a140f;color:#f3eee4;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
      el.innerHTML = '<p style="letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#e6c36a;margin:0 0 8px;font-family:system-ui,sans-serif;">16 OCTOBER 2026 · FULL TEXT · NOT A FINDING</p>'
        + '<p style="margin:0 auto;max-width:44rem;font-size:clamp(1.2rem,3.5vw,1.65rem);line-height:1.25;font-weight:700;"><a data-enemy-page href="' + HREF + '" style="color:#f3eee4;text-decoration:underline;text-underline-offset:3px;">THE ENEMY WITHIN - Family Betrayal, Community Power, Institutional Exile, and the Price of Integrity</a></p>'
        + '<p style="margin:10px auto 0;max-width:42rem;font-size:.98rem;line-height:1.45;color:#e4d5bc;">The extended testimony, in full, on its own page, to the last line. The prophetic video is at the close. The name is the link. A link is not a finding.</p>'
        + '<p style="margin:12px auto 0;"><a data-enemy-page href="' + HREF + '" style="color:#e6c36a;font-family:Georgia,serif;font-size:1.05rem;font-weight:700;text-decoration:underline;text-underline-offset:3px;">Open the full text</a></p>'
        + '<p style="margin:8px auto 0;max-width:44rem;font-size:.78rem;line-height:1.4;color:#c9a36a;font-family:ui-monospace,Menlo,Consolas,monospace;word-break:break-all;"><a href="' + PDF + '" style="color:#e6c36a;font-family:Georgia,serif;font-size:.92rem;">PDF on GitHub</a> · #' + HASH + '</p>';
    } else {
      var links = el.querySelectorAll("a[data-enemy-page]");
      for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href") !== HREF) links[i].setAttribute("href", HREF);
      }
    }
    return el;
  }
  function place(){
    if (!document.body) return;
    var w = witness();
    var el = ensure();
    if (w && document.body.firstChild !== w) document.body.insertBefore(w, document.body.firstChild);
    if (w && w.nextSibling !== el) w.parentNode.insertBefore(el, w.nextSibling);
    else if (!w && document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
    var pr = document.getElementById("private-record-able-point-14-october-2026");
    if (pr && el.nextSibling !== pr) el.parentNode.insertBefore(pr, el.nextSibling);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", place);
  else place();
})();
