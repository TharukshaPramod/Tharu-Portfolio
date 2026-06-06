# MediBook 📱

A modern, feature-rich Android application for managing medical appointments and specialist information with an intuitive user interface and intelligent scheduling system.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Installation & Setup](#installation--setup)
- [Building & Deployment](#building--deployment)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**MediBook** is a comprehensive Android application designed to help users efficiently manage their medical appointments and maintain organized records of their healthcare specialists. The app provides a seamless experience for scheduling, tracking, and managing medical appointments with advanced categorization and priority management.

**Target API Level:** 26+ (Android 8.0+)  
**Compile SDK:** 32 (Android 12)  
**Current Version:** 1.0

---

## ✨ Features

### Core Functionality
- 📅 **Appointment Management** - Create, edit, and delete medical appointments with detailed information
- 👨‍⚕️ **Specialist Management** - Organize specialists into custom categories with color-coded organization
- ✅ **Task Tracking** - Mark appointments as completed and view completion history
- 🎯 **Priority System** - Set appointment priorities (Low, Medium, High) for better organization
- 🔔 **Smart Notifications** - Receive timely reminders for upcoming appointments via broadcast receivers
- 📱 **Responsive UI** - Modern Material Design with dark/light theme support
- 🎬 **Smooth Animations** - Beautiful Lottie animations for visual feedback and engagement

### Advanced Features
- 🗂️ **Specialist Categories** - Group medical professionals by specialty with custom color coding
- 🎨 **Customizable Theme** - Support for both light and dark modes
- 🧭 **Navigation Drawer** - Easy access to different sections of the app
- 📊 **Task Organization** - Separate views for upcoming and completed appointments
- ⚙️ **Settings Panel** - Customize app preferences and notifications
- 🔐 **Secure Data Handling** - ProGuard code obfuscation in release builds

---

## 🛠️ Tech Stack

### Android Framework & Architecture
- **Language:** Kotlin
- **Target Framework:** Android 12 (API 32)
- **Minimum SDK:** API 26 (Android 8.0)

### Core Libraries
- **AndroidX Core** (1.8.0) - Core Android components and backward compatibility
- **AppCompat** (1.5.1) - Support for older Android versions
- **ConstraintLayout** (2.1.4) - Flexible and responsive layouts
- **Material Design** (1.6.1) - Modern UI components and Material Design 3 support

### Navigation & UI
- **Navigation Architecture Components** (2.5.3)
  - Fragment navigation with SafeArgs for type-safe argument passing
  - Navigation drawer and bottom navigation support
- **RecyclerView** (1.2.1) - Efficient list and grid views
- **Lottie** (5.2.0) - High-performance JSON animations
- **Color Picker** (0.0.15) - Custom color selection for category management

### Data & Dependency Injection
- **Hilt** (2.44) - Compile-time dependency injection framework
- **Coroutines** (1.5.0 core, 1.6.1 Android) - Asynchronous programming and concurrency
- **Gson** (2.8.9) - JSON serialization and deserialization

### Lifecycle Management
- **Lifecycle Components** (2.5.1)
  - ViewModel for state management
  - LiveData for observable data with lifecycle awareness
  - Lifecycle-aware coroutines

### Play Services & Features
- **Google Play Review API** (2.0.1) - In-app review functionality
- **Google Play Review KTX** (2.0.1) - Kotlin extensions for review API

### Testing
- **JUnit** (4.x) - Unit testing framework
- **Espresso** (3.4.0) - UI testing framework
- **Hilt Testing** (2.44) - Dependency injection in tests

---

## 🏗️ Architecture

MediBook follows the **Clean Architecture** pattern combined with **MVVM (Model-View-ViewModel)** principles to ensure scalability, testability, and maintainability.

### Architecture Layers

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│  (Activities, Fragments, ViewModels)    │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│          Domain Layer                   │
│  (Use Cases, Repositories, Entities)    │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│          Data Layer                     │
│  (Database, Network, Local Storage)     │
└─────────────────────────────────────────┘
```

### Key Architectural Decisions

1. **Dependency Injection** - Hilt manages all dependencies, promoting loose coupling
2. **State Management** - ViewModel and LiveData handle UI state and lifecycle awareness
3. **Reactive Programming** - Coroutines provide efficient asynchronous operations
4. **Navigation** - Navigation Architecture Components for type-safe navigation
5. **Data Binding** - ViewDataBinding enables declarative layouts with automatic updates

---

## 📂 Project Structure

```
MediBook/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/medimingle/
│   │   │   │   ├── presentation/          # UI Layer (Activities, Fragments, ViewModels)
│   │   │   │   │   └── di/                # Dependency Injection modules
│   │   │   │   ├── domain/                # Business logic layer (Use Cases)
│   │   │   │   ├── data/                  # Data layer (Repositories, Database)
│   │   │   │   ├── GetStarted.kt          # Get Started screen
│   │   │   │   ├── Landing.kt             # Landing/Login screen
│   │   │   │   ├── Signup.kt              # Registration screen
│   │   │   │   ├── OnboardScreen1.kt      # Onboarding screen 1
│   │   │   │   ├── OnboardScreen2.kt      # Onboarding screen 2
│   │   │   │   └── OnboardScreen3.kt      # Onboarding screen 3
│   │   │   │
│   │   │   ├── res/
│   │   │   │   ├── layout/                # XML layout files
│   │   │   │   │   ├── activity_main.xml
│   │   │   │   │   ├── activity_landing.xml
│   │   │   │   │   ├── fragment_new_task.xml
│   │   │   │   │   ├── fragment_completed_tasks.xml
│   │   │   │   │   ├── fragment_task_category.xml
│   │   │   │   │   └── fragment_settings.xml
│   │   │   │   │
│   │   │   │   ├── drawable/              # Vector drawables and resources
│   │   │   │   ├── drawable-night/        # Dark theme resources
│   │   │   │   ├── drawable-v24/          # API 24+ specific resources
│   │   │   │   ├── anim/                  # Animation definitions
│   │   │   │   │   ├── slide_up.xml
│   │   │   │   │   ├── slide_down.xml
│   │   │   │   │   ├── slide_recview.xml
│   │   │   │   │   └── layout_animation.xml
│   │   │   │   │
│   │   │   │   ├── menu/                  # Menu definitions
│   │   │   │   │   └── activity_main_drawer.xml
│   │   │   │   │
│   │   │   │   ├── navigation/            # Navigation graphs
│   │   │   │   │   └── nav_graph.xml
│   │   │   │   │
│   │   │   │   ├── raw/                   # JSON animations (Lottie)
│   │   │   │   │   ├── categoryanim.json
│   │   │   │   │   ├── noresultanim.json
│   │   │   │   │   ├── taskaanim.json
│   │   │   │   │   └── taskbanim.json
│   │   │   │   │
│   │   │   │   ├── values/                # String, color, dimension resources
│   │   │   │   │   ├── strings.xml
│   │   │   │   │   ├── colors.xml
│   │   │   │   │   ├── dimens.xml
│   │   │   │   │   └── themes.xml
│   │   │   │   │
│   │   │   │   ├── values-night/          # Dark theme values
│   │   │   │   ├── values-land/           # Landscape layout values
│   │   │   │   ├── values-w600dp/         # 600dp+ width resources
│   │   │   │   ├── values-w1240dp/        # 1240dp+ width resources
│   │   │   │   └── mipmap-*/              # App icons (hdpi, mdpi, xhdpi, xxhdpi, xxxhdpi)
│   │   │   │
│   │   │   └── AndroidManifest.xml        # App configuration and permissions
│   │   │
│   │   ├── androidTest/                   # Instrumented tests
│   │   └── test/                          # Unit tests
│   │
│   ├── build.gradle                       # App-level build configuration
│   └── proguard-rules.pro                 # ProGuard obfuscation rules
│
├── gradle/
│   └── wrapper/                           # Gradle wrapper files
│
├── build.gradle                           # Project-level build configuration
├── settings.gradle                        # Project settings
├── gradlew & gradlew.bat                  # Gradle wrapper executables
├── gradle.properties                      # Gradle properties
├── LICENSE.md                             # License file
└── README.md                              # This file
```

---

## 🔧 Key Components

### Activities
- **Landing** - Splash/entry screen and login interface
- **GetStarted** - Initial setup and onboarding entry point
- **OnboardScreen1, 2, 3** - Multi-step onboarding workflow
- **Signup** - User registration screen
- **MainActivity** - Main application hub with navigation drawer

### Fragments
- **BaseFragment** - Abstract base fragment with common functionality
- **NewTaskFragment** - Create and edit appointments
- **CompletedTasksFragment** - View completed appointments
- **TaskCategoryFragment** - Manage medical specialists and categories
- **SettingsFragment** - App preferences and settings

### Models
- **Task/Appointment** - Represents medical appointments with date, priority, category
- **Category/Specialist** - Represents medical specialist types with colors
- **Task Category** - Junction model for task-category relationships

### Broadcast Receivers
- **AlarmReceiver** - Handles appointment reminder notifications
- **OnCompletedBroadcastReceiver** - Handles task completion events

---

## 📦 Installation & Setup

### Prerequisites
- **Android Studio** (Latest version recommended)
- **JDK 1.8 or higher**
- **Android SDK** API 32 and SDK Build Tools installed
- **Git** (for version control)

### Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd MediBook
   ```

2. **Open in Android Studio**
   - Launch Android Studio
   - Click "File" → "Open"
   - Navigate to the MediBook project directory
   - Click "Open"

3. **Wait for Gradle Sync**
   - Android Studio will automatically sync Gradle dependencies
   - If not, click "File" → "Sync Now"

4. **Set Up Android SDK**
   - Go to "Tools" → "SDK Manager"
   - Ensure API 32 is installed
   - Install Android SDK Tools if not present

5. **Configure Emulator or Connect Device**
   - **Emulator:** Use AVD Manager to create an Android 8.0+ virtual device
   - **Physical Device:** Enable USB debugging in Developer Options

6. **Build the Project**
   ```bash
   ./gradlew build
   ```

---

## 🚀 Building & Deployment

### Debug Build
```bash
./gradlew assembleDebug
```
- Faster compilation with no optimizations
- Includes debugging symbols
- Suitable for development and testing

### Release Build
```bash
./gradlew assembleRelease
```
- Enables ProGuard code obfuscation
- Optimized code for smaller APK size
- Ready for production deployment

### Running on Emulator
```bash
./gradlew installDebug
```

### Running Tests
```bash
# Unit tests
./gradlew test

# Instrumented tests (Android Device/Emulator required)
./gradlew connectedAndroidTest
```

---

## ✅ Code Quality

### ProGuard Configuration
The app uses ProGuard for code obfuscation in release builds to:
- Reduce APK size
- Obfuscate code for protection
- Optimize bytecode performance

Configuration file: [app/proguard-rules.pro](app/proguard-rules.pro)

### Testing Framework
- **Unit Tests** - JUnit 4 with Hilt dependency injection
- **UI Tests** - Espresso for automated UI testing
- **Test Coverage** - Aims for >80% code coverage on critical paths

### Best Practices Implemented
- ✅ SOLID principles in architecture
- ✅ Type-safe navigation with SafeArgs
- ✅ Null-safety with Kotlin
- ✅ Lifecycle-aware components
- ✅ Proper resource management
- ✅ Secure data handling

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```

2. **Commit Changes**
   ```bash
   git commit -m "Add: Description of your feature"
   ```

3. **Push to Repository**
   ```bash
   git push origin feature/YourFeatureName
   ```

4. **Create a Pull Request**
   - Provide clear description of changes
   - Reference any related issues
   - Ensure tests pass and code follows standards

### Coding Standards
- Follow Kotlin conventions and style guide
- Use meaningful variable and function names
- Document complex logic with comments
- Keep functions small and focused
- Avoid nested callbacks (use Coroutines)

---

## 📋 Permissions Required

```xml
<!-- Scheduling precise alarms for appointment reminders -->
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />

<!-- Receiving boot completion events -->
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
```

---

## 🎨 UI/UX Features

- **Material Design 3** - Modern, clean interface
- **Dark/Light Theme Support** - Automatic theme switching based on system settings
- **Smooth Animations** - Lottie JSON-based animations for:
  - Category transitions
  - Task loading states
  - Empty state illustrations
  - Task completion feedback
- **Responsive Layouts** - Supports multiple screen sizes and orientations
- **Accessibility** - Proper content descriptions and navigation support

---

## 📊 Statistics

- **Min SDK:** 26 (Android 8.0)
- **Target SDK:** 32 (Android 12)
- **Compile SDK:** 32 (Android 12)
- **Language:** 100% Kotlin
- **Architecture:** MVVM + Clean Architecture
- **Dependency Injection:** Hilt

---

## 📝 License

This project is licensed under the [MIT License](LICENSE.md). See the LICENSE.md file for details.

---

## 👥 Support & Contact

For questions, bug reports, or feature requests, please:
- Create an issue in the repository
- Contact the development team
- Check the [Issues](../../issues) section for common questions

---

## 🔗 Resources

- [Android Developers Documentation](https://developer.android.com/)
- [Kotlin Documentation](https://kotlinlang.org/docs/)
- [Jetpack Architecture Components](https://developer.android.com/jetpack)
- [Material Design Guidelines](https://material.io/design/)
- [Hilt Dependency Injection](https://dagger.dev/hilt/)

---

**Last Updated:** January 2026  
**Version:** 1.0  
**Status:** ✅ Active Development

Made with ❤️ for better healthcare management
