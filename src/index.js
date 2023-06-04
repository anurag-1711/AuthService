const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { PORT } = require("./config/serverConfig");

const apiRoutes = require("./routes/index");

// const UserService = require("./services/user-service");

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`);

        // const userService = new UserService();
        // const token = userService.createToken({ email: "anurag@gmail.com", id: 1 });
        // console.log(token);

        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudXJhZ0BnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNjg1ODE5ODY2LCJleHAiOjE2ODU4MTk4NzZ9.iOz6lsBztlq3gcu37QXk4xSc9EFRJrzNAGEQ0umA8cc";
        // const res = userService.verifyToken(token);
        // console.log(res);

        // const res = userService.checkPassword("123456", "$2b$10$ZLqJfPO9GbnA76/ZegkjH.9DK6hpN1qOx1kLI9iX8Z6lI6myXxqxu");
        // console.log(res);
    })
}

prepareAndStartServer();