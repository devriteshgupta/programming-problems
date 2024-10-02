let arr = [7, 10, 4, 3, 20, 15];
let n = 2; // 2nd Smallest number

const kthsmallest = (arr,k)=> {
    let kthSmallestElement = null;
    let sortedArr = sortArray(arr);
    kthSmallestElement = sortedArr[k-1];
    return kthSmallestElement;
};

var sortArray = function(nums) {
   for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums [i+1]){
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
            i = -1;
        }
    }
    return nums;
};

console.log(kthsmallest(arr, n));