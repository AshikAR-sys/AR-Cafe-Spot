# AR CAFE SPOT

Website for AR CAFE SPOT, a specialty coffee house.

## Pages

- `index.html` — home: hero, story, signatures, gallery, address and hours
- `menu.html` — espresso bar, slow filter, not-coffee, all-day kitchen, pastries, plus group packages
- `about.html` — the story, three promises, the kitchen
- `book.html` — table reservation form (composes an email, no server needed)

## Structure

```
index.html
menu.html
about.html
book.html
assets/
  styles.css
  app.js
  img/       (food and interior photography)
```

## Running it locally

It is a static site — no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 3000
```

## Editing the details

Address, phone, email and hours appear in every page (in the header strip, footer and, on `book.html`, the contact list). Menu items and prices are in `menu.html`. The booking email address is set at the top of `assets/app.js` (`const EMAIL`).

## Images

The photos in `assets/img/` are placeholders generated for layout purposes and should be replaced with real photography of the café and its dishes.
