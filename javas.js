const whereExpense = document.getElementById("expName");
const enteredDate = document.getElementById("date");
const enteredAmmount = document.getElementById("ammount");
const btnSubmit = document.getElementById("buttonSubmit");
const tblBody = document.getElementById("tblBody");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!whereExpense.value) {
    alert("please enter a shop");
    return;
  }
  if (!enteredDate.value) {
    alert("please enter a date");
    return;
  }
  if (!enteredAmmount.value) {
    alert("please enter a valid ammount");
    return;
  }
  updateTable();
});

function updateTable() {
  const newRowExpense = document.createElement("tr");
  let Where;
  newRowExpense.appendChild("td");
}
