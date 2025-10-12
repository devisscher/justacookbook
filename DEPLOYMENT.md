# Deploying to GitHub Pages

Your Just a Cookbook site is configured to automatically deploy to GitHub Pages whenever you push to the `main` branch.

## Setup Instructions

### 1. Create a GitHub Repository

If you haven't already, create a new repository on GitHub:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Just a Cookbook"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/justacookbook.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the sidebar)
3. Under **Build and deployment** → **Source**, select **GitHub Actions**

That's it! The deployment is now automated.

### 3. Configure Repository Name (If Needed)

**If your repository is named `justacookbook`:**

You need to add a `base` path to your VitePress config. Edit `.vitepress/config.mts` and add:

```typescript
export default defineConfig({
  title: "Just a Cookbook",
  description: "Recipes, that's all",
  base: '/justacookbook/', // Add this line
  
  themeConfig: {
    // ... rest of config
  }
})
```

**If deploying to `username.github.io` (user/organization page):**

No `base` configuration needed! Your site will be at `https://username.github.io/`

### 4. Trigger Deployment

Every time you push to the `main` branch, GitHub Actions will:
1. ✅ Install dependencies
2. ✅ Build your VitePress site
3. ✅ Deploy to GitHub Pages

You can also manually trigger deployment:
1. Go to **Actions** tab in your GitHub repository
2. Click **Deploy to GitHub Pages**
3. Click **Run workflow**

## Viewing Your Site

After the first deployment (takes 2-5 minutes), your site will be live at:

- **Repository deployment**: `https://YOUR-USERNAME.github.io/justacookbook/`
- **User/org page**: `https://YOUR-USERNAME.github.io/`

## Local Testing Before Deploy

Test your production build locally before pushing:

```bash
# Build the site
npm run docs:build

# Preview the built site
npm run docs:preview
```

Visit `http://localhost:4173` to see how it will look in production.

## Troubleshooting

### Deployment Failed?

1. **Check Actions tab**: Go to the Actions tab to see detailed error logs
2. **Node version**: Ensure Node 20+ is specified in the workflow (already configured)
3. **Build command**: Make sure `npm run docs:build` works locally

### Site Loads But Looks Broken?

**Problem**: CSS/JS files not loading, 404 errors in console

**Solution**: You probably need to set the `base` path in your VitePress config:

```typescript
// .vitepress/config.mts
export default defineConfig({
  base: '/your-repo-name/', // Must match your repository name!
  // ... rest of config
})
```

### Images Not Showing?

If using local images:
1. Place images in `public/images/` folder
2. Reference them with absolute paths: `/images/recipe.jpg`
3. The `base` path is automatically prepended

### Custom Domain?

To use a custom domain like `recipes.example.com`:

1. Create a file: `public/CNAME` with your domain:
   ```
   recipes.example.com
   ```

2. In your DNS provider, add a CNAME record:
   ```
   CNAME  recipes  YOUR-USERNAME.github.io
   ```

3. In GitHub Settings → Pages → Custom domain, enter your domain

## Updating Your Site

The workflow is automatic! Just update your recipes and push:

```bash
# Make changes to your recipes
vim recipes/new-recipe.md

# Commit and push
git add .
git commit -m "Add new recipe"
git push

# 🎉 Site automatically updates in 2-5 minutes!
```

## Workflow File

The deployment is configured in `.github/workflows/deploy.yml`. It:

- Runs on every push to `main`
- Uses Node.js 20
- Builds with `npm run docs:build`
- Deploys the `.vitepress/dist` folder

You can customize this file if needed, but the defaults work great!

## GitHub Actions Badge

Add a deployment status badge to your README:

```markdown
![Deploy](https://github.com/YOUR-USERNAME/justacookbook/actions/workflows/deploy.yml/badge.svg)
```

## Next Steps

- [ ] Create GitHub repository
- [ ] Enable GitHub Pages with "GitHub Actions" source
- [ ] Configure `base` path if needed
- [ ] Push your code
- [ ] Wait for deployment
- [ ] Share your cookbook URL! 🎉

## Resources

- [VitePress Deployment Guide](https://vitepress.dev/guide/deploy)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

