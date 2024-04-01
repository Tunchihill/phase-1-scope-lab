//Write your solution in this file
var customerName = "bob";

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

console.log(upperCaseCustomerName());

function setBestCustomer() {
   console.log(bestCustomer = "not bob");
}

setBestCustomer(); 

function overwriteBestCustomer() {
  console.log(bestCustomer = "maybe bob");
}

overwriteBestCustomer();

const leastFavoriteCustomer = "James"; 

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not James";
}

console.log(changeLeastFavoriteCustomer())