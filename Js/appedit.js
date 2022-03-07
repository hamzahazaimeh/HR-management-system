 'use strict';
var allEmployee =[];
let employeeIsdStarter=999;


let form = document.getElementById("form");

function Employee (FullName,Department,Level,ImageURL)
{
this.EmployeeID=0;
this.FullName=FullName;
this.Department=Department;
this.Level=Level;
this.ImageURL=ImageURL;
this.salary = 0 ;
allEmployee.push(this);
}
let Ghazi = new Employee("Ghazi Samer", "Administration", "Senior","assets/img/Ghazi.jpg");
let Lana  = new Employee("Lana Ali", "Finance","Senior","assets/img/Lana.jpg");
let Tamara = new Employee("Tamara Ayoub","Marketing", "Senior","assets/img/Tamara.jpg");
let Safi = new Employee("Safi Walid","Administration","Mid-Senior","assets/img/Safi.jpg");
let Omar = new Employee("Omar Zaid", "Development","Senior","assets/img/Omar.jpg");
let Rana = new Employee("Rana Saleh","Development","Junior","assets/img/Rana.jpg");
let Hadi = new Employee("Hadi Ahmad","Finance","Mid-Senior","assets/img/Hadi.jpg");

function generatId()
{
    return ++employeeIsdStarter;
}
Employee.prototype.gitID = function () {
    this.EmployeeID=generatId();
  };

Employee.prototype.showEmploee = function()
{
let divShow =document.createElement("div");
divShow.setAttribute('class',"divShow")

  let imgShow = document.createElement("img");
  imgShow.setAttribute("src", this.ImageURL);
  divShow.appendChild(imgShow);


 let title =document.createElement("h3");
  title.textContent= "Name: "+this.FullName;
  divShow.appendChild(title);


  let titleID = document.createElement("h3");
  titleID.textContent= "ID: "+this.EmployeeID;
  divShow.appendChild(titleID);
  
  let titleDep =document.createElement("h3");
  titleDep.textContent="Department : "+this.Department;
  divShow.appendChild(titleDep);

  let titlelev =document.createElement("h3");
  titlelev.textContent="Level :  "+ this.Level;
  divShow.appendChild(titlelev);

  let titleSal =document.createElement("h3");
  titleSal.textContent="Salary :  "+ ` ${this.salary}$`;
  divShow.appendChild(titleSal);
  allEmployeesDiv.appendChild(divShow);


}
function saveData()
{
let formatedData=JSON.stringify(allEmployee);
  localStorage.setItem("Employees",formatedData);
}


function getData(){
let employeesData=localStorage.getItem("Employees");
let parseEmployee=JSON.parse(employeesData);


if(parseEmployee != null){
  allEmployee=[];
for(let i=0;i<parseEmployee.length;i++)
{
  new Employee(parseEmployee[i].FullName,parseEmployee[i].Department,parseEmployee[i].Level,parseEmployee[i].ImageURL);
};
}
renderAll();
}
 


Employee.prototype.getSalary = function () {
    let max;
    let min;
    if (this.Level=="Senior"){
       min=1500;
       max=2000;
    }
    else if (this.level=="Mid-Senior")
    {
        min=1000;
        max=1500;    }
    else
    {
        min=500;
        max=1000;   
     }
        let totalSalary = randInteger (min  ,max );
        this.salary = totalSalary - totalSalary * 0.075;
}


function randInteger( min, max )
{
return Math.floor(Math.random()  * (max - min + 1) ) + min;
}

function renderAll(){

    allEmployeesDiv.innerHTML="";

for (let i = 0; i <  allEmployee.length ; i++) {
    allEmployee[i].getSalary();
    allEmployee[i].gitID();
    allEmployee[i].showEmploee();
}

  }

  
  function handelsubmit(event)
  {
      
   event.preventDefault();
   let FullName = event.target.nameInput.value;
   let Department =event.target.Department.value;
   let level =event.target.level.value;
   let ImageURL =event.target.ImageUrl.value;
   let newEmployee =new Employee(FullName,Department,level,ImageURL);
   newEmployee.gitID();
   newEmployee.getSalary();
   newEmployee.showEmploee();
   form.reset();
    saveData();

   }
   form.addEventListener("submit" , handelsubmit)

   renderAll();
   getData();