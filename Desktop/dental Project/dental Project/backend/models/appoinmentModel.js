const mongoose = require('mongoose')

const appoinSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fullname: String,
    phone: String,
    treatment: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
},{
    timestamps : true
})

const appoinmentModel =  mongoose.model("Appoinments",appoinSchema)

module.exports = appoinmentModel
