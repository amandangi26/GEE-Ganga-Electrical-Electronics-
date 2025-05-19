# GEE (GEE-Ganga-Electrical-Electronics) Platform

A comprehensive e-eommerce platform built with modern web technologies, featuring separate user and admin interfaces for startups.

## 🚀 Features

- **User Interface**
  - Interactive learning dashboard
  - Course management system
  - Progress tracking
  - Responsive design for all devices

- **Admin Interface**
  - Advanced analytics dashboard
  - User management
  - Content management system
  - Performance monitoring

## 🛠️ Tech Stack

### Frontend
- React.js with Vite
- Tailwind CSS for styling
- Chart.js for data visualization
- React Router for navigation
- Axios for API integration

### Backend
- Node.js
- Express.js
- MongoDB
- RESTful API architecture

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd geeSite
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd gee-backend
   npm install

   # Install frontend dependencies
   cd ../gee-frontend
   npm install

   # Install admin frontend dependencies
   cd ../gee-admin-frontend
   npm install
   ```

3. **Environment Setup**
   - Create `.env` files in both frontend and backend directories
   - Configure necessary environment variables

4. **Start the development servers**
   ```bash
   # Start backend server
   cd gee-backend
   npm run dev

   # Start frontend server
   cd gee-frontend
   npm run dev

   # Start admin frontend server
   cd gee-admin-frontend
   npm run dev
   ```

## 📁 Project Structure

```
geeSite/
├── gee-frontend/          # User interface
├── gee-admin-frontend/    # Admin interface
├── gee-backend/          # Backend server
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── config/          # Configuration files
│   └── validation/      # Input validation
└── gee-admin/           # Admin backend
```

## 🔧 Configuration

1. **Backend Configuration**
   - Set up MongoDB connection
   - Configure environment variables
   - Set up authentication

2. **Frontend Configuration**
   - Configure API endpoints
   - Set up environment variables
   - Configure build settings

## 🧪 Testing

```bash
# Run backend tests
cd gee-backend
npm test

# Run frontend tests
cd gee-frontend
npm test
```

## 📦 Deployment

1. **Build the applications**
   ```bash
   # Build frontend
   cd gee-frontend
   npm run build

   # Build admin frontend
   cd gee-admin-frontend
   npm run build
   ```

2. **Deploy backend**
   ```bash
   cd gee-backend
   npm run build
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- Aman dangi - Made with ❤️
