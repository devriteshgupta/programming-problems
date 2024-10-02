const company = {
    name: 'TechCorp',
    location: {
        city: 'San Francisco',
        state: 'California',
        country: 'USA'
    },
    employees: [
        {
            name: 'Alice',
            position: 'Engineer',
            salary: 100000,
            department: 'Development'
        },
        {
            name: 'Bob',
            position: 'Designer',
            salary: 'N/A',   // Value is "N/A"
            department: 'Design'
        },
        {
            name: 'Charlie',
            position: 'Manager',
            salary: 120000,
            department: 'Management',
            contact: {
                phone: 'N/A', // Value is "N/A"
                email: 'charlie@techcorp.com'
            }
        }
    ],
    revenue: 5000000,
    established: 'N/A' // Value is "N/A"
};

function removeNA(obj) {
    let itemsRemoved = 0;

    function recursiveRemove(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] === 'N/A') {
                    delete obj[key];
                    itemsRemoved++;
                } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    recursiveRemove(obj[key]);
                } else if (Array.isArray(obj[key])) {
                    obj[key].forEach(item => recursiveRemove(item));
                }
            }
        }
    }

    recursiveRemove(obj);
    obj.items_removed = itemsRemoved;
}

removeNA(company);
console.log(company);