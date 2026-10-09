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
