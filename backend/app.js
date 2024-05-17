const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser())

// Middleware Imports
const errorMiddleware = require("./middleware/error")

// Route Imports
const serviceRoutes = require("./routes/serviceRoute");
const userRoutes = require("./routes/userRoute");
const messageRoute = require("./routes/messageRoute")
// const serviceProviderRoutes = require("./routes/serviceProviderRoute");
const subCategoryRoutes = require("./routes/subCategoryRoute");
// const serviceRequestRoutes = require("./routes/serviceRequestRoute");
// const reviewRoutes = require("./routes/reviewRoute");

// Mount routes
app.use("/api/v1", serviceRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", messageRoute);
// app.use("/api/v1/service-providers", serviceProviderRoutes);
app.use("/api/v1/subcategories", subCategoryRoutes);
// app.use("/api/v1/service-requests", serviceRequestRoutes);
// app.use("/api/v1/reviews", reviewRoutes);

// Middleware for error
app.use(errorMiddleware)

module.exports = app;
