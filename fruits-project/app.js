const mongoose = require("mongoose");
// Connection URI

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
   name: String,
   rating: Number,
   review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const kiwi = new Fruit({
    name: "kiwi",
    rating: 5,
    review: "not good"
});

const orange = new Fruit({
  name: "orange",
  rating: 7,
  review: "great in summer"
});
const banana = new Fruit({
  name: "banana",
  rating: 8,
  review: "the year round fruit"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// })

//fruit.save().then(() => console.log("fruiiittt"));

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save().then(() => console.log("person added!"));
   
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    console.log(fruits);

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }

})


Person.deleteOne({_id: "6025b29d3dae210428da82c0"}, function(err){
  if(err){
    console.log(err);
} else {
  console.log("successfully deleted");
}

})
