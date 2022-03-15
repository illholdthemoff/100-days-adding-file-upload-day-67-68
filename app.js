const path = require("path");

const express = require("express");

const userRoutes = require("./routes/users");
const db = require("./data/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); // gives users access to things in public folder
app.use("/images", express.static("images")); // gives users access to things in image folder. The "/images" beforehand basically includes /images as a paramater beforehand so that we dont have to go through code and remove the /images before every time we need to grab something from there. If you notice, whenever things from public folder are grabbed, it says something like "/styles/base.css" instead of "public/styles/base.css" as the parent folder name above is implied. With /images path filter we basically remove that.
//it means that it will only work if the request starts with a folder called /images

app.use(userRoutes);

db.connectToDatabase().then(function () {
  app.listen(3000);
});
