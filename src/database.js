const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/mydb?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db=>{
    console.log("mongodb connected")
}).catch( err => console.log(err))