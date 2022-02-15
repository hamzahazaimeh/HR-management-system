

function Employee (EmployeeID,FullName,Department,Level,ImageURL,Salary){
    this.EmployeeID= EmployeeID,
    this.FullName = FullName,
    this.Department = Department,
    this.Level = Level,
    this.ImageURL=ImageURL,
    this.Salary=Salary
}





Employee.prototype.render = function(){
   
}



let  Employee1 =new Employee(1000,GhaziSamer,Administration,Senior)
let  Employee2 =new Employee(1001,LanaAli,Finance,Senior)
let  Employee3 =new Employee(1002,TamaraAyoub,Marketing,Senior)
let  Employee4 =new Employee(1003,SafiWalid,Administration,Mid-Senior)
let  Employee5 =new Employee(1004,OmarZaid,Development,Senior)
let  Employee6 =new Employee(1005,RanaSaleh,Development,Junior)
let  Employee7 =new Employee(1006,HadiAhmad,Finance,Mid-Senior)
