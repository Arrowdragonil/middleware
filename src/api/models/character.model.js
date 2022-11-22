const mongoose = require("mongoose")


const characterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true},
        surname: {type: String, required: true}
    },
    {
        timestamps: true
    },
)


module.exports = mongoose.model("characters", characterSchema)