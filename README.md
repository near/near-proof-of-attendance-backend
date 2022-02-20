EventCred | Proof of Attendance | Standard NEP171 | Backend

Quick Start
===========

To run this project locally:

1. Prerequisites: Make sure you've installed [Node.js] ≥ 16
2. Install dependencies: `yarn install`
3. Run the local development server: `yarn dev` (see `package.json` for a
   full list of `scripts` you can run with `yarn`). Or `yarn start` for production

Now you'll have a local development environment backed by the NEAR TestNet!

Exploring The Code
==================
The different endpoints live in /src/controllers. And they are:

1. /fleek/upload for ips storage.
2. /badges/:id for badge query.
3. /mint to mint the badges.
4. /test for health check on the server.

Over src/services/near.ts is where al the logic for interfacing with NEAR lives. 

For testing you can run the command `yarn test` to run the test suite. The files are in src/__tests__.