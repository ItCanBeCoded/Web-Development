const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection

    const database = client.db("fruitsDB");
    const collection = database.collection("fruits");
    
    

    const fruitDocuments = [
      {
        name: "Orange",
        score: 6,
        review: "its juicy"
      },
      {
        name: "Banana",
        score: 9,
        review: "Very tasty"
      },
      {
      name: "Orange",
      score: 6,
      review: "its juicy"
      }
    ];

    const options = { ordered: true };
    
    const result = await collection.insertMany(fruitDocuments, options);
    
    console.log("${result.insertedCount} documents were inserted")


  } finally {
    // Ensures that the client will close when you finish/error
    
    await client.close();
    
    
  }
}
run().catch(console.dir);




