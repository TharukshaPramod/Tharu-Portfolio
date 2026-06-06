# Golden Event Hotel Management System

A comprehensive web-based hotel management system built with PHP, allowing users to book rooms, manage reservations, handle billing, and more.

## Features

- **User Registration and Login**: Secure user authentication system
- **Room Booking**: Browse and book different types of rooms
- **Reservation Management**: View, edit, and cancel bookings
- **Admin Panel**: Administrative functions for managing users, billers, and transactions
- **Billing System**: Handle payments and generate bills
- **Profile Management**: Users can update their profiles and view booking history
- **Contact and About Pages**: Information about the hotel and contact details

## Technologies Used

- **Backend**: PHP
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MySQL
- **Styling**: Custom CSS files
- **Version Control**: Git with Git LFS for large assets

## Installation

### Prerequisites

- PHP 7.4 or higher
- MySQL 5.7 or higher
- Apache/Nginx web server
- Git

### Setup Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TharukshaPramod/Golden-Event.git
   cd Golden-Event
   ```

2. **Set up the database**:
   - Create a new MySQL database
   - Import the database schema from `connect.php` or any provided SQL files
   - Update database credentials in `connect.php`

3. **Configure the web server**:
   - Point your web server document root to the project directory
   - Ensure PHP is enabled and configured

4. **Install dependencies** (if any):
   - No external PHP dependencies are required for basic functionality

5. **Access the application**:
   - Open your browser and navigate to `http://localhost` (or your configured URL)
   - Register a new account or use existing admin credentials

## Usage

### For Users:
- Register/Login to access the system
- Browse available rooms and make bookings
- View and manage your reservations
- Update your profile information

### For Admins:
- Access the admin panel via `admin.php`
- Manage users, billers, and transactions
- View booking details and generate reports

## Project Structure

```
Golden-Event/
├── admin.php              # Admin dashboard
├── booking.php            # Room booking functionality
├── connect.php            # Database connection
├── Home.php               # Homepage
├── login.php              # User login
├── register.php           # User registration
├── images/                # Image assets (managed with Git LFS)
├── js/                    # JavaScript files
├── styles/                # CSS stylesheets
├── reservations/          # Reservation management
│   ├── add.php
│   ├── edit.php
│   └── index.php
└── README.md              # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact the project maintainer.

---

**Note**: This project uses Git LFS for managing large image files. Ensure Git LFS is installed and configured if contributing.</content>
<parameter name="filePath">README.md