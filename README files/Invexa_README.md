# 🚀 Invexa - Advanced Inventory & E-Commerce Management System

> A modern, full-stack enterprise-grade solution for comprehensive inventory management, order processing, supplier coordination, and financial analytics with integrated payment gateway support.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.0+-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.15+-brightgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21+-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-latest-9966ff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 📌 Project Overview

**Invexa** is a comprehensive, enterprise-grade inventory and e-commerce management platform designed to streamline operations for businesses of all sizes. The system provides real-time inventory tracking, order management, supplier coordination, financial analytics, and integrated payment processing through PayHere payment gateway.

### 🎯 Problem Statement

Organizations struggle with:
- **Fragmented inventory management** across multiple channels
- **Manual order processing** leading to errors and delays
- **Lack of real-time visibility** into stock levels and financial metrics
- **Complex supplier relationships** without centralized coordination
- **Payment reconciliation challenges** without proper tracking

### ✨ Solution

Invexa provides a unified, intuitive platform that:
- Centralizes all inventory operations in one dashboard
- Automates order and payment processing
- Provides real-time analytics and financial insights
- Streamlines supplier and purchase management
- Enables efficient return and refund management

---

## 🌟 Key Features

### 📦 **Inventory Management**
- Real-time stock tracking and updates
- Multi-category product organization
- Automated low-stock alerts
- Bulk inventory import/export capabilities
- Stock movement history and audit logs
- Batch and serial number tracking support

### 🛒 **Order Processing**
- Complete order lifecycle management (creation → fulfillment → delivery)
- Order status tracking and notifications
- Support for multiple order types and priorities
- Order history and archival
- Customer order tracking portal

### 💰 **Payment Integration**
- PayHere payment gateway integration
- Secure transaction processing
- Payment status tracking and reconciliation
- Multiple payment method support
- Refund management and processing
- Payment history and receipts generation

### 👥 **Supplier Management**
- Comprehensive supplier directory
- Purchase order creation and tracking
- Supplier performance analytics
- Contact management and communication history
- Purchase history and pricing comparison

### 📊 **Financial & Analytics Dashboard**
- Real-time sales and revenue analytics
- Profit margin analysis
- Expense tracking and categorization
- Cash flow projections
- Custom report generation (PDF export)
- Key performance indicators (KPIs) visualization
- Trend analysis and forecasting

### 💵 **Price Management**
- Dynamic selling price configuration
- Cost-based pricing automation
- Bulk price updates
- Price history tracking
- Margin optimization tools
- Promotional pricing support

### ↩️ **Return & Refund Management**
- Streamlined return request workflow
- Refund processing and tracking
- Return reason categorization
- Refund status notifications
- Return analytics and insights

### 👨‍💼 **Multi-Role Admin Panel**
- Role-based access control (RBAC)
- Admin user management
- Activity audit logs
- Secure authentication with JWT
- Admin dashboard with key metrics

### 📱 **Responsive Design**
- Fully responsive admin dashboard
- Mobile-optimized interfaces
- Progressive web app (PWA) ready
- Accessibility compliance (WCAG 2.1)

---

## 🛠 Technology Stack

### **Frontend (Admin Dashboard)**
| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI framework | ^19.0.0 |
| **Vite** | Build tool & dev server | Latest |
| **React Router DOM** | Client-side routing | ^7.4.0 |
| **Tailwind CSS** | Utility-first CSS framework | ^4.0 |
| **Material-UI (MUI)** | Component library | ^6.4.11 |
| **Recharts** | Data visualization | ^2.15.3 |
| **Chart.js** | Advanced charting | ^4.4.9 |
| **React Hook Form** | Form state management | ^7.56.1 |
| **Axios** | HTTP client | ^1.8.4 |
| **jsPDF** | PDF generation | ^3.0.1 |
| **Lucide React** | Icon library | ^0.506.0 |
| **React Toastify** | Toast notifications | ^11.0.5 |

