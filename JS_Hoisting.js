// 1
console.log(hello);
var hello = 'world'; 

// 1 - var hello = undefined;
// 2 - console.log(hello);
// 3 - var hello = 'world'; -- anchor
// Output: undefined

// 2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// 1 - var needle = undefined; -- variable initialization
// 2 - function test(){ -- function declaration
//      var needle = undefined;
//   	var needle = 'magnet'; -- anchor
//  	console.log(needle);
//    }
// 3 - var needle = 'haystack'; -- anchor
// 4 - test()
// Output: magnet

// 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// super cool

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = "gone";
}
// chicken
// half-chicken

// 5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// mean is not a function

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// rock
// r&b
// disco


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// san jose
// seattle
// burbank
// san jose