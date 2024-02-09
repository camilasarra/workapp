const Task = require('../../models/task')

module.exports = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener la tarea" });
    }
};