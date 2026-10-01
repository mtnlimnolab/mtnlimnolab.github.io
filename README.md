# Loch Vale Watershed Research Website

Created by **AlexanderGoose**.

This site is intended to be the new home for all things Loch Vale: watershed
research, monitoring data, publications, people, and project resources. It brings
those materials together in one place for researchers and anyone interested in
the watershed.

## Project structure

This is a static website built with HTML, CSS, and a little JavaScript. There is
no build step or dependency installation.

| File or folder | What it contains |
| --- | --- |
| `index.html` | Homepage, watershed overview, map, and partner logos |
| `data.html` | Embedded Shiny dashboard and data documentation links |
| `stories.html` | Research findings explained in plain language |
| `publications.html` | Searchable publications list |
| `contact.html` | People page |
| `links.html` | Additional data releases and resources |
| `data/` | JSON lists used by the publications, people, and links pages |
| `images/` | Photos, logos, and watershed map |
| `style.css` | Stylesheet loaded by the pages |
| `styles/` | Separate stylesheets organized by topic |

## Preview locally

From the project folder, run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser. Use a local server instead of opening
HTML files directly, because several pages fetch JSON data. Press Ctrl+C to stop
the server.

## Updating the site

- **Page text and links:** Edit the relevant HTML file.
- **Appearance:** Edit `style.css`. If a matching rule exists in `styles/`, keep
  that copy in sync; the pages currently load `style.css` directly.
- **Publications:** Add or edit entries in `data/publications.json`, keeping the
  newest entries first. Each entry uses `date`, `title`, `description`, `authors`,
  `by`, and `link`. The page reads this file automatically.
- **People:** Edit `data/pi.json`, `data/grad-students.json`, or
  `data/researchers.json`. Add photos to `images/` and set `pic_name` to their
  relative path. Affiliation logos go in the `logos` list. Graduate students can
  omit `pic_name` until a photo is available.
- **Data resources:** Edit documentation links in `data.html` and resource entries
  in `data/data.json` for the Links page.
- **Shiny dashboard:** The app is hosted separately at
  `https://lochvale.shinyapps.io/shiny/`. This repository embeds it; changes to its
  data, plots, and sampling labels require its separate source project. Change
  the iframe's `src` in `data.html` if the app moves.

Example graduate student entry:

```json
{
    "name": "Student Name",
    "pic_name": "images/student.jpg",
    "logos": [
        { "src": "images/csu_logo.png", "alt": "Colorado State University" }
    ]
}
```

Keep JSON valid: use double quotes and commas between entries, with no trailing
comma after the last entry. Image paths and filenames must match exactly,
including capitalization.

## Checking and publishing changes

Preview the affected pages on desktop and a narrow screen. Check links, images,
and JSON-driven lists, then run `git diff --check` for formatting problems.

Commit and push reviewed changes to the repository:
`mtnlimnolab/mtnlimnolab.github.io`. Confirm the publishing branch and folder in
GitHub's **Settings → Pages** before publishing, then check the live site after
deployment. The hosting configuration is not included in this project.
