(function () {
  if (window.__bdAddedRecords21) return;
  window.__bdAddedRecords21 = true;
  var ID = "added-records-21-october-2026";
  var PAGE = "https://wezzo72.github.io/barrandodger-rebuild/records-added-21-october-2026.html";
  function place() {
    if (!document.body) return;
    var el = document.getElementById(ID);
    if (!el) {
      el = document.createElement("section");
      el.id = ID;
      el.setAttribute("role", "note");
      el.style.cssText = "margin:0;padding:18px 16px 16px;background:#f3eee4;color:#1a140f;border-bottom:8px solid #8B2E2A;font-family:Georgia,'Times New Roman',serif;text-align:center;";
      el.innerHTML = '<p style="letter-spacing:.14em;font-size:.72rem;font-weight:800;color:#8B2E2A;margin:0 0 8px;font-family:system-ui,sans-serif;">21 OCTOBER 2026 · THREE RECORDS ADDED · NOT A FINDING</p>'
        + '<p style="margin:0 auto;max-width:46rem;font-size:clamp(1.15rem,3.2vw,1.55rem);line-height:1.25;font-weight:700;"><a href="' + PAGE + '" style="color:#1a140f;text-decoration:underline;text-underline-offset:3px;">The Witness Remains, Master Command 5, and the OPMC letter</a></p>'
        + '<p style="margin:10px auto 0;max-width:44rem;font-size:.98rem;line-height:1.45;">Three documents placed in the public archives on 21 October 2026. Descriptions and plain links are on one page. A link is not a finding.</p>'
        + '<p style="margin:12px auto 0;"><a href="' + PAGE + '" style="color:#8B2E2A;font-weight:700;">Open the descriptions and links</a></p>';
    }
    if (document.body.firstChild !== el) document.body.insertBefore(el, document.body.firstChild);
  }
  function arm() {
    place();
    [0, 400, 1200, 2500].forEach(function (ms) { setTimeout(place, ms); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
  window.addEventListener("load", place);
})();
