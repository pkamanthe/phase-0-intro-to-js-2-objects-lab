// Employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Function to non-destructively update employee
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Function to destructively update employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to non-destructively delete a key from employee
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to destructively delete a key from employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}