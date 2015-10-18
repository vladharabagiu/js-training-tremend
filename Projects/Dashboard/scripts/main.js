var dataContainer = document.querySelector("#data");
var itemsContainer = document.createElement("ul");

renderSelectAllCheckbox(dataContainer);
renderItems(items, itemsContainer);

dataContainer.appendChild(itemsContainer);
