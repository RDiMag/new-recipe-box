const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const favoritesController = require('../controllers/favorites')
const recipesController = require('../controllers/recipes')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/favorites', favoritesController.getFavorites)

router.get('/recipes', recipesController.getRecipes)


module.exports = router