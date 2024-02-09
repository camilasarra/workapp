const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Hace referencia al modelo de usuario
        required: true // Indica que cada tarea debe estar asociada a un usuario
    },
    completed: {
        type: Boolean,
        default: false // Por defecto, la tarea se marca como no completada
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;