### **Backend API**
| Technology | Purpose | Version |
|-----------|---------|---------|
| **Node.js** | Runtime environment | v18+ |
| **Express.js** | Web framework | ^4.21.2 |
| **MongoDB** | NoSQL database | ^6.15.0 |
| **Mongoose** | ODM for MongoDB | ^8.12.1 |
| **JWT** | Authentication | ^9.0.2 |
| **Bcrypt** | Password hashing | ^5.1.1 |
| **Cloudinary** | Image storage & CDN | ^1.41.3 |
| **Multer** | File upload handling | ^1.4.5-lts.2 |
| **Cors** | Cross-origin requests | ^2.8.5 |
| **dotenv** | Environment variables | ^16.5.0 |
| **Express Validator** | Input validation | ^7.2.1 |
| **PDFKit** | PDF generation | ^0.17.0 |
| **Nodemon** | Development auto-reload | ^3.1.9 |

### **DevOps & Tools**
- **Docker** (optional containerization)
- **Git** (version control)
- **ESLint** (code linting)
- **Vite** (fast build system)
- **Postman/Thunder Client** (API testing)

---

## 📁 Project Structure

```
Invexa/
├── 📂 admin/                          # Admin Dashboard (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ReturnsList.jsx
│   │   │   └── ReturnDetails.jsx
│   │   ├── pages/
│   │   │   ├── Order.jsx
│   │   │   ├── AddProduct.jsx
│   │   │   ├── ViewInventory.jsx
│   │   │   ├── CreateList.jsx
│   │   │   ├── ReceiveProducts.jsx
│   │   │   ├── StockDashboard.jsx
│   │   │   ├── PriceManager.jsx
│   │   │   ├── AdminFinancialDashboard.jsx
│   │   │   ├── TransactionDetails.jsx
│   │   │   ├── ReturnAndRefundDashboard.jsx
│   │   │   ├── SupplierForm.jsx
│   │   │   └── SupplierList.jsx
│   │   ├── assets/
│   │   ├── utils/
│   │   │   └── axiosConfig.jsx       # Axios instance configuration
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── eslint.config.js
│   └── index.html
│
├── 📂 backend/                        # Node.js + Express API Server
│   ├── config/
│   │   ├── mongodb.js                 # MongoDB connection
│   │   ├── cloudinary.js              # Cloudinary CDN config
│   │   └── multer.js                  # File upload config
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── productController.js
│   │   ├── categoryController.js
│   │   ├── orderController.js
│   │   ├── purchaseController.js
│   │   ├── supplierController.js
│   │   ├── paymentController.js
│   │   ├── payhereController.js       # PayHere integration
│   │   ├── refundController.js
│   │   ├── returnController.js
│   │   ├── sellingPriceController.js
│   │   ├── dashboardController.js
│   │   └── analyticsController.js
│   ├── middleware/
│   │   ├── authMiddleware.js          # JWT authentication
│   │   ├── adminAuth.js               # Admin authorization
│   │   └── upload.js                  # File upload middleware
│   ├── models/
│   │   ├── userModel.js
│   │   ├── Product.js
│   │   ├── category.js
│   │   ├── orderModel.js
│   │   ├── PurchaseEntry.js
│   │   ├── PurchaseRequest.js
│   │   ├── Supplier.js
│   │   ├── Payment.js
│   │   ├── Refund.js
│   │   ├── ReturnRequest.js
│   │   ├── SellingPrice.js
│   │   ├── Stock.js
│   │   └── category.js
│   ├── routes/
│   │   ├── useRoute.js
│   │   ├── productRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── purchaseRoutes.js
│   │   ├── supplierRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── refundRoutes.js
│   │   ├── returnRoutes.js
│   │   ├── sellingPriceRoutes.js
│   │   ├── analyticsRoutes.js
│   │   └── dashboard.js
│   ├── uploads/                       # Local file storage
│   ├── quotations/                    # Generated quotation files
│   ├── package.json
│   ├── server.js                      # Express app entry point
│   └── .env.example
│
├── 📂 frontend/                       # Customer-facing Frontend (Optional)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   └── index.html
│
└── 📄 README.md                       # This file
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** (v9 or higher)
- **MongoDB** (v6 or higher) - [Setup Guide](https://docs.mongodb.com/manual/installation/)
  - Or use **MongoDB Atlas** (cloud-hosted) - [Free Tier](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** - [VS Code](https://code.visualstudio.com/) recommended

### Verify Installation

```bash
# Check Node.js version
node --version      # Should be v18 or higher

