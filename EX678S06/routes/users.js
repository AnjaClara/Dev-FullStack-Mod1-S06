const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller');

// router.post('/users/:name', userController.postUserByName); //EX6

//Para o EX8 foi acrescentado "verificaCargo";
// Caso queira validar apenas o EX7, comente a função e retire da const postUsers
router.post('/users', userController.verificaCargo,  userController.postUsers)
router.delete('/users/:id', userController.deleteUserById);

module.exports = router