let arr=[0,0,0]
for(let x of nums){
    console.log(arr[x])
    arr[x] += 1
    console.log("==========",arr[x])
}
console.log(arr)
// for(let i=0;i<arr[0];i++){
//     nums[i]=0
// }
// for(let y=0;y<arr[1];y++){
//     nums[y+arr[0]]=1
// }
// for(let z=0;z<arr[2];z++){
//     nums[z+arr[1]+arr[0]]=2
// }

for (let i = 0; i< nums.length; i++) {
    if (i < arr[0]) {
        nums[i] = 0;
    } else if (i < arr[0] + arr[1]) {
        nums[i] = 1;
    } else if (i < arr[0] + arr[1] + arr[2]) {
        nums[i] = 2;
    }
}
console.log(nums)
nums = [3, 2, 2, 1, 1, 2, 3, 1] //output = [1, 1, 1, 2, 2, 2, 3, 3]