const User =  require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async register(req, res) {
        let existUser = await User.findOne({ where: { email: req.body.email } })
        if(existUser)
            return res.status(400).json({ message: 'User already exists' })

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = await User.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: hash
        })
        
        if (user) {
            return res.status(201).json({
                message: 'User created'    
            })
        }

        return res.status(400).json({
            message: 'User not created'    
        })
    },

    async login(req, res) {
        const user = await User.findOne({ where: { email: req.body.email } })
        if (!user) {
            return res.status(400).json({ message: 'User not exists' })
        }

        const match = await bcrypt.compare(req.body.password, user.password);

        const accessToken = jwt.sign({ email: user.email, fullname: user.fullname }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        if (match) {
            return res.status(200).json({
                message: 'Login success',
                accessToken
            })
        }

        return res.status(400).json({
            message: 'Login failed'
        })
    }
}