# Check npm version
npm --version       # Should be v9 or higher

# Check MongoDB (if installed locally)
mongod --version
```

---

## ⚙️ Installation & Setup

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/yourusername/invexa.git
cd invexa
```

### 2️⃣ **Backend Setup**

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (see Environment Configuration section)
cp .env.example .env

# Verify all dependencies are installed
npm list

# Test backend startup (development mode with auto-reload)
npm run server

# Or for production
npm start
```

**Expected Output:**
```
✓ Connected to MongoDB
✓ Cloudinary connected
✓ Server running on http://localhost:4001
```

### 3️⃣ **Admin Dashboard Setup**

```bash
# Navigate to admin directory
cd ../admin

# Install dependencies
npm install

# Verify all dependencies are installed
npm list

# Start development server
npm run dev

# Build for production
npm run build
```

**Expected Output:**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### 4️⃣ **Frontend Setup (Optional)**

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🔐 Environment Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=4001
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/invexa?retryWrites=true&w=majority
# Alternative for local MongoDB:
# MONGODB_URI=mongodb://localhost:27017/invexa

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRY=7d

# Cloudinary (Image Storage & CDN)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# PayHere Payment Gateway
PAYHERE_MERCHANT_ID=your_merchant_id
PAYHERE_MERCHANT_SECRET=your_merchant_secret
PAYHERE_RETURN_URL=http://localhost:5173/payment-success
PAYHERE_NOTIFY_URL=http://localhost:4001/api/payment/notify
PAYHERE_CANCEL_URL=http://localhost:5173/payment-cancel

# File Upload Configuration
MAX_FILE_SIZE=5242880  # 5MB in bytes
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,application/pdf

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Admin Credentials (for seeding - optional)
ADMIN_EMAIL=admin@invexa.com
ADMIN_PASSWORD=your_secure_password
```

### Admin Frontend Environment Variables

Create a `.env.local` file in the `admin/` directory (if needed):

```env
VITE_API_BASE_URL=http://localhost:4001/api
VITE_APP_NAME=Invexa Admin Dashboard
```

### Getting Required Credentials

#### 🗄️ **MongoDB Atlas Setup**
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Generate connection string
5. Replace `username`, `password`, and `cluster` in `MONGODB_URI`

#### 📸 **Cloudinary Setup**
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Go to Dashboard
3. Copy API Key and API Secret
4. Cloud Name is your unique identifier

#### 💳 **PayHere Setup**
1. Register at [PayHere](https://www.payhere.lk/)
2. Complete merchant verification
3. Get Merchant ID and Secret from Dashboard
4. Configure return URLs for your application

---

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/user/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "user"
}

Response: 200 OK
{
  "success": true,
  "message": "User created successfully",
  "userId": "user_id"
}
```

#### Login
```http
POST /api/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response: 200 OK
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Product Endpoints

#### Get All Products
```http
GET /api/products
Authorization: Bearer <token>

Response: 200 OK
[
  {
    "_id": "product_id",
    "name": "Product Name",
    "category": "category_id",
    "productId": "PRD-ABC123456",
    "description": "Product description",
    "images": ["image_url_1", "image_url_2"],
    "createdAt": "2024-01-20T10:30:00Z"
  }
]
```

