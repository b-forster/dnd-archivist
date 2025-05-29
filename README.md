<p align="center">
   <img width="400" alt="Landing page with character list and Create Character button" src="https://github.com/user-attachments/assets/b7dbca07-1b18-4b0c-ac24-31d2fff6d380" />
   <img width="400" alt="Roll for Abilities step of Character Creation wizard" src="https://github.com/user-attachments/assets/6b37ad38-f970-405a-ba6a-eafe352aa444" />
</p>

# Description

Archivist is a character sheet &amp; leveling companion app for Dungeons and Dragons 5th Edition (DnD 5e).

⚠️ This project is under development and is best viewed on **desktop browser** screens in **light mode**.

# Features

- Multi-step character creation wizard
- Roll dice for ability scores according to 5th Edition rules
- Ability modifiers are added depending on chosen race
- List of saved characters on the main page

# Tech Stack / Tools

- Node.js
- Express.js
- React (with Create React App)
- MongoDB
- Material UI

## Upcoming Changes

### Basic Features

- View/edit existing character
- Level up a character and upgrade abilities

### UI

- Dark mode style optimizations
- Support for mobile and other screen sizes

### Code Quality

- Add tests for UI, server, API
- Add server side character validations
- Convert to Typescript for better type safety

### Stretch Goals

- User logins, support for multiple characters per user
- Support for tracking more detailed character stats: feats, equipment, spells, etc.
- Helper text and info icons in character setup dialog with links to 5e manual for better context and usability
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

# Acknowledgements

- Parchment icon by [Icons8](https://icons8.com/icon/YcQqArFgdVcn/parchment)

- d20 icons by [Freepik](https://www.flaticon.com/free-icons/d20)
