# barrandodger.com website backup

Preservation copy of the public pages at https://barrandodger.com , taken because that site was being unpublished.

The source list is the 660-page index supplied 30 September 2026. `urls.txt` is that list, in the same order.

Each page is saved three ways, after the page’s own JavaScript has rendered. A raw download of the site is only an empty shell. This crawl waits until the words are on the page.

- `html/` — the rendered page. Every word and every hyperlink is in the file. Nothing is summarised or redacted.
- `pdf/` — the same rendered page as a PDF. The address is in the header. The links in the PDF are the links from the page. Photographs are left out of the PDF so the file stays a text record. Image addresses remain in the HTML.
- `links/` — every hyperlink on that page, one per line: anchor text, then the full URL.

`manifest.jsonl` records the title, the character count, the link count, and the SHA-256 of the HTML and of the PDF.

Run again with `node crawl.mjs`. Pages already saved are skipped. `--only 1` saves the first page. `--from 2 --to 40` saves a range.

Finding aid. Not a court. Not a verdict.


Recounted 4 October 2026. The source list remains the 660-page index. `pdf/` still holds those 660 page PDFs. The archive statement PDF in this folder makes 661 PDF files in the folder. The main repository wezzo72/Barrandodger holds 5,583 files, including 2,840 PDFs. Nothing in the crawl was deleted.
