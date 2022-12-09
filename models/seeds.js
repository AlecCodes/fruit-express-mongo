require('dotenv').config()
const mongoose = require('./connection')
const Fruit = require('./fruit')


mongoose.connection.on('open', () => {

    // define data we want to put in the database
    const startingFruits =  [
      { name: "Orange", color: "orange", readyToEat: false, date: 1, dates:[13, 2, 2, 3, 1]},
      { name: "Grape", color: "purple", readyToEat: false, date: 3,dates:[13, 2, 2, 3, 1]},
      { name: "Banana", color: "orange", readyToEat: false, date: 4, dates:[13, 2, 2, 3, 1]},
      { name: "Strawberry", color: "red", readyToEat: false, date: 33, dates:[13, 2, 2, 3, 1]},
      { name: "Coconut", color: "brown", readyToEat: true, date: 4, dates:[13, 2, 2, 3, 1]},
      { name: "Cherry", color: "red", readyToEat: true, date: 9, dates:[13, 2, 2, 3, 1]},
      ]
      
      // Delete all fruits
      Fruit.deleteMany({}, (err, data) => {
        // Create new fruits once old fruits are deleted
        Fruit.create(startingFruits, (err, data) =>{

            console.log(data)
            
        })
      })
      
})
