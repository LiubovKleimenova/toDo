const functions = require("firebase-functions");
const app = require("express")();

const { getAllTodos, postOneToDo, deleteToDo, editToDo } = require("./APIs/todos");

app.get("/todos", getAllTodos);

app.post("/todo", postOneToDo);

app.delete("/todo/:todoId", deleteToDo);

app.put("/todo/:todoId", editToDo);

exports.api = functions.https.onRequest(app);
