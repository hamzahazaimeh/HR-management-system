'use strict';

var emplyess = [];
function Employee(EmployeeId,fullName,department,level,imageURL) {
   
    this.EmployeeId=EmployeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=0;
    emplyess.push(this);
       
}


Employee.prototype.calculateSalary = function(){
 let max ;
 let min; 
 if(this.level =="Senior"){
       min=1500;
       max = 2000;
 }
 else if (this.level =="Mid-Senior"){
    min=1000;
    max = 1500;
 }
 else {

    min=500;
    max = 1000;
 }

let totalsalary = getRndInteger(min,max);
this.salary = totalsalary - totalsalary * 0.075;
}

function getRndInteger(min,max){
return math.floor(math.random() * ( max - min +1)) + min;
}



let ghazi  =new Employee("Ghazi Samer","Administration","Senior","./Photos/1.jpg");
let lana  =new Employee("Lana Ali","Finance","Senior","./Photos/3.jpg");
let tamara  =new Employee("Tamara Ayoub","Marketing","Senior","./Photos/5.jpg");
let safi  =new Employee("Safi Walid","Administration","Mid-Senior","./Photos/4.jpg");
let omar  =new Employee("Omar Zaid","Development","Senior","./Photos/6.jpg");
let rana  =new Employee("Rana Saleh","Development","Junior","./Photos/5.jpg");
let hadi  =new Employee("Hadi Ahmad","Finance","Mid-Senior","./Photos/6.jpg");

Employee.prototype.render = function(){
    document.write(`<h3> ${this.fullName} : ${this.salary} </h3>`);
}


console.log(emplyess);

for(var i=0 ; i < emplyess.length ; i++ ){

emplyess[i].calculateSalary();
emplyess[i].render();

}