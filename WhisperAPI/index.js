const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const router = require("./Routes.js");



// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // Enable CORS



// Routes
app.use("/spamsnipper", router);




const port = 5000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
