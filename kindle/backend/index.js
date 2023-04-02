//XwY3XeoC7zyKNw1m

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/",router);
app.use(
    cookieSession({
        name: "session",
        keys:["login"],
        maxAge:24*60*60*100,
    })
);
app.use(passport.initialize());
app.use(passport.session());
const port = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
//at0XqWueJvAVnKdg
mongoose.connect("mongodb+srv://admin:at0XqWueJvAVnKdg@cluster0.w0xnoaz.mongodb.net/bookStore?retryWrites=true&w=majority").then(()=>
console.log("connected to db")).then(()=>{app.listen(port)}).catch((err)=>console.log(err))










