// Entry point for Plesk's Node.js hosting (Phusion Passenger).
// Passenger starts this file directly and expects it to listen on
// process.env.PORT — it doesn't run `npm start` / `next start` itself.
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`Wi Sabi Web listening on port ${port}`);
  });
});
