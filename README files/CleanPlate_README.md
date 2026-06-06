# 🌿 clean plate - Mobile Shopping App

A modern, feature-rich Android application for ordering and managing organic food products. Built with Kotlin and Jetpack Compose, this app provides a seamless shopping experience with user authentication, personalized profiles, and intuitive food browsing.

[![Android](https://img.shields.io/badge/Android-13+-3DDC84?style=flat&logo=android)](https://www.android.com)
[![Kotlin](https://img.shields.io/badge/Kotlin-1.8+-7F52FF?style=flat&logo=kotlin)](https://kotlinlang.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Android-success)]()

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Architecture](#architecture)
- [Key Components](#key-components)
- [Usage Guide](#usage-guide)
- [Building & Running](#building--running)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Project Overview

**clean plate** is a mobile-first e-commerce application designed specifically for purchasing organic and health-conscious food products. The app emphasizes user experience with intuitive navigation, secure authentication, and personalized shopping features.

### Key Objectives:
- ✅ Provide a seamless shopping experience for organic food products
- ✅ Enable user authentication and profile management
- ✅ Offer personalized health goals tracking
- ✅ Simplify product discovery and purchase process
- ✅ Maintain secure cart and transaction management

---

## ✨ Features

### 🔐 **Authentication & Onboarding**
- Comprehensive onboarding flow (3-step tutorial)
- User sign-up and sign-in functionality
- Secure credential management
- Session persistence

### 🛒 **Shopping Features**
- Browse organic food products
- Detailed product information and reviews
- Shopping cart management
- Multiple payment options
- Order history tracking

### 👤 **User Profile Management**
- Personalized user profiles
- Health goals and dietary preferences
- Saved addresses and payment methods
- Order history and tracking
- Account settings and preferences

### 🎯 **Health & Goals**
- Personalized fitness and health aim page
- Dietary preference selection
- Nutritional information display
- Customized product recommendations

### 📱 **Modern UI/UX**
- Clean Material Design 3 interface
- Smooth animations and transitions
- Dark mode support
- Responsive layouts

---

## 🛠️ Tech Stack

### **Core Technologies**
| Component | Technology | Version |
|-----------|-----------|---------|
| **Language** | Kotlin | 1.8+ |
| **UI Framework** | Jetpack Compose | Latest |
| **Min SDK** | Android | 13 (API 33) |
| **Target SDK** | Android | 14 (API 34) |
| **Build System** | Gradle KTS | Latest |

### **Libraries & Dependencies**
- **AndroidX** - Core Android framework extensions
- **Jetpack Compose** - Modern declarative UI
- **Material Design 3** - Latest Material components
- **Kotlin Coroutines** - Asynchronous programming
- **DataStore** - Secure local data storage
- **Navigation** - Fragment and activity navigation

### **Testing**
- **JUnit** - Unit testing
- **Espresso** - UI testing
- **AndroidJUnit** - Instrumented testing

---

## 📁 Project Structure

```
OrganicFood-master/
├── app/
│   ├── build.gradle.kts                 # App-level Gradle configuration
│   ├── proguard-rules.pro              # ProGuard/R8 rules
│   └── src/
│       ├── main/
│       │   ├── AndroidManifest.xml      # App manifest
│       │   ├── java/com/example/organicfood/
│       │   │   ├── MainActivity.kt      # Main entry point & splash screen
│       │   │   ├── Onboard01.kt        # First onboarding screen
│       │   │   ├── Onboard02.kt        # Second onboarding screen
│       │   │   ├── Onboard03.kt        # Third onboarding screen
│       │   │   ├── SignUp.kt           # User registration
│       │   │   ├── SignIn.kt           # User login
│       │   │   ├── Home.kt             # Main shopping interface
│       │   │   ├── AimPage.kt          # Health goals & dietary preferences
│       │   │   ├── FoodDetailPage.kt   # Product details view
│       │   │   ├── CartPage.kt         # Shopping cart
│       │   │   ├── Profile.kt          # User profile management
│       │   │   └── ui/
│       │   │       └── theme/
│       │   │           ├── Color.kt     # Color palette
│       │   │           ├── Theme.kt     # Theme configuration
│       │   │           └── Type.kt      # Typography styles
│       │   └── res/
│       │       ├── drawable/           # Vector drawables
│       │       ├── layout/              # XML layouts
│       │       ├── mipmap-*/            # App icons (various densities)
│       │       ├── values/              # String resources, colors, styles
│       │       ├── values-night/        # Dark mode resources
│       │       └── xml/                 # Data backup & extraction rules
│       ├── test/                       # Unit tests
│       └── androidTest/                # Instrumented tests
├── gradle/                             # Gradle wrapper
├── build.gradle.kts                   # Root-level Gradle configuration
├── settings.gradle.kts                # Build settings
├── gradle.properties                  # Gradle properties
├── gradlew / gradlew.bat              # Gradle wrapper scripts
└── README.md                          # This file
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java Development Kit (JDK)** 8 or higher
- **Android Studio** 2022.1 or later (Arctic Fox or newer)
- **Android SDK** with target API 34
- **Git** for version control
- **Gradle** 8.0+ (bundled with Android Studio)

### System Requirements:
- RAM: 8GB minimum (16GB recommended)
- Disk Space: 10GB minimum for SDK and project
- Operating System: Windows, macOS, or Linux

---

## 🚀 Installation & Setup

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/TharukshaPramod/Clean-Plate.git
cd OrganicFood
```

### **Step 2: Open in Android Studio**

1. Launch Android Studio
2. Select **File** → **Open**
3. Navigate to the cloned `OrganicFood` directory
4. Click **OK** to open the project

### **Step 3: Configure SDK**

1. Go to **File** → **Project Structure**
2. Ensure:
   - **SDK Location** points to your Android SDK
   - **Gradle JDK** is set to JDK 11 or higher
   - **Gradle version** is 8.0+

### **Step 4: Build the Project**

```bash
# Using Gradle wrapper (Windows)
gradlew.bat build

# Using Gradle wrapper (macOS/Linux)
./gradlew build
```

### **Step 5: Create Emulator or Connect Device**

- **Virtual Device**: Android Studio → AVD Manager → Create emulator with API 33+
- **Physical Device**: Connect via USB with USB debugging enabled

---

## 🏗️ Architecture

### **MVVM Architecture Pattern**

The app follows the Model-View-ViewModel (MVVM) architectural pattern:

```
┌─────────────────────────────────────┐
│          UI Layer (Compose)          │
│  (Activities, Composables)          │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│      ViewModel Layer                │
│  (Business Logic, State Management) │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│      Repository Layer               │
│  (Data Abstraction)                │
└────────────────┬────────────────────┘
                 │
         ┌───────┴────────┐
         │                │
    ┌────▼─────┐  ┌──────▼────┐
    │   Local   │  │   Remote   │
    │ (DataStore)  │  (API)     │
    └───────────┘  └────────────┘
```

### **Key Architectural Principles:**

1. **Separation of Concerns** - UI, business logic, and data are separated
2. **Single Responsibility** - Each component has a single, well-defined purpose
3. **Testability** - Components are designed to be easily testable
4. **Reusability** - Common functionality is abstracted and reused
5. **Maintainability** - Clean code practices for long-term maintenance

---

## 🎯 Key Components

### **1. Activities**

| Activity | Purpose | Features |
|----------|---------|----------|
| `MainActivity` | Splash screen | 3-second delay before navigation |
| `Onboard01-03` | User onboarding | Feature introduction (3-step flow) |
| `SignUp` | User registration | Form validation, account creation |
| `SignIn` | User login | Credential verification |
| `Home` | Main shopping hub | Product listing, filtering, search |
| `AimPage` | Health goals | Dietary preferences, fitness goals |
| `FoodDetailPage` | Product details | Description, nutrition, reviews, price |
| `CartPage` | Shopping cart | Item management, checkout |
| `Profile` | User account | Profile info, settings, order history |

### **2. UI Theme**

- **Color System** ([Color.kt](app/src/main/java/com/example/organicfood/ui/theme/Color.kt))
  - Primary colors optimized for organic/natural feel
  - Support for light and dark modes

- **Typography** ([Type.kt](app/src/main/java/com/example/organicfood/ui/theme/Type.kt))
  - Scalable font system
  - Material Design 3 type scale

- **Theme Configuration** ([Theme.kt](app/src/main/java/com/example/organicfood/ui/theme/Theme.kt))
  - Centralized theme management
  - Dark/light mode support

### **3. Resources**

- **Drawable**: Vector graphics and custom drawables
- **Layouts**: XML-based UI definitions (XML layouts with Compose)
- **Values**: Strings, colors, dimensions, and styles
- **Mipmap**: App icons for all screen densities

---

## 📱 Usage Guide

### **User Journey:**

#### **First-Time Users:**
1. **Splash Screen** (3 seconds) → App introduction
2. **Onboarding** (3 screens) → Feature walkthrough
3. **Sign Up** → Create account with email/password
4. **Health Goals** (Aim Page) → Select dietary preferences
5. **Home** → Start browsing products

#### **Returning Users:**
1. **Splash Screen** → Quick redirect
2. **Sign In** → Login with credentials
3. **Home** → Browse and shop

#### **Shopping Workflow:**
1. **Browse** → Home page shows featured products
2. **Explore** → View product details (FoodDetailPage)
3. **Add to Cart** → Manage items in shopping cart
4. **Checkout** → Review and complete purchase
5. **Profile** → View order history and settings

---

## 🔨 Building & Running

### **Debug Build:**

```bash
# Build and run on emulator
gradlew.bat installDebug

# Or from Android Studio: Run → Run 'app'
```

### **Release Build:**

```bash
# Create release APK
gradlew.bat assembleRelease

# Output: app/build/outputs/apk/release/app-release.apk
```

### **Generate APK for Distribution:**

```bash
# Debug APK
gradlew.bat assembleDebug

# Release APK (requires signing)
gradlew.bat assembleRelease --gradle-user-home ~/.gradle
```

### **Running Tests:**

```bash
# Unit tests
gradlew.bat test

# Instrumented tests
gradlew.bat connectedAndroidTest

# Run specific test
gradlew.bat testDebugUnitTest
```

---

## 🔗 API Integration

### **Expected API Endpoints:**

```
Base URL: https://api.organicfood.com/v1/

Endpoints (to be implemented):
- POST   /auth/signup           # User registration
- POST   /auth/signin           # User login
- GET    /products              # Get product list
- GET    /products/{id}         # Get product details
- POST   /cart                  # Add to cart
- GET    /cart                  # Get cart items
- DELETE /cart/{itemId}         # Remove from cart
- POST   /orders                # Create order
- GET    /orders                # Get order history
- GET    /profile               # Get user profile
- PUT    /profile               # Update profile
```

### **Authentication:**
- Token-based (JWT recommended)
- Secure storage using DataStore
- Token refresh mechanism

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Code Style:**
- Follow Kotlin naming conventions
- Use meaningful variable/function names
- Add comments for complex logic
- Format code: `gradlew.bat spotlessApply`

### **Reporting Issues:**
- Use GitHub Issues for bug reports
- Provide detailed reproduction steps
- Include device/emulator information

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/OrganicFood/issues)
- **Email**: support@organicfood.com
- **Documentation**: [Wiki](https://github.com/yourusername/OrganicFood/wiki)

---

## 🙏 Acknowledgments

- Android Team for Jetpack Compose
- Material Design 3 guidelines
- Community contributors and testers
- Open-source libraries and frameworks

---

## 📈 Roadmap

### **Upcoming Features:**
- 🔄 Real-time order tracking
- 💳 Wallet integration
- ⭐ User reviews and ratings
- 🔔 Push notifications
- 📍 Location-based recommendations
- 🎁 Loyalty rewards program
- 💬 Live chat support
- 🌍 Multi-language support

### **Planned Improvements:**
- Performance optimization
- Offline mode support
- Enhanced security features
- Advanced filtering and search
- Social sharing capabilities

---

<div align="center">

**Made with ❤️ for organic food lovers**

**⭐ If you find this project helpful, please give it a star! ⭐**

</div>
