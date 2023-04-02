const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    type: {
        type: String
      },
    name:{
        type: String,
        required: true,

    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    image : {
        type: String,
    },
    rating : {
        type: Number,
       
    },
    available:{
        type: Boolean,
    }

});

const userSchema = new mongoose.Schema({
    type: {
        type: String
      },
    name: {
        type:String,
       
    },
    password:{
        type:String,
    },
    readingList: [{ type: Schema.Types.ObjectId, ref:'bookSchema'}]
});

const user = mongoose.model('user', userSchema);
const book = mongoose.model('book', bookSchema);

module.exports = {
    user,book
}