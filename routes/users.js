const express = require('express');
const multer = require("multer");

const storageConfig = multer.diskStorage({
  destination: function(req, file, cb) { // cb is callback function
    cb(null, "images"); // first param is error handling, second is the destination
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // basically setting that filename with the date in milliseconds and adding onto original filename so that it makes the filename unique. an example, for "jeff.jpg" it would becoem 16737365815-jeff.jpg. We do this partially so we can see the name still, but also it keeps the extension visible (.jpg, png etc etc)
  }

})

// const upload = multer({ dest: "images" }); // our instantiation of multer MIDDLEWARE which will handle uploads of files. The argument here is dest, or destination, which we have selected the images folder. Dest just means where we will store our files once we get them. Something to note, when multer gets a file, it assigns it a new filename, which is unique, to avoid any issues when multiple files with the same filename are uploaded. This is commented out because typically when you just want to have the destination you use the default dest.

const upload = multer({storage: storageConfig}); // this uses the settings we specified above with the diskstorage.
const router = express.Router();

router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

router.post("/profiles", upload.single("image"), function(req, res) { // using upload.single() because this post only accepts one upload. The "image" refers to the name of the object on the form-control input in new-user.ejs. The ordering of arguments here is important by the way.
const uploadedImageFile = req.file; // the file grabbed from the upload. .file contains many member methods, like path, size, filename etc.
const userData = req.body; // other data stored in the body

console.log(uploadedImageFile);
console.log(userData);

res.redirect("/");
});

module.exports = router;