const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_KEY } = require("../config/serverConfig");
const UserRepository = require("../repository/user-repository");

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user = await this.userRepository.getById(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    createToken(user) {
        try {
            // const { email } = this.userRepository.getById(user);
            const token = jwt.sign(user, JWT_KEY, { expiresIn: "7d" });
            return token;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token verification", error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, hashedPassword) {
        try {
            const response = bcrypt.compareSync(userInputPlainPassword, hashedPassword);
            return response;
        } catch (error) {
            console.log("Something went wrong while checking password");
            throw error;
        }
    }
}

module.exports = UserService;