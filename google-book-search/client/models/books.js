const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    description: { type: String},
    image: { type: String},
    link:{ type: String}
    

})

module.exports = Book;