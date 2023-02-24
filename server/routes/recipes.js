const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes')

router.get('/', recipesController.getRecipes)


module.exports = router


// const express = require ('express')
// const recipeRouter = express.Router()
// const axios = require('axios')

// recipeRouter.get('/recipes/:query', async(req, req) => {

//   try {
//       const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
//       console.log(response.data.hits)
//       res.render('recipes');
    
    
//   } catch (err) {
//     if(err.response) {
//       console.log(err.response.data)
//       console.log(err.response.status)
//     } else if (err.request) {
//       console.log(err.request)
//     } else {
//       console.error('Error', err.message)
//     }
//   }

// })

// module.exports = recipeRouter