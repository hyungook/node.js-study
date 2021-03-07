// Object

// array
let members = ['egoing', 'OHO', 'nenonenoberneno'];
console.log(members[1]); // OHO

let i = 0;
while(i < members.length) {
    console.log('array loop =>', members[i])
    i++;
}


// object
let roles = {
    'programmer':'egoing',
    'designer' : 'OHO',
    'manager' : 'hoya'
};
console.log(roles.designer); // OHO
console.log(roles['designer']); // OHO

for(let name in roles) {
    console.log('object =>', name, 'value =>', roles[name]);
};