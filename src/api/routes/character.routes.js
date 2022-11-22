const CharacterRoutes = require('express').Router()

const { isAuth } = require('../middlewares/auth.middleware')

const { getCharacters, postCharacter } = require('../controllers/character.controller')

CharacterRoutes.get('/', [isAuth],getCharacters)
CharacterRoutes.post('/', [isAuth], postCharacter)

module.exports = CharacterRoutes