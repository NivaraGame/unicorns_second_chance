const express = require('express');
const multer = require('multer');
const path = require("path");

const mongoose = require("mongoose");
const news = require("./route/news_route")
const cors = require("cors");

const app = express();
const PORT = 3001;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../src/components/images');
  },
  filename: function (req, file, cb) {
    console.log(file.originalname)
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });


require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO_URL, {
  dbName: process.env.MONGO_DB_NAME
}).then(async () => {
  console.log("connected to database");
}).catch((err) => {
  console.log(err.message);
})

app.use('/news', news);

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  res.send('File uploaded!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
