const deleteButton = document.querySelector("#deleteDogButton");

deleteButton.addEventListener("click", function () {
	const name = document.getElementById("deleteName").value;

	if (!name) {
		console.error("Dog name is required for deletion.");
		return; // Early exit if no name provided
	}

	deleteDog(name);
});

function deleteDog(name) {
	const url = `http://localhost:3000/deleteDog/${encodeURIComponent(name)}`;

	fetch(url, {
		method: "DELETE",
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("Success:", data);
			// Optionally, update the UI to reflect the dog has been deleted
			// For example, clear the input field
			document.getElementById("deleteName").value = "";
			// Display a success message or refresh the part of your page that lists dogs
		})
		.catch((error) => {
			console.error("Error:", error);
			// Handle error - e.g., display an error message to the user
		});
}
