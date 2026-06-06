# Safari-Lanka

Let's Go Wilder!

## Overview

Safari-Lanka is a small PHP/MySQL web application for managing wildlife-related content, bookings, donations, and payments. It provides public pages for browsing and booking, user registration and login, and an admin section for managing users, bookings, payments and donations.

## Features

- Public site pages: `home.php`, `book.php`, `contact_us/index.php`
- User authentication: `login.php`, `register.php`, `logout.php`
- Admin interface: `admin_page.php`, `admin_users.php`, `admin_header.php`, `admin_footer.php`
- Booking system: files in `reservations/`
- Donations: files in `donation/`
- Payments: files in `payment/`

## Requirements

- PHP 7.4+ (or compatible)
- MySQL / MariaDB
- Apache (XAMPP, WAMP, or similar) or another web server

## Installation (local with XAMPP)

1. Clone or copy the project into your web server's document root (e.g., `C:\xampp\htdocs\safari-lanka`).
2. Start Apache and MySQL via XAMPP (or your chosen stack).
3. Create a database for the project (for example `safari_lanka`).
4. Import any provided SQL files where applicable (e.g., `payment/payment.sql`) or create the required tables manually.
5. Configure database connection(s): open the DB config files and set your credentials:
   - `bookdbconfig.php`
   - `reservations/dbConnection.php`
   - `payment/db_conn.php`
   - `donation/connect.php`
6. Place the project files in the web root and visit `http://localhost/safari-lanka/` (adjust path to your setup).

## Configuration

Edit the connection files listed above and set `DB_HOST`, `DB_USER`, `DB_PASS`, and `DB_NAME` to match your environment.

## Project Structure (key files)

- `home.php` — main landing page
- `book.php`, `book_display.php`, `updateBook.php`, `deletebook.php` — book listings and management
- `login.php`, `register.php`, `logout.php`, `update_user.php` — auth and user actions
- `admin_page.php`, `admin_users.php`, `admin_header.php`, `admin_footer.php` — admin UI
- `payment/` — payment pages and SQL (`payment.sql`)
- `donation/` — donation related pages
- `reservations/` — booking pages and DB logic
- `css/`, `js/`, `styles/`, `contact_us/` — static assets and styling

## Usage

- Register a new user via `register.php`.
- Log in via `login.php` to access user features and booking pages.
- Admin functions are available through `admin_page.php` for user and content management.

## Contributing

If you'd like to contribute, please:

1. Fork the repository.
2. Create a feature branch.
3. Open a pull request describing your changes.

## License

This project does not include a license file. Add a `LICENSE` if you want to apply an open-source license (e.g., MIT).

## Contact

If you need help or want to propose changes, open an issue or contact the repository owner.

---

If you want, I can also:

- Add a sample SQL schema for the main tables.
- Add screenshots or example data.
- Add a `LICENSE` file (MIT).

Feel free to tell me which additions you'd like next.
# Safari-Lanka
# -Let's Go Wilder!
