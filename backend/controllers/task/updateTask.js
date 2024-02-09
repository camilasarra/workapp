const Task = require('../../models/task')

module.exports = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updateData = req.body;
        const updatedTask = await Task.findByIdAndUpdate(taskId, updateData, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        console.log("Tarea actualizada:", updatedTask);
        res.status(200).json({ message: "Tarea actualizada", task: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar la tarea" });
    }
};