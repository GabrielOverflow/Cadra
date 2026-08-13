# Cadra legal site

This folder is a standalone static site for GitHub Pages.

## Publish from a separate public repository

1. Create a public GitHub repository named `Cadra`.
2. Upload the **contents** of this folder to the repository root.
3. In GitHub, open **Settings > Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Select the `main` branch and `/(root)`, then save.

The public URLs will normally be:

```text
https://YOUR-USERNAME.github.io/Cadra/privacy/
https://YOUR-USERNAME.github.io/Cadra/terms/
```

Before launch, replace the App Store support-contact wording in
`privacy/index.html` and `terms/index.html` with a monitored email address.
