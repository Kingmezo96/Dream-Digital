# Dream Digital website

A responsive, multi-page agency website built from the Dream Digital PRD. The homepage and supplied inner pages use their exact Rayo template structures, native styles, loader, motion system, navigation and scripts, with a separate Dream Digital brand layer in `css/dream-rayo.css`.

## Preview

Run a local web server from this folder, then open `http://localhost:8080`.

```sh
python3 -m http.server 8080
```

## Pages

- `index.html` — supplied Rayo web-agency template, branded for Dream Digital
- `about.html` — supplied Rayo About Us template, branded with Dream Digital’s story, principles and process
- `services.html` / `service.html` — service overview and dynamic detail pages
- `work.html` / `case-study.html` — filtered portfolio and case-study template
- `insights.html` — editorial preview
- `faq.html` — supplied Rayo FAQ template with Dream Digital questions and insights
- `contact.html` — supplied Rayo Contact template with a Dream Digital project enquiry form
- `privacy.html`, `terms.html`, `404.html` — supporting pages

## Contact form integration

The contact form UI and validation are present. Configure the submission endpoint and official recipient address before production; no email address was invented in the template.

## Template files

The vendor files remain unmodified at `css/main.css`, `css/plugins.css`, `css/loaders/loader.css`, `js/rayo-libs.min.js`, and `js/rayo-app.js`. Dream Digital-specific visual overrides live in `css/dream-rayo.css`.

The supplied Ambassadors, Boys Champions, Chaise, Chiade, Kuepass, and Viicsoft work is stored in `img/portfolio/` and used across the homepage, About page, portfolio galleries, previews, CTAs, and the Chaise case study.
