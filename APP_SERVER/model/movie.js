const mongoose = require('mongoose');
const movieSchema = new
mongoose.Schema({
title: {type: String, required: true, min:3},
year: {
type: Date,
required: true
},
distributor:{
type:String,required:true
},
language:{
    type:String,required:true
},
agegroup:{
    type:String,required:false
}

});

mongoose.model('food',foodSchema,'foods');