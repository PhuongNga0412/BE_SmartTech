const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const bodyCookie = require("cookie-parser");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

const cloudinary = require("./config/cloudinary");
const paypalRoutes = require("./routes/PaypalRouter");

app.use(
    cors({
        origin: "*",
        credentials: true,
        // origin: "http://localhost:5173",
        // origin: "https://fe-smart-tech.vercel.app/",
    })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(cookieParser());
routes(app);
app.use(paypalRoutes);

mongoose
    .connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log("Connect DB success");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log("server is running in port", +port);
});
