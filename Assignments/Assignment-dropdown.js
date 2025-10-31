async function loadCompanies() {
    const response = await fetch('https://student-api.acpt.lk/api/companies'); // Replace with your API URL
    const companies = await response.json();

    const container = document.getElementById('companyDropdowns');
    container.innerHTML = '';

    // Create a dropdown for each company
    companies.forEach((company, index) => {
        // Create column wrapper
        const colDiv = document.createElement('div');
        colDiv.className = '';

        // Create dropdown div
        const dropdownDiv = document.createElement('div');
        dropdownDiv.className = 'dropdown company-dropdown';

        // Create button with company name
        const button = document.createElement('button');
        button.className = 'btn btn-secondary dropdown-toggle w-20';
        button.type = 'button';
        button.setAttribute('data-bs-toggle', 'dropdown');
        button.setAttribute('aria-expanded', 'false');
        button.id = `company-${index}`;

        // Button text with company name 
        const companyName = document.createElement('span');
        companyName.className = 'company-name';
        companyName.textContent = company.company;

        button.appendChild(companyName);
        button.appendChild(document.createElement('br'));

        // Create dropdown menu
        const ul = document.createElement('ul');
        ul.className = 'dropdown-menu';
        ul.setAttribute('aria-labelledby', `company-${index}`);

        // Check if company has departments
        if (company.departments && company.departments.length > 0) {
            // Add each department as dropdown item
            company.departments.forEach(department => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.className = 'dropdown-item';

                // Department name
                a.innerHTML = `${department.name}`;

                // Handle click event
                a.addEventListener('click', function (e) {
                    e.preventDefault();
                    showDepartmentInfo(company, department);
                });

                li.appendChild(a);
                ul.appendChild(li);
            });
        } else {
            // If no departments, show a message
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.className = 'dropdown-item-text text-muted';
            span.textContent = 'No departments available';
            li.appendChild(span);
            ul.appendChild(li);
        }

        // Append button and menu to dropdown div
        dropdownDiv.appendChild(button);
        dropdownDiv.appendChild(ul);

        // Append to column
        colDiv.appendChild(dropdownDiv);

        // Append column to container
        container.appendChild(colDiv);
    });
}
// Load companies when page loads
document.addEventListener('DOMContentLoaded', loadCompanies);