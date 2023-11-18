const express = require('express');
const {getNewsByRegion, createNews, getNews, updateNews, deleteNews} = require("../controller/news_controller");
const router = express.Router();


router.get('/', async function (req, res) {
    try {
        const data = await getNews();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Помилка на сервері');
    }
});

router.post('/', async function (req, res) {
    try {
        const {id, first_name,
          last_name, id_device, status,
          last_connection, image} = req.body;
        const data = await createNews(id, first_name,
          last_name, id_device, status,
          last_connection, image);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Помилка на сервері');
    }
});

router.put('/', async function (req, res) {
  try {
    const {id, first_name,
      last_name, id_device, status,
      last_connection, image} = req.body;
    const data = await updateNews(id, first_name,
      last_name, id_device, status,
      last_connection, image);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Помилка на сервері');
  }
});

router.delete('/', async function (req, res) {
  try {
    const {id, first_name,
      last_name, id_device, status,
      last_connection, image} = req.body;
    const data = await deleteNews(id, first_name,
      last_name, id_device, status,
      last_connection, image);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Помилка на сервері');
  }
});

module.exports = router;
