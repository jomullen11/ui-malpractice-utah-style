const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 8000;

const storage = multer.diskStorage({
destination: function(req, file, cb) {
    cb(null, "files");
},
filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
}
});

var upload = multer({ storage: storage }).array("file");

app.post("/upload", function(req, res) {
upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
    return res.status(500).json(err);
    } else if (err) {
    return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
});
});

app.listen(PORT, function() {
console.log(`App running on port ${PORT}`);
});
