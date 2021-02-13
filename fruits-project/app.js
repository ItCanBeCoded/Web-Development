const mongoose = require("mongoose");
// Connection URI

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
   name: String,
   rating: Number,
   review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 10,
  review: "best fruit!"
})

pineapple.save();

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
  age: Number,
  favoriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

Person.updateOne({name: "Steve", favoriteFruit: pineapple }, function(err){
  if(err){
    console.log(err)
  }else {
    console.log("updated!");
  }
})

// person.save().then(() => console.log("person added!"));
const _ids = ["6025a6e3e501621728a33935", "6025b77a6cf3250cbc949b58", "6025b77a6cf3250cbc949b57" , "6025b77a6cf3250cbc949b59"]

Fruit.deleteMany({_id: {$in: _ids} }, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("deleted up yup");
  }
});


   
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


Person.deleteOne({_id: "6027fb569ac77809207771f7"}, function(err){
  if(err){
    console.log(err);
} else {
  console.log("successfully deleted");
}
})

