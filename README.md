# Description

Archivist is a character sheet &amp; leveling companion app for Dungeons and Dragons 5th Edition (DnD 5e).

⚠️ This project is under development and is best viewed on **desktop browser** screens.

# Tech Stack / Tools

- Node.js
- Express.js
- React (with Create React App)
- MongoDB
- Material UI

## Upcoming Changes

### Basic Features

- Save character and show it listed on the main page (via browser cookies)
- View/edit existing character sheet
- Multi-step character creation to allow more customization fields: alignment, backstory, etc.

### UI

- Light mode style optimizations
- Support for mobile and other screen sizes

### Code Quality

- Add tests for UI, server, API
- Convert to Typescript for better robustness

### Stretch Goals

- User logins, support for multiple characters per user
- Support for tracking more detailed character stats: feats, equipment, spells, etc.
- Helper text and info icons in character setup dialog with links to 5e manual for better useability and context
- Implement external fantasy name generator for randomized name suggestions
- Interface for uploading avatar and/or generating AI art for character portrait
- Create campaigns and invite other users

# Project Structure

This project is organized as a monorepo with separate client and server directories:

- `client/`: React frontend application (bootstrapped with Create React App)
- `server/`: Express.js backend API server

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
   This will install dependencies for the root project, client, and server.

2. Set up environment variables:
   - Create a `config.env` file in the server directory with your MongoDB connection string:
     ```
     ATLAS_URI=your_mongodb_connection_string
     PORT=4000
     ```

3. Start the development server:
   ```
   npm run dev
   ```
   This will start both the client (http://localhost:3000) and server (http://localhost:4000) in development mode.

## Available Scripts

In the root directory, you can run:

### `npm run dev`

Runs both client and server in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the client in your browser.\
The server will be running on [http://localhost:4000](http://localhost:4000).

### `npm start`

Similar to `npm run dev` but runs the server in production mode.

### `npm run build`

Builds the client app for production to the `client/build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run lint`

Runs ESLint to check for code quality issues across the project.

### Additional Scripts

For more detailed information about client-specific or server-specific scripts, refer to the respective package.json files in the client and server directories.
