const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const productSchema = mongoose.Schema({

    pimg:String,
    pname:String,
    pdesc:String,
    pprice:Number
});

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin,"product")

const productModal = mongoose.model("product",productSchema);

module.exports = productModal;