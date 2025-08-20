function createTable() {
  // Get user input
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert to number
  rn = parseInt(rn);
  cn = parseInt(cn);

  // Validate input
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numbers for rows and columns.");
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  // Get table element
  let table = document.getElementById("myTable");

  // Clear any old table data
  table.innerHTML = "";

  // Generate rows and columns
  for (let i = 0; i < rn; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      let cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
