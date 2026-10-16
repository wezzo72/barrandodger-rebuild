(function () {
  if (window.__bdReachRan) return;
  window.__bdReachRan = true;
  var API = "https://countapi.mileshilliard.com/api/v1/";
  var KEY = "bd-wezzo72-rebuild-webhits";
  var readOnly = /(?:^|\/)counts\.html$/i.test(location.pathname);

  function paint(value) {
    if (value == null || !isFinite(Number(value))) return;
    var text = Number(value).toLocaleString();
    var nodes = document.querySelectorAll("[data-bd-webhits]");
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = text;
  }

  function read() {
    return fetch(API + "get/" + encodeURIComponent(KEY), { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (d) { return d && d.value != null ? Number(d.value) : null; })
      .catch(function () { return null; });
  }

  function hit() {
    return fetch(API + "hit/" + encodeURIComponent(KEY), { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (d) { return d && d.value != null ? Number(d.value) : read(); })
      .catch(function () { return read(); });
  }

  function place() {
    var btn = document.getElementById("bd-webhit");
    if (!btn || !document.body) return;
    btn.style.cssText = "position:sticky;top:0;z-index:500;display:flex;align-items:center;justify-content:center;gap:10px;margin:0;padding:11px 16px;background:#070809;color:#d8b36a;border-bottom:1px solid #d8b36a;font:800 12px/1.2 -apple-system,BlinkMacSystemFont,sans-serif;letter-spacing:.14em;text-decoration:none;";
    if (document.body.firstChild !== btn) document.body.insertBefore(btn, document.body.firstChild);
  }

  function go() {
    place();
    (readOnly ? read() : hit()).then(paint);
    setInterval(function () { read().then(paint); }, 8000);
    setTimeout(place, 0);
    setTimeout(place, 600);
    setTimeout(place, 1400);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go);
  else go();
})();
