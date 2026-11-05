# Nutley's Christmas Winterland

The website for **Nutley's Christmas Winterland**, a special Christmas event for Nutley on **Saturday 5th December, 3pm till 7pm**.

At the moment it's a "save the date" page. More details will be added as plans come together.

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | The page itself: all the text and content |
| `style.css` | Colours, fonts and layout |
| `script.js` | Falling snow animation and the "days to go" countdown |
| `nutley-christmas-winterland.ics` | Calendar file behind the "Add to my calendar" button |
| `.gitattributes` | Keeps the calendar file's line endings correct for calendar apps |

It's a plain static site with no build step and nothing to install.

## Previewing locally

Open `index.html` in a browser:

```bash
open index.html
```

## Publishing

The site is hosted on [GitHub Pages](https://pages.github.com/) from the `main` branch (root folder). Any change pushed to `main` goes live automatically within a minute or two:

```bash
git add .
git commit -m "Describe your change"
git push
```

## Updating event details

- **Wording, date or time:** edit `index.html`
- **Countdown:** the event start and end times are near the bottom of `script.js`
- **Calendar entry:** update `DTSTART`, `DTEND`, `LOCATION` and `DESCRIPTION` in the `.ics` file. Times are in UTC, which matches UK time in December.
