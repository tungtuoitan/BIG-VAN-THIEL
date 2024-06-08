
const ProductController = require('../controllers/ProductController')

module.exports = function(app) {
    app.get('/api/products', ProductController.getAll)
}