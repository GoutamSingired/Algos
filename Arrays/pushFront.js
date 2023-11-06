// Given an array and an additional value,
// insert this value at the beginning of the array. 
//You may use .push(), you are able do this without it though!

const pushArray = (array, value) => {

    for(var i = array.length; i >=0; i--){
        array[i] = array[i-1]
    }
    array[0] = value

    return array
    
}

//console.log(pushArray([5,7,2,3], 8))

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]


// Given an array, remove and return the value at the beginning of the array.
// Prove the value is removed from the array by printing it. 
//You may use .pop(), you are able do this without it though!

//popFront([0,5,10,15])

const popFront = (array) => {
    var value = array[0]

    for (var i =0; i < array.length-1; i++){
        array[i] = array[i+1]
    }
    array.length = array.length-1

    console.log(array)

    return value + " is returned"

}
//console.log(popFront([0,5,10,15]))

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function


// Insert At
// Given an array, index, and additional value, 
//insert the value into array at given index. 
//You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 
//You may use .push(), you are able do this without it though!


const insertAt = (array, index, value) => {
    //array[0] = value

    for (var i = array.length; i >= index; i--){
        array[i] = array[i - 1]
    }
    array[index] = value 
    return array

}
//console.log(insertAt([100,200,5], 2, 311))
//console.log(insertAt([9,33,7], 1, 42))


// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]



