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
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
app.get("/todos/done", (req, res) => {
    const filterTodos = data_1.todos.filter((completed) => {
        return completed.completed;
    });
    res.status(200).send(filterTodos);
});
app.post("/todos/create", (req, res) => {
    const { userId, id, title } = req.body;
    const newTodo = { userId, id, title, completed: false };
    data_1.todos.push(newTodo);
    res.status(201).send(newTodo);
    console.log(data_1.todos);
});
app.put("/todos/:userId/:id", (req, res) => {
    const userId = req.params.userId;
    const id = req.params.id;
    const filteredUser = data_1.todos.filter((user) => {
        return user.userId === Number(userId);
    }).filter((todoId) => {
        return todoId.id === Number(id);
    });
    const changeTaskStatus = filteredUser.filter((task) => {
        let aux = task.completed;
        if (aux) {
            return task.completed = false;
        }
        else {
            return task.completed = true;
        }
    });
    res.send(changeTaskStatus);
    console.log(data_1.todos);
});
app.delete("/deleteTodo/:userId/:id", (req, res) => {
    const userId = req.params.userId;
    const taskId = req.params.id;
    const filteredUser = data_1.todos.filter((user) => {
        return user.userId === Number(userId);
    }).filter((task) => {
        return task.id !== Number(taskId);
    });
    res.send(filteredUser);
    console.log(filteredUser);
});
app.get("/todos/:userId", (req, res) => {
    const userId = req.params.userId;
    const filteredUsers = data_1.todos.filter((user) => {
        return user.userId === Number(userId);
    });
    res.send(filteredUsers);
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map