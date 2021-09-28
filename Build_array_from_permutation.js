function array_sort(nums) {
    let results_array = []
    for (let i = 0; i < nums.length; i++){
        results_array.push(nums[nums[i]])
    }
    return results_array
}

arr = [0,2,1,5,3,4]

console.log(array_sort(arr))