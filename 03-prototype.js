// name, salary, employeeType, taxes, phone, change prototype & constructor
function contact(name, salary){
    this.name = name
    this.salary = salary
}

var employee = new contact('jhon', 3000)
var employee = new contact('mery', 1000)
console.log(employee)
contact.prototype.employeeType = function(){
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
console.log(employee.employeeType())  // Gold

contact.prototype.employeeDetails = function(){
    return `Name: ${this.name} salaryType: ${this.employeeType()}`
}

contact.prototype.taxes = function(tax){
   return this.salary -= tax
}

console.log(employee.employeeDetails())
console.log(`Name: ${employee.employeeDetails()} | SalaryTaxes: ${employee.taxes(500)}`)
console.log(employee.name)

// INHERITANCE

function fullContact(name, salary, phone){
    contact.call(this, name, salary)
    this.phone = phone
}

// ENABLE will set the prototype or/and constructor from "contact"
fullContact.prototype = Object.create(contact.prototype)   // prototype
fullContact.prototype.constructor = contact                // constructor
// end
var employee = new fullContact('will', 3000, 111222333)
console.log(employee)

// print only one value
contact.prototype.showPhone = function(){
    return `Phone: ${this.phone}`
}
console.log(employee.showPhone())














