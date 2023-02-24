const axios = require('axios')

//Is it correct to do the API call within this controller file, and the render(recipes.ejs) part in the router file?

module.exports = {
  getRecipes: ('/recipes/:query', async (req, res) => {

  try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
      console.log(response.data.hits)
      // Does this render call look okay?
      res.render('recipes', { recipe : response.data});
    
    
  } catch (err) {
    if(err.response) {
      console.log(err.response.data)
      console.log(err.response.status)
    } else if (err.request) {
      console.log(err.request)
    } else {
      console.error('Error', err.message)
    }
  }

})

}