
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let key in students){
    console.log("Name: " + students[key]["name"] + ", Cohort: " + students[key]["cohort"])
}
console.log("----------------------------")
// -------------------------------------------

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(let arrays in users){
     console.log(arrays.toUpperCase())
    for(var row = 0; row<users[arrays].length; row++){
        console.log(row+1 + " - " + users[arrays][row].last_name.toUpperCase() + ", " + users[arrays][row].first_name.toUpperCase() + " - " + (users[arrays][row].first_name.length + users[arrays][row].last_name.length));
    }
 }