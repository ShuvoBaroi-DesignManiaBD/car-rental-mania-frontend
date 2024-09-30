# [Rental Mania](https://rental-mania.shuvobaroi.com/)

Welcome to the **Rental Mania**, a comprehensive platform for customers and administrators to manage car reservations effortlessly. This system offers a smooth experience for browsing, booking, and managing cars while providing administrators with tools to handle inventory and reservations.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
  - [Development](#development)
  - [Production](#production)
- [Building the Application](#building-the-application)
- [Linting and Formatting](#linting-and-formatting)
- [Technology Stack](#technology-stack)

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or higher)
- npm (v6 or higher)

## Features

### Public Pages
- **Homepage:**
  - Includes a hero section, featured cars, search bar for availability, "Why Choose Us" section, customer testimonials, and a footer.
- **Car Listing Page:**
  - Displays all available cars with sorting and filtering functionalities.
- **Car Details Page:**
  - Contains detailed information, high-quality images with zoom functionality, and booking options.
- **About Us Page:**
  - Details about the company’s history, team, fleet, values, and contact information.
- **Error Page:**
  - A visually appealing 404 page with navigation options.
  
### User Pages (Private/Protected Routes)
- **User Dashboard:**
  - View personal information, manage bookings, and update profile details.
  - Payment management after returning the car.
  
### Admin Pages (Private/Protected Routes)
- **Admin Dashboard:**
  - Manage cars, bookings, and view key statistics like total bookings, revenue, etc.
  
### Additional Features
- **Responsive Design:** Compatible with desktops, tablets, and smartphones.
- **Authentication Pages:** Secure sign-up and sign-in pages with validation and error handling.
- **Payment Gateways:** Enables payments through various methods.
- **Image Upload Functionality:** For car photos in the admin dashboard.
- **Booking Management:** Manage and modify bookings based on availability.

## Installation of the Frontend

1. Clone the repository:

   ```sh
   git clone https://github.com/ShuvoBaroi-DesignManiaBD/car-rental-mania-frontend.git
   cd car-rental-mania-frontend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
VITE_BACKEND_URL=your_backend_url
```

These secret keys should be in the `.env` file for running the app properly.

### Running the Application

#### Development

To run the application in development mode with hot reloading:

```sh
npm run dev
```

#### Production

To run the application in production mode:

1. Build the project:

   ```sh
   npm run build
   ```

2. Start the application:

   ```sh
   npm run prod
   ```

### Building the Application

To build the TypeScript project:

```sh
npm run build
```

This will compile the TypeScript files into JavaScript and place them in the `dist` folder.

### Linting and Formatting

To lint the code:

```sh
npm run lint
```


## Installation of the Backend

1. Clone the repository:

   ```sh
   git clone https://github.com/ShuvoBaroi-DesignManiaBD/CarRentalMania.git
   cd CarRentalMania
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=your_secret_key
DB_URL=your_secret_key
NODE_ENV=your_secret_key
BCRYPT_SALT_ROUNDS=your_secret_key
JWT_ACCESS_SECRET=your_secret_key
JWT_REFRESH_SECRET=your_secret_key
JWT_ACCESS_EXPIRES_IN=your_secret_key
JWT_REFRESH_EXPIRES_IN=your_secret_key
```

These secret keys should be in the `.env` file for running the app properly.

### Running the Application

#### Development

To run the application in development mode with hot reloading:

```sh
npm run dev
```

#### Production

To run the application in production mode:

1. Build the project:

   ```sh
   npm run build
   ```

2. Start the application:

   ```sh
   npm run prod
   ```

### Building the Application

To build the TypeScript project:

```sh
npm run build
```

This will compile the TypeScript files into JavaScript and place them in the `dist` folder.

### Linting and Formatting

To lint the code:

```sh
npm run lint
```

To fix linting errors automatically:

```sh
npm run lint:fix
```

To format the code using Prettier:

```sh
npm run prettier
```

To fix formatting issues automatically:

```sh
npm run prettier:fix
```

## Technology Stack

### Frontend
- **React.js**: Frontend library for building the user interface.
- **Redux & Redux Toolkit Query (RTK Query)**: State management and server-side data fetching.
- **Tailwind CSS**: CSS framework for building the user interface.
- **Ant Design**: React component library for UI elements.
- **React Hook Form**: Managing forms in React.
- **React Router**: Client-side routing for navigation.
- **React Icons**: Custom icons for UI design.
- **Zod**: Advanced data validation.
- **Vite**: Development server and build tool for modern frontend projects.
- **TypeScript**: For enhanced type safety and code quality.

### Backend
- **TypeScript**: Used as the programming language.
- **Express.js**: Web framework for building server-side applications.
- **Mongoose**: ODM and validation library for MongoDB.
- **Zod**: Advanced data validations.
- **JWT**: Token-based authentication and authorization.
- **Paypal**: Payment gateway integration.
- **SSLCommerz**: Payment gateway integration.
- **Multer**: For file uploads.
- **Sharp**: For image optimization.

---

#### Live Link: [Rental Mania](https://rental-mania.shuvobaroi.com/)

#### GitHub Frontend Repository: [Frontend Repo](https://github.com/ShuvoBaroi-DesignManiaBD/car-rental-mania-frontend.git)

#### GitHub Backend Repository: [Backend Repo](https://github.com/ShuvoBaroi-DesignManiaBD/CarRentalMania.git)

--- 