# 🍃 Leaft v5

[![Android](https://img.shields.io/badge/Android-34+-green?logo=android&logoColor=white)]()
[![Kotlin](https://img.shields.io/badge/Kotlin-1.9.0-blue?logo=kotlin&logoColor=white)]()
[![API](https://img.shields.io/badge/API-24%2B-brightgreen)]()
[![Gradle](https://img.shields.io/badge/Gradle-8.5.1-blue)]()
[![License](https://img.shields.io/badge/License-MIT-green)]()

A modern, feature-rich Android application demonstrating best practices in Material Design, Kotlin development, and contemporary Android architecture patterns.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Build & Run](#build--run)
- [Architecture](#architecture)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Leaft v5** is a comprehensive **Business & Financial Management Application** designed to help small to medium-sized business owners, retailers, and managers organize and track their operations efficiently. It combines modern Android development practices with practical business management features to provide an intuitive dashboard for managing sales, billing, suppliers, and business analytics.

### Key Highlights

- 📊 **Business Dashboard** - Real-time visualization of sales and revenue metrics
- 💰 **Billing Management** - Track and manage business invoices and payments
- 👥 **Supplier Management** - Organize and maintain supplier information
- 📋 **Records Management** - Store and retrieve important business documents
- 📈 **Analytics & Statistics** - Advanced data visualization and business insights
- 👤 **Account Management** - User profile and settings customization
- 🎨 **Modern UI/UX** - Material Design 3 compatible interface
- 📱 **Responsive Design** - ConstraintLayout for seamless multi-device support

---

## ✨ Features

### Business Features

- **📊 Dashboard** - Welcome screen with real-time sales and revenue bar charts
- **💳 Bills Management** - Track, create, and manage business invoices
- **👥 Suppliers Directory** - Maintain a comprehensive supplier contact list and details
- **📑 Records Module** - Organize and store business documents and records
- **📈 Statistics & Analytics** - Advanced data visualization with interactive charts
- **👤 User Profile** - Manage account information and personal settings
- **🔐 Account Management** - Login, logout, and security settings
- **⚙️ Settings & Support** - Customizable app preferences and support access

### Technical Features

- **Kotlin-First** - 100% Kotlin codebase with modern syntax
- **Fragment-Based Architecture** - Modular UI with NavigationView
- **Advanced Charting** - MPAndroidChart library for professional data visualization
- **Material Design 3** - Modern UI components and responsive layouts
- **Modern Gradle** - Kotlin DSL with centralized version catalogs
- **AndroidX Support** - Latest AndroidX libraries and best practices
- **Navigation Drawer** - Organized menu system with custom styling
- **ProGuard Protection** - Code obfuscation for release builds
- **Comprehensive Testing** - JUnit and Espresso test frameworks

---

## 🛠️ Tech Stack

### Core Technologies

| Component | Version | Purpose |
|-----------|---------|---------|
| **Android SDK** | 34 | Compile target SDK |
| **Kotlin** | 1.9.0 | Primary language |
| **Gradle** | 8.5.1 | Build system |
| **Java** | 1.8 | Bytecode target |

### Key Libraries

#### AndroidX & Foundation

```gradle
androidx-core-ktx          1.12.0    // Kotlin extensions for Android
androidx-appcompat         1.6.1     // Backward compatibility
androidx-activity          1.8.0     // Activity framework
androidx-constraintlayout   2.1.4     // Responsive layouts
```

#### Material Design

```gradle
material                   1.11.0    // Material Design components
```

#### Data Visualization

```gradle
MPAndroidChart            3.1.0     // Advanced charting library
circleimageview           3.1.0     // Custom circular image views
```

#### Testing

```gradle
junit                     4.13.2    // Unit testing framework
androidx-junit            1.1.5     // AndroidX JUnit extension
androidx-espresso-core    3.5.1     // UI testing framework
```

---

## 📁 Project Structure

```
Leaft_v5/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── AndroidManifest.xml       # App configuration
│   │   │   ├── java/                     # Kotlin source code
│   │   │   └── res/                      # Resources (layouts, strings, etc.)
│   │   ├── test/                         # Unit tests
│   │   └── androidTest/                  # Instrumented tests
│   ├── build.gradle.kts                  # App-level build configuration
│   └── proguard-rules.pro                # ProGuard rules
├── gradle/
│   └── libs.versions.toml                # Centralized dependency versions
├── build.gradle.kts                      # Root build configuration
├── settings.gradle.kts                   # Project settings
├── local.properties                      # Local SDK configuration
└── README.md                             # This file
```

### Directory Details

- **app/** - Application module containing all source code
- **src/main/** - Main application source and resources
- **src/test/** - Unit test files
- **src/androidTest/** - Instrumented Android tests
- **res/** - Android resources (layouts, drawables, strings, etc.)
- **gradle/** - Gradle build scripts and version catalog

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### System Requirements

- **OS**: Windows, macOS, or Linux
- **RAM**: Minimum 8GB (16GB recommended)
- **Disk Space**: 10GB minimum

### Required Software

| Software | Minimum Version | Recommended Version |
|----------|-----------------|-------------------|
| JDK | 11 | 17 (LTS) |
| Android SDK | API 24 | API 34+ |
| Android Studio | 2023.1 | Latest stable |
| Gradle | 8.0 | 8.5.1+ |

### Android SDK Components

```
- Android SDK Build Tools 34.0.0+
- Android SDK Platform 34
- Android SDK Platform 24 (minimum API level)
- Google APIs (recommended)
- Emulator (optional)
```

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/TharukshaPramod/Leaft-V5.git
cd Leaft_v5
```

### Step 2: Configure Android SDK

Create or update `local.properties`:

```properties
sdk.dir=/path/to/Android/sdk
```

**Windows Example:**
```properties
sdk.dir=C:\\Users\\YourUsername\\AppData\\Local\\Android\\sdk
```

**macOS/Linux Example:**
```properties
sdk.dir=/Users/YourUsername/Library/Android/sdk
```

### Step 3: Sync Gradle

```bash
./gradlew sync
# or on Windows
gradlew.bat sync
```

### Step 4: Verify Installation

```bash
./gradlew --version
# or on Windows
gradlew.bat --version
```

---

## 🔨 Build & Run

### Building the Application

#### Debug Build
```bash
./gradlew assembleDebug
# or on Windows
gradlew.bat assembleDebug
```

#### Release Build
```bash
./gradlew assembleRelease
# or on Windows
gradlew.bat assembleRelease
```

### Running on Device/Emulator

#### Via Android Studio
1. Click **Run** (Shift + F10) in Android Studio
2. Select target device or emulator
3. Click **OK**

#### Via Command Line
```bash
./gradlew installDebug
adb shell am start -n com.example.leaft_v5/.MainActivity

# or on Windows
gradlew.bat installDebug
adb shell am start -n com.example.leaft_v5/.MainActivity
```

### Build Output Locations

- **Debug APK**: `app/build/outputs/apk/debug/app-debug.apk`
- **Release APK**: `app/build/outputs/apk/release/app-release.apk`

---

## 🏗️ Architecture

### Application Architecture Pattern

The Leaft v5 project follows a **modular, activity-based architecture** with modern Android best practices:

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│  (Activities, Fragments, ViewModels) │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│          Business Logic Layer        │
│   (Use Cases, Repository Pattern)    │
└─────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────┐
│           Data Layer                │
│    (Local DB, API, Preferences)     │
└─────────────────────────────────────┘
```

### Key Architectural Components

- **MainActivity** - Main activity hosting navigation drawer and fragment container
- **Fragment-Based UI** - Modular screens for different business modules:
  - HomeFragment (Dashboard)
  - BillsFragment (Billing)
  - SuppliersFragment (Supplier Management)
  - RecordsFragment (Document Storage)
  - StatisticsFragment (Analytics)
  - ProfileFragment (User Account)
- **Navigation Drawer** - Quick access to all modules
- **ConstraintLayout** - Flexible, responsive layout system
- **Custom Views** - Circular image views for profile displays
- **AndroidX Lifecycle** - Proper resource management

---

## 📚 Dependencies

### Dependency Management

This project uses **Gradle Version Catalogs** for centralized dependency management in `gradle/libs.versions.toml`.

### Adding New Dependencies

To add a new dependency:

1. **Add to version catalog:**
   ```toml
   [versions]
   your_lib = "1.0.0"
   
   [libraries]
   your-lib = { group = "com.example", name = "your-lib", version.ref = "your_lib" }
   ```

2. **Use in build.gradle.kts:**
   ```kotlin
   dependencies {
       implementation(libs.your.lib)
   }
   ```

### Third-Party Libraries

#### MPAndroidChart
- **Purpose**: Advanced data visualization and charting
- **Repository**: [GitHub](https://github.com/PhilJay/MPAndroidChart)
- **Docs**: [Official Documentation](https://weeklycoding.com/mpandroidchart/)

#### CircleImageView
- **Purpose**: Circular image view component
- **Repository**: [GitHub](https://github.com/hdodenhof/CircleImageView)

---

## 🧪 Testing

### Running Tests

#### Unit Tests
```bash
./gradlew testDebugUnitTest
# or on Windows
gradlew.bat testDebugUnitTest
```

#### Instrumented Tests
```bash
./gradlew connectedAndroidTest
# or on Windows
gradlew.bat connectedAndroidTest
```

### Test Structure

- **Unit Tests**: `app/src/test/java/` - Fast, isolated tests
- **Instrumented Tests**: `app/src/androidTest/java/` - Device/emulator tests

### Test Configuration

```
testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
```

---

## 🔒 Security & Optimization

### ProGuard Configuration

The project includes ProGuard rules for code obfuscation in release builds:

```gradle
buildTypes {
    release {
        isMinifyEnabled = true
        proguardFiles(
            getDefaultProguardFile("proguard-android-optimize.txt"),
            "proguard-rules.pro"
        )
    }
}
```

### API Level Support

- **Minimum API**: 24 (Android 7.0)
- **Target API**: 34 (Android 14)
- **Compile API**: 34 (Android 14)

---

## 📱 Device Support

### Supported Devices

- **Phones**: All modern Android phones with API 24+
- **Tablets**: Full support with responsive layouts
- **Form Factors**: Handsets and tablets

### Supported Languages

- RTL (Right-to-Left) layout support enabled
- Multi-language ready with strings resources

---

## 🤝 Contributing

We welcome contributions to Leaft v5! This project is ideal for business management solutions and is actively seeking contributors to enhance features, add new modules, and improve performance.

### Contribution Areas

- **New Business Features** - Expense tracking, inventory management, reporting modules
- **UI/UX Improvements** - Enhanced dashboards, new visualizations
- **Backend Integration** - Cloud sync, database integration, API connectivity
- **Performance Optimization** - Faster data processing and rendering
- **Localization** - Multi-language support for international users

### Contribution Guidelines

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Commit** your changes: `git commit -m 'Add some feature'`
4. **Push** to the branch: `git push origin feature/your-feature`
5. **Submit** a Pull Request

### Code Style

- Follow Kotlin official style guide
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and single-responsibility
- Test your changes thoroughly

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions.
```

---

## 🔗 Resources & References

### Official Documentation

- [Android Developer Docs](https://developer.android.com/docs)
- [Kotlin Official Website](https://kotlinlang.org/docs/)
- [Material Design Guidelines](https://m3.material.io/)
- [AndroidX Libraries](https://developer.android.com/jetpack/androidx/releases)

### Useful Tools

- [Android Studio](https://developer.android.com/studio)
- [Android Emulator](https://developer.android.com/studio/run/emulator)
- [Gradle Documentation](https://gradle.org/documentation/)
- [Kotlin Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)

---

## 📞 Support & Feedback

### Getting Help

- 📧 **Email**: support@example.com
- 💬 **Issues**: [GitHub Issues](https://github.com/yourusername/Leaft_v5/issues)
- 🐦 **Twitter**: [@YourHandle](https://twitter.com/)

### Report Issues

Please use the [GitHub Issue Tracker](https://github.com/yourusername/Leaft_v5/issues) to report bugs and suggest features.

---

## 🎉 Acknowledgments

- Android community for best practices and guidance
- Material Design team for design guidelines
- All contributors and users of this project

---

<div align="center">

**Made with ❤️ by the Leaft Team**

[⬆ Back to top](#-leaft-v5)

</div>
