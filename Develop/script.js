// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

firstName = ""
lastName = ""
salary = ""

// const employeesArray = []

// Collect employee data for the "employee" const in later function
const collectEmployees = function(employeesArray = []) {
  // TODO: Get user input to create and return an array of employee objects
  let continueAdd = true;
  const firstName = prompt('What is your first name?');
  const lastName = prompt('What is your last name?');
  const salary = prompt('What is your salary?');
  employeesArray.push({ firstName: firstName, lastName:lastName, salary:salary});
  continueAdd = confirm("Add another employee?")
  if (continueAdd){
    return collectEmployees(employeesArray)
  }
  return employeesArray
}


const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  for(let i = 0; i < employeesArray.length; i++) {
    totalSalary += parseFloat(employeesArray[i].salary);
  }
  const result = totalSalary / employeesArray.length;
  console.log('The average employee salary between our ' + employeesArray.length + ' employee(s) is ' + '$' + result)
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  function genRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
  
    function getRandomEmployee(){
      const idx = genRandomNumber(0, getRandomEmployee.length - 1);
      console.log( employeesArray[idx] );
      console.log(`Congratulations to ${employeesArray[idx].firstName} ${employeesArray[idx].lastName} our random drawing winner!`);
    }
    
    getRandomEmployee()
  // TODO: Select and display a random employee

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
