// This function finds the largest number in a sorted array that is less than or equal to a given number.
function findFloor(arr, num) {
	let start = 0; // Initialize the start index of the array
	let end = arr.length - 1; // Initialize the end index of the array
	let floor = -1; // Initialize the floor value to -1

	while (start <= end) {
		// Repeat until the start index is less than or equal to the end index
		let mid = Math.floor((start + end) / 2); // Calculate the middle index of the array

		if (arr[mid] === num) {
			// If the middle element is equal to the given number
			return arr[mid]; // Return the middle element as it is the floor value
		} else if (arr[mid] < num) {
			// If the middle element is less than the given number
			floor = arr[mid]; // Update the floor value to the middle element
			start = mid + 1; // Update the start index to the next element
		} else {
			// If the middle element is greater than the given number
			end = mid - 1; // Update the end index to the previous element
		}
	}

	return floor; // Return the floor value
}

module.exports = findFloor;
