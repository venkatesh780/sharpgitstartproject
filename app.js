var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);

function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById("item").value;

  var li = document.createElement("li");

  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  editBtn.className = "btn btn-danger btn-sm float-right edit mr-2";

  deleteBtn.appendChild(document.createTextNode("X"));
  editBtn.appendChild(document.createTextNode("edit"));

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}
