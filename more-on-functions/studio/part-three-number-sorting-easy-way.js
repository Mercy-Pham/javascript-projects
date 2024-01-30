//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

function numberSortingArray(nums) {
    nums.sort(function(a,b) {
        return a - b;
    });
    console.log(nums);
}

numberSortingArray(nums1);
numberSortingArray(nums2);
numberSortingArray(nums3);

//Sort each array in decending order.

function numberDescendingArray(nums) {
    nums.sort(function(b,a) {
        return a - b;
    });
    console.log(nums);
}

numberDescendingArray(nums1);
numberDescendingArray(nums2);
numberDescendingArray(nums3);
