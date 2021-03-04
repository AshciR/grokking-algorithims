const binarySearch = (list, value) => {

    let low = 0;
    let high = list.length - 1;
    
    while (low <= high) {
        
        let mid = Math.floor((high + low) / 2);
        
        let guess = list[mid];
        
        // We found the value
        if(guess === value){
            return mid;    
        }
        
        // We didn't guess right, so adjust our search range
        if(guess > value){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
};

const binarySearchFunctional = (list, value, low, high) => {

    // Base Case
    if(low > high) return null;

    // Find the middle index
    let mid = Math.floor((high + low) / 2);
    let guess = list[mid];
    
    if(guess === value) return mid;
    
    // If the mid is greater than the value, search the left half
    if(guess > value){
        return binarySearchFunctional(list, value, low, mid - 1);
    } else {
        // Else if the mid value is less than value, search the right half
        return binarySearchFunctional(list, value, mid + 1, high);
    }
}

const sortedList = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(sortedList, 7));
console.log(binarySearchFunctional(sortedList, 7, 0, sortedList.length - 1));

