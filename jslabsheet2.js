// //Question 1
// var vehicalName = 'Toyota';
//
// function printVehicleNameOuter() {
//     console.log(this.vehicalName);
// }
//
// printVehicleNameOuter();
//
// var Vehical = {
//     vehicalName : 'Nissan',
//     printVehicalNameInner : function () {
//         return function () {
//             console.log(this.vehicalName);
//         }
//     }
// };
//
// execute = Vehical.printVehicalNameInner().bind(Vehical);
// execute();
// execute2 = Vehical.printVehicalNameInner();
// execute2.call(Vehical);
//
// //Question 2
// function taxCalculator(tax) {
//     var taxPercentage = tax;
//     return function (amount) {
//         return amount * tax / 100
//     }
// }
// var calculator = taxCalculator(10);
// console.log(calculator(90));
//
// //Question 3
// function fetchUsers() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json());
// }
//
// fetchUsers().then(function (json) {
//     console.log(json);
// });
//
// //Question 4
// function Vehicle(type){
//     Vehicle.VehicleCount++;
//     this.type = type;
// }
//
// Vehicle.VehicleCount = 0;
//
// Vehicle.prototype.drive = function () {
//   console.log(this.type + " is driving");
// };
//
// function Car(type){
//     Vehicle.call(this,type);
// }
//
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;
// Car.prototype.balanceWheels = function () {
//     console.log("Wheels are balanced in " + this.type);
// };
//
// let vehicle = new Vehicle("Toyota");
// vehicle.drive();
//
// let car = new Car("Nissan");
// car.drive();
// car.balanceWheels();
//
// console.log(car.type, Vehicle.VehicleCount);
//
// //Question 5
// let vehicleName = 'Toyota';
// vehicleName = 'Nissan';
// const COUNTRY = 'Japan';
//
// //Question 6
// function fetchUsers() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json());
// }
// fetchUsers().then(json => {
//     console.log(json);
// });
//
// function fetchUsers() {
//     return fetch('https://api.github.com/users')
//         .then(function(response){
//             return response.json();
//         });
// }
//
// fetchUsers().then(function(json){
//     console.log(json);
// });
//
// //Question 7
// async function fetchUsersAsync() {
//     const response = await fetch('https://api.github.com/users');
//     const json = await response.json();
//     console.log(json);
// }
// fetchUsersAsync();

//Question 8
class Vehicle {
    constructor(type) {
        Vehicle.VehicleCount++;
        this.type = type;
    }
    drive() {
        console.log('Vehicle is driving');
    }
}
Vehicle.VehicleCount = 0;
const vehicle = new Vehicle('Toyota');
vehicle.drive();
console.log(Vehicle.VehicleCount);
class Car extends Vehicle {
    constructor(type) {
        super(type);
    }
    balanceWheels() {
        console.log('Wheels are balanced');
    }
}
const car = new Car('Nissan');
car.drive();
car.balanceWheels();
console.log(Vehicle.VehicleCount);
