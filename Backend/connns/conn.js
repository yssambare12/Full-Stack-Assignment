const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://yogeshsam:yogeshsam@cluster0.hurs4.mongodb.net/songdata?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})

module.exports = connect;