// This function takes in an array and a number as input
function sortedFrequency(arr, num) {
	// Initialize a variable to keep track of the count
	let count = 0;

	// Iterate through each element in the array
	for (let i = 0; i < arr.length; i++) {
		// If the current element is equal to the given number
		if (arr[i] === num) {
			// Increment the count
			count++;
		}
	}

	// If the count is greater than 0, return the count
	// Otherwise, return -1
	return count > 0 ? count : -1;
}

// Export the sortedFrequency function to be used in other modules
module.exports = sortedFrequency;
