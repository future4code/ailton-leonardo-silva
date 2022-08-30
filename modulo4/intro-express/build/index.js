"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(200).send("Endpoint funcionando.");
});
app.get("/users", (request, response) => {
    response.send(data_1.users);
    console.log(data_1.users);
});
app.get("/users/posts", (request, response) => {
    const mapPosts = data_1.users.map((posts) => {
        return posts.posts;
    });
    response.send(mapPosts);
});
app.get("/users/:userId", (request, response) => {
    const userId = request.params.userId;
    const getPosts = data_1.users.filter((users) => {
        return users.userId === Number(userId);
    });
    const mapPosts = getPosts.map((posts) => {
        return posts.posts;
    });
    response.send(mapPosts);
});
app.delete("/deleteUser/:userId/posts/:postId", (request, response) => {
    const userId = request.params.userId;
    const postId = request.params.postId;
    const getPosts = data_1.users.filter((users) => {
        return users.userId === Number(userId);
    });
    const mapPosts = getPosts.map((posts) => {
        return posts.posts;
    });
    const deletePost = mapPosts.filter((posts) => {
        return posts.postId !== postId;
    });
    response.status(200).send(deletePost);
    console.log(deletePost);
});
app.delete("/deleteUser/:userId", (request, response) => {
    const userId = request.params.userId;
    const deleteUser = data_1.users.filter((users) => {
        return users.userId !== Number(userId);
    });
    response.status(200).send(deleteUser);
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map