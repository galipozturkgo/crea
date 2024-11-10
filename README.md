# Crea

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Important Notes](#important-notes)

## Installation

To get started with the project, first install the dependencies:

```bash
npm install
```

This command will install all the necessary dependencies for the project.

## Running the Application

To start the development server and run the application, use the following command:

```bash
nx serve
```

Once the server is running, the app will be available at `http://localhost:4400`. You can open this URL in your browser to view the app.

## Testing

To run the unit tests for the project:

```bash
nx test
```

This will execute all the tests and display the results in the terminal.

## Important Notes

- If you encounter any issues related to "nx" or workspace errors, you can reset the workspace using the following command:

  ```bash
  nx reset
  ```

- Ensure that **Node.js** and **npm** are installed on your machine. You can check the installed versions by running:

  ```bash
  node -v
  npm -v
  ```

- The project uses **MSW (Mock Service Worker)** in the development environment to mock API responses. In production mode, MSW will not be used.

## Additional Information

For more detailed usage or project-specific information, please refer to the internal documentation within the codebase or ask a team member for assistance.
