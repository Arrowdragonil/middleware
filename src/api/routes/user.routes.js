const UserRoutes = require('express').Router()

const { register, login } = require('../controllers/user.controller')

UserRoutes.post('/register', register)
UserRoutes.post('/login', login)

module.exports = UserRoutes