const functions = require("firebase-functions");
const app = require("express")();

const { getAllTodos, postOneToDo, deleteToDo, editToDo } = require("./APIs/todos");
const { loginUser } = require("./APIs/users");

app.get("/todos", getAllTodos);

app.post("/todo", postOneToDo);

app.delete("/todo/:todoId", deleteToDo);

app.put("/todo/:todoId", editToDo);

app.post("/login", loginUser);

exports.api = functions.https.onRequest(app);
