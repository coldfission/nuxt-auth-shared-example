import express from "express";

// Create express router
const router = express.Router();

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

// Add POST - /api/login
router.post("/login", (req, res) => {
  if (req.body.username === "demo" && req.body.password === "demo") {
    return res.json({
      token: "testing123"
    });
  }
  res.status(401).json({ message: "Bad credentials" });
});

// Export the server middleware
export default {
  path: "/api",
  handler: router
};
