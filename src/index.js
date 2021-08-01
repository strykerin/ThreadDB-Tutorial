import { Database } from "@textile/threaddb";
import { PrivateKey } from "@textile/crypto";

// Creating collection schema
const schema = ({
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Person",
  "description": "A simple person schema",
  "type": "object",
  "properties": {
    "_id": {
      "description": "Field to contain ulid-based instance id",
      "type": "string",
    },
    "name": {
      "description": "Name of the person",
      "type": "string",
    },
    "age": {
      "type": "integer",
      "minimum": 1,
    },
  },
  "required": ["_id", "name", "age"],
});

// Create an empty db, with a defined schema, and open it
const db = await new Database("demo", { name: "Person", schema }).open(1); // Versioned dbs

// We will insert data on our Person collection
// We will first create an instance of a Person
const Person = db.collection("Person")
const entity = Person.create({ name: "Other", age: 2 });
// Check if the Person is in the Container
await entity.exists() // false
// We insert the Person instance in our Colletion
await entity.save();

// Transactions are also supported by ThreadDB
const person1 = { name: "Someting1", age: 4 };
const person2 = { name: "Someting2", age: 10 };
const person3 = { name: "Someting3", age: 92 };
const person4 = { name: "Someting4", age: 60 };
await Person.writeTransaction(async function () {
  const [id] = await Person.insert(person1, person2, person3, person4);
});
// The Hub
// We’ve only be doing local operations. Now it’s time to interact with a remote daemon.
// Set key info (this is an insecure key)
console.log(await Person.find({}).count());
const key = "";
// Specify the key here, remote defaults to Hub APIs so no need to set
const remote = await db.remote.setKeyInfo({ key })