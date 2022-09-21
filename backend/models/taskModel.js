const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Please add a task value']
    },
    date: {
        type: String,
        required: [true, 'Please add a date value']
    },
    reminder: {
        type: Boolean,
        required: [true, 'Please add a reminder value']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', taskSchema)