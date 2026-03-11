//Creating the class to maintain emp details and some functions.

class Employee { 

//Properties..
empName: string = "ABC XYZ";
empId: number = 2345;

//Method...
printEmployeeProjects(name: string): void {
console.log("EmployeeProjects: " + name);
}
constructor() {
console.log("Employee class object created");
}
}

class employeeRole {
    // properties
    roleName: string = "software tester";
    roleId: Number = 5678;

    // method....
    printEmloyeeRole(role: string): void {
    console.log("EmployeeRole: " + role);
    }
}

//Creating the object of employee role
let obj1 = new Employee();
console.log("Empname :" + obj1.empName);
console.log("Employee Id :" + obj1.empId);
obj1.printEmployeeProjects("Project A, Project B");


