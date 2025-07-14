document.getElementById('employeeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const department = document.getElementById('department').value.trim();
  const role = document.getElementById('role').value.trim();

  if (!firstName || !lastName || !email || !department || !role) {
    alert('⚠️ All fields are required.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('⚠️ Please enter a valid email address.');
    return;
  }

  const employee = {
    id: document.getElementById('empId').value || 'E' + Date.now(),
    firstName,
    lastName,
    email,
    department,
    role
  };

  let employeeData = JSON.parse(localStorage.getItem('employeeData')) || [];
  const index = employeeData.findIndex(e => e.id === employee.id);
  if (index >= 0) {
    employeeData[index] = employee;
  } else {
    employeeData.push(employee);
  }

  localStorage.setItem('employeeData', JSON.stringify(employeeData));
  window.location.href = '/';
});
