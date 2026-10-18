(function () {
  if (window.__bdDonateBar) return;
  window.__bdDonateBar = true;

  var STRIPE = [
    ["$10", "https://donate.stripe.com/aFa5kEgl9ayJ8bba190Ny07"],
    ["$40", "https://donate.stripe.com/4gM28s2ujfT39ff2yH0Ny08"],
    ["$100", "https://donate.stripe.com/9B68wQ0mb6itajjb5d0Ny09"],
    ["Other", "https://donate.stripe.com/9B6cN64Cr5epajjc9h0Ny0a"],
  ];
  var MONTHLY = "https://donate.stripe.com/28EfZied1eOZ9ff4GP0Ny0b";
  var PAYID = "0431300940";
  var BANK =
    "PayID: 0431300940\n" +
    "Bank: Commonwealth Bank\n" +
    "Account name: Richard McLean\n" +
    "BSB: 063307\n" +
    "Account: 10140384\n" +
    "Description: Archive";

  function copyText(value, button, doneLabel) {
    var original = button.textContent;
    function ok() {
      button.textContent = doneLabel;
      setTimeout(function () {
        button.textContent = original;
      }, 1400);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(ok, function () {
        fallback();
      });
    } else {
      fallback();
    }
    function fallback() {
      var area = document.createElement("textarea");
      area.value = value;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        ok();
      } catch (e) {}
      area.remove();
    }
  }

  function el(tag, css, text) {
    var node = document.createElement(tag);
    if (css) node.style.cssText = css;
    if (text != null) node.textContent = text;
    return node;
  }

  function mount() {
    if (!document.body || document.getElementById("bd-donate-dock")) return;

    document.body.style.paddingBottom = "112px";

    var dock = el(
      "div",
      "position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#070809;border-top:3px solid #d8b36a;padding:10px 12px calc(10px + env(safe-area-inset-bottom));font-family:Georgia,'Times New Roman',serif;"
    );
    dock.id = "bd-donate-dock";

    var button = el(
      "button",
      "display:flex;width:100%;max-width:920px;margin:0 auto;height:76px;align-items:center;justify-content:center;gap:12px;border:0;border-radius:6px;background:#d8b36a;color:#1a1408;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.45);"
    );
    button.type = "button";
    button.setAttribute("aria-haspopup", "dialog");
    var strong = el("span", "font-size:28px;font-weight:800;letter-spacing:.16em;", "DONATE");
    var sub = el("span", "font-size:15px;font-weight:700;letter-spacing:.04em;", "to the purpose");
    button.appendChild(strong);
    button.appendChild(sub);
    dock.appendChild(button);

    var overlay = el(
      "div",
      "display:none;position:fixed;inset:0;z-index:2147483001;background:rgba(7,8,9,.82);"
    );
    overlay.id = "bd-donate-overlay";

    var sheet = el(
      "div",
      "position:absolute;left:0;right:0;bottom:0;max-height:88vh;overflow:auto;background:#101216;color:#f3f0e8;border-top:3px solid #d8b36a;padding:18px 18px 28px;font-family:Georgia,'Times New Roman',serif;"
    );
    sheet.setAttribute("role", "dialog");
    sheet.setAttribute("aria-modal", "true");
    sheet.setAttribute("aria-label", "Give to the purpose");

    var close = el(
      "button",
      "float:right;width:44px;height:44px;border:1px solid #2c313a;background:#171b21;color:#f3f0e8;font-size:22px;cursor:pointer;",
      "×"
    );
    close.type = "button";
    close.setAttribute("aria-label", "Close");
    sheet.appendChild(close);

    sheet.appendChild(el("p", "margin:8px 0 0;color:#d8b36a;font-size:12px;letter-spacing:.14em;font-family:system-ui,sans-serif;", "AUD · OPTIONAL"));
    sheet.appendChild(el("h2", "margin:8px 0 0;font-size:32px;line-height:1.15;clear:both;", "Give to the purpose"));
    sheet.appendChild(
      el(
        "p",
        "margin:10px 0 0;color:#9aa3ae;font-size:16px;line-height:1.5;font-family:system-ui,sans-serif;",
        "Hosting, preservation, digitisation, and keeping the public record online. A gift does not buy a finding or unlock a document that is already public. Reading stays free."
      )
    );

    sheet.appendChild(el("h3", "margin:22px 0 8px;font-size:14px;letter-spacing:.06em;font-family:system-ui,sans-serif;", "CARD — ONE TIME"));
    var grid = el("div", "display:grid;grid-template-columns:1fr 1fr;gap:10px;");
    STRIPE.forEach(function (item) {
      var link = el(
        "a",
        "display:flex;height:64px;align-items:center;justify-content:center;background:#d8b36a;color:#1a1408;text-decoration:none;font-size:22px;font-weight:800;border-radius:6px;",
        item[0]
      );
      link.href = item[1];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      grid.appendChild(link);
    });
    sheet.appendChild(grid);
    sheet.appendChild(
      el(
        "p",
        "margin:8px 0 0;color:#9aa3ae;font-size:14px;line-height:1.45;font-family:system-ui,sans-serif;",
        "Opens Stripe on the live Barran Dodger account. The card statement says BARRAN DODGER. This page never sees the card number."
      )
    );

    sheet.appendChild(el("h3", "margin:22px 0 8px;font-size:14px;letter-spacing:.06em;font-family:system-ui,sans-serif;", "CARD — MONTHLY"));
    var monthly = el(
      "a",
      "display:flex;height:64px;align-items:center;justify-content:center;border:2px solid #d8b36a;color:#d8b36a;text-decoration:none;font-size:20px;font-weight:800;border-radius:6px;",
      "$10 each month"
    );
    monthly.href = MONTHLY;
    monthly.target = "_blank";
    monthly.rel = "noopener noreferrer";
    sheet.appendChild(monthly);

    var bankBox = el("div", "margin-top:22px;border:1px solid #2c313a;background:#070809;padding:14px;border-radius:6px;");
    bankBox.appendChild(el("h3", "margin:0;font-size:14px;letter-spacing:.06em;font-family:system-ui,sans-serif;", "PAYID OR BANK TRANSFER"));
    bankBox.appendChild(el("p", "margin:8px 0 0;color:#d8b36a;font-size:34px;letter-spacing:.04em;", PAYID));
    bankBox.appendChild(el("p", "margin:4px 0 0;color:#9aa3ae;font-size:14px;font-family:system-ui,sans-serif;", "PayID · phone · description “Archive”"));
    bankBox.appendChild(
      el(
        "p",
        "margin:12px 0 0;font-size:15px;line-height:1.55;font-family:system-ui,sans-serif;",
        "Commonwealth Bank · Richard McLean · BSB 063307 · Account 10140384"
      )
    );
    var copies = el("div", "display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;");
    var copyPay = el(
      "button",
      "height:44px;padding:0 14px;border:1px solid #2c313a;background:#171b21;color:#f3f0e8;cursor:pointer;font-family:system-ui,sans-serif;font-weight:700;",
      "Copy PayID"
    );
    copyPay.type = "button";
    copyPay.addEventListener("click", function () {
      copyText(PAYID, copyPay, "PayID copied");
    });
    var copyBank = el(
      "button",
      "height:44px;padding:0 14px;border:1px solid #2c313a;background:#171b21;color:#f3f0e8;cursor:pointer;font-family:system-ui,sans-serif;font-weight:700;",
      "Copy bank details"
    );
    copyBank.type = "button";
    copyBank.addEventListener("click", function () {
      copyText(BANK, copyBank, "Details copied");
    });
    copies.appendChild(copyPay);
    copies.appendChild(copyBank);
    bankBox.appendChild(copies);
    sheet.appendChild(bankBox);

    sheet.appendChild(
      el(
        "p",
        "margin:16px 0 0;color:#9aa3ae;font-size:12px;line-height:1.45;font-family:system-ui,sans-serif;",
        "Not tax-deductible. ABN 78 833 496 164, The Trustee for www.barrandodger.com.au. Do not claim a deduction. A contribution is not a verdict."
      )
    );

    overlay.appendChild(sheet);

    function open() {
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
      close.focus();
    }
    function shut() {
      overlay.style.display = "none";
      document.body.style.overflow = "";
      button.focus();
    }

    button.addEventListener("click", open);
    close.addEventListener("click", shut);
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) shut();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && overlay.style.display === "block") shut();
    });

    document.body.appendChild(overlay);
    document.body.appendChild(dock);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
