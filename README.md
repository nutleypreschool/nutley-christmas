# Nutley's Christmas Winterland

The website for **Nutley's Christmas Winterland**, a Christmas fundraising event for Little Deers Nutley Preschool and Nutley Church of England Primary School, in collaboration with The Coffee House Nutley, on **Saturday 5th December, 3pm till 7pm**.

At the moment it's a "save the date" page. More details will be added as plans come together.

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | The page itself: all the text and content |
| `style.css` | Colours, fonts and layout |
| `script.js` | Falling snow animation and the "days to go" countdown |
| `images/` | Logos for the preschool, primary school and The Coffee House |
| `nutley-christmas-winterland.ics` | Calendar file behind the "Add to my calendar" button |
| `.gitattributes` | Keeps the calendar file's line endings correct for calendar apps |
| `CNAME` | Tells GitHub Pages to serve the live site at nutleychristmas.com (don't delete) |
| `.github/workflows/deploy-preview.yml` | Publishes the preview site (see below) |

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

## Previewing changes online

Changes can be checked at **https://preview.nutleychristmas.com** before they go live. The preview is published from a separate repo, [`nutleypreschool/nutley-christmas-preview`](https://github.com/nutleypreschool/nutley-christmas-preview), by the workflow in `.github/workflows/deploy-preview.yml`. That workflow is skipped in this repo.

To preview a branch:

```bash
git push preview my-branch:main --force
```

When you're happy, merge the branch into `main` and push to update the live site:

```bash
git switch main
git merge my-branch
git push
```

The preview shows a red "PREVIEW" banner and is hidden from search engines, but anyone with the link can see it.

## Updating event details

- **Wording, date or time:** edit `index.html`
- **Countdown:** the event start and end times are near the bottom of `script.js`
- **Calendar entry:** update `DTSTART`, `DTEND`, `LOCATION` and `DESCRIPTION` in the `.ics` file. Times are in UTC, which matches UK time in December.