#### Create Product
```http
POST /api/products
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "name": "New Product",
  "category": "category_id",
  "description": "Product description",
  "images": [file1, file2]
}

Response: 201 Created
{
  "success": true,
  "product": { ... }
}
```

#### Get Product by ID
```http
GET /api/products/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "_id": "product_id",
  "name": "Product Name",
  ...
}
```

#### Update Product
```http
PUT /api/products/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Product Name",
  "description": "Updated description"
}
```

#### Delete Product
```http
DELETE /api/products/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Product deleted successfully"
}
```

### Order Endpoints

#### Get All Orders
```http
GET /api/orders
Authorization: Bearer <token>

Query Parameters:
- status: pending|processing|shipped|delivered|cancelled
- sortBy: createdAt|updatedAt
- limit: 10
- page: 1
```

#### Create Order
```http
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "productId": "product_id",
      "quantity": 2,
      "price": 100
    }
  ],
  "totalAmount": 200,
  "customerEmail": "customer@example.com"
}
```

#### Update Order Status
```http
PATCH /api/orders/:id/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "shipped"
}
```

### Payment Endpoints

#### Initiate Payment (PayHere)
```http
POST /api/payment/initiate
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderId": "order_id",
  "amount": 1500.00,
  "description": "Order Payment"
}

Response: 200 OK
{
  "success": true,
  "paymentUrl": "https://payhere.lk/pay/..."
}
```

#### Payment Callback/Webhook
```http
POST /api/payment/notify
Content-Type: application/x-www-form-urlencoded

(PayHere will send callback here)
```

### Analytics Endpoints

#### Get Dashboard Analytics
```http
GET /api/analytics/dashboard
Authorization: Bearer <token>

Query Parameters:
- startDate: 2024-01-01
- endDate: 2024-01-31
- timeframe: daily|weekly|monthly

Response: 200 OK
{
  "totalRevenue": 50000,
  "totalOrders": 150,
  "totalCustomers": 45,
  "averageOrderValue": 333.33,
  "trends": { ... },
  "topProducts": [ ... ]
}
```

---

## 🚀 Development

### Running All Services (Recommended)

**Terminal 1 - Backend:**
```bash
cd backend
npm run server
```

**Terminal 2 - Admin Dashboard:**
```bash
cd admin
npm run dev
```

**Terminal 3 (Optional) - Frontend:**
```bash
cd frontend
npm run dev
```

### Code Quality & Linting

```bash
# Lint admin dashboard
cd admin
npm run lint

# Check for linting errors
npm run lint -- --fix
```

### Development Best Practices

1. **Code Style**
   - Follow ESLint configuration
   - Use consistent naming conventions
   - Comment complex logic

2. **Git Workflow**
   ```bash
   # Create feature branch
   git checkout -b feature/feature-name
   
   # Commit changes
   git add .
   git commit -m "feat: description of changes"
   
   # Push to repository
   git push origin feature/feature-name
   
   # Create pull request on GitHub
   ```

3. **Testing (Recommended)**
   - Test API endpoints with Postman
   - Verify form validation
   - Check responsive design on mobile

### Common Development Commands

```bash
# Backend
npm run server          # Start with auto-reload (nodemon)
npm start              # Start production mode

# Admin Dashboard
npm run dev            # Start dev server with hot reload
npm run build          # Create production build
npm run preview        # Preview production build locally

# Frontend (if used)
npm run dev            # Start dev server
npm run build          # Create production build
```

---

## 🌍 Deployment

### Backend Deployment (Node.js)

#### Option 1: **Heroku**
```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create new app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_url
heroku config:set JWT_SECRET=your_secret
heroku config:set CLOUDINARY_NAME=your_name
# ... set other env vars

# Deploy
git push heroku main
```

#### Option 2: **Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Add environment variables in Railway dashboard

