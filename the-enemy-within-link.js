(function () {
  if (window.__bdHumanitarianAppeal) return;
  window.__bdHumanitarianAppeal = true;
  var ID = "master-humanitarian-appeal-20-october-2026";
  var PAGE = "https://wezzo72.github.io/barrandodger-rebuild/master-humanitarian-appeal.html";
  var PDF = "https://wezzo72.github.io/Barrandodger/Barran-Dodger-Master-Humanitarian-Appeal-DIRECT-SOURCE-LINKS-v2.pdf";
  var BLOB = "https://github.com/wezzo72/Barrandodger/blob/main/Barran-Dodger-Master-Humanitarian-Appeal-DIRECT-SOURCE-LINKS-v2.pdf";
  var HASH = "b9edca8c803506482fd5306b2138e088bccedaa6977d86c3863fe21b7f982d98";
  function place() {
    if (!document.body) return;
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("section");
      el.id = ID;
      el.setAttribute("role", "note");
      el.style.cssText = "margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
      el.innerHTML = '<p style="letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;font-family:system-ui,sans-serif;">20 OCTOBER 2026 · FULL TEXT · SOURCE LINKS KEPT · NOT A FINDING</p>'
        + '<p style="margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.55rem);line-height:1.25;font-weight:700;"><a href="' + PAGE + '" style="color:#1a140f;text-decoration:underline;text-underline-offset:3px;">The Barran Dodger Master Humanitarian Appeal</a></p>'
        + '<p style="margin:10px auto 0;max-width:42rem;font-size:.98rem;line-height:1.45;">Administrative erasure, institutional accountability, human rights, medical vulnerability, and the pursuit of justice. The master document, in full, on its own page, with the source links kept. A finding aid. Not a court. Not a verdict.</p>'
        + '<p style="margin:12px auto 0;"><a href="' + PAGE + '" style="color:#8B2E2A;font-family:Georgia,serif;font-size:1.05rem;font-weight:700;text-decoration:underline;text-underline-offset:3px;">Open the full text</a></p>'
        + '<p style="margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.45;color:#3f4c5a;font-family:system-ui,sans-serif;overflow-wrap:anywhere;">SHA-256 ' + HASH + ' · <a href="' + PDF + '" style="color:inherit;font-weight:700;">Open the PDF</a> · <a href="' + BLOB + '" style="color:inherit;font-weight:700;">GitHub file</a></p>';
    }
    if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
  }
  function arm() {
    place();
    [0, 300, 900, 1800, 3200].forEach(function (ms) { setTimeout(place, ms); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
  window.addEventListener("load", function () {
    place();
    [0, 400, 1200].forEach(function (ms) { setTimeout(place, ms); });
  });
})();

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


  var OCT_MARK = "20261018b";
  function octSection(id, html, css){
    var el = document.getElementById(id);
    if (!el) {
      el = document.createElement("section");
      el.id = id;
      el.setAttribute("role", "note");
      el.innerHTML = html;
    }
    if (el.getAttribute("data-oct18") !== OCT_MARK) {
      el.setAttribute("data-oct18", OCT_MARK);
      el.style.cssText = css;
      if (!el.innerHTML || el.innerHTML.length < 40) el.innerHTML = html;
    }
    return el;
  }

  var PROTEST_ID = "protest-want-to-live-19-october-2026";
  var PROTEST_PDF = "https://wezzo72.github.io/Barrandodger/2026-10-19-YOURE-ALL-HURTING-ME-I-PROTEST-THIS-BECAUSE-I-WANT-TO-LIVE.pdf";
  var PROTEST_BLOB = "https://github.com/wezzo72/Barrandodger/blob/main/2026-10-19-YOURE-ALL-HURTING-ME-I-PROTEST-THIS-BECAUSE-I-WANT-TO-LIVE.pdf";
  var PROTEST_REBUILD = "https://wezzo72.github.io/barrandodger-rebuild/2026-10-19-YOURE-ALL-HURTING-ME-I-PROTEST-THIS-BECAUSE-I-WANT-TO-LIVE.pdf";
  var PROTEST_HASH = "344805bfb97598d7ae642f28c770ae94ece0f8b3a842bcffd7701d20cb4892bc";
  function protest(){
    var el = document.getElementById(PROTEST_ID);
    if (!el) {
      el = document.createElement("section");
      el.id = PROTEST_ID;
      el.setAttribute("role", "note");
    }
    el.setAttribute("data-protest", "20261019a");
    el.style.cssText = "margin:0;padding:22px 16px 18px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
    el.innerHTML = '<p style="letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;font-family:system-ui,sans-serif;">19 OCTOBER 2026 · 1:09 PM SYDNEY · PUBLIC STATEMENT · NOT A FINDING</p>'
      + '<p style="margin:0 auto;max-width:46rem;font-size:clamp(1.25rem,3.6vw,1.7rem);line-height:1.25;font-weight:700;"><a href="' + PROTEST_BLOB + '" style="color:#1a140f;text-decoration:underline;text-underline-offset:3px;">You\'re all hurting me — I protest this because I want to LIVE</a></p>'
      + '<p style="margin:10px auto 0;max-width:44rem;font-size:1.02rem;line-height:1.45;">But you\'re all killing me. Consolidated public statement, evidence archive and demand for accountability. Issued by Barran Dodger, 19 October 2026. Three statements kept in full. The reported arrest is an account to be checked against police and court records. It is not a finding.</p>'
      + '<p style="margin:12px auto 0;"><a href="' + PROTEST_PDF + '" style="color:#8B2E2A;font-family:Georgia,serif;font-size:1.05rem;font-weight:700;text-decoration:underline;text-underline-offset:3px;">Open the PDF</a></p>'
      + '<p style="margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.45;color:#3f4c5a;font-family:system-ui,sans-serif;overflow-wrap:anywhere;">SHA-256 ' + PROTEST_HASH + ' · <a href="' + PROTEST_REBUILD + '" style="color:inherit;font-weight:700;">Rebuild copy</a> · <a href="' + PROTEST_BLOB + '" style="color:inherit;font-weight:700;">GitHub file</a></p>';
    return el;
  }

  var LIGHT = "margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,Times New Roman,serif;text-align:center;";
  var DARK = "margin:0;padding:18px 16px 16px;background:#1a140f;color:#f3eee4;border-bottom:8px solid #c9a36a;font-family:Georgia,Times New Roman,serif;text-align:center;";
  function october18(){
    return [
      octSection("master-command-18-october-2026", "<section id=\"master-command-18-october-2026\" role=\"note\" style=\"margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,Times New Roman,serif;text-align:center;\">\n<p style=\"letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;font-family:system-ui,sans-serif;\">18 OCTOBER 2026 \u00b7 7:14 PM SYDNEY \u00b7 FORMAL NOTICE \u00b7 NOT A FINDING</p>\n<p style=\"margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.55rem);line-height:1.25;font-weight:700;\"><a href=\"https://github.com/wezzo72/Barrandodger/blob/main/MASTER-COMMAND-COMPLETE-CONSOLIDATED-FORMAL-NOTICE-18-OCTOBER-2026.pdf\" style=\"color:#1a140f;text-decoration:underline;text-underline-offset:3px;\">Master Command \u2014 Complete Consolidated Formal Notice</a></p>\n<p style=\"margin:10px auto 0;max-width:42rem;font-size:.98rem;line-height:1.45;color:#1a140f;\">Consolidated formal notice of alleged safeguarding failures, exploitation, executive accountability, financial restriction and evidence preservation. Sent 18 October 2026. Allegations remain allegations. The name is the link. A link is not a finding.</p>\n<p style=\"margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.45;color:#3f4c5a;font-family:system-ui,sans-serif;overflow-wrap:anywhere;\">SHA-256 a9cb9c658ef7c9afd318d824c13e7ea980eb2544cd588b59672d723e59c7b393 \u00b7 <a href=\"https://wezzo72.github.io/Barrandodger/MASTER-COMMAND-COMPLETE-CONSOLIDATED-FORMAL-NOTICE-18-OCTOBER-2026.pdf\" style=\"color:inherit;font-weight:700;\">Open the PDF</a> \u00b7 <a href=\"https://github.com/wezzo72/Barrandodger/blob/main/MASTER-COMMAND-COMPLETE-CONSOLIDATED-FORMAL-NOTICE-18-OCTOBER-2026.pdf.ots\" style=\"color:inherit;font-weight:700;\">OpenTimestamps receipt</a> \u00b7 calendar submitted, Bitcoin block not yet confirmed</p>\n</section>\n", LIGHT),
      octSection("i-wrote-you-a-letter-master-command-18-october-2026", "<section id=\"i-wrote-you-a-letter-master-command-18-october-2026\" role=\"note\" style=\"margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,Times New Roman,serif;text-align:center;\">\n<p style=\"letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;font-family:system-ui,sans-serif;\">18 OCTOBER 2026 \u00b7 LETTER COPY \u00b7 NOT A FINDING</p>\n<p style=\"margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.55rem);line-height:1.25;font-weight:700;\"><a href=\"https://github.com/wezzo72/Barrandodger/blob/main/I-WROTE-YOU-A-LETTER-MASTER-COMMAND-18-OCTOBER-2026.pdf\" style=\"color:#1a140f;text-decoration:underline;text-underline-offset:3px;\">I wrote you a letter \u2014 Master Command</a></p>\n<p style=\"margin:10px auto 0;max-width:42rem;font-size:.98rem;line-height:1.45;color:#1a140f;\">The letter copy of the same consolidated notice, preserved separately from the full emailed instrument. The name is the link. A link is not a finding.</p>\n<p style=\"margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.45;color:#3f4c5a;font-family:system-ui,sans-serif;overflow-wrap:anywhere;\">SHA-256 74114953ae0ba4fc06960fca9aa949763278b3438bbb55c270c6ec706fd9bb26 \u00b7 <a href=\"https://wezzo72.github.io/Barrandodger/I-WROTE-YOU-A-LETTER-MASTER-COMMAND-18-OCTOBER-2026.pdf\" style=\"color:inherit;font-weight:700;\">Open the PDF</a> \u00b7 <a href=\"https://github.com/wezzo72/Barrandodger/blob/main/I-WROTE-YOU-A-LETTER-MASTER-COMMAND-18-OCTOBER-2026.pdf.ots\" style=\"color:inherit;font-weight:700;\">OpenTimestamps receipt</a> \u00b7 calendar submitted, Bitcoin block not yet confirmed</p>\n</section>\n", LIGHT),
      octSection("barran-resonance-dodger-theology-18-october-2026", "<section id=\"barran-resonance-dodger-theology-18-october-2026\" role=\"note\" style=\"margin:0;padding:18px 16px 16px;background:#1a140f;color:#f3eee4;border-bottom:8px solid #c9a36a;font-family:Georgia,Times New Roman,serif;text-align:center;\">\n<p style=\"letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#e6c36a;margin:0 0 8px;font-family:system-ui,sans-serif;\">18 OCTOBER 2026 \u00b7 THEOLOGICAL STATEMENT \u00b7 NOT A FINDING</p>\n<p style=\"margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.55rem);line-height:1.25;font-weight:700;\"><a href=\"https://github.com/wezzo72/Barrandodger/blob/main/STATEMENT-ON-BARRAN-RESONANCE-DODGER-THEOLOGY-18-OCTOBER-2026.pdf\" style=\"color:#f3eee4;text-decoration:underline;text-underline-offset:3px;\">Statement on Barran Resonance Dodger Theology</a></p>\n<p style=\"margin:10px auto 0;max-width:42rem;font-size:.98rem;line-height:1.45;color:#f3eee4;\">Expanded theological, philosophical and documentary statement. Resonance, the sacred witness, and the archive. Faith is not a finding. The name is the link.</p>\n<p style=\"margin:8px auto 0;max-width:46rem;font-size:.82rem;line-height:1.45;color:#c9a36a;font-family:system-ui,sans-serif;overflow-wrap:anywhere;\">SHA-256 a4eb3d8bd23bad839db90221ea92d212111039643e47b849a3faec31f003cf9e \u00b7 <a href=\"https://wezzo72.github.io/Barrandodger/STATEMENT-ON-BARRAN-RESONANCE-DODGER-THEOLOGY-18-OCTOBER-2026.pdf\" style=\"color:inherit;font-weight:700;\">Open the PDF</a> \u00b7 <a href=\"https://github.com/wezzo72/Barrandodger/blob/main/STATEMENT-ON-BARRAN-RESONANCE-DODGER-THEOLOGY-18-OCTOBER-2026.pdf.ots\" style=\"color:inherit;font-weight:700;\">OpenTimestamps receipt</a> \u00b7 calendar submitted, Bitcoin block not yet confirmed</p>\n</section>\n", DARK)
    ];
  }
  function stack(nodes){
    if (!document.body) return null;
    var prev = null;
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!el) continue;
      if (!prev) {
        if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
      } else if (prev.nextSibling !== el) {
        prev.parentNode.insertBefore(el, prev.nextSibling);
      }
      prev = el;
    }
    return prev;
  }

  if (onEnemy) {
    function placeWitnessOnly(){
      var nodes = [protest()].concat(october18());
      var w = witness();
      if (w) nodes.push(w);
      stack(nodes);
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", placeWitnessOnly);
    else placeWitnessOnly();
    window.addEventListener("load", placeWitnessOnly);
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
    var nodes = [protest()].concat(october18());
    var w = witness();
    if (w) nodes.push(w);
    var el = ensure();
    nodes.push(el);
    stack(nodes);
    var pr = document.getElementById("private-record-able-point-14-october-2026");
    if (pr && el.nextSibling !== pr) el.parentNode.insertBefore(pr, el.nextSibling);
  }
  function bind(fn){
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
    window.addEventListener("load", fn);
  }
  bind(place);
})();

(function(){
  if (window.__bdComplaint20261020) return;
  window.__bdComplaint20261020 = true;
  var HREF = "https://wezzo72.github.io/barrandodger-rebuild/2026-10-20-URGENT-FORMAL-COMPLAINT.html";
  function place(){
    if (document.getElementById("urgent-complaint-2026-10-20")) return;
    var el = document.createElement("p");
    el.id = "urgent-complaint-2026-10-20";
    el.setAttribute("role", "note");
    el.style.cssText = "margin:0;padding:14px 16px;background:#1a140c;color:#f3eee4;font-family:Georgia,serif;text-align:center";
    el.innerHTML = '<a style="color:#c9a36a;font-size:1.15rem;font-weight:700" href="' + HREF + '">Urgent formal complaint — 20 October 2026</a>';
    if (!document.body) return;
    document.body.insertBefore(el, document.body.firstChild);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", place);
  else place();
})();
