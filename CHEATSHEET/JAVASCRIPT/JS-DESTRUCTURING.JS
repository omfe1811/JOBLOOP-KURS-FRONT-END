// How to destructure an array

const toybox = ['teddy', 'unicorn', 'robot'];
const [firstToy, secondToy, thirdToy] = toybox;

console.log(firstToy, secondToy); // Output: teddy unicorn

/*
NOTE:
Variable names can be whatever you want.
BUT the **order** is IMPORTANT — it determines what data each variable holds.

If you switch firstToy and secondToy:
    const [secondToy, firstToy, thirdToy] = toybox;
    console.log(firstToy, secondToy); // Output: unicorn teddy
*/

// How to destructure an object

const person = { name: 'Sander', age: 23 };
const { age, name } = person;

console.log(name, age); // Output: Sander 23

/*
NOTE:
Variable names must match the keys in the object.
The **order** doesn't matter — JavaScript matches by key name, not position.
*/

// How to get the "rest" of an array (...REST operator)

const toybox = ['teddy', 'unicorn', 'robot'];
const [firstToy, ...remainingToys] = toybox;
const [remainingOne, remainingTwo] = remainingToys;

console.log(firstToy, remainingToys);       // Output: teddy [ 'unicorn', 'robot' ]
console.log(remainingOne, remainingTwo);    // Output: unicorn robot

/*
NOTE:
...remainingToys captures the REST of the array.
*/

// How to get the "rest" of an object (...REST operator)

const person = { name: 'Sander', age: 23, address: 'Ålesund' };
const { age, ...otherDetails } = person;
const { name, address } = otherDetails;

console.log(age, name, address); // Output: 23 Sander Ålesund

/*
NOTE:
...otherDetails captures the REST of the object.
Order doesn’t matter.
*/

// How to copy an array

const toybox = ['teddy', 'unicorn', 'robot'];
const newToyBox = [ ...toybox, 'dragon' ];

console.log(newToyBox); // Output: [ 'teddy', 'unicorn', 'robot', 'dragon' ]

// How to copy an object

const person = { name: 'Sander', age: 23 };
const newPerson = { ...person, city: 'Bergen' };

console.log(newPerson); // Output: { name: 'Sander', age: 23, city: 'Bergen' }

// Default values with arrays

const names = ['Elida', 'Karoline'];
const [
    nameOne = 'John',
    nameTwo = 'Jonas',
    nameThree = 'Erik',
    nameFour = 'Chris'
] = names;

console.log(nameOne, nameTwo, nameThree, nameFour); 
// Output: Elida Karoline Erik Chris

// Default values with objects

const employee = {
    name: 'Sander',
    salary: undefined
};

const {
    name = 'INSERT NAME HERE',
    salary = 0
} = employee;

console.log(name, salary); // Output: Sander 0

// Nested destructuring (array of arrays)

const numbersArray = [
    [1, 2, 3],
    [4, 5, 6]
];

const [
    [one, two, three],
    [four, five, six]
] = numbersArray;

console.log(one, two, three, four, five, six); // Output: 1 2 3 4 5 6

/*
SEE A PATTERN?
When unpacking (destructuring) data from an array or object, we use the **same structure** as the original.

Simple Array:
    [a, b, c]
    [letterOne, letterTwo, letterThree]

Nested Array:
    [
        [1, 2, 3],
        [4, 5, 6]
    ]
Unpack like:
    [
        [one, two, three],
        [four, five, six]
    ]

Object:
    { name: 'Sander', age: 23 }
Destructure:
    { name, age }

Nested object:
    const user = {
        id: 339,
        name: 'Sander',
        age: 23,
        education: {
            degree: 'School of Hard Knocks'
        }
    };

    const {
        id,
        name,
        age,
        education: {
            degree
        }
    } = user;
*/

// Deep nesting example

const business = {
    name: 'Jobloop',
    employees: [
        {
            name: 'Sander',
            salary: 999999999
        },
        {
            name: 'Erik',
            salary: -999999999
        }
    ],
    data: {
        address: 'Bergen',
        buildingColor: 'white',
        extraData: {
            fjas: true,
            extraExtraData: {}
        },
        furniture: [
            'Table', 'Stool', 'Chair'
        ]
    }
};

console.log(business);

const { name, employees, data } = business;
console.log(name, employees, data);

const [employee1, ...otherEmployees] = employees;
console.log('Employees:', employee1, otherEmployees); 
// Output: Employees: Sander [ { name: 'Erik', salary: -999999999 } ]

const { address, buildingColor, extraData, furniture } = data;
console.log('data:', address, buildingColor, extraData, furniture);
// Output: data: Bergen white {fjas: true, extraExtraData: {}} [ 'Table', 'Stool', 'Chair' ]

const { fjas, extraExtraData } = extraData;
console.log(fjas, extraExtraData); // Output: true {}

const [furniture1, furniture2, furniture3] = furniture;
console.log('Furnitures:', furniture1, furniture2, furniture3); 
// Output: Furnitures: Table Stool Chair
