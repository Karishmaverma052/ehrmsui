# Railway Deployment Guide

This document provides step-by-step instructions for deploying the Employee UI application to Railway.

## Prerequisites
- Railway account (https://railway.app)
- GitHub repository linked to Railway
- Backend API running and accessible

## Deployment Steps

### 1. Connect Repository to Railway
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Authorize GitHub and select the `ehrmsui` repository
5. Select the main branch

### 2. Configure Environment Variables
In Railway project settings, add the following environment variables:

```
API_URL=<your-backend-api-url>
```

For example:
- Development: `http://localhost:8000`
- Production: `https://api.yourbackend.com`

### 3. Railway Build Configuration
Railway automatically detects the Dockerfile and uses it for building. No additional configuration needed.

### 4. Monitor Deployment
- Railway will automatically build and deploy when you push to the main branch
- Check the Deployments tab for build logs
- Your app will be assigned a URL like: `https://employee-ui-production.up.railway.app`

## Local Deployment Testing

### Build Docker Image Locally
```bash
docker build -t employee-ui:latest .
```

### Run Docker Container Locally
```bash
docker run -p 8080:80 employee-ui:latest
```

Then visit `http://localhost:8080`

### Test with Custom API URL
```bash
docker run -p 8080:80 -e API_URL=http://your-api-url employee-ui:latest
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| API_URL | http://localhost:8000 | Backend API endpoint |

## Troubleshooting

### App shows blank page
- Check browser console for errors (F12)
- Verify API_URL is correct in Railway environment variables
- Check network tab to see if API calls are reaching the backend

### 404 Errors on page refresh
- This is expected - Angular SPA routing is handled by Nginx
- The nginx.conf is configured to return index.html for all routes
- If still occurring, verify nginx.conf is copied in Dockerfile

### API calls failing
- Verify API_URL environment variable is set in Railway
- Check CORS settings on backend API
- Ensure backend is running and accessible from Railway environment

## Additional Resources
- [Railway Documentation](https://docs.railway.app)
- [Angular Deployment Guide](https://angular.io/guide/deployment)
- [Docker Documentation](https://docs.docker.com)

## Rollback
If deployment fails:
1. Go to Railway Deployments tab
2. Select previous successful deployment
3. Click "Redeploy"

## Custom Domain
To use a custom domain:
1. Go to Railway project settings
2. Add Custom Domain
3. Update DNS records as instructed
4. Update API_URL if needed for CORS

## Next Steps
1. Push this code to GitHub main branch
2. The Railway GitHub integration will automatically trigger a deployment
3. Monitor the build in Railway dashboard
4. Once deployment completes, access your app at the provided URL
