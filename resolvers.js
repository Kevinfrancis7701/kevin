const Task = require('./models/task');

const resolvers = {
  Query: {
    tasks: async () => await Task.find(),
    task: async (_, { id }) => await Task.findById(id), // ✅ Add this
    tasksByStatus: async (_, { status }) => await Task.find({ status }),
  },
  Mutation: {
    createTask: async (_, { title, description, status, dueDate }) => {
      const task = new Task({ title, description, status, dueDate });
      return await task.save();
    },
    updateTaskStatus: async (_, { id, status }) => {
      return await Task.findByIdAndUpdate(id, { status }, { new: true });
    },
  },
};

module.exports = resolvers;
