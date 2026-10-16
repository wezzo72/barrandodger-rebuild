(function () {
  if (window.__bdReachRan) return;
  window.__bdReachRan = true;
  var API = "https://countapi.mileshilliard.com/api/v1/";
  var REBUILD = "bd-wezzo72-rebuild-webhits";
  var SUM = [
    "bd-wezzo72-archive-webhits",
    "bd-wezzo72-rebuild-webhits",
    "bd-wezzo72-church-webhits",
    "bd-wezzo72-publishing-webhits"
  ];
  var readOnly = /(?:^|\/)counts\.html$/i.test(location.pathname);

  function read(key) {
    return fetch(API + "get/" + encodeURIComponent(key), { cache: "no-store" })
      .then(function (r) {
        if (r.status === 404) return null;
        return r.json();
      })
      .then(function (d) {
        if (d == null || d.value == null || !isFinite(Number(d.value))) return null;
        return Number(d.value);
      })
      .catch(function () { return null; });
  }

  function paintRebuild(value) {
    if (value == null) return;
    var text = Number(value).toLocaleString();
    var nodes = document.querySelectorAll("[data-bd-webhits]");
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = text;
  }

  function paintNetwork() {
    Promise.all(SUM.map(read)).then(function (values) {
      var sum = 0;
      var any = false;
      values.forEach(function (value) {
        if (value == null) return;
        any = true;
        sum += value;
      });
      if (!any) return;
      var text = sum.toLocaleString();
      var nodes = document.querySelectorAll("[data-bd-network]");
      for (var i = 0; i < nodes.length; i++) nodes[i].textContent = text;
    });
  }

  function hitRebuild() {
    return fetch(API + "hit/" + encodeURIComponent(REBUILD), { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (d) { return d && d.value != null ? Number(d.value) : read(REBUILD); })
      .catch(function () { return read(REBUILD); });
  }

  function place() {
    var btn = document.getElementById("bd-webhit");
    if (!btn || !document.body) return;
    btn.style.cssText = "position:sticky;top:0;z-index:500;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin:0;padding:11px 14px;background:#070809;color:#d8b36a;border-bottom:1px solid #d8b36a;font:800 11px/1.35 -apple-system,BlinkMacSystemFont,sans-serif;letter-spacing:.08em;text-align:center;text-decoration:none;";
    if (document.body.firstChild !== btn) document.body.insertBefore(btn, document.body.firstChild);
  }

  function go() {
    place();
    (readOnly ? read(REBUILD) : hitRebuild()).then(function (value) {
      paintRebuild(value);
      paintNetwork();
    });
    setInterval(function () {
      read(REBUILD).then(paintRebuild);
      paintNetwork();
    }, 8000);
    setTimeout(place, 0);
    setTimeout(place, 600);
    setTimeout(place, 1400);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go);
  else go();
})();
