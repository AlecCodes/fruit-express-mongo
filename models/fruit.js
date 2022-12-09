
//////////////////////////////////////////////
//////// Fruits Model
///////////////////////////////////////////////
const mongoose = require('./connection')

const { Schema, model } = mongoose // destructuring, grabbing model and Schema off mongoose variable
// mongoose.Schema
// mongoose.model


const fruitsSchema = new  Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    date: Number,
    dates: [Number],
})


fruitsSchema.methods.sorter = function(){
    this.dates.sort((a,b)=>{
        if (a>b){
            return -1
        } if (a<b){
            return 1
        } else {
            return 0
        }
    })
    console.log(this.dates)
}


const Fruit = model('Fruit', fruitsSchema)

module.exports = Fruit

