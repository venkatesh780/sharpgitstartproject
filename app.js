const pageHeading = document.getElementById("header-title");
const mainHeading = document.getElementsByClassName("title");
const listItems = document.getElementsByClassName("list-group-item");
pageHeading.textContent = "Sharpner List";

pageHeading.style.borderBottom = "1px solid black";

mainHeading[0].style.fontWeight = "bold";
mainHeading[0].style.color = "green";
listItems[2].style.backgroundColor = "green";

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontWeight = "bold";
}
