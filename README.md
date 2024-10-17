**HealthSphere** : Empowering Wellness Your Complete Health Hub

**DEMO/Live Project**: For demo of the project, please [click here](https://mern-health.onrender.com/)

## Technology Stack

- **React**: Used for building the user interface.
- **Tailwind CSS**: Utilized for styling the application.
- **React Router DOM**: Implemented for creating routes and dynamic pages.
- **JSON Web Token (JWT)**: Used for authentication functionality.
- **Google OAuth**: Integrated for additional authentication options.
- **Node and Express**: Used for building the backend server and handling API requests.
- **Redux Toolkit**: Employed for managing application state.
- **MongoDB**: Utilized as the database for all CRUD operations.
- **Render**: Used for deploying the application.

## Project Overview

1. **Installation and Setup**:
   - Installed React, Tailwind CSS, and React Router DOM.
   - Configured the initial setup to create routes and dynamic pages.

2. **Authentication**:
   - Implemented authentication functionality using JSON Web Token (JWT).
   - Integrated Google OAuth for user login.
   - Enabled users to log in and update their username, password, email, and profile image.

3. **State Management**:
   - Used Redux Toolkit for managing the application's state.

4. **CRUD Operations**:
   - Utilized MongoDB for implementing all four CRUD operations (Create, Read, Update, Delete).
   - Allowed users to create add new patients with parameters such as critical/not critical, medical insurance, heart rate, etc.

5. **Search Functionality**:
   - Implemented advanced search functionality.
   - Allowed users to search by name of patient, select certain options, and sort search results by age.

6. **Deployment**:
   - Deployed the application using Render's free variant.

To add dependencies for this project setup, follow these steps:

1. **Create or Update `package.json`:**  
   If you already have a `package.json` file, make sure it matches the one you provided. If not, create the file and copy the contents into it.

   Example `package.json`:
   ```json
   {
     "name": "mern-health",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "type": "module",
     "scripts": {
       "dev": "nodemon api/index.js",
       "start": "node api/index.js",
       "build": "npm install && npm install --prefix client && npm run build --prefix client"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
       "bcryptjs": "^2.4.3",
       "cookie-parser": "^1.4.7",
       "dotenv": "^16.4.5",
       "express": "^4.21.1",
       "jsonwebtoken": "^9.0.2",
       "mongoose": "^8.7.1",
       "nodemon": "^3.1.7"
     }
   }
   ```

2. **Install Dependencies:**
   Run the following command in your project directory to install the listed dependencies:

   ```bash
   npm install
   ```

   This will install the dependencies like `bcryptjs`, `cookie-parser`, `dotenv`, `express`, `jsonwebtoken`, `mongoose`, and `nodemon`.

3. **Set Up Client Dependencies:**
   If you have a frontend client (React, for example), navigate to the `client` folder, and run the following to ensure that the client dependencies are installed as well:

   ```bash
   npm install --prefix client
   ```

4. **Start the Development Server:**
   Once the dependencies are installed, you can start your development server using:

   ```bash
   npm run dev


   ```

   This will run your backend using `nodemon`, which automatically restarts the server when changes are made.

By following these steps, you'll have the necessary dependencies installed and the project environment set up correctly. Let me know if you need any further assistance with your MERN stack project!

   > **Note**: For detailed documentation of the code, please [click here](https://github.com/MrCodYrohit/mern-health/blob/main/HealthSphere%20Documentation.pdf)
