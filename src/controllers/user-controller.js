const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
    try {
        const user = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: user,
            message: "Succesfully created a new user",
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong in the controller layer",
            success: false,
            err: error
        })
    }
}

const getById = async (req, res) => {
    try {
        const user = await userService.getById(req.body.id);
        return res.status(200).json({
            data: user,
            message: "Succesfully retrived a user",
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong in the controller layer",
            success: false,
            err: error
        })
    }
}

module.exports = {
    create,
    getById
}