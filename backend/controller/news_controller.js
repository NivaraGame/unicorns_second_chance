const newsModel = require('../model/news');


const getNews = async () => {
  return newsModel.find({})
}
const getNewsById = async (id) => {
  return newsModel.findOne({id: id})
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
}

const updateNews = async (id, first_name,
                          last_name, id_device, status,
                          last_connection, image) => {
  console.log("update")
  console.log(id, first_name,
    last_name, id_device, status,
    last_connection, image)
  const news = {
    id: id,
    first_name: first_name,
    last_name: last_name,
    id_device: id_device,
    status: status,
    last_connection: last_connection,
    image: image
  }
  return newsModel.updateOne({id: id}, news);
}

const deleteNews = async (id) => {
  console.log(id, 'delete')
  return newsModel.deleteOne({id: id});
}
module.exports = {
  getNews,
  getNewsById,
  updateNews,
  createNews,
  deleteNews
}
