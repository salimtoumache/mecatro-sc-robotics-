# mecatrobot — Mecatro Club

Interactive robotics learning platform: 3D robots you can move, kinematic diagrams, DH tables and step-by-step courses.
Made by Mecatro Club, Faculty of Technology, M'hamed Bougara University of Boumerdes.

## Run it locally
It is a static site (no build step). From this folder:

    python3 -m http.server 8000

then open http://localhost:8000

## Edit the club identity
Everything about the club (name, faculty, join form, social links) is in one object, `CLUB`, at the top of `nav.js`.
Logos are in `assets/`, colours and fonts are the variables at the top of `style.css`, the home page is `index.html` + `home.css`.

## Publish
Upload the folder to any static host (Cloudflare Pages / Workers, GitHub Pages, Netlify…). With Cloudflare: `npx wrangler deploy`.
