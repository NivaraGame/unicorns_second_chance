const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 3001;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/components/images');
  },
  filename: function (req, file, cb) {
    console.log(file.originalname)
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  res.send('File uploaded!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
