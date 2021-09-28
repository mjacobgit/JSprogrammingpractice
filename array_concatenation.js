function array_concat(arr){
    let result_array = []
    for (let j=0; j<2 ; j++){
    for (let i =0; i < arr.length; i++){
        result_array.push(arr[i])
    }
    }
    return result_array
}