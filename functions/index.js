const functions = require("firebase-functions");
const app = require("express")();

const { getAllTodos, postOneToDo, deleteToDo } = require("./APIs/todos");

app.post("/todo", postOneToDo);

app.get("/todos", getAllTodos);

app.delete("/todo/:todoId", deleteToDo);

exports.api = functions.https.onRequest(app);
