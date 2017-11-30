function zero_negativity(arr){
    for(var i=0; i< arr.length; i++){
        if(arr[i] < 0){
            return false;
        }
    }
    return true;
}

let test1 = zero_negativity([1,2,-3,4]);
console.log("test1", test1);
// ==========================================

function is_even(num){
    if(num%2==0){
        return true;
    }
    return false;
}

let test2 = is_even(8);
console.log("test2 ",test2)
// ==========================================

function how_many_even(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(is_even(arr[i])){
            count++;
        }
    }
    return count;
    
}

let test3 = how_many_even([1,2,3,4,5,-6,7,8,9,10]);
console.log("test3", test3);
// ==========================================

function create_dummy_array(num){
    var arr = [];
    for(var i=0; i<num; i++){
        var rand = Math.floor(Math.random()*10); // 0-9
        arr.push(rand);
        if(arr.length == num){
            break;
        }
    }
    return arr;
}

let test4 = create_dummy_array(15);
console.log("testt4", test4);

// ==========================================

function random_choice(arr){
    var len = arr.length;
    var rand = Math.floor(Math.random()*len); // 0 - len
    return arr[rand];
}

let test5 = random_choice([1,2,3,40,5,6,7,80,9]);
console.log("test5", test5);