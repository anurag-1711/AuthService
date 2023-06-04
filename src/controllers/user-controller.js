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

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            token: response,
            message: "Succesfully signed in",
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

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data: response,
            message: "User is authenticated and token is valid",
            success: true,
            err: {}
        });
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

const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        res.status(200).json({
            isAdmin: response,
            message: "Succesfully fetched whether user is admin or not",
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
    getById,
    signIn,
    isAuthenticated,
    isAdmin
}