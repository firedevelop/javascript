function customer(name, salary){
    this.name = name
    this.salary = salary
}

const person = new customer('jhon', 3000)
const person2 = new customer('mery', 1000)

customer.prototype.customerType = function(){
    let salaryType
    if(this.salary > 2000){
        salaryType = "Gold"
    } else if(this.salary > 1000){
        salaryType = "Silver"
    } else {
        salaryType = "Normal"
    }
    return salaryType
}

customer.prototype.customerDetails = function(){
    return `Name: ${this.name} salaryType: ${this.customerType()}`
}

customer.prototype.taxes = function(tax){
   return this.salary -= tax
}

console.log(person)
console.log(person.customerType())
console.log(person.customerDetails())
console.log(`Name: ${person.customerDetails()} | SalaryTaxes: ${person.taxes(500)}`)

// INHERITANCE

function fullDetails(name, salary, phone){
    customer.call(this, name, salary)
    this.phone = phone
}

// ENABLE will set the prototype or/and constructor from customer
fullDetails.prototype = Object.create(customer.prototype)   // prototype
fullDetails.prototype.constructor = customer                // constructor
// end
const employee3 = new fullDetails('will', 3000, 111222333)
console.log(employee3)

// print only one value
customer.prototype.showPhone = function(){
    return `Phone: ${this.phone}`
}
console.log(employee3.showPhone())














