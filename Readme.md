# Integrated Bus Timetable System

A web-based application for managing and displaying bus schedules. This system allows users to add, view, and manage bus timetable information with a clean and intuitive interface.

## Features

- ✅ **Add Bus Schedules**: Easily add new bus routes with departure and arrival times
- ✅ **View Timetable**: Display all bus schedules in a organized table format
- ✅ **Responsive Design**: User-friendly interface that works across different devices
- ✅ **Real-time Updates**: Dynamically fetch and display bus schedule data from the database

## Project Structure

```
Integrated-Bus-Timetable-system/
├── Backend/
│   ├── db.php              # Database connection configuration
│   ├── fetch_schedule.php  # API endpoint to fetch all bus schedules
│   └── schedule.php        # API endpoint to save new bus schedules
├── Frontend/
│   ├── index.html          # Main HTML page
│   ├── script.js           # JavaScript for form handling and dynamic updates
│   └── style.css           # Styling and layout
└── Readme.md               # Project documentation
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: PHP
- **Database**: MySQL
- **Server**: Apache (localhost)

## Prerequisites

Before you begin, ensure you have the following installed:
- PHP 7.0 or higher
- MySQL Server
- Apache Web Server (or any local web server)
- Web Browser (Chrome, Firefox, Safari, Edge)

## Installation

### 1. Setup Database

Create a MySQL database named `bus_system`:

```sql
CREATE DATABASE bus_system;
USE bus_system;

CREATE TABLE timetable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bus_no VARCHAR(50) NOT NULL,
    source VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    departure TIME NOT NULL,
    arrival TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Configure Database Connection

Update the database credentials in `Backend/db.php` if needed:

```php
$conn = new mysqli("localhost", "root", "", "bus_system");
```

- Replace `"root"` with your MySQL username
- Replace the empty string with your MySQL password (if any)
- Update `"bus_system"` with your database name if different

### 3. Setup Web Server

1. Copy the project folder to your web server's root directory:
   - **Apache**: `htdocs` directory
   - **Other servers**: Appropriate root directory

2. Start your web server and MySQL server

### 4. Access the Application

Open your web browser and navigate to:
```
http://localhost/Integrated-Bus-Timetable-system/Frontend/
```

## Usage

### Adding a Bus Schedule

1. Fill in the form with the following information:
   - **Bus Number**: The unique identifier for the bus (e.g., BUS001, BUS002)
   - **Source**: The starting point/city
   - **Destination**: The ending point/city
   - **Departure Time**: When the bus leaves
   - **Arrival Time**: When the bus arrives

2. Click the **"Save Schedule"** button

3. The new schedule will be added to the database and displayed in the timetable

### Viewing Schedules

- All bus schedules are automatically loaded and displayed in the timetable below the form
- The table shows: Bus No, Source, Destination, Departure Time, and Arrival Time

## API Endpoints

### Fetch All Schedules
- **URL**: `Backend/fetch_schedule.php`
- **Method**: GET
- **Response**: JSON array of all bus schedules

### Save New Schedule
- **URL**: `Backend/schedule.php`
- **Method**: POST
- **Parameters**: 
  - `bus_no`: Bus number
  - `source`: Source location
  - `destination`: Destination location
  - `departure`: Departure time (HH:MM format)
  - `arrival`: Arrival time (HH:MM format)

## Future Enhancements

- [ ] Edit/Update existing schedules
- [ ] Delete schedules
- [ ] Search and filter functionality
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Email notifications for schedule changes
- [ ] Mobile app integration
- [ ] Real-time GPS tracking for buses

## Troubleshooting

### Database Connection Error
- Ensure MySQL server is running
- Verify database credentials in `db.php`
- Check if the `bus_system` database exists

### Page Not Found (404)
- Verify the web server is running
- Check the correct path in your browser address bar
- Ensure the project folder is in the correct web root directory

### Schedules Not Displaying
- Check browser console for JavaScript errors (F12)
- Verify the `fetch_schedule.php` endpoint is accessible
- Ensure the `timetable` table exists in the database

## Contributing

This project is being developed collaboratively using Agile/SCRUM methodology. Current branch: `SCRUM-14-route-table`

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please refer to the project repository or contact the development team.

---

**Last Updated**: December 2025
