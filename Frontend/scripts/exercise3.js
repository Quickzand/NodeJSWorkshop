const editButton = document.querySelector("#editDogButton");

editButton.addEventListener("click", function () {
	const name = document.getElementById("editName").value;
	const breed = document.getElementById("editBreed").value;
	const owner = document.getElementById("editOwner").value;

	const dogData = {
		name,
		breed,
		owner,
	};

	console.log("Editing dog... ", dogData);

	editDog(dogData);
});

function editDog(dogData) {
	// Assuming dogData contains a 'name' property that holds the current name of the dog.
	const url = `http://localhost:3000/updateDog/${encodeURIComponent(
		dogData.name
	)}`;

	fetch(url, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(dogData),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("Success:", data);
			// Clear the form after editing
			document.getElementById("editName").value = "";
			document.getElementById("editBreed").value = "";
			document.getElementById("editOwner").value = "";
			// Optionally, update the UI to reflect the edited dog details
		})
		.catch((error) => {
			console.error("Error:", error);
			// Handle error - e.g., display an error message to the user
		});
}
