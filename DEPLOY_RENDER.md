# Deploy to Render — Arish Portfolio

## 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/arish-portfolio.git
git push -u origin main
```

## 2. Create Render account
Sign up at https://render.com (use GitHub login for easiest setup).

## 3. Create a new Static Site
1. Dashboard → **Add new → Static Site**
2. Connect GitHub → select your `arish-portfolio` repo

## 4. Configure (auto-detected from render.yaml)
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 20

Click **Create Static Site**.

## 5. Wait for build
- Takes ~2–4 minutes
- You'll get a URL like `https://arish-portfolio.onrender.com`

## 6. (Optional) Custom domain
Settings → **Custom Domains** → add your domain → follow DNS instructions.
HTTPS is auto-provisioned.

## 7. Auto-deploys
Every `git push` to `main` triggers a new Render deploy.

## Troubleshooting
- **404 on refresh:** the rewrite rule in `render.yaml` handles this.
- **Build fails on `bun`:** the config uses `npm` — no bun needed on Render.
- **Publish folder wrong:** if build output is `.output/public`, change
  `staticPublishPath` to `./\.output/public` in `render.yaml`.
