// Given a numerical array, 
// reverse the order of values, in-place.
// The reversed array should have the same length, with existing elements moved to other indices
// so that order of elements is reversed.
// Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().

const reverseArray = (array) => {
    //for(var i = array.length-1; i >=0; i--){
    for(var i = 0; i < array.length/2; i++){
        var x = array[i] 
        array[i] = array[array.length -1 - i]
        array[array.length -1 - i] = x
    }
    return array

}

//console.log(reverseArray([1,2,3,4,5]))



//Concat array ['a','b'], [1,2]  should be ['a', 'b', 1, 2]

const concatArray = (array1, array2) => {

    for(var i =0; i<array2.length; i++){
        array1.push(array2[i])
        // console.log(array1)
        // console.log(array2)
    }
    return array1

}

//console.log(concatArray(['a', 'b'], [1,2]))

//Rotate array ([1,2,3], 1) should be [3,1,2]

const rotateArray = (array, value) => {

    var x = array[array.length-1] 


    for(var i = array.length-1; i>=0; i--){
        array[i] = array[i-value]
    }
    array[0] = x
    return array

}

console.log(rotateArray([1,2,3], 1))