<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add/Edit Employee</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
<div class="form-container">
    <h2>Employee Form</h2>
    <form id="employeeForm">
        <input type="hidden" id="empId" />
        <label>First Name:</label>
        <input type="text" id="firstName" required />

        <label>Last Name:</label>
        <input type="text" id="lastName" required />

        <label>Email:</label>
        <input type="email" id="email" required />

        <label>Department:</label>
        <input type="text" id="department" required />

        <label>Role:</label>
        <input type="text" id="role" required />

        <div class="form-actions">
            <button type="submit">Save</button>
            <a href="/" class="cancel-link">Cancel</a>
        </div>
    </form>
</div>

<script>
document.getElementById("employeeForm").onsubmit = function(e) {
    e.preventDefault();
    const data = {
        id: document.getElementById("empId").value || "E" + Date.now(),
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        role: document.getElementById("role").value
    };

    let employees = JSON.parse(localStorage.getItem("employeeData") || "[]");
    const index = employees.findIndex(emp => emp.id === data.id);
    if (index > -1) {
        employees[index] = data;
    } else {
        employees.push(data);
    }
    localStorage.setItem("employeeData", JSON.stringify(employees));
    window.location.href = "/";
};
</script>
</body>
</html>
