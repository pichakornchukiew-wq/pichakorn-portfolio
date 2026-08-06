/**
 * Custom production server entry point.
 *
 * Plesk's "Setup Node.js App" (used by HostAtom) starts your app via
 * Phusion Passenger, which needs a plain .js file to require() directly —
 * it does not run "npm start" / "next start" the way Vercel does.
 *
 * Point Plesk's "Application Startup File" field to this file (server.js).
 *
 * Local/Vercel usage is unaffected: `next dev` and `next build` still work
 * exactly as before, and Vercel never uses this file.
 */

process.env.NODE_ENV = "production";

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error starting Next.js server:", err);
    process.exit(1);
  });
