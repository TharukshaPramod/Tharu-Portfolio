# 🏗️ SiteMaster - Advanced Construction Management System

<div align="center">

![SiteMaster](https://img.shields.io/badge/Status-Active-brightgreen)
![Node Version](https://img.shields.io/badge/Node-18%2B-green)
![React Version](https://img.shields.io/badge/React-18.3-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

**A comprehensive, full-stack construction project management platform with advanced features for inventory management, financial tracking, order processing, and real-time notifications.**

[Features](#-key-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [API Documentation](#-api-documentation) • [Architecture](#-architecture)

</div>

---

## 📋 Project Overview

**SiteMaster** is a modern, enterprise-grade construction management system designed to streamline project operations from planning to completion. Built with cutting-edge technologies, it provides a seamless experience for managing multiple construction projects, inventory, financial operations, and team collaboration.

### Problem Statement
Construction businesses struggle with fragmented workflows, scattered data, and inefficient communication. SiteMaster centralizes all operations into one intuitive platform, reducing overhead and improving project delivery.

### Solution
A comprehensive full-stack application offering:
- **Project Management**: Track multiple construction projects in real-time
- **Inventory Management**: Monitor materials and equipment availability
- **Financial Tracking**: Manage payments, invoices, and project budgets
- **Order Management**: Process and track material orders
- **User Management**: Role-based access control for different user types
- **Admin Dashboard**: Comprehensive analytics and control panel
- **Real-time Notifications**: Instant alerts for critical events

---

## ✨ Key Features

### 🎯 Core Functionality

#### **Project Management**
- Create and manage multiple construction projects
- Track project status and milestones
- Project-specific inventory and resource allocation
- Visual project timeline and progress tracking
- Project documentation and file management

#### **Inventory Management**
- Real-time inventory tracking with stock levels
- Categorized inventory items with AVIF image support
- Low-stock alerts and reorder management
- Inventory history and usage analytics
- Bulk import/export capabilities

#### **Financial Operations**
- Comprehensive financial dashboard with key metrics
- Payment processing and verification
- Invoice generation in PDF format
- Budget tracking and cost analysis
- Expense categorization and reporting
- Financial data visualization

#### **Order Management**
- Create and track purchase orders
- Order status workflow (Pending → Processing → Delivered)
- Supplier integration and management
- Order history and analytics
- Automated order confirmations

#### **User Management**
- Role-based access control (Admin, Manager, Employee)
- User profile management
- Authentication with JWT tokens
- Password management and security
- Activity logging and audit trails

#### **Admin Dashboard**
- Comprehensive system analytics
- User management interface
- Financial overview and reports
- Inventory health status
- System settings and configuration
- Real-time monitoring

#### **Notifications**
- Real-time event notifications
- Multiple notification types (Order, Payment, Inventory, Project)
- Email notifications via Nodemailer
- Notification history and preferences
- Unread notification tracking

#### **Security**
- JWT-based authentication
- Password encryption with bcryptjs
- CORS protection
- Input validation and sanitization
- Error handling middleware
- Request logging

---

## 🛠️ Tech Stack

### **Backend**
```
Framework:      Express.js 4.18
Database:       MongoDB with Mongoose 7.0
Authentication: JWT (jsonwebtoken 9.0)
Security:       bcryptjs 2.4
File Uploads:   Multer 1.4
Email Service:  Nodemailer 6.10
PDF Generation: PDFKit 0.17
Environment:    dotenv 16.0
Runtime:        Node.js 18+
```

### **Frontend**
```
Framework:      React 18.3 with Vite 6.2
UI Framework:   Chakra UI 2.10
Styling:        Emotion (CSS-in-JS)
HTTP Client:    Axios 1.8
Routing:        React Router DOM 7.4
State Management: Zustand 5.0
Animation:      Framer Motion 12.5
Icons:          React Icons 5.5
PDF Export:     jsPDF 3.0
Error Handling: React Error Boundary 5.0
```

### **Development Tools**
```
Backend:
- Nodemon 2.0 (Development auto-reload)
- ESLint (Code quality)

Frontend:
- Vite (Fast bundling)
- ESLint (Code quality)
- React Refresh (Fast refresh)
```

---

## 📁 Project Structure

```
SiteMaster/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/              # Business logic
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── projectController.js
│   │   ├── inventoryController.js
│   │   ├── orderController.js
│   │   ├── paymentController.js
│   │   ├── cartController.js
│   │   ├── financialController.js
│   │   ├── adminController.js
│   │   ├── notificationController.js
│   │   └── settingsController.js
│   ├── middleware/               # Express middleware
│   │   ├── authMiddleware.js     # JWT verification
│   │   ├── errorMiddleware.js    # Error handling
│   │   └── uploadMiddleware.js   # File upload handling
│   ├── models/                   # Mongoose schemas
│   │   ├── User.js
│   │   ├── Project.js
│   │   ├── Inventory.js
│   │   ├── Order.js
│   │   ├── Payment.js
│   │   ├── Cart.js
│   │   ├── Notification.js
│   │   └── Settings.js
│   ├── routes/                   # API routes
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── inventoryRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── financialRoutes.js
│   │   ├── adminRoutes.js
│   │   └── adminOrderRoutes.js
│   ├── uploads/                  # Static file storage
│   │   ├── inventory/
│   │   ├── projects/
│   │   └── payments/
│   ├── utils/
│   │   └── jwt.js               # JWT utilities
│   ├── app.js                   # Express app initialization
│   ├── server.js                # Server entry point
│   ├── test.js                  # Testing file
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── admin/
│   │   │   ├── auth/
│   │   │   ├── cart/
│   │   │   ├── common/
│   │   │   ├── dashboard/
│   │   │   ├── financial/
│   │   │   ├── home/
│   │   │   ├── inventory/
│   │   │   ├── layout/
│   │   │   ├── projects/
│   │   │   ├── user/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   └── Navbar.jsx
│   │   ├── services/            # API services
│   │   │   └── userService.js
│   │   ├── store/               # State management
│   │   │   ├── adminUserStore.js
│   │   │   ├── cartStore.js
│   │   │   ├── inventoryStore.js
│   │   │   ├── projectStore.js
│   │   │   └── userStore.js
│   │   ├── utils/               # Utility functions
│   │   ├── assets/              # Static assets
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── scripts/
│   │   └── downloadImages.js
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── index.html
│   └── package.json
│
└── README.md (this file)
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn)
- **MongoDB** 5.0 or higher (local or Atlas)
- **Git**

### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file** in the backend directory
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/sitemaster
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sitemaster

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=7d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email Configuration (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# File Upload Configuration
MAX_FILE_SIZE=5242880  # 5MB in bytes
ALLOWED_FILE_TYPES=jpg,jpeg,png,gif,avif

# API Configuration
API_VERSION=v1
```

4. **Start the backend server**
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory** (in a new terminal)
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env.local` file** (if needed)
```env
VITE_API_URL=http://localhost:5000
```

4. **Start the development server**
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Verify Installation
- Backend health check: `http://localhost:5000/api/health`
- Frontend: `http://localhost:5173`
- Open browser console to check for any errors

---

## 💻 Usage

### Running the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
```

### Default User Roles
The system supports three user roles:
- **Admin**: Full system access, user management, analytics
- **Manager**: Project management, inventory oversight, reports
- **Employee**: Basic access, project viewing, task completion

### First Time Setup
1. Create an admin account during initial signup
2. Configure basic settings in admin panel
3. Add users and assign roles
4. Set up inventory items
5. Create projects and assign team members

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
All protected endpoints require JWT token in header:
```
Authorization: Bearer <your_jwt_token>
```

### Core Endpoints

#### **Authentication**
```
POST   /auth/register          # Register new user
POST   /auth/login             # Login user
POST   /auth/logout            # Logout user
POST   /auth/refresh-token     # Refresh JWT token
POST   /auth/forgot-password   # Request password reset
```

#### **Users**
```
GET    /users                  # Get all users (Admin)
GET    /users/:id              # Get user profile
PUT    /users/:id              # Update user profile
DELETE /users/:id              # Delete user (Admin)
GET    /users/profile/current  # Get current user profile
```

#### **Projects**
```
GET    /projects               # Get all projects
GET    /projects/:id           # Get project details
POST   /projects               # Create new project
PUT    /projects/:id           # Update project
DELETE /projects/:id           # Delete project
GET    /projects/:id/status    # Get project status
```

#### **Inventory**
```
GET    /inventory              # Get all items
GET    /inventory/:id          # Get item details
POST   /inventory              # Add new item
PUT    /inventory/:id          # Update item
DELETE /inventory/:id          # Delete item
GET    /inventory/low-stock    # Get low stock items
POST   /inventory/upload       # Upload item image
```

#### **Orders**
```
GET    /orders                 # Get all orders
GET    /orders/:id             # Get order details
POST   /orders                 # Create new order
PUT    /orders/:id             # Update order
DELETE /orders/:id             # Delete order
PUT    /orders/:id/status      # Update order status
```

#### **Payments**
```
GET    /payments               # Get all payments
GET    /payments/:id           # Get payment details
POST   /payments               # Create payment
PUT    /payments/:id           # Update payment
DELETE /payments/:id           # Delete payment
GET    /payments/status/:status # Filter by status
```

#### **Cart**
```
GET    /cart                   # Get user cart
POST   /cart/add               # Add item to cart
DELETE /cart/:itemId           # Remove from cart
PUT    /cart/:itemId           # Update cart item quantity
DELETE /cart                   # Clear cart
```

#### **Financial**
```
GET    /financial/summary      # Financial overview
GET    /financial/revenue      # Revenue analytics
GET    /financial/expenses     # Expense reports
GET    /financial/budget       # Budget tracking
GET    /financial/reports      # Generate reports
```

#### **Notifications**
```
GET    /notifications          # Get notifications
GET    /notifications/unread   # Get unread count
POST   /notifications/:id/read # Mark as read
DELETE /notifications/:id      # Delete notification
```

#### **Admin**
```
GET    /admin/users            # List all users
GET    /admin/dashboard        # Dashboard analytics
GET    /admin/reports          # System reports
PUT    /admin/settings         # Update settings
```

### Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

---

## 🏗️ Architecture

### System Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer (React)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Components │  │   Services   │  │   Zustand    │       │
│  │              │  │   (Axios)    │  │   Store      │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                            ↓
           ┌────────────────────────────────┐
           │   API Gateway (HTTP/REST)      │
           │   Port: 5000                   │
           │   CORS Enabled                 │
           └────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   Application Layer (Node.js/Express)        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Routes     │  │ Controllers  │  │ Middleware   │       │
│  │              │  │              │  │ (Auth, Error)│       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   Data Layer                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Mongoose     │  │  MongoDB     │  │ File Storage │       │
│  │ Models       │  │  Database    │  │ (Uploads)    │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow
1. **Client Request**: Frontend component sends request via Axios
2. **Routing**: Express routes request to appropriate controller
3. **Authentication**: JWT middleware validates authorization
4. **Business Logic**: Controller processes request
5. **Database**: Mongoose models interact with MongoDB
6. **Response**: Data returned to client in JSON format

### Error Handling
- Global error middleware catches all errors
- Consistent error response format
- Detailed logging for debugging
- User-friendly error messages

---

## 🔐 Security Features

### Authentication & Authorization
- JWT-based stateless authentication
- Password encryption with bcryptjs (salt rounds: 10)
- Role-based access control (RBAC)
- Token expiration and refresh mechanism

### Data Protection
- CORS protection for cross-origin requests
- Input validation and sanitization
- SQL injection prevention (MongoDB schema validation)
- XSS protection through React
- HTTPS ready (configure in production)

### Best Practices
- Environment variables for sensitive data
- Secure password policy enforcement
- Activity logging and audit trails
- Regular security updates of dependencies
- Error messages don't expose system details

---

## 📊 Database Schema

### Core Collections

**Users**
- _id, username, email, password, role, profile, createdAt, updatedAt

**Projects**
- _id, name, description, status, startDate, endDate, budget, manager, team, createdAt

**Inventory**
- _id, name, category, quantity, unit, price, supplier, image, createdAt, updatedAt

**Orders**
- _id, orderNumber, items, total, status, supplier, deliveryDate, notes, createdAt

**Payments**
- _id, orderId, amount, method, status, proof, processedAt, createdAt

**Notifications**
- _id, userId, type, title, message, read, createdAt, relatedId

---

## 🧪 Testing

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Manual Testing Checklist
- [ ] User registration and login
- [ ] JWT token generation and validation
- [ ] Project CRUD operations
- [ ] Inventory management
- [ ] Order processing
- [ ] Payment verification
- [ ] File uploads (images)
- [ ] Notifications delivery
- [ ] Role-based access control
- [ ] Error handling

---

## 📈 Performance Optimization

### Backend Optimization
- Database indexing on frequently queried fields
- Connection pooling with MongoDB
- Compression middleware (gzip)
- Response caching strategies
- Query pagination and limits

### Frontend Optimization
- Vite for fast bundle building
- Code splitting and lazy loading
- Component memoization
- Image optimization (AVIF format)
- Production build: `npm run build`

### Monitoring
- Request logging middleware
- Error tracking and reporting
- Database query performance monitoring
- API response time tracking

---

## 🤝 Contributing

### Development Workflow
1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

### Code Standards
- Use ESLint for code quality
- Follow naming conventions
- Write meaningful commit messages
- Add comments for complex logic
- Maintain consistent indentation (2 spaces)

### Pull Request Process
1. Update README with changes
2. Add tests for new features
3. Ensure all tests pass
4. Request review from maintainers

---

## 📝 Deployment

### Building for Production

**Backend:**
```bash
cd backend
npm install --production
NODE_ENV=production node server.js
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

### Environment Configuration for Production
```env
NODE_ENV=production
PORT=5000
JWT_SECRET=<use-strong-secret>
MONGODB_URI=<production-mongodb-uri>
FRONTEND_URL=<production-frontend-url>
```

### Deployment Platforms
- **Backend**: Heroku, Railway, Render, AWS EC2, Digital Ocean
- **Frontend**: Vercel, Netlify, GitHub Pages, AWS S3
- **Database**: MongoDB Atlas, AWS DocumentDB, Azure Cosmos DB

---

## 📞 Support & Documentation

### Getting Help
- 📧 Email: support@sitemaster.dev
- 💬 Issues: [GitHub Issues](https://github.com/TharukshaPramod/SiteMaster/issues)
- 📚 Documentation: [Full API Docs](./API_DOCS.md)

### Useful Resources
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Chakra UI Documentation](https://chakra-ui.com/)

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Author

**SiteMaster Development Team**
- 🌐 Portfolio: [yourportfolio.com](https://TharukshaPramod.com)
- 📧 Contact: your.email@example.com
- 💼 LinkedIn: [linkedin.com/in/TharukshaPramod](https://linkedin.com/in/TharukshaPramod)
- 🐙 GitHub: [@TharukshaPramod](https://github.com/TharukshaPramod)

---

## 🙏 Acknowledgments

Special thanks to:
- The open-source community
- Express.js and React communities
- MongoDB and Mongoose maintainers
- All contributors and testers

---

## 🚀 Future Roadmap

### Version 1.1 (Q2 2026)
- [ ] Real-time collaboration features with WebSocket
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Integration with external payment gateways
- [ ] Multi-language support

### Version 1.2 (Q3 2026)
- [ ] AI-powered project recommendations
- [ ] Automated document generation
- [ ] Integration with mapping services
- [ ] Advanced scheduling algorithms
- [ ] Cost prediction models

### Version 2.0 (Q4 2026)
- [ ] Blockchain integration for payments
- [ ] IoT device integration
- [ ] Machine learning-based insights
- [ ] Enterprise SSO integration
- [ ] Custom workflow builder

---

<div align="center">

### ⭐ If you find this project helpful, please give it a star!

**Made with ❤️ by the SiteMaster Team**

[⬆ Back to top](#-sitemaster---advanced-construction-management-system)

</div>
