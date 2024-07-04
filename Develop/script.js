// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



firstName = ""
lastName = ""
salary = ""


const employeesArray = []

// Collect employee data for the "employee" const in later function
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let continueAdd = true;
  const firstName = prompt('What is your first name?');
  const lastName = prompt('What is your last name?');
  const salary = prompt('What is your salary?');
  employeesArray.push({ firstName: firstName, lastName:lastName, salary:salary});
  continueAdd = confirm("Add another employee?")
  if (continueAdd){
    collectEmployees()
  }
  return employeesArray
}



console.log(employeesArray)

/* collectEmployees should return an array like this:

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
}

[
  {
      firstName:"John",
      lastName:"Smith",
      salary:12345
  },
  {
      firstName:"Jane",
      lastName:"Doe",
      salary:54321
  }
]
*/


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  // TODO: Calculate and display the average salary
}

/*
displayAverageSalary: This function will take in the generated array of employees and log the average salary and number of employees to the console. You should use a template literal string for this task.
*/



// 


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

}


/*
getRandomEmployee: This function will take in the generated array of employees, randomly select one employee, and use a template literal to log their full name to the console. The built in Math

  function genRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function getRandomColor(){
    const idx = genRandomNumber(0, colors.length - 1);
    console.log( colors[idx] );
  }
  
  getRandomColor()


*/



// 
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
