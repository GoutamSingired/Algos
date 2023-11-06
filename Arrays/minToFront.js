//Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 

const minToFront = (array) => {
    var min = array[0]
    var index = 0;
    
    for(var i=0; i<array.length; i++){
        if(array[i] < min){
            min = array[i]
            index = i
        }
    }
    //console.log(index) //2
    //console.log(min) //1
    
    for(var j = index; j>0; j--){
        array[j] = array[j-1]
        // var temp = array[j];
        // array[j] = array[j-1];
        // array[j-1] = temp;
    }
    array[0] = min
    return array
}




console.log(minToFront([4, 2, 1,3,5]))