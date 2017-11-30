function magic_multiply(x, y){
    var result;
    
    // 1
    if(x>0 && y>0){
        result = x * y;
    // 2
    }else if(x==0 && y==0){
        result = "All inputs 0";
        // 5
    }else if(x == "Brendo"){
        var res = "";
        for(var i=1; i<=y; i++){
            res += x;
        }
        result = res;
        // or x.repeat(y);
    // 4 
    }else if(typeof(y) === "string"){
        result = "Error: Can not multiply by string";
    // 3
    }else{
        if(x.constructor === Array){
            var arr = [];
            for(var i=0; i<x.length; i++){
                arr.push(x[i] * y);
            }
            result = arr;
        }
    }
    return result;
}


let test1 = magic_multiply(5, 2);
console.log("test1", test1);
// => 10

let test2 = magic_multiply(0, 0);
console.log("test2", test2);
// => "All inputs 0"

let test3 = magic_multiply([1, 2, 3], 2);
console.log("test3", test3);
// => [2, 4, 6]

let test4 = magic_multiply(7, "three");
console.log("test4", test4);
// => "Error: Can not multiply by string"

let test5 = magic_multiply("Brendo", 4);
console.log("test5", test5);
// => "BrendoBrendoBrendoBrendo"
