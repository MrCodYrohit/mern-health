**HealthSphere** : Empowering Wellness Your Complete Health Hub

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

   > **Note**: For detailed documentation of the code, please [visit this link](insert-link-here), or [click here](https://github.com/MrCodYrohit/mern-health/blob/main/HealthSphere%20Documentation.pdf)
