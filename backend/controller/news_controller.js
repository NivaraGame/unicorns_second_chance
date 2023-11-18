const newsModel = require('../model/news');


const getNews = async () => {
  return newsModel.find({})
}

const createNews = async (id, first_name,
                          last_name, id_device, status,
                          last_connection, image) => {
  console.log(id, first_name,
    last_name, id_device, status,
    last_connection, image)
  return await newsModel.create({
    id: id,
    first_name: first_name,
    last_name: last_name,
    id_device: id_device,
    status: status,
    last_connection: last_connection,
    image: image
  });
  // {
  //   "id": 14,
  //   "first_name": "qwertyui",
  //   "last_name": "wertyu",
  //   "id_device": "1234567890",
  //   "status": "Active",
  //   "last_connection": "1234567890",
  //   "image": "Screenshot 2023-06-03 210109.png"
  // }
}

const updateNews = async (id, first_name,
                          last_name, id_device, status,
                          last_connection, image) => {
  newsModel.updateOne({id, first_name,
    last_name, id_device, status,
    last_connection, image});
}

const deleteNews = async (id, first_name,
  last_name, id_device, status,
  last_connection, image) => {
  newsModel.deleteOne({id, first_name,
    last_name, id_device, status,
    last_connection, image});
}
module.exports = {
  getNews,
  updateNews,
  createNews,
  deleteNews
}
