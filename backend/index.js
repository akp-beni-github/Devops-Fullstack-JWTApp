// backend/index.js
const express = require("express");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");
const cors = require("cors");



const app = express();
const PORT = 3001;


// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Specify your frontend's origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());

app.use("/api/auth", authRoutes); // All the routes defined in auth.js will be prefixed with /api/auth
app.use("/api/protected", protectedRoutes); // All the routes defined in auth.js will be prefixed with /api/auth


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

