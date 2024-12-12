const appoinmentModel = require('../models/appoinmentModel.js');
const userModel = require("../models/userModel");


const appoinmentController = async(req, res)=>{
    try {
        const currentUser = req.userId;
        console.log("currentUser", currentUser);
       

        const user = await userModel.findById(currentUser);
        if (!user) {
            return res.status(404).json({ success: false, error: true, message: "User not found" });
        }

        // Create booking data with user information
        const appoinmentData = {
            ...req.body,
            userId: currentUser
        };


        const uploadappoinment = new appoinmentModel(appoinmentData);
        const saveAppoinment = await uploadappoinment.save();

        res.status(201).json({
            message: "Appoinment information has been forwarded successfully",
            error: false,
            success: true,
            data: saveAppoinment
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

module.exports = appoinmentController