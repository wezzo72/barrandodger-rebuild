# How to add the next publication

This is the procedure. It does not itself put a book on sale.

The documentary archive stays free. Do not charge for a government document, a letter, or a source PDF that is already public. A paid file has to be a separate edition: original writing, a compilation, annotation, or formatting that is identified on the page.

Do not invent a manuscript, a page count, a clearance, or a payment URL.

## 1. Confirm the file

1. Open the actual file. Do not rely on the filename.
2. Record the exact title inside the file, the author line, the page count, and the SHA-256.
3. If the file is incomplete, stop. Do not fill the gaps and call it finished.
4. If the words are already public, say so. Keep the public copy free.
5. Leave the original file where it is. A commercial PDF is a new file, not a replacement.

## 2. One register

Add one object to `data/commercial-product-register.json`.

Use a stable `product_id`. Copy the title from the file. Set `publication_status` to `prepared` until a real checkout exists, and to `unavailable` if the file cannot be supplied.

Do not add another HTML list of the whole archive. `digital-publications.html` is already that inventory. `read-and-purchase.html` is the shelf.

## 3. Pages

Add one product page. State the title, the author, what the buyer receives, the format, the length you actually counted, the price in Australian dollars, the support route, and the refund position.

The support route already on the archive is `support-pathway.html`. Do not invent a new address.

Link the new page from `read-and-purchase.html`. Do not remove the existing entries.

If there is a genuine sample, publish the sample only. Do not put the full paid file in this public repository.

## 4. Price

Use these as trial prices, not as a valuation.

| Kind | Trial price |
| --- | --- |
| Short essay or declaration | A$3.95 |
| Longer standalone writing | A$7.95 |
| Complete gospel or digital book | A$12.95 |
| Longer collection | A$19.95 |
| Larger bundle | A$29.95 |

The press edition already on the site is A$12.00, which was set under the existing A$15 Shrink checkout. Do not change that figure unless the edition changes.

Do not promise income. Read the current Stripe fee from Stripe's own pricing page before printing a net figure. The fee was not re-read on 15 October 2026.

## 5. Checkout and delivery

The account already in use is the Stripe account identified on the site as www.barrandodger.com. Do not open a second paid shop, and do not put a secret key in this repository.

In the Stripe Dashboard, for a file that passed the checks above:

1. Add a product whose name is the exact title.
2. Set one payment, in AUD, at the price printed on the page. Not a subscription.
3. Upload that exact PDF. Check the SHA-256 before upload.
4. Turn on Stripe's own file delivery.
5. Copy the payment-link URL.
6. Put that URL on the product page, in place of the not-live notice. Until the URL is real, the page must not show a pay button.

A payment link that sends only a receipt is not delivery. The three older links are in that state. Do not point a new book at them.

No test charge was made on 15 October 2026. Use Stripe's test mode if it is available before a live link is published. Do not record a test as a sale.

## 6. What not to sell

- Recovered, Not Cured. It is an Allen & Unwin book. It is not copied here.
- The Shrink, A Splice of My Life, and Betrayed, Murdered, Forsaken, until a finished file exists and is attached to the checkout.
- The Able Point private record and the GP report.
- Official government documents and the finding aid.
- Anything whose author line says it was written by an impartial AI, until the rights are actually reviewed.

## 7. After it is live

Record, separately, whether the page is public, whether the checkout URL opens, whether a test payment was made, and whether the test buyer received the file. An untested step stays unverified.
