const express = require('express');
const {
  getNewsByRegion,
  createNews,
  getNews,
  updateNews,
  deleteNews,
  getNewsById
} = require("../controller/news_controller");
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
router.get('/:id', async function (req, res) {
  try {
    const data = await getNewsById(req.params.id);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Помилка на сервері');
  }
});
router.post('/', async function (req, res) {
  try {
    const {
      id, first_name,
      last_name, id_device, status,
      last_connection, image
    } = req.body;
    const data = await createNews(id, first_name,
      last_name, id_device, status,
      last_connection, image);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Помилка на сервері');
  }
});

router.put('/:id', async function (req, res) {
  try {
    const {
      id, first_name,
      last_name, id_device, status,
      last_connection, image
    } = req.body;
    console.log(req.body)
    const data = await updateNews(id, first_name,
      last_name, id_device, status,
      last_connection, image);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Помилка на сервері');
  }
});

router.delete('/:id', async function (req, res) {
  try {
    const data = await deleteNews(req.params.id);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Помилка на сервері');
  }
});

module.exports = router;
