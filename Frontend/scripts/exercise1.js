var refreshButton = document.getElementById("refresh");

refreshButton.onclick = function () {
	// Do a fetch request to getDogs endpoint on localhost:3000
	fetch("http://localhost:3000/getDogs")
		.then((response) => response.json())
		.then((data) => {
			console.log("HERE");
			// Clear the dogList container
			document.getElementById("dogList").innerHTML = "";

			// Loop through the data and create a dog card for each dog
			data.forEach((dog) => {
				createDogCard(dog.name, dog.breed, dog.owner);
			});
		});
};

function createDogCard(name, breed, owner) {
	// Create the dogCard div
	const dogCard = document.createElement("div");
	dogCard.className = "dogCard";

	// Create and append the name div
	const nameDiv = document.createElement("div");
	nameDiv.className = "name";
	nameDiv.textContent = name;
	dogCard.appendChild(nameDiv);

	// Create and append the breed div
	const breedDiv = document.createElement("div");
	breedDiv.className = "breed";
	breedDiv.textContent = breed;
	dogCard.appendChild(breedDiv);

	// Create and append the img element
	const img = document.createElement("img");
	img.src = "images/dogs/dog.jpg"; // Assuming a static image path
	img.alt = "Dog image";
	dogCard.appendChild(img);

	// Create and append the owner div
	const ownerDiv = document.createElement("div");
	ownerDiv.className = "owner";
	ownerDiv.textContent = owner;
	dogCard.appendChild(ownerDiv);

	// Append the dogCard to the dogList container
	document.getElementById("dogList").appendChild(dogCard);
}
