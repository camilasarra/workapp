const Task = require('../../models/task')

module.exports = async (req, res) => {
    exports.deleteTaskById = async (req, res) => {
        try {
            const taskId = req.params.id;
            const deletedTask = await Task.findByIdAndDelete(taskId);
            if (!deletedTask) {
                return res.status(404).json({ message: "Tarea no encontrada" });
            }
            console.log("Tarea eliminada:", deletedTask);
            res.status(200).json({ message: "Tarea eliminada", task: deletedTask });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al eliminar la tarea" });
        }
    };
}