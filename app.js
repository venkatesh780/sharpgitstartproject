var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);

const itemsDataMap = new Map();
const itemsDataObj = {};
let id = 1;

function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById("item").value;
  let desciption = document.getElementById("description").value;

  var li = document.createElement("li");

  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" " + desciption));

  var deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  editBtn.className = "btn btn-danger btn-sm float-right edit mr-2";

  deleteBtn.appendChild(document.createTextNode("X"));
  editBtn.appendChild(document.createTextNode("edit"));

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  itemList.appendChild(li);
  document.getElementById("item").value = "";
  document.getElementById("description").value = "";

  itemsDataMap.set(id, `${newItem} ${desciption}`);

  for (let [key, value] of itemsDataMap) {
    let keyStr = key + "";
    itemsDataObj[keyStr] = value;
  }

  let itemsDataObjStr = JSON.stringify(itemsDataObj);
  localStorage.setItem("items", itemsDataObjStr);

  id += 1;
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}
function filterItems(e) {
  // convert text to lowercase
  var itemText = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemText === itemName) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
