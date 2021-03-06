const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    name:               { type: String},
    email:              { type : String},
    price:              { type: Number},
    type:               { type: String},
    code:               { type: String},
    school:             { type: String},
    area:               { type: String},
    size:               { type: String},
    mobile:             { type: String},
    landlordname:       { type: String},
    location:           { type: String, unique: true},
    description:        { type: String},
    amenities:          { type: String},
    policies:           { type: String},
    images:             [{ type: String}],
    reviews:            [ { name: String,
                            body: String}],
    registration:       { type: Boolean},
    verified:           { type: Boolean},
    likes:              { type: Number, default: 0},
    sponsored:          { type: Boolean},
    visitedcount:       { type: Number, default: 0},
    createdAt:          { type: Date, default: Date.now}
},{
    collection: 'properties'
},{timestamps:true})

module.exports = mongoose.model("Property",PropertySchema);


