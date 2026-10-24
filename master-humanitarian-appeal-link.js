(function(){if(window.__bdLegalBrief23Loader)return;window.__bdLegalBrief23Loader=true;var s=document.createElement("script");s.src="https://wezzo72.github.io/barrandodger-rebuild/final-reckoning-banner.js?v=20261024c";(document.head||document.documentElement).appendChild(s);})();

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
    var newest = document.getElementById("added-records-22-october-2026");
    var records = document.getElementById("added-records-21-october-2026");
    var anchor = null;
    if (newest) {
      if (document.body.firstChild !== newest) document.body.insertBefore(newest, document.body.firstChild);
      anchor = newest;
    }
    if (records) {
      if (!anchor) {
        if (document.body.firstChild !== records) document.body.insertBefore(records, document.body.firstChild);
      } else if (anchor.nextSibling !== records) {
        anchor.parentNode.insertBefore(records, anchor.nextSibling);
      }
      anchor = records;
    }
    if (!anchor) {
      if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
    } else if (anchor.nextSibling !== el) {
      anchor.parentNode.insertBefore(el, anchor.nextSibling);
    }
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
