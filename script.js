function showDiv(divNumber) {
  // Hide all divs
  for (let i = 1; i <= 7; i++) {
      document.getElementById('div' + i).style.display = 'none';
  }

  // Show the selected div
  document.getElementById('div' + divNumber).style.display = 'block';
}