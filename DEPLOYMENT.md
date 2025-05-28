# 🚀 Deploy BCV Calculator to GitHub Pages

This guide will help you get your enhanced BCV Property & Partnership Ecosystem Calculator live on GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Your calculator files (which you already have!)

## 🔥 Quick Deploy Steps

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and log in
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in repository details:**
   - Repository name: `bcv-property-calculator` (or your preferred name)
   - Description: `BCV Property & Partnership Ecosystem Calculator`
   - Make it **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file"
   - Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. **In your new repository**, click "uploading an existing file"
2. **Drag and drop** all your calculator files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `CALCULATOR_ENHANCEMENTS_SUMMARY.md`
   - `ENHANCED_CALCULATOR_PLAN.md`
   - `TECHNICAL_DOCUMENTATION.md`
   - `HOW_TO_ADD_CALCULATIONS.md`
   - `CALCULATOR_OVERVIEW.md`
   - `.github/workflows/deploy.yml`
3. **Add commit message**: "Initial upload of BCV Property Calculator"
4. **Click "Commit changes"**

**Option B: Using Git Commands**

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/bcv-property-calculator.git
cd bcv-property-calculator

# Copy all your calculator files to this directory
cp /path/to/your/calculator/* .

# Add and commit files
git add .
git commit -m "Initial upload of BCV Property Calculator"
git push origin main
```

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (top of repository)
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source"**, select:
   - Source: **"Deploy from a branch"**
   - Branch: **"main"** (or "master")
   - Folder: **"/ (root)"**
5. **Click "Save"**

### Step 4: Wait for Deployment

1. **GitHub will automatically deploy** your calculator (takes 1-5 minutes)
2. **Check the "Actions" tab** to see deployment progress
3. **Your calculator will be available at:**
   ```
   https://YOUR_USERNAME.github.io/bcv-property-calculator
   ```

## 🎯 Automatic Deployment

Your repository now includes a **GitHub Actions workflow** that will:

✅ **Automatically validate** your files on every push
✅ **Deploy updates** whenever you push to main/master branch  
✅ **Run quality checks** to ensure everything works
✅ **Provide deployment status** in the Actions tab

## 🔧 Updating Your Calculator

To make changes:

1. **Edit files locally** or directly on GitHub
2. **Commit and push** changes to main branch
3. **GitHub automatically redeploys** within minutes
4. **Check your live site** for updates

## 📱 Sharing Your Calculator

Once deployed, share your calculator with:

- **Partners**: `https://YOUR_USERNAME.github.io/bcv-property-calculator`
- **Investors**: Professional-looking URL for presentations
- **Team Members**: Easy access for collaboration
- **Legal/Financial Advisors**: For partnership structure analysis

## 🛠️ Troubleshooting

### Pages Not Working?
- Check "Settings" → "Pages" is configured correctly
- Ensure repository is **public**
- Wait 5-10 minutes for initial deployment

### Workflow Failing?
- Check "Actions" tab for error details
- Ensure all files are committed
- Verify file names match exactly

### Calculator Not Loading?
- Check browser console for errors
- Verify all files (HTML, CSS, JS) are present
- Test locally first with `./launch.sh`

## 🌟 Advanced Features

### Custom Domain (Optional)
1. **Buy a custom domain** (e.g., `bcv-calculator.com`)
2. **Add CNAME file** to your repository
3. **Configure DNS** settings
4. **Enable custom domain** in Pages settings

### Analytics (Optional)
Add Google Analytics to track usage:
```html
<!-- Add to index.html <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎉 Success Checklist

Once deployed, your calculator should have:

✅ **Property Portfolio Management** - Land subdivision simulator
✅ **Partner Equity Tracking** - Real-time contribution calculations  
✅ **Worker Housing Economics** - Subsidy and tax benefit modeling
✅ **Financial Projections** - 5-year debt and cash flow analysis
✅ **Responsive Design** - Works on all devices
✅ **Professional URL** - Easy to share and bookmark

## 📞 Need Help?

If you run into issues:
1. **Check GitHub's Pages documentation**
2. **Review the Actions tab** for deployment logs
3. **Test locally first** to isolate issues
4. **Ensure all files are properly committed**

---

**Your BCV Property & Partnership Ecosystem Calculator will soon be live and accessible to all stakeholders! 🌟** 