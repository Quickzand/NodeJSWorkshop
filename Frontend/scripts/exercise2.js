const addButton = document.querySelector("#addDogButton");

addButton.addEventListener("click", function () {
	const name = document.getElementById("name").value;
	const breed = document.getElementById("breed").value;
	const owner = document.getElementById("owner").value;

	const dogData = {
		name,
		breed,
		owner,
	};

	console.log("Adding dog... ", dogData);

	addDog(dogData);
});

function addDog(dogData) {
	fetch("http://localhost:3000/addDog", {
		// Replace 'your-endpoint-url' with the actual URL
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(dogData),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("Success:", data);
			// Clear the form
			document.getElementById("name").value = "";
		})
		.catch((error) => {
			console.error("Error:", error);
			// Handle error - e.g., display an error message to the user
		});
}
