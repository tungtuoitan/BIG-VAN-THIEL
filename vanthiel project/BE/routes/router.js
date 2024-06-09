
const AuthController = require('../controllers/AuthController')
const validate = require('../middlewares/validate.mdw')
const loginSchema = require('../schema/login.json')
const registerSchema = require('../schema/register.json')
const authMdw = require('../middlewares/auth.mdw')

module.exports = function(app) {
    app.post('/register', validate(registerSchema), AuthController.register)
    app.post('/login', validate(loginSchema), AuthController.login)
    app.get('/test-login', authMdw, function(req, res) {
        res.send('OK')
    })
}