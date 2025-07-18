��#   T a c n i q u e 
 
# Employee Directory Web Interface

This project is a **Spring Boot + FreeMarker** based interactive Employee Directory web application that includes:

✅ Features Implemented:
- Listing employees (from in-memory data)
- Search by name/email
- Sorting (by first name, department)
- Filtering (by first name, department, role)
- Pagination (10, 25, 50, 100 per page)
- Buttons to Edit / Delete employees
- Button to open Add Employee Form (future functionality)
- Clean UI styled with `styles.css` and responsive layout

---

## ❗Current Status

- ✅ **Spring Boot backend setup done**
- ✅ **FreeMarker integration configured**
- ❌ **FreeMarker not rendering `index.ftl` properly**
    - The controller loads employee data into the model
    - Template exists and is correctly placed under `src/main/resources/templates`
    - But accessing `http://localhost:8080/` results in:
      ```
      500 Internal Server Error (Whitelabel Error Page)
      ```
    - This likely indicates an issue with how FreeMarker is parsing or rendering the `employees` list

---

## 🛠️ Stack Used

- Java 17+
- Spring Boot (Freemarker starter)
- FreeMarker templates (`.ftl`)
- HTML/CSS/JavaScript (Vanilla)
- Git for version control

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/abhishekKr-007/Tacnique.git
cd Tacnique

 
