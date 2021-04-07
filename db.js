var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sgupta98:mZ9LonSKLZN5lkYq@mini-orange.sfnk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
  });