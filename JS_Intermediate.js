function starString(num){
    var str = "*";
    // return str.repeat(num);  or
    for(var i=1; i<num; i++){
        str += "*";
    }
    return str;

}

let stars = starString(2)
console.log("stars", stars)

// ========================================
function drawStars(arr){
    var str = "*"
    var res;
    for(var i=0; i< arr.length; i++){
        res = str.repeat(arr[i]) + " ";
        console.log(res)
    }
    // return null;
}

let x = drawStars([4, 6, 1, 3, 5, 7, 25]);
console.log("drawStars ", x);

// ========================================

function superDrawStars(arr){
    var str = "*"
    for(var i=0; i<=arr.length; i++){
        if(typeof(arr[i]) === "number"){
            // str =+ "*"
            console.log(str.repeat(arr[i]));
            if(arr[i] == undefined){
                return;
            }
            // console.log(str)
        }else if(typeof(arr[i]) === "string"){
            var res = "";
            for(var j=0; j<=arr[i].length; j++){
                res += arr[i][0].toLowerCase();
            }if(arr[i] == undefined){
                return;
            }
            console.log(res);
        }
    }
    
    // return;
}

let y = superDrawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);
console.log("superDrawStar", y)