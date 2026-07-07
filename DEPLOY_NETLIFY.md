# Deploy to Netlify — Arish Portfolio

## 1. Local test
```bash
bun install    # or: npm install
bun run dev    # opens http://localhost:8080
```

## 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/arish-portfolio.git
git push -u origin main
```

## 3. Import to Netlify
1. Go to https://app.netlify.com → **Add new site → Import an existing project**
2. Choose **GitHub** and pick this repo
3. Netlify auto-reads `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
4. Click **Deploy site**

## 4. After first deploy
- Rename the site under **Site settings → Change site name**
- (Optional) Add a custom domain under **Domain settings**

## 5. Updates
Every `git push` to `main` triggers a new Netlify deploy.

## Troubleshooting
- **Build error about Cloudflare / workerd:** the `NITRO_PRESET=netlify`
  env var in `netlify.toml` handles this. Make sure that line is present.
- **404 on refresh:** the SPA redirect rule in `netlify.toml` fixes this.
- **Publish folder wrong:** if the build logs say output is `.output/public`,
  change `publish = "dist"` to `publish = ".output/public"` in `netlify.toml`.

## Alternative: drag-and-drop
```bash
bun run build
```
Then drag the produced `dist/` folder onto https://app.netlify.com/drop
