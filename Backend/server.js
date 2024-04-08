import express from "express";
import cors from "cors";
import fs from "fs";

// Synchronously read the file
const data = fs.readFileSync("data.json", { encoding: "utf8", flag: "r" });

// Parses the JSON string into an object
var dogData = JSON.parse(data);

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

// Sets up server to listen on port 3000
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

// EXERCISE 1: Create a GET endpoint getDogs that returns all the dogs in the dogData.json file. The endpoint should be /getDogs.

// EXERCISE 2: Create a POST endpoint addDog that adds a new dog to the dogData.json file. The endpoint should be /addDog.

// EXERCISE 3: Create a PUT endpoint updateDog that updates a dog in the dogData.json file. The endpoint should be /updateDog/:name.

// EXERCISE 4: Create a DELETE endpoint deleteDog that deletes a dog from the dogData.json file. The endpoint should be /deleteDog/:name.
