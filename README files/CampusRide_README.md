# CampusRide 🚌

[![Kotlin](https://img.shields.io/badge/Kotlin-1.9.0-blue.svg?logo=kotlin)](https://kotlinlang.org)
[![Android SDK](https://img.shields.io/badge/Android-API_31%2B-green.svg?logo=android)](https://developer.android.com)
[![Compose](https://img.shields.io/badge/Jetpack%20Compose-1.5.0-orange.svg)](https://developer.android.com/jetpack/compose)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Minimum SDK](https://img.shields.io/badge/minSdk-31-important)](https://developer.android.com/about/versions/12)

## 📱 Overview

**CampusRide** is a modern Android application designed to revolutionize campus transportation by providing a seamless shuttle and ride-sharing experience for university students and staff. The app simplifies campus mobility with intuitive balance management, real-time tracking, and smart notifications.

<p align="center">
  <img src="https://via.placeholder.com/300x600/3F51B5/FFFFFF?text=CampusRide+Mockup" alt="App Mockup" width="200"/>
  <img src="https://via.placeholder.com/300x600/2196F3/FFFFFF?text=Balance+Tracking" alt="Balance Screen" width="200"/>
  <img src="https://via.placeholder.com/300x600/4CAF50/FFFFFF?text=Ride+Booking" alt="Booking Screen" width="200"/>
</p>

## ✨ Features

### ✅ **Currently Implemented**
- **Splash & Onboarding**: Beautiful launch screens with campus travel quotes
- **Home Dashboard**: Central hub displaying balance, quick actions, and navigation
- **Profile Management**: User profile with editable personal information
- **Balance Tracking**: Real-time shuttle credit monitoring
- **Intuitive Navigation**: Smooth transitions between all screens
- **Modern UI**: Clean, accessible interface following Material Design 3 principles

### 🚧 **Planned Features**
- **Real-time Shuttle Tracking**: Live GPS tracking of campus shuttles
- **Ride Booking System**: Schedule and manage rides in advance
- **Digital Payments**: Secure in-app balance top-up
- **Route Optimization**: Smart suggestions for pickup/drop-off points
- **Push Notifications**: Alerts for low balance, shuttle arrivals, and special announcements
- **Campus Integration**: Connect with university ID systems
- **Accessibility Features**: Full support for screen readers and navigation aids

## 🏗️ Architecture

```
📂 CampusRide/
├── 📁 app/
│   ├── 📁 src/main/
│   │   ├── 📁 java/com/example/campusride/
│   │   │   ├── 📁 activities/     # Android Activities
│   │   │   ├── 📁 screens/        # Compose Screens
│   │   │   ├── 📁 navigation/     # Navigation graphs
│   │   │   ├── 📁 viewmodels/     # ViewModel classes
│   │   │   ├── 📁 repositories/   # Data repositories
│   │   │   ├── 📁 models/         # Data classes
│   │   │   └── 📁 utils/          # Utility functions
│   │   ├── 📁 res/
│   │   │   ├── 📁 layout/         # XML layouts
│   │   │   ├── 📁 drawable/       # Vector assets
│   │   │   ├── 📁 values/         # Strings, colors, themes
│   │   │   └── 📁 font/           # Custom fonts
│   └── 📁 build.gradle.kts        # Module build configuration
├── 📁 gradle/
├── 📄 build.gradle.kts            # Project build configuration
├── 📄 gradle.properties
└── 📄 settings.gradle.kts
```

## 🛠️ Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Language** | Kotlin 1.9.0 | Modern, concise, and safe programming language |
| **UI Framework** | Jetpack Compose | Declarative UI toolkit |
| **Architecture** | MVVM Pattern | Separation of concerns, testability |
| **Navigation** | Navigation Component | Type-safe navigation between screens |
| **Dependency Injection** | (Planned) Hilt | Simplified DI implementation |
| **Networking** | (Planned) Retrofit + Moshi | REST API communication |
| **Database** | (Planned) Room | Local data persistence |
| **Build System** | Gradle (Kotlin DSL) | Modern build configuration |
| **Testing** | JUnit, Espresso, Compose Testing | Comprehensive test suite |

## 📋 Prerequisites

- **Android Studio** (Flamingo or newer recommended)
- **Java Development Kit** (JDK 17+)
- **Android SDK** (API 31+)
- **Kotlin Plugin** (Latest version)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/TharukshaPramod/CampusRide.git
cd campusride
```

### 2. Open in Android Studio
- Open Android Studio
- Select "Open an existing project"
- Navigate to the cloned repository folder

### 3. Build the Project
- Wait for Gradle sync to complete
- Build the project using `Build > Make Project` or `Ctrl+F9`

### 4. Run on Emulator or Device
- Ensure you have an Android Virtual Device (AVD) configured (API 31+)
- Connect a physical device with USB debugging enabled
- Run the app using `Run > Run 'app'` or `Shift+F10`

## 🔧 Configuration

### Environment Setup
Create a `local.properties` file in the root directory (if not present):
```properties
sdk.dir=/path/to/your/android/sdk
# Add any API keys or environment-specific variables here
```

### Build Variants
The project supports two build variants:
- **Debug**: Development build with debugging enabled
- **Release**: Production build with optimization (ProGuard disabled by default)

## 🧪 Testing

### Unit Tests
```bash
./gradlew test
```

### Instrumentation Tests
```bash
./gradlew connectedAndroidTest
```

### UI Tests with Compose
```kotlin
// Example UI test for HomeScreen
@RunWith(AndroidJUnit4::class)
class HomeScreenTest {
    @get:Rule
    val composeTestRule = createComposeRule()
    
    @Test
    fun homeScreen_showsBalance() {
        composeTestRule.setContent {
            HomeScreen()
        }
        composeTestRule.onNodeWithText("Balance").assertIsDisplayed()
    }
}
```

## 📱 Screens

| Screen | Description | Status |
|--------|-------------|---------|
| **LaunchScreen** | Initial splash screen with campus travel quote | ✅ Complete |
| **OnBoardingScreen1** | Feature introduction and app benefits | ✅ Complete |
| **Home Screen** | Main dashboard with balance, navigation, and quick actions | ✅ Complete |
| **Profile Screen** | User profile management and settings | ✅ Complete |
| **Booking Screen** | Ride scheduling and pickup/destination selection | 🚧 Planned |
| **Tracking Screen** | Real-time shuttle location and ETA | 🚧 Planned |

## 🎨 Design System

### Colors
```kotlin
val PrimaryColor = Color(0xFF3F51B5)
val SecondaryColor = Color(0xFF2196F3)
val BackgroundColor = Color(0xFFF5F5F5)
val SurfaceColor = Color(0xFFFFFFFF)
val ErrorColor = Color(0xFFF44336)
val SuccessColor = Color(0xFF4CAF50)
```

### Typography
- **Headline**: Roboto Bold, 24sp
- **Title**: Roboto Medium, 18sp
- **Body**: Roboto Regular, 14sp
- **Caption**: Roboto Light, 12sp

### Components
- **Cards**: Elevated cards for information display
- **Buttons**: Contained and outlined variants
- **Text Fields**: Material Design 3 text fields with validation
- **Navigation Bar**: Bottom navigation for main app sections

## 🔄 Navigation

The app uses a single-activity architecture with Compose navigation:

```kotlin
NavHost(navController = navController, startDestination = "launch") {
    composable("launch") { LaunchScreen(navController) }
    composable("onboarding") { OnBoardingScreen1(navController) }
    composable("home") { HomeScreen(navController) }
    composable("profile") { ProfileScreen(navController) }
}
```

## 📊 API Integration (Planned)

### Endpoints
```kotlin
interface CampusRideApi {
    @GET("/api/user/profile")
    suspend fun getUserProfile(): UserProfile
    
    @GET("/api/shuttles")
    suspend fun getAvailableShuttles(): List<Shuttle>
    
    @POST("/api/rides/book")
    suspend fun bookRide(@Body booking: BookingRequest): BookingResponse
    
    @GET("/api/rides/history")
    suspend fun getRideHistory(): List<RideHistory>
    
    @POST("/api/payments/top-up")
    suspend fun topUpBalance(@Body payment: PaymentRequest): PaymentResponse
}
```

## 📦 Dependencies

Key dependencies include:

```kotlin
dependencies {
    // Core Android
    implementation("androidx.core:core-ktx:1.10.1")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.6.1")
    
    // Compose
    implementation(platform("androidx.compose:compose-bom:2023.08.00"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")
    
    // Navigation
    implementation("androidx.navigation:navigation-compose:2.7.0")
    
    // Testing
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
    androidTestImplementation(platform("androidx.compose:compose-bom:2023.08.00"))
    androidTestImplementation("androidx.compose.ui:ui-test-junit4")
}
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the [Kotlin coding conventions](https://kotlinlang.org/docs/coding-conventions.html)
- Write meaningful commit messages using [Conventional Commits](https://www.conventionalcommits.org/)
- Add tests for new functionality
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead**: [tharuksha pramod /Organization]
- **UI/UX Design**: [Tharuksha pramod]
- **Backend Development**: [Backend Team]
- **Mobile Development**: [Mobile Team]

## 🙏 Acknowledgments

- [Jetpack Compose](https://developer.android.com/jetpack/compose) for modern UI development
- [Material Design 3](https://m3.material.io/) for design system
- The Android developer community for invaluable resources and support

## 📞 Support

For support, feature requests, or bug reports:
- 📧 Email: support@campusride.app
- 🐛 [Issue Tracker](https://github.com/TharukshaPramod/CampusRide.git/issues)
- 📖 [Documentation Wiki](https://github.com/TharukshaPramod/CampusRide.git/wiki)

---

<div align="center">
  <p>Made with ❤️ for seamless campus mobility</p>
  <p>© 2024 CampusRide Project. All rights reserved.</p>
</div>