# Deploy
railway up
```

#### Option 3: **Render**
1. Connect your GitHub repository
2. Create new Web Service
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

### Frontend Deployment (Static Hosting)

#### Option 1: **Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd admin
vercel

# Follow prompts to deploy
```

#### Option 2: **Netlify**
```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Option 3: **GitHub Pages**
```bash
# Update vite.config.js for GitHub Pages
# base: '/invexa-admin/'

# Build
npm run build

# Deploy using GitHub Actions
```

### Docker Deployment (Optional)

**Backend Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 4001
CMD ["npm", "start"]
```

**Build and run:**
```bash
docker build -t invexa-backend .
docker run -p 4001:4001 --env-file .env invexa-backend
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   ```bash
   git clone https://github.com/TharukshaPramod/invexa.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Provide clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed
- Be respectful and constructive

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

### Getting Help

- **GitHub Issues** - [Report bugs or request features](https://github.com/TharukshaPramod/invexa/issues)
- **Email Support** - support@invexa.com
- **Documentation** - Check [docs/](docs/) folder for detailed guides
- **FAQ** - Common questions and answers

### Troubleshooting

#### MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
**Solution:**
- Ensure MongoDB is running (`mongod`)
- Check `MONGODB_URI` in `.env`
- Verify network access for MongoDB Atlas

#### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::4001
```
**Solution:**
```bash
# Find process using port 4001
lsof -i :4001

# Kill process
kill -9 <PID>

# Or use different port
PORT=4002 npm run server
```

#### CORS Error
```
Error: Access to XMLHttpRequest blocked by CORS policy
```
**Solution:**
- Ensure `CORS` is enabled in `backend/server.js`
- Check frontend URL in CORS configuration
- Verify API base URL in frontend `.env`

#### Cloudinary Upload Error
```
Error: Unauthorized
```
**Solution:**
- Verify Cloudinary credentials in `.env`
- Check file size limits
- Ensure file type is allowed

---

## 🗺️ Roadmap

### Version 1.0 (Current)
- ✅ Core inventory management
- ✅ Order processing
- ✅ Payment integration (PayHere)
- ✅ Admin dashboard
- ✅ Supplier management

### Version 1.1 (Planned)
- 📅 Mobile app (React Native)
- 📅 Advanced inventory forecasting
- 📅 Email notifications
- 📅 SMS alerts
- 📅 Multi-language support

### Version 2.0 (Future)
- 🔮 AI-powered inventory optimization
- 🔮 Warehouse management system (WMS)
- 🔮 B2B marketplace integration
- 🔮 Real-time inventory sync
- 🔮 Advanced BI & reporting

---

## 📊 Key Metrics & Performance

| Metric | Target | Status |
|--------|--------|--------|
| Page Load Time | < 2s | ✅ |
| API Response Time | < 200ms | ✅ |
| Database Query Time | < 100ms | ✅ |
| Mobile Responsiveness | 100% | ✅ |
| Browser Support | Modern (Chrome, Firefox, Safari, Edge) | ✅ |

---

## 🔒 Security

- **JWT-based authentication** with 7-day expiry
- **Password hashing** using bcryptjs
- **CORS protection** for cross-origin requests
- **Input validation** using express-validator
- **File upload security** with type & size restrictions
- **Environment variables** for sensitive data
- **HTTPS-ready** deployment configuration

---

## 📞 Contact & Social

- **GitHub** - [github.com/TharukshaPramod/invexa](https://github.com/)
- **Email** - admin@invexa.com
- **Website** - https://invexa.com (future)

---

## 🙏 Acknowledgments

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Community](https://expressjs.com/)
- [React Official Docs](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [PayHere Integration Docs](https://www.payhere.lk/developer)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

---

<div align="center">

### Made with ❤️ for modern business management

**[⬆ back to top](#-invexa---advanced-inventory--e-commerce-management-system)**

</div>
