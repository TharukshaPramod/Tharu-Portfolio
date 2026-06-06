# 💰 BudgetLyst - Finance Tracker

> A powerful, intuitive Android personal finance management application built with Kotlin and Jetpack Compose.

![Android API 33+](https://img.shields.io/badge/Android-API%2033%2B-brightgreen)
![Kotlin](https://img.shields.io/badge/Kotlin-2.0.21-purple)
![Jetpack Compose](https://img.shields.io/badge/Jetpack%20Compose-Latest-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📱 Overview

BudgetLyst is a comprehensive personal finance management mobile application that helps users track their expenses, manage budgets, and visualize spending patterns. With an intuitive interface and powerful features, BudgetLyst makes financial management simple and accessible to everyone.

### ✨ Key Highlights

- **Real-time Transaction Tracking** - Record and manage all your financial transactions
- **Smart Budget Management** - Set budgets for different categories and get instant alerts
- **Visual Analytics** - Beautiful pie charts and spending visualizations
- **Notification System** - Smart notifications for budget alerts and reminders
- **User Authentication** - Secure sign-in and sign-up system
- **Modern UI** - Built with Jetpack Compose for a seamless user experience
- **Local Data Storage** - All data stored securely on your device

---

## 🚀 Features

### Core Features

#### 📊 Dashboard
- Real-time spending overview
- Visual pie charts showing expense distribution
- Recent transactions list
- Budget status at a glance
- Quick statistics and insights

#### 💳 Transaction Management
- **Add Transactions** - Quickly log income and expense transactions
- **Edit Transactions** - Update transaction details anytime
- **Delete Transactions** - Remove incorrect or duplicate transactions
- **View All Transactions** - Complete transaction history with filtering options
- **Categorized Spending** - Organize transactions by category

#### 💰 Budget Tracking
- Set custom budgets for different spending categories
- Real-time budget status monitoring
- Visual progress indicators
- Budget alerts when nearing limits
- Easy budget adjustments

#### 🔔 Smart Notifications
- Budget alert notifications
- Transaction reminders
- Exact alarm scheduling support (Android 12+)
- Customizable notification preferences

#### 👤 User Profile
- User authentication system
- Sign-in and Sign-up functionality
- Profile management
- Personalized settings

#### ⚙️ Settings
- Customize app preferences
- Notification controls
- Data backup options
- Theme preferences
- App information

---

## 🛠️ Tech Stack

### Architecture
- **Language**: Kotlin 2.0.21
- **UI Framework**: Jetpack Compose
- **Architecture Pattern**: MVVM + Repository Pattern
- **Data Storage**: SharedPreferences (Local Storage)

### Technologies & Libraries

| Component | Library | Version |
|-----------|---------|---------|
| **Android Core** | androidx.core:core-ktx | 1.15.0 |
| **UI Toolkit** | Jetpack Compose | 2024.09.00 |
| **Material Design** | Material3 | Latest |
| **View Binding** | androidx.viewbinding | Latest |
| **AppCompat** | androidx.appcompat | 1.7.0 |
| **Material Components** | Material Design | 1.12.0 |
| **Constraint Layout** | androidx.constraintlayout | 2.2.1 |
| **Activity** | androidx.activity | 1.10.1 |
| **Lifecycle** | androidx.lifecycle | 2.8.7 |
| **Charts** | MPAndroidChart | Latest |
| **Testing** | JUnit 4 & AndroidX Test | Latest |

### Build System
- **Build Tool**: Gradle 8.9.1
- **Target SDK**: 35
- **Min SDK**: 33
- **Compile SDK**: 35
- **Java Version**: 11

---

## 📋 Project Structure

```
financetracker/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/budgetlyst/
│   │   │   │   ├── ui/                    # UI Activities
│   │   │   │   │   ├── MainActivity.kt
│   │   │   │   │   ├── TransactionsActivity.kt
│   │   │   │   │   ├── AddTransactionActivity.kt
│   │   │   │   │   ├── EditTransactionActivity.kt
│   │   │   │   │   ├── BudgetActivity.kt
│   │   │   │   │   ├── SetBudgetActivity.kt
│   │   │   │   │   ├── ProfileActivity.kt
│   │   │   │   │   ├── SettingsActivity.kt
│   │   │   │   │   └── adapters/          # RecyclerView Adapters
│   │   │   │   ├── data/                  # Data Management
│   │   │   │   │   ├── PreferencesManager.kt
│   │   │   │   │   └── TransactionRepository.kt
│   │   │   │   ├── model/                 # Data Models
│   │   │   │   ├── notification/          # Notification System
│   │   │   │   ├── utils/                 # Utilities & Helpers
│   │   │   │   ├── BudgetLystApp.kt       # Application Class
│   │   │   │   ├── SignIn.kt
│   │   │   │   ├── SignUp.kt
│   │   │   │   ├── GetStarted.kt
│   │   │   │   ├── Onboard1.kt
│   │   │   │   ├── Onboard2.kt
│   │   │   │   └── Onboard3.kt
│   │   │   ├── res/                       # Resources
│   │   │   │   ├── layout/
│   │   │   │   ├── drawable/
│   │   │   │   ├── values/
│   │   │   │   └── mipmap/
│   │   │   └── AndroidManifest.xml
│   │   ├── androidTest/                   # Android Instrumentation Tests
│   │   └── test/                          # Unit Tests
│   ├── build.gradle.kts
│   └── proguard-rules.pro
├── gradle/                                # Gradle Wrapper
├── build.gradle.kts
├── settings.gradle.kts
├── gradle.properties
├── local.properties
└── README.md
```

---

## 🔧 Installation & Setup

### Prerequisites

- **Android Studio** 2024.1 or later
- **JDK 11** or later
- **Gradle 8.9.1**
- **Android SDK 35** with API level 33+ support

### Clone the Repository

```bash
git clone https://github.com/yourusername/financetracker.git
cd financetracker
```

### Build & Run

#### Using Android Studio
1. Open Android Studio
2. Select **File** → **Open** and navigate to the project directory
3. Android Studio will automatically configure the Gradle project
4. Click **Run** → **Run 'app'** or press `Shift + F10`
5. Select your target device (emulator or physical device)

#### Using Gradle CLI

```bash
# Build the project
./gradlew build

# Install and run on a connected device/emulator
./gradlew installDebug

# Run the app
adb shell am start -n com.example.budgetlyst/.ui.MainActivity
```

### Configuration

1. **Permissions**: The app requires the following permissions (automatically handled):
   - `POST_NOTIFICATIONS` - For budget alerts
   - `SCHEDULE_EXACT_ALARM` - For transaction reminders
   - `USE_EXACT_ALARM` - For precise notifications

2. **PreferencesManager**: User data is stored securely using Android's SharedPreferences
3. **Notification Setup**: Ensure notifications are enabled in Android settings (Android 13+)

---

## 📚 Usage Guide

### Getting Started

1. **Launch the App**
   - First-time users will see the onboarding screens
   - Sign up with your credentials

2. **Dashboard Overview**
   - View your spending summary with pie charts
   - Check recent transactions
   - Monitor budget status

3. **Add a Transaction**
   - Tap the "Add" button
   - Enter amount, category, and date
   - Save to automatically update charts

4. **Set a Budget**
   - Navigate to Budget section
   - Select a category
   - Set your desired limit
   - Get notified when approaching the limit

5. **View Transactions**
   - See all transactions in the Transactions view
   - Edit or delete transactions as needed
   - Filter by category or date

### Navigation

| Screen | Purpose |
|--------|---------|
| Dashboard | Home screen with overview and recent transactions |
| Transactions | Complete transaction history and management |
| Add Transaction | Create new income/expense records |
| Edit Transaction | Modify existing transaction details |
| Budget | Monitor and manage category budgets |
| Profile | Manage user profile and personal info |
| Settings | Configure app preferences and notifications |

---

## 🏗️ Architecture & Design Patterns

### MVVM Architecture
- **Model**: Data models representing transactions, budgets, and user preferences
- **View**: Jetpack Compose UI components and Activities
- **ViewModel**: (Implemented via Activity logic) Manages UI logic and state

### Repository Pattern
- `TransactionRepository`: Centralized data access for transactions
- `PreferencesManager`: Manages user preferences and authentication data

### Key Design Principles
- **Separation of Concerns**: Clear separation between UI, data, and business logic
- **Single Responsibility**: Each class has a single, well-defined purpose
- **DRY (Don't Repeat Yourself)**: Reusable components and utilities
- **Material Design 3**: Modern, accessible UI following Google's design guidelines

---

## 🔐 Security & Privacy

- **Local Data Storage**: All data stored locally on your device
- **Secure Authentication**: User credentials managed securely
- **Data Backup**: Support for Android's automatic backup
- **No Cloud Transmission**: Your financial data never leaves your device
- **Permissions**: Minimal permissions requested, all clearly justified

---

## 🧪 Testing

### Unit Tests
```bash
./gradlew test
```

### Instrumentation Tests
```bash
./gradlew connectedAndroidTest
```

### Test Coverage
- Transaction creation and validation
- Budget calculation and monitoring
- Preference management
- Notification scheduling

---

## 🚀 Future Enhancements

- [ ] Cloud synchronization across devices
- [ ] Advanced analytics and spending predictions
- [ ] Recurring transaction templates
- [ ] Expense categorization with AI
- [ ] Multi-user/family accounts
- [ ] Export to CSV/PDF reports
- [ ] Dark mode support
- [ ] Widget for quick spending entry
- [ ] Voice-activated transaction logging
- [ ] Bill payment reminders

---

## 📊 App Statistics

- **Target API**: 35 (Android 15)
- **Minimum API**: 33 (Android 13)
- **Languages**: Kotlin 100%
- **Lines of Code**: 1000+
- **Activities**: 10+
- **Supported Orientations**: Portrait & Landscape

---

## 🐛 Known Issues & Limitations

- Budget alerts currently work on devices with API 31+
- Data export requires manual file access
- No automatic cloud backup (local backup only)
- Limited to single user account per device

---

## 💡 Best Practices Implemented

✅ **Code Quality**
- Type-safe Kotlin code
- Null safety with non-null types
- Proper exception handling
- Meaningful variable and function names

✅ **UI/UX**
- Material Design 3 compliance
- Responsive layouts for all screen sizes
- Intuitive navigation patterns
- Accessible color contrasts

✅ **Performance**
- Efficient data queries
- Optimized list rendering with adapters
- Proper lifecycle management
- Resource cleanup

✅ **Maintainability**
- Clear project structure
- Well-organized codebase
- Reusable components
- Comprehensive code comments

---

## 📄 Build Configuration

### ProGuard Rules
- Minification: Disabled for development (can be enabled for release)
- Optimization: Standard Android ProGuard optimization enabled
- Keep rules: Configured for third-party libraries

### Version Info
```gradle
applicationId = "com.example.budgetlyst"
versionCode = 1
versionName = "1.0"
```

---

## 🤝 Contributing

We welcome contributions! To contribute to BudgetLyst:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure:
- Code follows Kotlin conventions
- Tests are added for new features
- Documentation is updated accordingly
- Your code passes all checks

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 About the Project

**BudgetLyst** is a Mobile Application Development course project created at SLIIT (Sri Lanka Institute of Information Technology).

### Course Information
- **Course**: Mobile Application Development (MAD)
- **Year**: Year 2, Semester 2
- **Institution**: SLIIT
- **Technology Stack**: Android, Kotlin, Jetpack Compose

---

## 📞 Support & Contact

For questions, issues, or suggestions:

- 📧 **Email**: support@budgetlyst.com
- 🐛 **Bug Reports**: [Create an Issue](https://github.com/TharukshaPramod/BudgetLyst/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/TharukshaPramod/BudgetLyst/discussions)

---

## 🎯 Development Roadmap

### Q1 2026
- [ ] Implement cloud backup
- [ ] Add recurring transactions
- [ ] Enhance analytics dashboard

### Q2 2026
- [ ] Multi-user support
- [ ] Advanced reporting features
- [ ] Mobile widget

### Q3 2026
- [ ] AI-powered insights
- [ ] Native app widget
- [ ] Desktop companion app

---

## 📚 Resources

- [Android Developer Documentation](https://developer.android.com/)
- [Jetpack Compose Guide](https://developer.android.com/jetpack/compose)
- [Material Design 3](https://m3.material.io/)
- [Kotlin Documentation](https://kotlinlang.org/docs/)

---

## ✨ Acknowledgments

- [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) - For charting capabilities
- [Google Material Design](https://material.io/) - Design inspiration
- [Android Developers](https://developer.android.com/) - Official Android resources
- SLIIT Faculty and Instructors

---

<div align="center">

**Made with ❤️ by BudgetLyst Team**

⭐ If you find this project helpful, please give it a star!

![Android](https://img.shields.io/badge/Made%20with-Android-brightgreen?logo=android)
![Kotlin](https://img.shields.io/badge/Powered%20by-Kotlin-purple?logo=kotlin)

</div>
