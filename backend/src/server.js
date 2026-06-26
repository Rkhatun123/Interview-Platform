const express = require("express");
const path = require("path");
const cors = require("cors");
const { serve } = require("inngest/express");
const { clerkMiddleware } = require("@clerk/express");

const { ENV } = require("./lib/env");
const { connectDB } = require("./lib/db");
const { inngest, functions } = require("./lib/inngest");

const chatRoutes = require("./routes/chatRoutes");
const sessionRoutes = require("./routes/sessionRoute");

const app = express();
console.log("CLIENT_URL =", ENV.CLIENT_URL);

//const __dirname = path.resolve();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin:"https://interview-platform-9-hu11.onrender.com/api",
    credentials: true,
  })
);

app.use(clerkMiddleware());

// Routes
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.get("/test", (req, res) => {
  res.send("Server working");
});

// Production
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });
}

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working" });
});
const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, () => {
      console.log("✅ Server is running on port:", ENV.PORT);
    });
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();
