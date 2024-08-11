const Task = require('../models/task');

class TaskController {
    async create(req, res) {
        try {
            let { title, description } = req.body;

            if (!title) {
                return res.status(422)
                    .json({ message: "Title is required!" })
            }

            if (!description) {
                return res.status(422)
                    .json({ message: "Description is required!" })
            }

            const task = new Task({
                title,
                description,
            });

            await task.save();

            return res.status(200).json({ message: "Task successfully created!" })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async getAll(req, res) {
        try {
            const tasks = await Task.find();
            res.status(200).json(tasks)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async getById(req, res) {
        try {
            const id = req.query.id;

            if(!id){
                return res.status(422).json({message: "ID is required!"})
            }

            const task = await Task.findById(id);

            return res.status(200).json(task)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async update(req, res) {
        try {
            const id = req.query.id;

            const {title, description} = req.body;

            if(!id){
                return res.status(422).json({message: "ID is required!"})
            }

            await Task.findByIdAndUpdate(id, {
                title,
                desciption,
            })

            const taskUpdate = await Task.findById(id);

            return res.status(200).json(taskUpdate)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async delete(req, res) {
        try {
            const id = req.query.id;

            if(!id){
                return res.status(422).json({message: "ID is required!"})
            }

            await Task.findByIdAndDelete(id)

            return res.status(200).json({message: "Task Delete"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }
}

module.exports = new TaskController();