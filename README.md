Here’s how you can add the dependencies in your **HealthSphere** project setup and document them in the `README.md`:

### Steps to Install Dependencies:
1. Navigate to your project root directory:
   ```bash
   cd your-project-root
   ```

2. Install the backend dependencies:
   ```bash
   npm install bcryptjs cookie-parser dotenv express jsonwebtoken mongoose nodemon
   ```

3. Move into the `client` directory for frontend dependencies:
   ```bash
   cd client
   ```

4. Install frontend dependencies (if needed):
   ```bash
   npm install
   ```

5. Navigate back to the root directory to finalize:
   ```bash
   cd ..
   ```

### Adding this to `README.md`:


# HealthSphere

HealthSphere is a comprehensive platform for managing patient health data, providing real-time insights, and enabling users to access all their healthcare information in one place.

## Project Setup

### Backend Dependencies
The following dependencies are required for the backend:

- **bcryptjs**: Used for hashing passwords securely.
- **cookie-parser**: Middleware to handle cookies in Express.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Web framework for building the API.
- **jsonwebtoken**: Library for generating and verifying JWT tokens.
- **mongoose**: ODM library for MongoDB interactions.
- **nodemon**: Tool for auto-restarting the server during development.

To install all backend dependencies, run:
```bash
npm install bcryptjs cookie-parser dotenv express jsonwebtoken mongoose nodemon


### Frontend Dependencies
The frontend uses React, Redux for state management, and Tailwind CSS for styling.

To install frontend dependencies, navigate to the `client` directory and run:
```bash
npm install
```

### Development Commands
- **Start development server**:
   ```bash
   npm run dev
   ```
   This will run the server using `nodemon` for automatic restarts.

- **Start production server**:
   ```bash
   npm run start
   ```
   This will start the server using `node`.

- **Build the project**:
   ```bash
   npm run build
   ```
   This installs dependencies for both backend and frontend, and builds the frontend for production.

```

This setup and documentation will ensure that your project installs and runs smoothly.
