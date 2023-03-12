# Irbisio Main Site - Gatsby 4 | NetlifyCMS Starter

Doesn't use styled-components so, when creating editor previews the CSS can be loaded directly from Layout.css _or_ with a custom stylesheet.

Gatsby 5 is still out because of NetlifyCMS compatibility issues with React 18.

## What it includes

- NetlifyCMS
- NetlifyCMS custom previews
- Markdown Pages
- React Spring Animations
- Choice of animated hamburger icons
- SSR fonts
- 12-column grid layout
- SEO, Sitemap, Blog RSS Feed
- Google Tag Management
- env variables
- Remark & Remark-HTML _So that the CMS previews can view the remark as it will be_

## Bugs and Snags

- Modal Routing Plugins - none work (currently)
- The nav bar scroll-away animation causes a development crash on any page not wrapped in Layout
- Scroll snap behaviour requires #gatsby-focus-wrapper to be 100vh. Then a layout class can be applied to snap-type: _whatever_ and inidivual sections can have differing snap-aligns, etc. Biut if a section has no snap-align applied it might become in accesible (if it's too thin!).
- Netlify CMS: folder collections cannot use path: {{slug}}/index **AND** use the media*folder. Git-hub issues suggests they may have a future solve via \_media collections*.

## Development

To run a development server, run: _gatsby develop_
To run a local netlifyCMS server, run (in a separate terminal): _npx netlify-cms-proxy-server_
To run a development server on local network _yarn develop -H 0.0.0.0_

- Sometimes it doesn't end on _Cntrl + C_ you may need to run _npx kill-port 8000_
