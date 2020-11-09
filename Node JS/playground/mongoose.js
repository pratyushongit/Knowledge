let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
})

const Task = mongoose.model('Task',{
    description : {
        trim : true,
        type : String
    }
});

module.exports = Task;