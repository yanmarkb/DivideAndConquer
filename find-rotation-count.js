// This function finds the number of rotations in a sorted array that has been rotated.
// A rotation occurs when the elements of the array are shifted to the right or left.
// The function uses a modified binary search algorithm to find the rotation count.
// It assumes that the array is sorted in ascending order and contains distinct elements.

function findRotationCount(arr) {
	let start = 0; // Initialize the start index of the array
	let end = arr.length - 1; // Initialize the end index of the array

	while (start <= end) {
		let mid = Math.floor((start + end) / 2); // Calculate the middle index of the array

		// Check if the middle element is the rotation point
		if (arr[mid] > arr[mid + 1]) {
			return mid + 1; // Return the index of the rotation point
		} else if (arr[start] <= arr[mid]) {
			// If the elements from start to mid are in sorted order,
			// the rotation point must be in the right half of the array
			start = mid + 1; // Update the start index to mid + 1
		} else {
			// If the elements from start to mid are not in sorted order,
			// the rotation point must be in the left half of the array
			end = mid - 1; // Update the end index to mid - 1
		}
	}

	return 0; // If no rotation is found, return 0
}

module.exports = findRotationCount;
