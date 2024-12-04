const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Resolve directory path
const _dirname = path.resolve();
const app = express();

// Configure server to bind to all network interfaces

const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from frontend build directory
app.use(express.static(path.join(_dirname, "/frontend/dist")));

// Increase server timeout settings
app.server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Increase keep-alive and headers timeout
app.server.keepAliveTimeout = 120000;  // 120 seconds
app.server.headersTimeout = 120000;    // 120 seconds

// Catch-all route for frontend
app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

// Optional: Add error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});