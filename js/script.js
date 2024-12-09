 // Data for the table
 const data = [
    {
      name: "Ksenia Bator",
      jobTitle: "Fullstack Engineer",
      department: "Engineering",
      salary: "$100,500",
      startDate: "Oct 13, 2024",
      lifecycle: "Hired",
      status: "Absent",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Anatoly Belik",
      jobTitle: "Head of Design",
      department: "Product",
      salary: "$1,350",
      startDate: "Mar 13, 2024",
      lifecycle: "Hired",
      status: "Invited",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Bogdan Nikitin",
      jobTitle: "UI/Ux",
      department: "Desigining",
      salary: "$22,000,000",
      startDate: "Dec 4, 2024",
      lifecycle: "Employed",
      status: "Invited",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "john kimblly",
      jobTitle: "Mobile Lead",
      department: "Product",
      salary: "$5,600",
      startDate: "Dec 4, 2024",
      lifecycle: "Employed",
      status: "invited",
      avatar: "https://via.placeholder.com/40",
    },
    {
        name: "sza cantona",
        jobTitle: "Mobile Lead",
        department: "Product",
        salary: "$100,500",
        startDate: "Sep 4, 2024",
        lifecycle: "Employed",
        status: "Absent",
        avatar: "https://via.placeholder.com/40",
      },
      {
        name: "baily ericson johnson",
        jobTitle: "Backend",
        department: "Enginerring",
        salary: "$400,000",
        startDate: "Nov 25, 2024",
        lifecycle: "Employed",
        status: "invited",
        avatar: "https://via.placeholder.com/40",
      },
      {
        name: "kendrick lamal",
        jobTitle: "Marketer",
        department: "Product",
        salary: "$3,000,000",
        startDate: "Nov 4, 2024",
        lifecycle: "Employed",
        status: "Absent",
        avatar: "https://via.placeholder.com/40",
      },
  ];

  // Render Table Rows
  const tableBody = document.getElementById("table-body");

  function renderRows(filteredData) {
    tableBody.innerHTML = ""; // Clear existing rows
    filteredData.forEach((row) => {
      const tr = document.createElement("tr");
      tr.classList.add("hover:bg-yellow-200");

      tr.innerHTML = `
        <td class="p-4 flex items-center space-x-2">
          <img src="${row.avatar}" alt="Avatar" class="w-10 h-10 rounded-full">
          <span>${row.name}</span>
        </td>
        <td class="p-4">${row.jobTitle}</td>
        <td class="p-4">${row.department}</td>
        <td class="p-4">${row.salary}</td>
        <td class="p-4">${row.startDate}</td>
        <td class="p-4">${row.lifecycle}</td>
        <td class="p-4">
          <span class="px-2 py-1 text-xs text-white ${
            row.status === "Absent" ? "bg-yellow-500" : "bg-green-500"
          } rounded-full">${row.status}</span>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Initial render
  renderRows(data);

  // Search functionality
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredData = data.filter((row) =>
      row.name.toLowerCase().includes(query) ||
      row.jobTitle.toLowerCase().includes(query) ||
      row.department.toLowerCase().includes(query)
    );
    renderRows(filteredData);
  });