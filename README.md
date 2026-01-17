# Employee Management System UI

A modern Angular 21 application for employee management with attendance tracking, built with Material Design and ready for production deployment.

## 🎯 Features

- ✅ **Employee Management** - Add, view, update, and delete employees
- ✅ **Attendance Tracking** - Track employee attendance
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile
- ✅ **Material Design** - Professional UI with Angular Material components
- ✅ **Real-time Updates** - Instant change detection and auto-refresh
- ✅ **API Integration** - RESTful API communication with backend
- ✅ **Production Ready** - Docker containerization and Nginx configuration
- ✅ **Railway Deployment Ready** - Pre-configured for Railway platform

## 🛠️ Tech Stack

- **Angular 21.1.0** - Modern frontend framework with standalone components
- **Angular Material 21.1.0** - Material Design components and themes
- **TypeScript** - Type-safe development
- **SCSS** - Styling with responsive layouts
- **RxJS** - Reactive programming with Observables
- **Docker & Nginx** - Container orchestration and web server
- **Node.js 20** - Runtime environment

## 📋 Prerequisites

- Node.js 20+ and npm
- Angular CLI 21+
- Backend API running on `http://localhost:8000` (default)

## 🚀 Quick Start

### Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

3. **Open in browser**
   - Navigate to `http://localhost:4200/`
   - Application auto-reloads on code changes

### Production Build

```bash
npm run build
# Output: dist/employee-ui/browser
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t employee-ui:latest .
```

### Run Docker Container

```bash
docker run -p 8080:80 employee-ui:latest
```

Then visit `http://localhost:8080`

### With Custom API URL

```bash
docker run -p 8080:80 -e API_URL=http://your-api:8000 employee-ui:latest
```

## 🚄 Railway Deployment

This application is configured for Railway deployment. 

### One-Click Deploy
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project" → "Deploy from GitHub"
3. Select this repository
4. Set environment variables (see Configuration section)
5. Deploy!

For detailed instructions, see [RAILWAY_QUICKSTART.md](./RAILWAY_QUICKSTART.md) and [DEPLOYMENT.md](./DEPLOYMENT.md)

## ⚙️ Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `API_URL` | `http://localhost:8000` | Backend API endpoint |

### API Endpoints

The application expects these endpoints on your backend:

```
GET    /get_employees              - Get all employees
GET    /get_employee/:id           - Get single employee
POST   /create_employee            - Create employee
PUT    /create_employee/:id        - Update employee
DELETE /employees/:id              - Delete employee
POST   /mark_attendance            - Mark attendance
GET    /get_attendance             - Get attendance records
```

## 📁 Project Structure

```
src/
├── app/
│   ├── app.ts                 # Root component
│   ├── app.routes.ts          # Routing configuration
│   ├── app.config.ts          # Application configuration
│   ├── core/
│   │   └── services/
│   │       ├── api.service.ts           # API communication
│   │       └── environment.service.ts   # Environment configuration
│   └── features/
│       ├── employees/
│       │   ├── employee-list/          # Employee display & management
│       │   └── employee-form/          # Add new employee form
│       └── attendance/
│           └── attendance-form/        # Attendance tracking
├── main.ts                    # Application entry point
├── styles.scss                # Global styles
└── index.html                 # HTML entry point
```

## 🔄 API Integration

The application uses a centralized `ApiService` for all HTTP communications:

```typescript
// In components
constructor(private api: ApiService) {}

// Get employees
this.api.getEmployees().subscribe(
  (employees) => { this.employees = employees; },
  (error) => { console.error(error); }
);

// Add employee
this.api.addEmployee(employee).subscribe(
  (result) => { /* success */ },
  (error) => { /* error handling */ }
);
```

## 🎨 Styling

- **SCSS** for component-scoped styling
- **Material Design** theme and components
- **Responsive Grid Layout** - Two-column layout (form + list)
- **Professional Colors** - Azure/Blue palette with gradients

## 🧪 Testing

Run unit tests:
```bash
npm test
```

Run end-to-end tests:
```bash
npm run e2e
```

## 📝 Development Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server on `localhost:4200` |
| `npm run build` | Production build to `dist/` |
| `npm test` | Run unit tests with Karma |
| `npm run lint` | Check code style |
| `docker build -t employee-ui .` | Build Docker image |
| `docker run -p 8080:80 employee-ui` | Run Docker container |

## 🐛 Troubleshooting

### Blank Page on Load
- Check browser console for errors (F12)
- Verify API_URL is correct
- Ensure backend API is running

### API Connection Failed
- Confirm backend is running at configured URL
- Check CORS settings on backend
- Verify firewall allows the connection

### Docker Build Fails
- Run `npm run build` locally to test
- Check Docker logs: `docker logs <container-id>`
- Verify Dockerfile and docker-entrypoint.sh exist

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Material](https://material.angular.io)
- [Railway Documentation](https://docs.railway.app)
- [Deployment Guide](./DEPLOYMENT.md)
- [Railway Quick Start](./RAILWAY_QUICKSTART.md)

## 🔐 Security Considerations

- API calls use CORS headers for cross-origin requests
- Environment variables are not exposed to frontend
- Build uses production optimizations and minification
- Nginx configured to deny access to hidden files

## 📄 License

This project is part of the Employee Management System.

## 👤 Author

Created by Karishma Verma

## 🤝 Contributing

Contributions are welcome! Please ensure:
1. Code follows Angular style guide
2. Components are standalone
3. Proper error handling is implemented
4. Tests are updated accordingly

---

**Ready to deploy?** See [RAILWAY_QUICKSTART.md](./RAILWAY_QUICKSTART.md) for quick deployment instructions.

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
