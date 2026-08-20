# Focra legal site

This folder is a standalone static site for GitHub Pages.

## Publish from a separate public repository

1. Create a public GitHub repository named `Focra`.
2. Upload the **contents** of this folder to the repository root.
3. In GitHub, open **Settings > Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Select the `main` branch and `/(root)`, then save.
6. Confirm that the repository-root `CNAME` file contains only `focra.app`.
7. Set the Pages custom domain to `focra.app`, wait for the certificate, and
   then enable **Enforce HTTPS**.

The public URLs will normally be:

```text
https://focra.app/privacy/
https://focra.app/terms/
```

Before launch, replace the App Store support-contact wording in
`privacy/index.html` and `terms/index.html` with a monitored email address.
