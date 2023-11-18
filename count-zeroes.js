// This function counts the number of zeroes in a sorted array using a binary search algorithm.

function countZeroes(arr) {
	let left = 0; // Initialize the left pointer to the start of the array
	let right = arr.length - 1; // Initialize the right pointer to the end of the array
	let mid; // Declare a variable to store the middle index

	while (left <= right) {
		// Repeat the following steps until the left pointer is greater than the right pointer
		mid = Math.floor((left + right) / 2); // Calculate the middle index

		if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
			// If the middle element is 0 and either it is the first element in the array or the element before it is 1,
			// then we have found the first occurrence of 0 in the array
			return arr.length - mid; // Return the count of zeroes by subtracting the index from the length of the array
		} else if (arr[mid] === 1) {
			// If the middle element is 1, then the desired 0 is on the right side of the array
			left = mid + 1; // Move the left pointer to the right of the middle index
		} else {
			// If the middle element is 0 and the element before it is also 0, then the desired 0 is on the left side of the array
			right = mid - 1; // Move the right pointer to the left of the middle index
		}
	}

	return 0; // If no zeroes are found, return 0
}

module.exports = countZeroes;
