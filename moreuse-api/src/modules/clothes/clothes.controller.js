const clothesService = require('./clothes.service');

const add = async (req,res) => {
  try {
    const clotheData = req.body;
    const userId = '64721324bf6df615eb01b006'; //TODO
    const response =await clothesService.add(clotheData, userId);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

const getAll = async (req,res) => {
  try {
    const filters = req.query;
    const response =await clothesService.getAll(filters);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

const getDetail = async (req,res) => {
  try {
    const {id: clotheId} = req.params;
    const response =await clothesService.getDetail(clotheId);
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

const changeStatus = async (req,res) => {
  try {
    const {id: clotheId} = req.params;
    const {statusId} = req.query;
    const response =await clothesService.changeStatus(clotheId, statusId);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

const update = async (req,res) => {
  try {
    const response =await null;
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

module.exports = {
  add,
  getAll,
  getDetail,
  changeStatus,
  update
}
