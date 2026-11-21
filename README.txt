FINVAULT PRO — INSTALLABLE PWA

IMPORTANT: A PWA cannot be installed by opening index.html directly from Downloads. It must be served from HTTPS (or localhost for testing).

EASIEST PUBLISH OPTION — GitHub Pages
1. Extract this ZIP on a computer.
2. Create/sign in to a GitHub account and create a new public repository (for example: finvault-pro).
3. Upload index.html, manifest.webmanifest, service-worker.js, and the icons folder to the repository root.
4. In the repository, open Settings → Pages.
5. Under Build and deployment, choose Deploy from a branch, select main and /(root), then Save.
6. Wait for the Pages URL to appear. Open that HTTPS URL in Chrome on your Android phone.
7. In Chrome, tap ⋮ → Install app (or Add to Home screen) → Install.

ANDROID CHROME
After installation, launch FinVault Pro from the new home-screen icon. The app shell and CDN files are cached after a successful online visit. Some functions may still need internet if their external libraries have not yet been cached.

DATA & PRIVACY
- This is a browser-based app. Data is stored locally by the app/browser, not synced automatically between devices.
- Export a JSON backup regularly. Do not clear browser storage unless you have a backup.
- Do not store bank passwords, UPI PINs, or other sensitive credentials in the app.
- The PWA setup does not add server-side accounts, cloud sync, or encryption.
