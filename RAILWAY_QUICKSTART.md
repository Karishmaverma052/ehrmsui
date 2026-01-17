# Railway Deployment Quick Start

Your Employee UI application is ready for Railway deployment! Here's what has been configured:

## ✅ Deployment Ready

### Files Created:
- **Dockerfile** - Multi-stage build (Node 20 → Nginx Alpine)
- **nginx.conf** - Nginx configuration with SPA routing and caching
- **docker-entrypoint.sh** - Container startup script
- **.dockerignore** - Files excluded from Docker build
- **railway.json** - Railway project configuration
- **DEPLOYMENT.md** - Detailed deployment guide
- **environment.service.ts** - Environment variable support
- **.env.example** - Environment variables template

### Key Features:
✅ Automatic API URL configuration via environment variables
✅ SPA routing properly configured in Nginx
✅ Optimized caching for static assets
✅ Gzip compression enabled
✅ Multi-stage Docker build for minimal image size
✅ Production-ready Nginx configuration

## 🚀 Deploy to Railway in 2 Steps

### Step 1: Go to Railway Dashboard
Visit [https://railway.app/dashboard](https://railway.app/dashboard)

### Step 2: Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Select `ehrmsui` repository
4. Railroad will automatically detect Dockerfile and build

## 🔧 Configure Environment Variables

Once deployment starts, set this environment variable in Railway:

```
API_URL=<your-backend-api-url>
```

**Examples:**
- Local development: `http://localhost:8000`
- Railway backend: `https://your-backend-service-name.up.railway.app`
- Production: `https://api.yourdomain.com`

## 📋 What Happens Automatically

1. ✅ GitHub webhook triggers on push to main branch
2. ✅ Railway pulls code from GitHub
3. ✅ Dockerfile multi-stage build:
   - Stage 1: Node 20 compiles Angular application
   - Stage 2: Nginx serves built files
4. ✅ Container starts with `npm run build` output
5. ✅ App available at: `https://employee-ui-*.up.railway.app`

## ✨ Advanced Configuration

### Custom Domain
1. Go to Railway Project Settings
2. Add Custom Domain
3. Update DNS records
4. Update API_URL if needed

### Monitor Deployments
- Check "Deployments" tab for build logs
- View "Logs" tab for runtime errors
- Use "Metrics" tab to monitor resource usage

### Redeploy Previous Version
1. Go to Deployments
2. Select previous successful deployment
3. Click "Redeploy"

## 🐛 Troubleshooting

**Blank page on load?**
- Check browser console (F12)
- Verify API_URL is set in Railway environment
- Check Network tab for failed API requests

**API calls failing?**
- Ensure API_URL environment variable is correct
- Verify backend CORS allows the frontend URL
- Check backend is running and accessible

**Build fails?**
- Check build logs in Railway Deployments tab
- Ensure npm run build succeeds locally first
- Verify package.json and angular.json are correct

## 📚 Documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Full deployment guide
- [Railway Docs](https://docs.railway.app)
- [Angular Deployment](https://angular.io/guide/deployment)

## 🎯 Next Steps
1. ✅ Code already pushed to GitHub (`main` branch)
2. Go to Railway dashboard and create new project
3. Connect your GitHub account and select this repo
4. Set API_URL environment variable
5. Watch deployment complete
6. Access your app at the provided Railway URL

---

**Your application is production-ready and deployed!** 🚀

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
