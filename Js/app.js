'use strict';

let empolyess = [];
function Employee(EmployeeId,fullName,department,level,imageURL) {
   
    this.EmployeeId=EmployeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    empolyess.push(this);
       
}


Employee.prototype.calculateRandomSalary = function(){
    switch (this.level) {
        case "Junior":
            this.salary=(Math.floor(Math.random() * 500)+500);
            break;
        case "Mid-Senior":
            this.salary=(Math.floor(Math.random() * 500)+1000);
            break;
        case "Senior":
            this.salary=(Math.floor(Math.random() * 500)+1500);
            break;
    
        default:
            break;
    }
}

Employee.prototype.calculateNetSalary =function(){
    this.netSalary=this.salary- (this.salary * (7.5 / 100));
    }


    Employee.prototype.render=function () {
        document.write(`<h1>Employee name : ${this.fullName}  || Employee salary : ${this.salary}</h1><br>`);
    }


let ghazi  =new Employee(1000,"Ghazi Samer","Administration","Senior",1);
let lana  =new Employee(1001,"Lana Ali","Finance","Senior",1);
let tamara  =new Employee(1002,"Tamara Ayoub","Marketing","Senior",1);
let safi  =new Employee(1003,"Safi Walid","Administration","Mid-Senior",1);
let omar  =new Employee(1004,"Omar Zaid","Development","Senior",1);
let rana  =new Employee(1005,"Rana Saleh","Development","Junior",1);
let hadi  =new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior",1);


for (let i = 0; i < empolyess.length; i++) {
    empolyess[i].calculateRandomSalary();
    empolyess[i].calculateNetSalary();
    empolyess[i].render();

}