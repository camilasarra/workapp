const Task = require('../../models/task')

module.exports = async(req, res) => {

    try {
    const task = new Task(req.body);

    await task.save();

    console.log("TASK CREATED:", task);

    res.status(201).json({ message: "Task Created", task });

    } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating the task" });
}
};