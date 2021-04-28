# sectra-starter

Ensure that the following software is installed on your system:

* A current version of [NodeJS](https://nodejs.org/).

* The [React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) Chrome extension.

## Usage

There are two separate projects to set up - `node` and `frontend`. Follow the instructions for each below.

### node

Switch to the `node` directory and run

    npm install

to install the project's dependencies.

_httprequest (asynchrony in JavaScript)_

This example demonstrates how to send a HTTP request and receive a response in NodeJS, using either callbacks, Promises or the _async / await_ syntax.

Run

    npm run build

    node dist/httprequest

to compile and run the (TypeScript) code.

_API server_

Run

    npm start

to start the NodeJS (API) server running @ [http://localhost:5000](http://localhost:5000). The server will watch changes made to any files in `src` and restart automatically.

The server exposes a single endpoint to fetch a user by ID. It fetches the requested user's details and todos (see `routes.ts` and `userService.ts`). Test it via e.g.:

    curl http://localhost:5000/1

### frontend

Switch to the `frontend` directory and run

    npm install

to install the project's dependencies.

Create a file `src/.env.local` with the following content:

    REACT_APP_API_URL=https://jsonplaceholder.typicode.com

_Scripts_

    npm start

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

    npm test

Launches the test runner in the interactive watch mode.

    npm run build

Builds the app for production to the `build` folder. It correctly bundles and optimizes React for production mode.

> This project was initially generated with the command `npx create-react-app sectra-starter`.
