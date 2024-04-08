import express from "express";
import cors from "cors";
import fs from "fs";

// Synchronously read the file
const data = fs.readFileSync("data.json", { encoding: "utf8", flag: "r" });

// Parse the JSON string into an object
var dogData = JSON.parse(data);

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

// EXERCISE 1: Create a GET endpoint getDogs that returns all the dogs in the dogData.json file. The endpoint should be /getDogs.
app.get("/getDogs", (req, res) => {
	// Get all dogs from the dogData.json file
	dogData = JSON.parse(fs.readFileSync("data.json", "utf8"));
	res.json(dogData);
});

// EXERCISE 2: Create a POST endpoint addDog that adds a new dog to the dogData.json file. The endpoint should be /addDog.
app.post("/addDog", (req, res) => {
	const newDog = req.body;

	dogData.push(newDog);

	fs.writeFileSync("data.json", JSON.stringify(dogData, null, 2));

	res.json(dogData);
});

// EXERCISE 3: Create a PUT endpoint updateDog that updates a dog in the dogData.json file. The endpoint should be /updateDog/:name.
app.put("/updateDog/:name", (req, res) => {
	const dogName = req.params.name;
	const updatedDog = req.body;

	const dogIndex = dogData.findIndex((dog) => dog.name === dogName);

	dogData[dogIndex] = updatedDog;

	fs.writeFileSync("data.json", JSON.stringify(dogData, null, 2));

	res.json(dogData);
});

// EXERCISE 4: Create a DELETE endpoint deleteDog that deletes a dog from the dogData.json file. The endpoint should be /deleteDog/:name.
app.delete("/deleteDog/:name", (req, res) => {
	const dogName = req.params.name;

	const updatedDogData = dogData.filter((dog) => dog.name !== dogName);

	fs.writeFileSync("data.json", JSON.stringify(updatedDogData, null, 2));

	res.json(updatedDogData);
});
