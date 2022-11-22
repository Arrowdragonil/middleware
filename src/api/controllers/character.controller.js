const Character = require('../models/character.model')

const { setError } = require('../../dae/error/error')

const getCharacters = async (req, res, next) => {

    try{
        const characters = await Character.find()
        return res.json({
            status:200,
            message: 'Personajes',
            data: { characters }
        })
    }catch (error) {
        return next(setError(500, 'fallo al mostrar los personajes, no se pudieron recuperar'))

    }
}

const postCharacter = async (req, res, next) => {
    try{
        const newCharacter = new Character(req.body)
        const newCharacterInDB = await newCharacter.save()

        return res.json({
            status: 201,
            message: 'personaje creado',
            data: { newCharacterInDB}
        })
    }catch (error) {

    }
}

module.exports = {getCharacters, postCharacter}