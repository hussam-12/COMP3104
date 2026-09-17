//Object literal
let person = {
    name: "John",
    age: 30,
    city: "new york",
    null: null,
    undefined: undefined,
    "full name": "John Doe", // or we can do ["full name"] this called 
    // key and it should be called in with 'square brackets []' not with '.'

    displayInfo: function () { // we can also assign a function to the key
                                // and this function will never be serialized

        console.log(`Name : ${this.name}, Age: ${this.age}, City: ${this.city}`)
        
    },
        displayArrow: ()=> { 
            console.log(this)

        console.log(`Name : ${this.name}, Age: ${this.age}, City: ${this.city}`)
        
    }
};

console.log("type of person is :" + typeof person);
console.log(person);
person.displayInfo(); // here calling the function inside the object
person.displayArrow();// will be empty as this here points to the document not the object
console.log(person.name)
console.log("=======")/
//or
console.log(person["name"])
console.log(person["full name"]) // key is called with [ ]
console.log("--------")

// or we can call the key " " by asigning to constant
const fnm = "full name"
console.log(person[fnm])
//Destructuring asignment
const {
    name,
    age,
    city : myCityName,// we can assign the key "city" to a variable name 
    null:n, // null can not be alone and should be assigned to varable
            // also undifined the same issue

} = person

console.log(name, age ,myCityName, n )

//More about function
function printData( fnm, lnm, city){
    console.log(`this is: ${this}`) // th
    // 
    
    
    
    
    
    
    
    
    
    
    
    
    
    is points to global object 
    console.log(`first name: ${fnm}, last name: ${lnm}`, city : ${city})
}
printData("Hussam", "Tatri", " Toronto")
