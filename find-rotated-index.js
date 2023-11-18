// This function finds the index of a given number in a rotated sorted array.
// It uses a modified binary search algorithm to efficiently search for the number.
function findRotatedIndex(arr, num) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (arr[mid] === num) {
			return mid; // If the middle element is the target number, return its index.
		}

		if (arr[start] <= arr[mid]) {
			// If the left half of the array is sorted in ascending order
			if (num >= arr[start] && num < arr[mid]) {
				// If the target number is within the left half, update the end index
				end = mid - 1;
			} else {
				// If the target number is not within the left half, update the start index
				start = mid + 1;
			}
		} else {
			// If the right half of the array is sorted in ascending order
			if (num > arr[mid] && num <= arr[end]) {
				// If the target number is within the right half, update the start index
				start = mid + 1;
			} else {
				// If the target number is not within the right half, update the end index
				end = mid - 1;
			}
		}
	}

	return -1; // If the target number is not found, return -1.
}

module.exports = findRotatedIndex;
