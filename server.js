const express = require("express");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config({path : "config/.env"});
require("./config/database");
const {checkUser} = require("./middleware/auth.middleware.js");
const {requireAuth} = require("./middleware/auth.middleware.js");
const port = process.env.port || 3000;
const app = express();
const cors = require("cors");


//middleware 
app.use(bodyParser.json());//pour lire les req.body
app.use(bodyParser.urlencoded({extended : true}));//req.params
app.use(cookieParser()); //req.cookies
const corsOptions = {
    origin : "http://localhost:3001",
    credentials : true,
    "allowedHeaders" : ["sessionId", "Content-Type"],
    "exposedHeaders" : ["sessionId"],
    "methods" : "GET, HEAD, PUT, PATCH, POST, DELETE",
    "preflightContinue" : false
};
app.use(cors(corsOptions));


//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});

//routes 
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

// server
app.listen(port, () => {
    console.log("serveur a commencé sur port : ", port);
})