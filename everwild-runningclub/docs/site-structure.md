# Site Structure

## Current Brand Site

```text
everwild-runningclub/
  index.html
  signup/
    index.html
  legal/
    index.html
  privacy/
    index.html
  terms/
    index.html
  assets/
    css/
      shared/
        site-core.css
      pages/
        home.css
        signup.css
        legal.css
    js/
      shared/
        site-i18n.js
      pages/
        home.js
        signup.js
        legal.js
        privacy.js
        terms.js
    images/
      hero/
      about/
      routes/
      logo/
  backup/
  docs/

../raw/
```

## Rule of Thumb

- `index.html` and route folders only keep page structure.
- Shared design language lives in `assets/css/shared` and `assets/js/shared`.
- Page-specific behavior and layout live in `assets/css/pages` and `assets/js/pages`.
- Final web assets stay in `assets/images`.
- Raw source materials stay in `../raw`.
- Old versions stay in `backup`.

## Adding a New Page

For a new route such as `/partners`:

```text
partners/
  index.html
assets/css/pages/
  partners.css
assets/js/pages/
  partners.js
```

Recommended pattern:

1. Reuse `assets/css/shared/site-core.css`
2. Add only page-specific layout to `partners.css`
3. Reuse `assets/js/shared/site-i18n.js`
4. Put only page-specific copy and interaction in `partners.js`

## If a Sister Brand Uses the Same Design Language

At the workspace level, move shared design language one level up and keep each brand separate:

```text
brands/
  everwild-runningclub/
  sister-brand-name/
shared/
  design-system/
    css/
    js/
    images/
```

Recommended split:

- `shared/design-system/css`
  Shared tokens, header, navigation, button, card, form, footer rules
- `shared/design-system/js`
  Shared i18n helper, modal helper, carousel helper, form helper
- `shared/design-system/images`
  Shared utility icons or system-level graphics

Each brand then keeps only:

- brand-specific copy
- brand-specific imagery
- route structure
- brand-specific page modules

This keeps the design language consistent while allowing each brand to evolve independently.
