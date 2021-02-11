const mongoose = require("mongoose");
// Connection URI

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
   name: String,
   rating: Number,
   review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

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

   




