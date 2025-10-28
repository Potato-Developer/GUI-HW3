// Multiplication Table Generator
// Validates input, builds table dynamically, and handles errors gracefully

document.getElementById("tableForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const hStart = parseInt(document.getElementById("hStart").value);
  const hEnd = parseInt(document.getElementById("hEnd").value);
  const vStart = parseInt(document.getElementById("vStart").value);
  const vEnd = parseInt(document.getElementById("vEnd").value);
  const errorDiv = document.getElementById("error");
  const container = document.getElementById("tableContainer");

  errorDiv.textContent = "";
  container.innerHTML = "";

  // Validate inputs
  if (
    isNaN(hStart) || isNaN(hEnd) ||
    isNaN(vStart) || isNaN(vEnd)
  ) {
    errorDiv.textContent = "All inputs must be numbers.";
    return;
  }

  if (
    hStart < -50 || hEnd > 50 ||
    vStart < -50 || vEnd > 50
  ) {
    errorDiv.textContent = "All values must be between -50 and 50.";
    return;
  }

  if (hStart > hEnd || vStart > vEnd) {
    errorDiv.textContent = "Start values must be less than or equal to end values.";
    return;
  }

  // Create the table element
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create top row (horizontal headers)
  const topRow = document.createElement("tr");
  const cornerCell = document.createElement("th");
  cornerCell.textContent = "×";
  topRow.appendChild(cornerCell);

  for (let h = hStart; h <= hEnd; h++) {
    const th = document.createElement("th");
    th.textContent = h;
    topRow.appendChild(th);
  }
  thead.appendChild(topRow);

  // Create table body rows
  for (let v = vStart; v <= vEnd; v++) {
    const row = document.createElement("tr");

    const headerCell = document.createElement("th");
    headerCell.textContent = v;
    row.appendChild(headerCell);

    for (let h = hStart; h <= hEnd; h++) {
      const cell = document.createElement("td");
      cell.textContent = v * h;
      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
});
