// Entry point for Plesk's Node.js hosting on Windows/IIS (via the iisnode
// module, wired up in web.config). iisnode starts this file directly and
// expects it to listen on process.env.PORT (a named pipe path under
// iisnode, not a plain TCP port) — it doesn't run `npm start` / `next
// start` itself.
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error occurred handling request:", req.url, err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    });

    server.on("error", (err) => {
      console.error("Server error:", err);
    });

    server.listen(port, () => {
      console.log(`Wi Sabi Web listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error during app preparation:", err);
    process.exit(1);
  });
